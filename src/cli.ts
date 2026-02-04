#!/usr/bin/env node
/**
 * claude-arcanea CLI
 *
 * Launch Claude Code with the full Arcanea Intelligence OS context.
 *
 * Usage:
 *   claude-arcanea                    # Launch in arcanea-hub/main
 *   claude-arcanea --repo aios        # Launch in intelligence-os
 *   claude-arcanea --repo exp         # Launch in platform (experiments)
 *   claude-arcanea --guardian draconia # Channel specific guardian
 *   claude-arcanea --workflow daily   # Run daily workflow
 */

import { spawn } from "child_process";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { existsSync, readFileSync } from "fs";
import { homedir } from "os";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Arcanea Workspace Hub location
const WORKSPACE_ROOT = join(homedir(), "arcanea-hub");
const WORKSPACE_CONFIG = join(WORKSPACE_ROOT, ".arcanea", "config.json");

// Parse arguments
const args = process.argv.slice(2);

// Help flag
if (args.includes("--help") || args.includes("-h")) {
  console.log(`
╔═══════════════════════════════════════════════════════════════╗
║            ARCANEA INTELLIGENCE OS - Claude Integration       ║
║                "Through the Gates we rise"                    ║
╚═══════════════════════════════════════════════════════════════╝

Usage:
  claude-arcanea [options]

Options:
  --repo <name>       Target repository (main, aios, exp, labs)
  --guardian <name>   Channel a specific guardian
  --workflow <name>   Run a workflow (daily, security, research)
  --skill <name>      Activate a skill
  --help, -h          Show this help message

Repositories:
  main (default)      Main platform (frankxai/arcanea)
  aios, intelligence  Intelligence OS (agents, skills)
  exp, platform       Experiments (router, artifact-flow)
  labs                Organization baseline

Guardians:
  lyssandria (396 Hz) Foundation - Security, Infrastructure
  leyla (417 Hz)      Flow - Research, Creativity
  draconia (528 Hz)   Fire - Transformation, Performance
  maylinn (639 Hz)    Heart - Accessibility, UX
  alera (741 Hz)      Voice - Documentation, API
  lyria (852 Hz)      Sight - Design, Analytics
  aiyami (963 Hz)     Crown - Architecture, AI
  elara (1111 Hz)     Shift - Migration, Experiments
  ino (963 Hz)        Unity - Integration, Collaboration
  shinkami (1111 Hz)  Source - Orchestration, Meta

Examples:
  claude-arcanea                          # Start in main repo
  claude-arcanea --repo aios              # Work on Intelligence OS
  claude-arcanea --guardian draconia      # Channel Fire guardian
  claude-arcanea --workflow daily         # Run daily standup
  `);
  process.exit(0);
}

// Check for flags
let targetRepo = "main";
let guardian: string | null = null;
let workflow: string | null = null;
let skill: string | null = null;

// Parse custom flags
for (let i = 0; i < args.length; i++) {
  if (args[i] === "--repo" && args[i + 1]) {
    targetRepo = args[i + 1];
    args.splice(i, 2);
    i--;
  } else if (args[i] === "--guardian" && args[i + 1]) {
    guardian = args[i + 1];
    args.splice(i, 2);
    i--;
  } else if (args[i] === "--workflow" && args[i + 1]) {
    workflow = args[i + 1];
    args.splice(i, 2);
    i--;
  } else if (args[i] === "--skill" && args[i + 1]) {
    skill = args[i + 1];
    args.splice(i, 2);
    i--;
  }
}

// Repository aliases
const repoAliases: Record<string, string> = {
  web: "main",
  aios: "intelligence-os",
  ios: "intelligence-os",
  intelligence: "intelligence-os",
  exp: "platform",
  experiments: "platform",
  org: "labs",
  claude: "claude-arcanea",
  ultra: "ultraworld",
};

// Guardian frequencies
const guardianFrequencies: Record<string, string> = {
  lyssandria: "396 Hz - Foundation Gate",
  leyla: "417 Hz - Flow Gate",
  draconia: "528 Hz - Fire Gate",
  maylinn: "639 Hz - Heart Gate",
  alera: "741 Hz - Voice Gate",
  lyria: "852 Hz - Sight Gate",
  aiyami: "963 Hz - Crown Gate",
  elara: "1111 Hz - Shift Gate",
  ino: "963 Hz - Unity Gate",
  shinkami: "1111 Hz - Source Gate",
};

