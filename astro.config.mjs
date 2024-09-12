import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://sneakere.github.io/siproind_astro/',
  base: '/siproind_astro/',
});