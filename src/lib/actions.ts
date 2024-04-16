import type { Action } from 'svelte/action';
import { ViewerStore } from './store';
import { isImg } from './guards';
import { RemToPx } from './utils';

export const viewer: Action = (node) => {
	if (!isImg(node)) {
		throw new Error('Viewer action can only be used on img elements');
	}
	console.log('viewer action', node);

	node.addEventListener('click', () => {
		console.log('viewer action click', node);
		const bounding = node.getBoundingClientRect();
		const aspectRatio = bounding.width / bounding.height;

		const rem = RemToPx(1);
		const width = window.innerWidth - rem;
		const height = (window.innerWidth - rem) / aspectRatio;
		const top = rem + (window.innerHeight - rem) / 2 - width / aspectRatio / 2;
		const left = rem / 2;

		ViewerStore.open(node, {
			width,
			height,
			top,
			left,
			x: bounding.x,
			y: bounding.y
		});
	});
};
