# Firestore rules releases

The emulator tests use only `demo-wildenhorst` with synthetic fixtures. They have
no Google Cloud credentials. The separate connection workflow reads production
Rules metadata, not database records.

`Inspect or publish approved Firestore rules` starts only manually on `main`.
Every run first passes the emulator and mocked release tests on the same commit.
The default `inspect` mode performs only two GET requests: the current default
Firestore release and its ruleset. The run summary contains the file SHA256 and
current live ruleset name. No live rules or database documents are changed.

To publish after approval, select `publish` and provide both values from the
inspection summary. The workflow aborts if the file or live ruleset has changed.
It creates an immutable ruleset, checks the current release again, then updates
only `projects/wildenhorst-94729/releases/cloud.firestore` and verifies the result.
The previous ruleset name is retained in the summary for recovery. No database
records, indexes, Authentication settings, Storage rules, or website files are
accessed by the release script. It requires Firebase Rules Admin through the
existing repository-scoped Workload Identity Federation connection, not a key.

There is a small check/update race because the Rules release API has no revision
precondition; avoid publishing through the console while this workflow runs.
No push event publishes rules automatically. Publishing is the explicit manual
approval step; no copying rules into Firebase Console is needed.
