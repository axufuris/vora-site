import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://getvora.net',
  integrations: [sitemap()],
  build: { format: 'directory' },
});
