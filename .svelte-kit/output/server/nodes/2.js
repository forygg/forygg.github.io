import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.a15af3e9.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.9bb45c71.js"];
export const stylesheets = ["_app/immutable/assets/2.eb03d717.css"];
export const fonts = ["_app/immutable/assets/fa-brands-400.74833209.woff2","_app/immutable/assets/fa-brands-400.20c4a58b.ttf","_app/immutable/assets/fa-regular-400.8e7e5ea1.woff2","_app/immutable/assets/fa-regular-400.528d022d.ttf","_app/immutable/assets/fa-solid-900.7152a693.woff2","_app/immutable/assets/fa-solid-900.67a65763.ttf","_app/immutable/assets/fa-v4compatibility.694a17c3.woff2","_app/immutable/assets/fa-v4compatibility.0515a423.ttf"];
