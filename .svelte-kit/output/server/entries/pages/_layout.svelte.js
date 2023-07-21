import { c as create_ssr_component } from "../../chunks/ssr.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${slots.default ? slots.default({}) : ` <header data-svelte-h="svelte-lmkjf7"><nav><ul><li><a href="#about">About</a></li> <li><a href="#projects">Projects</a></li> <li><a href="#comic-generation">Comic</a></li> <li><a href="#contact">Contact</a></li></ul></nav></header> <footer data-svelte-h="svelte-1458438"><p>© 2023 All rights reserved.</p></footer> `}</main>`;
});
export {
  Layout as default
};
