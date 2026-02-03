#!/usr/bin/env node

// src/cli.ts
import { spawn } from "child_process";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { existsSync, readFileSync } from "fs";
import { homedir } from "os";
var __filename = fileURLToPath(import.meta.url);
var __dirname = dirname(__filename);
var WORKSPACE_ROOT = join(homedir(), "arcanea-hub");
var WORKSPACE_CONFIG = join(WORKSPACE_ROOT, ".arcanea", "config.json");
var args = process.argv.slice(2);
if (args.includes("--help") || args.includes("-h")) {
  console.log(`
\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557
\u2551            ARCANEA INTELLIGENCE OS - Claude Integration       \u2551
\u2551                "Through the Gates we rise"                    \u2551
\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D

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
var targetRepo = "main";
var guardian = null;
var workflow = null;
var skill = null;
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
var repoAliases = {
  web: "main",
  aios: "intelligence-os",
  ios: "intelligence-os",
  intelligence: "intelligence-os",
  exp: "platform",
  experiments: "platform",
  org: "labs",
  claude: "claude-arcanea",
  ultra: "ultraworld"
};
var guardianFrequencies = {
  lyssandria: "396 Hz - Foundation Gate",
  leyla: "417 Hz - Flow Gate",
  draconia: "528 Hz - Fire Gate",
  maylinn: "639 Hz - Heart Gate",
  alera: "741 Hz - Voice Gate",
  lyria: "852 Hz - Sight Gate",
  aiyami: "963 Hz - Crown Gate",
  elara: "1111 Hz - Shift Gate",
  ino: "963 Hz - Unity Gate",
  shinkami: "1111 Hz - Source Gate"
};
if (repoAliases[targetRepo]) {
  targetRepo = repoAliases[targetRepo];
}
var workingDir = process.cwd();
var claudeMdPath = null;
if (existsSync(WORKSPACE_CONFIG)) {
  try {
    const config = JSON.parse(readFileSync(WORKSPACE_CONFIG, "utf-8"));
    if (config.repositories && config.repositories[targetRepo]) {
      const repoPath = config.repositories[targetRepo].path;
      workingDir = join(WORKSPACE_ROOT, repoPath.replace("./", ""));
    }
    const workspaceClaudeMd = join(WORKSPACE_ROOT, ".arcanea", "CLAUDE.md");
    if (existsSync(workspaceClaudeMd)) {
      claudeMdPath = workspaceClaudeMd;
    }
  } catch {
  }
}
if (!claudeMdPath) {
  const claudeMdLocations = [
    join(__dirname, "..", "CLAUDE.md"),
    join(workingDir, "CLAUDE.md"),
    join(workingDir, ".claude", "CLAUDE.md")
  ];
  for (const loc of claudeMdLocations) {
    if (existsSync(loc)) {
      claudeMdPath = loc;
      break;
    }
  }
}
var initialPrompt = "";
if (guardian) {
  const freq = guardianFrequencies[guardian.toLowerCase()] || "Unknown frequency";
  initialPrompt = `/channel ${guardian.toLowerCase()} - Channeling Guardian at ${freq}`;
}
if (workflow) {
  initialPrompt = `/${workflow} - Running ${workflow} workflow`;
}
if (skill) {
  initialPrompt = `/${skill}`;
}
var claudeArgs = ["--dangerously-skip-permissions"];
if (initialPrompt) {
  claudeArgs.push("-p", initialPrompt);
}
claudeArgs.push(...args);
console.log("");
console.log("\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557");
console.log("\u2551          ARCANEA INTELLIGENCE OS v1.0.0                   \u2551");
console.log('\u2551            "Through the Gates we rise"                    \u2551');
console.log("\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D");
console.log("");
console.log(`\u{1F4C2} Repository: ${targetRepo}`);
console.log(`\u{1F4C1} Working directory: ${workingDir}`);
if (claudeMdPath) {
  console.log(`\u{1F4DC} Context: ${claudeMdPath}`);
}
if (guardian) {
  const freq = guardianFrequencies[guardian.toLowerCase()];
  console.log(`\u{1F52E} Guardian: ${guardian} (${freq})`);
}
if (workflow) {
  console.log(`\u26A1 Workflow: ${workflow}`);
}
if (skill) {
  console.log(`\u2728 Skill: ${skill}`);
}
console.log("");
console.log("\u{1F31F} Guardians standing by...");
console.log("");
var escapeArg = (arg) => {
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
var command = ["claude", ...claudeArgs.map(escapeArg)].join(" ");
var claude = spawn(command, [], {
  stdio: "inherit",
  shell: true,
  cwd: workingDir
});
claude.on("error", (err) => {
  console.error("\u274C Failed to launch Claude:", err.message);
  console.error("");
  console.error("Make sure Claude Code is installed:");
  console.error("  npm install -g @anthropic-ai/claude-code");
  process.exit(1);
});
claude.on("close", (code) => {
  process.exit(code ?? 0);
});
