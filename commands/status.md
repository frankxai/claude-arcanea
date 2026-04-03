---
description: "Quick repo status dashboard — branch, trunk, worktrees, dirty files, blockers."
thinking: false
---

# Quick Status

Run in parallel:
```bash
git status --short --branch
git log --oneline -8 --decorate
git worktree list
```

Then show a compact report:

```
Branch: {branch}
Trunk: {origin/main hash}
Divergence: {ahead/behind/clean}
Worktrees: {count}
Dirty: {tracked modified count} modified, {untracked count} untracked
Last 5 commits: {one line each}
```

Keep it under 20 lines. No skill loading, no file reading — just git state.
