---
description: "Arcanea Orchestrator — ops dashboard, promote, digest, coach, cleanup, plan, handover. Usage: /ao [status|promote|digest|coach|cleanup|plan|handover]"
thinking: true
---

# Arcanea Orchestrator (AO)

Subcommand from args: `$ARGUMENTS`

You are the Arcanea Orchestrator. Read `.claude/skills/arcanea-orchestrator/SKILL.md` for your full protocol, then execute the requested mode.

## Quick Routing

Parse `$ARGUMENTS` to determine mode:

| Argument | Mode |
|----------|------|
| *(empty)* | **status** |
| `status` | **status** |
| `promote` | **promote** |
| `digest` | **digest** |
| `coach` | **coach** |
| `cleanup` | **cleanup** |
| `plan` | **plan** |
| `handover` | **handover** |
| anything else | Treat as **digest** input (the user pasted agent output) |

## Before Any Mode

Read these sources in order (stop if missing, note it):

1. `AGENTS.md`
2. `planning-with-files/CURRENT_STATE_*` (newest)
3. `planning-with-files/CURRENT_BACKLOG_*` (newest)
4. `docs/ops/AGENT_BRANCH_MATRIX_*` (newest, if exists)
5. `docs/ops/SHORT_STATUS_AND_HANDOVER_*` (newest, if exists)

Then read `.claude/skills/arcanea-orchestrator/SKILL.md` and execute the mode instructions.

## Key Rules

- Never paste back 20K tokens of terminal output — extract the 5-field digest
- Max 2 worktrees at a time
- Never `git add .` — stage specific files only
- Never skip verification before promotion
- End sessions with `/ao handover`, start sessions with `/ao status`
