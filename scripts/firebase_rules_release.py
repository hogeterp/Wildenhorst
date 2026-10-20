"""Inspect or publish only the default Firestore rules; never access database records."""
import hashlib
import json
import os
import re
from pathlib import Path
import urllib.request

PROJECT = 'wildenhorst-94729'
RELEASE = f'projects/{PROJECT}/releases/cloud.firestore'
RULES = Path(__file__).resolve().parents[1] / 'firestore.rules'


def rule_tokens(source):
    # Keep quoted strings intact; discard only comments and whitespace outside strings.
    pattern = r"'(?:[^'\\]|\\.)*'|\"(?:[^\"\\]|\\.)*\"|//[^\n]*|/\*.*?\*/|[A-Za-z_][A-Za-z_0-9]*|[0-9]+|[^\s]"
    return [m.group() for m in re.finditer(pattern, source, re.DOTALL)
            if not m.group().startswith(('//', '/*'))]


def api(method, resource, body=None):
    data = None if body is None else json.dumps(body).encode()
    request = urllib.request.Request(
        f'https://firebaserules.googleapis.com/v1/{resource}', data=data,
        headers={'Authorization': 'Bearer ' + os.environ['ACCESS_TOKEN'],
                 'Content-Type': 'application/json'}, method=method)
    with urllib.request.urlopen(request, timeout=60) as response:
        return json.load(response)


def run(mode, expected_sha='', expected_live=''):
    if mode not in ('inspect', 'publish'):
        raise ValueError('Unknown mode')
    content = RULES.read_text()
    digest = hashlib.sha256(content.encode()).hexdigest()
    if mode == 'publish' and (expected_sha != digest or not expected_live):
        raise ValueError('Publication requires the exact approved file SHA256 and live ruleset name')
    release = api('GET', RELEASE)
    old = release['rulesetName']
    live = api('GET', old)
    files = live['source']['files']
    same = len(files) == 1 and files[0]['content'] == content
    equivalent = len(files) == 1 and rule_tokens(files[0]['content']) == rule_tokens(content)
    lines = [f'Rules SHA256: `{digest}`', f'Current live ruleset: `{old}`',
             f'Exact file contents match live: {same}',
             f'Rule tokens match ignoring comments and formatting: {equivalent}']
    if mode == 'publish':
        if old != expected_live:
            raise ValueError('Live ruleset changed: inspect again before publishing')
        if same:
            lines.append('Already current; no changes made.')
        else:
            new = api('POST', f'projects/{PROJECT}/rulesets', {
                'source': {'files': [{'name': 'firestore.rules', 'content': content}]}})
            # Abort if someone published while this new ruleset was compiling.
            if api('GET', RELEASE)['rulesetName'] != old:
                raise ValueError('Live ruleset changed during preparation; release not updated')
            api('PATCH', RELEASE, {'release': {'name': RELEASE, 'rulesetName': new['name']},
                                   'updateMask': 'ruleset_name'})
            actual = api('GET', RELEASE)['rulesetName']
            if actual != new['name']:
                raise RuntimeError('Release verification failed; inspect live release')
            lines += [f'Published ruleset: `{actual}`', f'Previous ruleset retained: `{old}`']
    else:
        lines.append('Inspection only: no rules or database records changed.')
    summary = '\n\n'.join(lines) + '\n'
    print(summary)
    if os.environ.get('GITHUB_STEP_SUMMARY'):
        with open(os.environ['GITHUB_STEP_SUMMARY'], 'a') as out:
            out.write(summary)
    return lines


if __name__ == '__main__':
    run(os.environ.get('RELEASE_MODE', 'inspect'), os.environ.get('EXPECTED_RULES_SHA256', ''),
        os.environ.get('EXPECTED_LIVE_RULESET', ''))
