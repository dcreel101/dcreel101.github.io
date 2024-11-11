import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import tailwindForms from "@astrojs/tailwind";

import react from '@astrojs/react';

import icon from 'astro-icon';

// https://astro.build/config
// https://astrofy-template.netlify.app
export default defineConfig({
  site: 'https://creel.cloud',
  integrations: [mdx(), sitemap(), tailwind(), react(), icon(), tailwindForms()]
});