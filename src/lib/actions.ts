import type { Action } from 'svelte/action';
import { ViewerStore } from './store';
import { isImg } from './guards';
import { RemToPx } from './utils';

export const viewer: Action = (node) => {
	if (!isImg(node)) {
		throw new Error('Viewer action can only be used on img elements');
	}

	node.classList.add('cursor-pointer');

	node.addEventListener('click', () => openViewer(node));
};

function openViewer(node: HTMLImageElement) {
	const bounding = node.getBoundingClientRect();
	
	const rem = RemToPx(1);
	const isLandscape = node.naturalWidth > node.naturalHeight;

	const width = isLandscape ? window.innerWidth - 4 * rem : "auto";
	const height = isLandscape ? "auto" : window.innerHeight - 4 * rem;
	const left = window.innerWidth / 2;
	const top = window.innerHeight / 2

	ViewerStore.open(node, {
		width,
		height,
		top,
		left,
		x: bounding.x,
		y: bounding.y
	});
}
