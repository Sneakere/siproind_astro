import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
const isProduction = process.env.NODE_ENV === 'production';
const baseURL = '/';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: isProduction ? 'https://sneakere.github.io/siproind_astro/' : 'http://localhost:4321/',
  base: baseURL
});