/**
 * Arcanea Intelligence OS - Claude Integration
 *
 * Programmatic API for integrating Arcanea's Guardian agents,
 * skills, and workflows into Claude Code.
 */
interface Guardian {
    name: string;
    gate: string;
    frequency: string;
    element: string;
    godbeast: string;
    domain: string[];
}
interface Skill {
    name: string;
    gate: string;
    guardian: string;
    description: string;
    triggers: string[];
}
interface Workflow {
    name: string;
    guardian: string;
    awakened: string;
    steps: WorkflowStep[];
}
interface WorkflowStep {
    id: string;
    action: string;
    params?: Record<string, unknown>;
}
/**
 * The Ten Guardians of Arcanea
 */
declare const guardians: Guardian[];
/**
 * The Seven Awakened Orchestrators
 */
declare const awakened: {
    name: string;
    wisdom: string;
    role: string;
}[];
/**
 * Get a guardian by name
 */
declare function getGuardian(name: string): Guardian | undefined;
/**
 * Get guardians by domain
 */
declare function getGuardiansByDomain(domain: string): Guardian[];
/**
 * Route a task to the appropriate guardian
 */
declare function routeToGuardian(taskDescription: string): Guardian;
/**
 * Get the frequency for a gate
 */
declare function getGateFrequency(gate: string): string;
declare const _default: {
    guardians: Guardian[];
    awakened: {
        name: string;
        wisdom: string;
        role: string;
    }[];
    getGuardian: typeof getGuardian;
    getGuardiansByDomain: typeof getGuardiansByDomain;
    routeToGuardian: typeof routeToGuardian;
    getGateFrequency: typeof getGateFrequency;
};

export { type Guardian, type Skill, type Workflow, type WorkflowStep, awakened, _default as default, getGateFrequency, getGuardian, getGuardiansByDomain, guardians, routeToGuardian };
