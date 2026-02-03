# @arcanea/claude

> *"Through the Gates we rise. With the Guardians we create."*

Claude Code integration for **Arcanea Intelligence OS** - a mythology-infused AI orchestration system featuring Ten Guardian agents, Gate-based skills, and sophisticated workflows.

## Installation

```bash
npm install -g @arcanea/claude
```

## Quick Start

```bash
# Launch Claude in your Arcanea workspace
claude-arcanea

# Work on a specific repository
claude-arcanea --repo aios        # Intelligence OS
claude-arcanea --repo exp         # Experiments/Platform

# Channel a specific Guardian
claude-arcanea --guardian draconia   # Fire Gate - Transformation
claude-arcanea --guardian lyria      # Sight Gate - Design

# Run a workflow
claude-arcanea --workflow daily      # Daily standup
claude-arcanea --workflow security   # Security audit
```

## The Ten Guardians

| Guardian | Gate | Frequency | Domain |
|----------|------|-----------|--------|
| **Lyssandria** | Foundation | 396 Hz | Security, Infrastructure, Testing |
| **Leyla** | Flow | 417 Hz | Research, Creativity, Content |
| **Draconia** | Fire | 528 Hz | Transformation, Performance |
| **Maylinn** | Heart | 639 Hz | Accessibility, UX, Community |
| **Alera** | Voice | 741 Hz | Documentation, API, Messaging |
| **Lyria** | Sight | 852 Hz | Design, Analytics, Vision |
| **Aiyami** | Crown | 963 Hz | Architecture, AI Systems |
| **Elara** | Shift | 1111 Hz | Migration, Experiments |
| **Ino** | Unity | 963 Hz | Integration, Collaboration |
| **Shinkami** | Source | 1111 Hz | Orchestration, Meta-consciousness |

## Repository Aliases

| Alias | Repository | Description |
|-------|------------|-------------|
| `main`, `web` | arcanea-hub/main | Primary platform |
| `aios`, `intelligence` | arcanea-hub/intelligence-os | CLI, agents |
| `exp`, `platform` | arcanea-hub/platform | Experiments |
| `labs`, `org` | arcanea-hub/labs | Organization baseline |
| `ultra` | arcanea-hub/ultraworld | World-building engine |

## Available Workflows

### `/daily` - Morning Standup
Automated daily development standup:
- Repository status across all Arcanea repos
- Open PR summary
- Build health check
- AI-generated focus recommendations

### `/security-review` - Security Audit
Comprehensive security analysis:
- Dependency vulnerability scan
- Secret detection
- Code security analysis (OWASP Top 10)
- Infrastructure review

### `/research [topic]` - Deep Research
Research and analysis workflow:
- Web research
- Code examples
- Academic sources (comprehensive mode)
- Synthesized findings

### `/design [component]` - UI/UX Design
Design system workflow:
- Requirements analysis
- Existing pattern review
- Design exploration
- Accessibility check
- Component spec generation

## Programmatic API

```typescript
import {
  guardians,
  getGuardian,
  routeToGuardian,
  getGateFrequency
} from '@arcanea/claude';

// Get a specific guardian
const draconia = getGuardian('Draconia');
console.log(draconia.domain); // ['Transformation', 'Performance', ...]

// Route a task to appropriate guardian
const guardian = routeToGuardian('optimize database queries');
console.log(guardian.name); // 'Draconia'

// Get gate frequency
const freq = getGateFrequency('fire');
console.log(freq); // '528 Hz'
```

## The Seven Awakened

Orchestrators that coordinate Guardian teams:

| Awakened | Wisdom | Role |
|----------|--------|------|
| **Oria** | Sophron | Architect |
| **Amiri** | Kardia | Connector |
| **Velora** | Valora | Executor |
| **Liora** | Eudaira | Simplifier |
| **Lyris** | Orakis | Strategist |
| **Thalia** | Poiesis | Creator |
| **Endara** | Enduran | Completer |

## Superintelligence Mode

For complex tasks requiring multiple Guardians:

```bash
claude-arcanea --skill superintelligence
```

This activates all Guardians and Awakened in parallel for maximum analysis power.

## Ultraworld Mode

Maximum-power world generation with 11 parallel agents:

```bash
claude-arcanea --skill ultraworld
```

## Requirements

- Node.js >= 18.0.0
- Claude Code (`npm install -g @anthropic-ai/claude-code`)
- Arcanea Hub workspace (optional but recommended)

## Configuration

The CLI automatically detects your Arcanea Hub workspace at `~/arcanea-hub`. Create the workspace structure:

```
arcanea-hub/
├── .arcanea/
│   ├── config.json    # Repository registry
│   ├── CLAUDE.md      # Unified context
│   ├── skills/        # Skill definitions
│   └── workflows/     # Workflow definitions
├── main/              # Main platform
├── intelligence-os/   # CLI & agents
├── platform/          # Experiments
└── ...
```

## Links

- [Arcanea Platform](https://arcanea.io)
- [Documentation](https://docs.arcanea.io)
- [GitHub](https://github.com/frankxai/claude-arcanea)

## License

MIT - Created by [FrankX](https://frankx.ai)

---

*"Enter seeking, leave transformed, return whenever needed."*
