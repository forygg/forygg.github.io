import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.ab80531d.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.9bb45c71.js"];
export const stylesheets = [];
export const fonts = [];