// Resolve repo alias
if (repoAliases[targetRepo]) {
  targetRepo = repoAliases[targetRepo];
}

// Resolve working directory
let workingDir = process.cwd();
let claudeMdPath: string | null = null;

if (existsSync(WORKSPACE_CONFIG)) {
  try {
    const config = JSON.parse(readFileSync(WORKSPACE_CONFIG, "utf-8"));

    // Get repo path from config
    if (config.repositories && config.repositories[targetRepo]) {
      const repoPath = config.repositories[targetRepo].path;
      workingDir = join(WORKSPACE_ROOT, repoPath.replace("./", ""));
    }

    // Use workspace CLAUDE.md
    const workspaceClaudeMd = join(WORKSPACE_ROOT, ".arcanea", "CLAUDE.md");
    if (existsSync(workspaceClaudeMd)) {
      claudeMdPath = workspaceClaudeMd;
    }
  } catch {
    // Fall back to defaults
  }
}

// Fallback CLAUDE.md locations
if (!claudeMdPath) {
  const claudeMdLocations = [
    join(__dirname, "..", "CLAUDE.md"),
    join(workingDir, "CLAUDE.md"),
    join(workingDir, ".claude", "CLAUDE.md"),
  ];

  for (const loc of claudeMdLocations) {
    if (existsSync(loc)) {
      claudeMdPath = loc;
      break;
    }
  }
}

// Build initial prompt if guardian/workflow/skill specified
let initialPrompt = "";

if (guardian) {
  const freq =
    guardianFrequencies[guardian.toLowerCase()] || "Unknown frequency";
  initialPrompt = `/channel ${guardian.toLowerCase()} - Channeling Guardian at ${freq}`;
}

if (workflow) {
  initialPrompt = `/${workflow} - Running ${workflow} workflow`;
}

if (skill) {
  initialPrompt = `/${skill}`;
}

// Build claude command
const claudeArgs = ["--dangerously-skip-permissions"];

// Add initial prompt if specified
if (initialPrompt) {
  claudeArgs.push("-p", initialPrompt);
}

// Add any remaining arguments
claudeArgs.push(...args);

// Display banner
console.log("");
console.log("╔═══════════════════════════════════════════════════════════╗");
console.log("║          ARCANEA INTELLIGENCE OS v1.0.0                   ║");
console.log('║            "Through the Gates we rise"                    ║');
console.log("╚═══════════════════════════════════════════════════════════╝");
console.log("");
console.log(`📂 Repository: ${targetRepo}`);
console.log(`📁 Working directory: ${workingDir}`);

if (claudeMdPath) {
  console.log(`📜 Context: ${claudeMdPath}`);
}

if (guardian) {
  const freq = guardianFrequencies[guardian.toLowerCase()];
  console.log(`🔮 Guardian: ${guardian} (${freq})`);
}

if (workflow) {
  console.log(`⚡ Workflow: ${workflow}`);
}

if (skill) {
  console.log(`✨ Skill: ${skill}`);
}

console.log("");
console.log("🌟 Guardians standing by...");
console.log("");

// Escape arguments for shell
const escapeArg = (arg: string): string => {
  if (process.platform === "win32") {
    if (arg.includes(" ") || arg.includes('"')) {
      return `"${arg.replace(/"/g, '\\"')}"`;
    }
    return arg;
  }
  if (/[^a-zA-Z0-9_\-=:./]/.test(arg)) {
    return `'${arg.replace(/'/g, "'\\''")}'`;
  }
  return arg;
};

const command = ["claude", ...claudeArgs.map(escapeArg)].join(" ");

// Spawn claude process
const claude = spawn(command, [], {
  stdio: "inherit",
  shell: true,
  cwd: workingDir,
});

claude.on("error", (err) => {
  console.error("❌ Failed to launch Claude:", err.message);
  console.error("");
  console.error("Make sure Claude Code is installed:");
  console.error("  npm install -g @anthropic-ai/claude-code");
  process.exit(1);
});

claude.on("close", (code) => {
  process.exit(code ?? 0);
});
