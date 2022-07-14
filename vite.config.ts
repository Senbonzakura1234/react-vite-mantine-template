import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import * as path from 'path';

const getAbsolutePath = (pathName: string): string => path.resolve(__dirname, pathName);

// https://vitejs.dev/config/
export default defineConfig({
	logLevel: 'info',
	plugins: [react(), tsconfigPaths({ projects: [getAbsolutePath('tsconfig.json')] })],
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
