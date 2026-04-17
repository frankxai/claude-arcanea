# AGENTS.md

This overlay is part of the **Arcanea Multi-Coding Agent System (AMCAS)**. It teaches a host CLI (claude / opencode / codex / gemini) about Arcanea standards and points at the canonical routing policy.

## Contracts

1. **Source of truth for routing**: `@arcanea/router-spec`. This overlay never hard-codes model choices — it reads the spec and reflects it into host-CLI-native config.
2. **Surface**: declared in `manifest.yaml`. Maps to a key under `surfaces:` in `packages/router-spec/models.yaml`.
3. **Dispatcher integration**: `@arcanea/arcanea-code` uses this surface when routing via `--surface <name>`.
4. **Idempotent install**: running the installer twice produces the same state as once. Each step prints `created` / `updated` / `skipped`.

## What this overlay owns

- Host-CLI-specific integration glue (agents, prompts, skills, hooks, keybindings, MCP registrations).
- Canon-aligned agent personas for this CLI.
- Installation into the host CLI's config directory.

## What this overlay does NOT own

- Model routing decisions — those live in `@arcanea/router-spec`.
- Runtime dispatch — that's the `arcanea-code` CLI.
- Session coordination — that's `arcanea-orchestrator` (Composio `ao`).

## How to modify

| Change | Where |
|---|---|
| Add a new agent / persona | this repo, under `agents/` (or CLI-native equivalent) |
| Change which model an agent uses | `packages/router-spec/models.yaml` — then this overlay re-reads on next install |
| Add a new skill or hook | this repo, under `skills/` or `hooks/` |
| Change routing policy | `packages/router-spec/` — not here |

## Related

- `@arcanea/router-spec` — canonical routing spec
- `@arcanea/arcanea-code` — dispatcher CLI that consumes the spec
- `frankxai/arcanea-orchestrator` — Composio AO fork for worktree-isolated swarm
- `frankxai/claude-codex-gemini-opencode-settings` — distribution installer across all overlays
- `docs/ops/OVERLAY_CONTRACT_2026-04-17.md` (in arcanea-ai-app) — full contract spec

## Principle

Memory is historical. This manifest + spec are authoritative. If this overlay disagrees with router-spec, the spec wins — the fix lands in this overlay.
