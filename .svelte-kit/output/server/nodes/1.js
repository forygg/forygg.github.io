

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.5004344e.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.9bb45c71.js","_app/immutable/chunks/singletons.d79a65dc.js"];
export const stylesheets = [];
export const fonts = [];
