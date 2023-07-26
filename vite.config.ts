import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		lib: {
			entry: './index.html',
			name: 'web-components',
			fileName: (format) => `web-components.${format}.js`,
		  },
		outDir: './docs',

	},
});
