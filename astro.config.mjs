import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://Sneakere.pages.github.io/",
  base: "/siproind_astro"
});