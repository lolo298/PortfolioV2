import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import pathTransform from './vite-plugin-path-transform';

export default defineConfig({
	plugins: [pathTransform(), enhancedImages(), sveltekit()]
});
