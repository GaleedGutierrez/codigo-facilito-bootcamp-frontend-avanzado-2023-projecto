import { resolve } from 'node:path';
import { fileURLToPath, URL } from 'node:url';

import postcssOKLabFunction from '@csstools/postcss-oklab-function';
import { defineConfig, UserConfigExport } from 'vite';

console.log(resolve(__dirname, './'));

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
			),
			'@views': fileURLToPath(new URL('./src/views', import.meta.url))
		}
	},
	build: {
		sourcemap: true,
		manifest: true,
		rollupOptions: {
			input: {
				index: resolve(__dirname, 'index.html'),
				login: resolve(__dirname, 'src/views/login/index.html'),
				'create-account': resolve(
					__dirname,
					'src/views/create-account/index.html'
				),
				previewMarked: resolve(
					__dirname,
					'src/views/preview-marked/index.html'
				),
				offline: resolve(__dirname, 'offline.html')
			}
		}
	},
	css: {
		postcss: {
			plugins: [postcssOKLabFunction({ preserve: true })]
		}
	},
	optimizeDeps: {
		include: ['typescript', 'sass']
	}
};

export default defineConfig(config);
