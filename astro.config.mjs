import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://namingthings.tech',
	integrations: [mdx(), sitemap()],
	prefetch: {
		defaultStrategy: 'hover'
	},
	markdown: {
		shikiConfig: {
			theme: 'material-theme-palenight'
		}
	}
});
