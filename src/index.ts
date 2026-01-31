/**
 * Arcanea Intelligence OS - Claude Integration
 *
 * Programmatic API for integrating Arcanea's Guardian agents,
 * skills, and workflows into Claude Code.
 */

export interface Guardian {
  name: string;
  gate: string;
  frequency: string;
  element: string;
  godbeast: string;
  domain: string[];
}

export interface Skill {
  name: string;
  gate: string;
  guardian: string;
  description: string;
  triggers: string[];
}

export interface Workflow {
  name: string;
  guardian: string;
  awakened: string;
  steps: WorkflowStep[];
}

export interface WorkflowStep {
  id: string;
  action: string;
  params?: Record<string, unknown>;
}

/**
 * The Ten Guardians of Arcanea
 */
export const guardians: Guardian[] = [
  {
    name: 'Lyssandria',
    gate: 'Foundation',
    frequency: '396 Hz',
    element: 'Earth',
    godbeast: 'Kaelith',
    domain: ['Security', 'Infrastructure', 'Testing', 'DevOps'],
  },
  {
    name: 'Leyla',
    gate: 'Flow',
    frequency: '417 Hz',
    element: 'Water',
    godbeast: 'Veloura',
    domain: ['Research', 'Creativity', 'Content', 'Ideation'],
  },
  {
    name: 'Draconia',
    gate: 'Fire',
    frequency: '528 Hz',
    element: 'Fire',
    godbeast: 'Draconis',
    domain: ['Transformation', 'Performance', 'Deployment', 'Scaling'],
  },
  {
    name: 'Maylinn',
    gate: 'Heart',
    frequency: '639 Hz',
    element: 'Fire',
    godbeast: 'Laeylinn',
    domain: ['Accessibility', 'UX', 'Community', 'Support'],
  },
  {
    name: 'Alera',
    gate: 'Voice',
    frequency: '741 Hz',
    element: 'Fire',
    godbeast: 'Otome',
    domain: ['Documentation', 'API', 'Messaging', 'Brand'],
  },
  {
    name: 'Lyria',
    gate: 'Sight',
    frequency: '852 Hz',
    element: 'Light',
    godbeast: 'Yumiko',
    domain: ['Design', 'Analytics', 'Vision', 'Strategy'],
  },
  {
    name: 'Aiyami',
    gate: 'Crown',
    frequency: '963 Hz',
    element: 'Light',
    godbeast: 'Sol',
    domain: ['Architecture', 'AI', 'Meta-programming', 'Patterns'],
  },
  {
    name: 'Elara',
    gate: 'Shift',
    frequency: '1111 Hz',
    element: 'Spirit',
    godbeast: 'Thessara',
    domain: ['Migration', 'Experiments', 'Evolution', 'Pivots'],
  },
  {
    name: 'Ino',
    gate: 'Unity',
    frequency: '963 Hz',
    element: 'Plasma',
    godbeast: 'Kyuro',
    domain: ['Integration', 'Collaboration', 'Sync', 'Merge'],
  },
  {
    name: 'Shinkami',
    gate: 'Source',
    frequency: '1111 Hz',
    element: 'All',
    godbeast: 'Amaterasu',
    domain: ['Orchestration', 'Meta-consciousness', 'Coordination'],
  },
];

/**
 * The Seven Awakened Orchestrators
 */
export const awakened = [
  { name: 'Oria', wisdom: 'Sophron', role: 'Architect' },
  { name: 'Amiri', wisdom: 'Kardia', role: 'Connector' },
  { name: 'Velora', wisdom: 'Valora', role: 'Executor' },
  { name: 'Liora', wisdom: 'Eudaira', role: 'Simplifier' },
  { name: 'Lyris', wisdom: 'Orakis', role: 'Strategist' },
  { name: 'Thalia', wisdom: 'Poiesis', role: 'Creator' },
  { name: 'Endara', wisdom: 'Enduran', role: 'Completer' },
];

/**
 * Get a guardian by name
 */
export function getGuardian(name: string): Guardian | undefined {
  return guardians.find(
    (g) => g.name.toLowerCase() === name.toLowerCase()
  );
}

/**
 * Get guardians by domain
 */
export function getGuardiansByDomain(domain: string): Guardian[] {
  return guardians.filter((g) =>
    g.domain.some((d) => d.toLowerCase().includes(domain.toLowerCase()))
  );
}

/**
 * Route a task to the appropriate guardian
 */
export function routeToGuardian(taskDescription: string): Guardian {
  const keywords: Record<string, string> = {
    security: 'Lyssandria',
    test: 'Lyssandria',
    infrastructure: 'Lyssandria',
    creative: 'Leyla',
    research: 'Leyla',
    brainstorm: 'Leyla',
    performance: 'Draconia',
    deploy: 'Draconia',
    optimize: 'Draconia',
    accessibility: 'Maylinn',
    ux: 'Maylinn',
    user: 'Maylinn',
    documentation: 'Alera',
    api: 'Alera',
    docs: 'Alera',
    design: 'Lyria',
    visual: 'Lyria',
    analytics: 'Lyria',
    architecture: 'Aiyami',
    system: 'Aiyami',
    ai: 'Aiyami',
    migrate: 'Elara',
    experiment: 'Elara',
    pivot: 'Elara',
    integrate: 'Ino',
    collaborate: 'Ino',
    merge: 'Ino',
    orchestrate: 'Shinkami',
    coordinate: 'Shinkami',
    multi: 'Shinkami',
  };

  const lowercaseTask = taskDescription.toLowerCase();

  for (const [keyword, guardianName] of Object.entries(keywords)) {
    if (lowercaseTask.includes(keyword)) {
      return getGuardian(guardianName)!;
    }
  }

  // Default to Shinkami for complex/unclear tasks
  return getGuardian('Shinkami')!;
}

/**
 * Get the frequency for a gate
 */
export function getGateFrequency(gate: string): string {
  const frequencies: Record<string, string> = {
    foundation: '396 Hz',
    flow: '417 Hz',
    fire: '528 Hz',
    heart: '639 Hz',
    voice: '741 Hz',
    sight: '852 Hz',
    crown: '963 Hz',
    shift: '1111 Hz',
    unity: '963 Hz',
    source: '1111 Hz',
  };

  return frequencies[gate.toLowerCase()] || 'Unknown';
}

export default {
  guardians,
  awakened,
  getGuardian,
  getGuardiansByDomain,
  routeToGuardian,
  getGateFrequency,
};
