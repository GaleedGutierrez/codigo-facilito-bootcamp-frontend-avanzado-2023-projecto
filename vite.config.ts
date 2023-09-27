import { fileURLToPath, URL } from 'node:url';

import { defineConfig, UserConfigExport } from 'vite';

const config: UserConfigExport = {
	resolve: {
		alias: {
			'@fonts': fileURLToPath(new URL('./assets/fonts', import.meta.url)),
		},
	},
};

export default defineConfig(config);
