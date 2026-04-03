---
description: "Write a session handover doc to docs/ops/. Use at the end of any work session."
thinking: false
---

# Session Handover

Write a durable handover document. Do NOT load the full AO skill — just execute directly.

## Steps

1. Run in parallel:
```bash
git log --oneline -10 --decorate
git status --short --branch
git diff --stat origin/main...HEAD
```

2. Create `docs/ops/SHORT_STATUS_AND_HANDOVER_{today's date}.md` with:

```markdown
# Short Status And Handover - {date}

## What Landed
{bullet list of what's on main now — recent commits}

## What Changed This Session
{bullet list of commits/files from this session}

## Current Blockers
{any external dependencies or manual steps needed}

## Recommended Next Stack
{ordered list of what to work on next}

## Verification Evidence
{which gates passed, when}
```

3. Stage and commit:
```bash
git add docs/ops/SHORT_STATUS_AND_HANDOVER_{date}.md
git commit -m "docs(ops): session handover {date}"
```

Do NOT push unless the user asks. Just commit locally.
