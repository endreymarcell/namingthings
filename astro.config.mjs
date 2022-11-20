import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://namingthings.tech',
	outDir: 'build',
	integrations: [mdx(), sitemap()],
	markdown: {
		shikiConfig: {
			theme: 'material-palenight'
		}
	}
});
