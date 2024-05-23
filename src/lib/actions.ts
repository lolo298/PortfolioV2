import type { Action } from 'svelte/action';
import { ViewerStore } from './store';
import { isImg } from './guards';
import { RemToPx } from './utils';

export const viewer: Action = (node) => {
	if (!isImg(node)) {
		throw new Error('Viewer action can only be used on img elements');
	}
	console.log('viewer action', node);

	node.addEventListener('click', () => openViewer(node));
};

function openViewer(node: HTMLImageElement) {
	console.log('viewer action click', node);
	const bounding = node.getBoundingClientRect();
	
	const rem = RemToPx(1);
	const isLandscape = window.innerWidth > window.innerHeight;
	const aspectRatio = node.naturalWidth / node.naturalHeight;

	const width = isLandscape ? window.innerWidth - 4 * rem : window.innerWidth - 2 * rem;
	const height =  width / aspectRatio;
	const left = window.innerWidth / 2 - width / 2;
	const top = window.innerHeight / 2 - height / 2;


	ViewerStore.open(node, {
		width,
		height,
		top,
		left,
		x: bounding.x,
		y: bounding.y
	});
}
