export { FulcrumClient, FulcrumRegion } from './client.js';
export type { FulcrumClientOptions } from './client.js';

// Re-export all model types (no "generated" references in customer code)
export * from '../generated/dist/models/index.js';
