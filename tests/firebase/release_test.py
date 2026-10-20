"""Mock all API calls: these tests cannot connect to Firebase."""
import importlib.util
from pathlib import Path
import unittest
from unittest.mock import patch
import hashlib
import io
import contextlib

spec = importlib.util.spec_from_file_location('release', Path(__file__).resolve().parents[2] / 'scripts/firebase_rules_release.py')
m = importlib.util.module_from_spec(spec)
spec.loader.exec_module(m)
OLD = 'projects/wildenhorst-94729/rulesets/old'
NEW = 'projects/wildenhorst-94729/rulesets/new'


class ReleaseTests(unittest.TestCase):
    def setUp(self):
        # Simulated releases must never appear in the real GitHub job summary.
        self.output = io.StringIO()
        console = contextlib.redirect_stdout(self.output)
        console.__enter__()
        self.addCleanup(console.__exit__, None, None, None)
        summary = patch.dict(m.os.environ, {'GITHUB_STEP_SUMMARY': ''})
        summary.start()
        self.addCleanup(summary.stop)
        self.content = m.RULES.read_text()
        self.sha = hashlib.sha256(self.content.encode()).hexdigest()
        self.live = {'source': {'files': [{'name': 'firestore.rules', 'content': 'old rules'}]}}

    def test_tokens_ignore_formatting_and_comments(self):
        self.assertEqual(m.rule_tokens("allow read: if true; // note\n"),
                         m.rule_tokens("/* note */ allow  read : if true ;"))

    def test_tokens_keep_comment_markers_inside_strings(self):
        self.assertEqual(m.rule_tokens("'https://example.test'"), ["'https://example.test'"])

    def test_tokens_preserve_literal_spaces(self):
        self.assertNotEqual(m.rule_tokens("'a b'"), m.rule_tokens("'ab'"))

    def test_tokens_detect_permission_changes(self):
        self.assertNotEqual(m.rule_tokens('allow read: if true;'),
                            m.rule_tokens('allow read: if false;'))

    def test_inspect_uses_only_get(self):
        with patch.object(m, 'api', side_effect=[{'rulesetName': OLD}, self.live]) as api:
            m.run('inspect')
            self.assertEqual([c.args[0] for c in api.call_args_list], ['GET', 'GET'])

    def test_bad_mode_has_no_api_calls(self):
        with patch.object(m, 'api') as api:
            with self.assertRaises(ValueError): m.run('invalid')
            api.assert_not_called()

    def test_wrong_hash_has_no_api_calls(self):
        with patch.object(m, 'api') as api:
            with self.assertRaises(ValueError): m.run('publish', 'wrong', OLD)
            api.assert_not_called()

    def test_missing_live_approval_has_no_api_calls(self):
        with patch.object(m, 'api') as api:
            with self.assertRaises(ValueError): m.run('publish', self.sha)
            api.assert_not_called()

    def test_live_change_aborts_before_writes(self):
        with patch.object(m, 'api', side_effect=[{'rulesetName': NEW}, self.live]) as api:
            with self.assertRaises(ValueError): m.run('publish', self.sha, OLD)
            self.assertEqual([c.args[0] for c in api.call_args_list], ['GET', 'GET'])

    def test_identical_rules_skip_writes(self):
        live = {'source': {'files': [{'content': self.content}]}}
        with patch.object(m, 'api', side_effect=[{'rulesetName': OLD}, live]) as api:
            m.run('publish', self.sha, OLD)
            self.assertEqual([c.args[0] for c in api.call_args_list], ['GET', 'GET'])

    def test_publish_only_changes_default_rules_release(self):
        with patch.object(m, 'api', side_effect=[{'rulesetName': OLD}, self.live, {'name': NEW},
             {'rulesetName': OLD}, {}, {'rulesetName': NEW}]) as api:
            m.run('publish', self.sha, OLD)
            self.assertEqual([c.args[0] for c in api.call_args_list], ['GET','GET','POST','GET','PATCH','GET'])
            self.assertEqual(api.call_args_list[4].args, ('PATCH', m.RELEASE,
                {'release': {'name': m.RELEASE, 'rulesetName': NEW}, 'updateMask': 'ruleset_name'}))

    def test_concurrent_publication_prevents_patch(self):
        with patch.object(m, 'api', side_effect=[{'rulesetName': OLD}, self.live, {'name': NEW},
             {'rulesetName': NEW}]) as api:
            with self.assertRaises(ValueError): m.run('publish', self.sha, OLD)
            self.assertNotIn('PATCH', [c.args[0] for c in api.call_args_list])


if __name__ == '__main__': unittest.main()
