import { fileURLToPath, resolve, URL } from 'node:url';

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
			'@styles': fileURLToPath(
				new URL('./src/assets/styles', import.meta.url)
			),
			'@components': fileURLToPath(
				new URL('./src/components', import.meta.url)
			)
		}
	},
	build: {
		// sourcemap: true,
		// manifest: true,
		rollupOptions: {
			input: {
				index: resolve(__dirname, './index.html'),
				login: resolve(__dirname, './views/login/index.html')
			}
		}
	},
	optimizeDeps: {
		include: ['typescript', 'sass']
	}
};

export default defineConfig(config);
