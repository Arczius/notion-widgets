import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import webfontDownload from 'vite-plugin-webfont-dl';

export default defineConfig({
	plugins: [
		sveltekit(),
		webfontDownload([
			'https://fonts.googleapis.com/css2?family=Monoton&display=swap',
			'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap'
		])
	]
});
