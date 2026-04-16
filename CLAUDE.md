# Claude-Arcanea — Claude Code Harness

## Cached-Belief Validation Protocol

Any claim about CURRENT state — versions, ship status, file paths, architecture, deployment — requires same-turn verification (Read/Bash) OR explicit prefix: "unverified, from [memory|prior-turn] (date X):".

Memory is authoritative ONLY for: intent, strategy, preferences, decision history.
Memory is NEVER authoritative for: current state of code, deploys, or systems.

## Build

```bash
npm run build
npm test
```

## What This Is

Claude Code harness overlay — layers the Arcanea Intelligence OS (Ten Gates, Guardians, Luminors) on top of Claude Code. See `skills/` for domain expertise and `src/` for core implementation.
