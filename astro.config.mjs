import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://inquiryinstitute.github.io',
  base: '/course-mhh-electric-sheep',
  integrations: [tailwind()],
  output: 'static',
});
