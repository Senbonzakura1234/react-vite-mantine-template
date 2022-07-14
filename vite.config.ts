import ReactPlugin from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';
import { VitePWA as PWAPlugin } from 'vite-plugin-pwa';
import TSConfig from 'vite-tsconfig-paths';

const getAbsolutePath = (pathName: string): string => path.resolve(__dirname, pathName);

// https://vitejs.dev/config/
export default defineConfig({
	logLevel: 'info',
	plugins: [
		ReactPlugin(),
		TSConfig({ projects: [getAbsolutePath('tsconfig.json')] }),
		PWAPlugin({
			registerType: 'autoUpdate',
			injectRegister: 'auto',
			workbox: {
				globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
				cleanupOutdatedCaches: true,
			},
		}),
	],
	server: { open: '/' },
	resolve: {
		alias: {
			'@assets': getAbsolutePath('./src/assets/'),
			'@components': getAbsolutePath('./src/components/'),
			'@context': getAbsolutePath('./src/context/'),
			'@data': getAbsolutePath('./src/data/'),
			'@hooks': getAbsolutePath('./src/hooks/'),
			'@pages': getAbsolutePath('./src/pages/'),
			'@stories': getAbsolutePath('./src/stories/'),
			'@style': getAbsolutePath('./src/scss/'),
			'@typescript': getAbsolutePath('.src/typescript/'),
			'@utils': getAbsolutePath('./src/utils/'),
		},
	},
});
