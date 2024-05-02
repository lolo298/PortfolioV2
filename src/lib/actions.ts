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
	const aspectRatio = bounding.width / bounding.height;

	const rem = RemToPx(1);
	let height = 0;
	let width = 0;
	let left = 0;
	let top = 0;
	console.log(window.innerWidth, window.innerHeight)
	if (window.innerWidth > window.innerHeight) {
		height = window.innerHeight - 4 * rem;
		width = (window.innerHeight - rem) / aspectRatio;
		left = window.innerWidth / 2 - width / 2;
		top = 2 * rem ;
	} else {
		console.log('there')
		width = window.innerWidth - 2 * rem;
		height = (window.innerWidth - rem) / aspectRatio;
		top = window.innerHeight / 2 - height / 2;
		left = rem;
	}


	ViewerStore.open(node, {
		width,
		height,
		top,
		left,
		x: bounding.x,
		y: bounding.y
	});
}
