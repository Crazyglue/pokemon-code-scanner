import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// /** @type {import('@sveltejs/kit').Config} */
// export default {
// 	// Consult https://svelte.dev/docs/kit/integrations
// 	// for more information about preprocessors
// 	preprocess: vitePreprocess(),
// 	adapter: adapter({
// 		fallback: 'index.html',
// 	}),
// 	kit: {
// 		// Pre-render every route (note: this assumes your app is fully static)
// 		prerender: {
// 			entries: ['*']
// 		},
// 		adapter: adapter({
// 			pages: 'build',
// 			assets: 'build',
// 			fallback: 'index.html',
// 			precompress: false,
// 			strict: true
// 		}),
// 	}
// };

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html', // generates a fallback HTML file for non-prerendered routes
			precompress: false,
			strict: true
		}),
		prerender: {
			entries: ['*'] // prerender every route (if possible)
		}
	}
};

export default config;
