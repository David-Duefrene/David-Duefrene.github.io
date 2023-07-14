import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		lib: {
			entry: './components/ImageList.js',
			name: 'web-components',
			fileName: (format) => `web-components.${format}.js`,
		  },
		outDir: './docs',
	},
});
