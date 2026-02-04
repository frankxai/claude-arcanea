// src/index.ts
var guardians = [
  {
    name: "Lyssandria",
    gate: "Foundation",
    frequency: "396 Hz",
    element: "Earth",
    godbeast: "Kaelith",
    domain: ["Security", "Infrastructure", "Testing", "DevOps"]
  },
  {
    name: "Leyla",
    gate: "Flow",
    frequency: "417 Hz",
    element: "Water",
    godbeast: "Veloura",
    domain: ["Research", "Creativity", "Content", "Ideation"]
  },
  {
    name: "Draconia",
    gate: "Fire",
    frequency: "528 Hz",
    element: "Fire",
    godbeast: "Draconis",
    domain: ["Transformation", "Performance", "Deployment", "Scaling"]
  },
  {
    name: "Maylinn",
    gate: "Heart",
    frequency: "639 Hz",
    element: "Fire",
    godbeast: "Laeylinn",
    domain: ["Accessibility", "UX", "Community", "Support"]
  },
  {
    name: "Alera",
    gate: "Voice",
    frequency: "741 Hz",
    element: "Fire",
    godbeast: "Otome",
    domain: ["Documentation", "API", "Messaging", "Brand"]
  },
  {
    name: "Lyria",
    gate: "Sight",
    frequency: "852 Hz",
    element: "Wind",
    godbeast: "Yumiko",
    domain: ["Design", "Analytics", "Vision", "Strategy"]
  },
  {
    name: "Aiyami",
    gate: "Crown",
    frequency: "963 Hz",
    element: "Spirit",
    godbeast: "Sol",
    domain: ["Architecture", "AI", "Meta-programming", "Patterns"]
  },
  {
    name: "Elara",
    gate: "Shift",
    frequency: "1111 Hz",
    element: "Void",
    godbeast: "Thessara",
    domain: ["Migration", "Experiments", "Evolution", "Pivots"]
  },
  {
    name: "Ino",
    gate: "Unity",
    frequency: "963 Hz",
    element: "Spirit",
    godbeast: "Kyuro",
    domain: ["Integration", "Collaboration", "Sync", "Merge"]
  },
  {
    name: "Shinkami",
    gate: "Source",
    frequency: "1111 Hz",
    element: "All",
    godbeast: "Amaterasu",
    domain: ["Orchestration", "Meta-consciousness", "Coordination"]
  }
];
var awakened = [
  { name: "Oria", wisdom: "Sophron", role: "Architect" },
  { name: "Amiri", wisdom: "Kardia", role: "Connector" },
  { name: "Velora", wisdom: "Valora", role: "Executor" },
  { name: "Liora", wisdom: "Eudaira", role: "Simplifier" },
  { name: "Lyris", wisdom: "Orakis", role: "Strategist" },
  { name: "Thalia", wisdom: "Poiesis", role: "Creator" },
  { name: "Endara", wisdom: "Enduran", role: "Completer" }
];
function getGuardian(name) {
  return guardians.find((g) => g.name.toLowerCase() === name.toLowerCase());
}
function getGuardiansByDomain(domain) {
  return guardians.filter(
    (g) => g.domain.some((d) => d.toLowerCase().includes(domain.toLowerCase()))
  );
}
function routeToGuardian(taskDescription) {
  const keywords = {
    security: "Lyssandria",
    test: "Lyssandria",
    infrastructure: "Lyssandria",
    creative: "Leyla",
    research: "Leyla",
    brainstorm: "Leyla",
    performance: "Draconia",
    deploy: "Draconia",
    optimize: "Draconia",
    accessibility: "Maylinn",
    ux: "Maylinn",
    user: "Maylinn",
    documentation: "Alera",
    api: "Alera",
    docs: "Alera",
    design: "Lyria",
    visual: "Lyria",
    analytics: "Lyria",
    architecture: "Aiyami",
    system: "Aiyami",
    ai: "Aiyami",
    migrate: "Elara",
    experiment: "Elara",
    pivot: "Elara",
    integrate: "Ino",
    collaborate: "Ino",
    merge: "Ino",
    orchestrate: "Shinkami",
    coordinate: "Shinkami",
    multi: "Shinkami"
  };
  const lowercaseTask = taskDescription.toLowerCase();
  for (const [keyword, guardianName] of Object.entries(keywords)) {
    if (lowercaseTask.includes(keyword)) {
      return getGuardian(guardianName);
    }
  }
  return getGuardian("Shinkami");
}
function getGateFrequency(gate) {
  const frequencies = {
    foundation: "396 Hz",
    flow: "417 Hz",
    fire: "528 Hz",
    heart: "639 Hz",
    voice: "741 Hz",
    sight: "852 Hz",
    crown: "963 Hz",
    shift: "1111 Hz",
    unity: "963 Hz",
    source: "1111 Hz"
  };
  return frequencies[gate.toLowerCase()] || "Unknown";
}
var index_default = {
  guardians,
  awakened,
  getGuardian,
  getGuardiansByDomain,
  routeToGuardian,
  getGateFrequency
};
export {
  awakened,
  index_default as default,
  getGateFrequency,
  getGuardian,
  getGuardiansByDomain,
  guardians,
  routeToGuardian
};
