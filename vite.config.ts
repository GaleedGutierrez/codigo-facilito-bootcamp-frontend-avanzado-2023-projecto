import { fileURLToPath, URL } from 'node:url';

import { defineConfig, UserConfigExport } from 'vite';

const config: UserConfigExport = {
	base: './',
	server: {
		open: './',
		port: 8080,
		host: true
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src/', import.meta.url)),
			'@types': fileURLToPath(new URL('./src/types', import.meta.url)),
			'@fonts': fileURLToPath(new URL('./assets/fonts', import.meta.url)),
			'@icons': fileURLToPath(new URL('./assets/icons', import.meta.url)),
			'@styles': fileURLToPath(new URL('./scss', import.meta.url)),
			'@components': fileURLToPath(
				new URL('./src/components', import.meta.url)
			)
		}
	}
};

export default defineConfig(config);
