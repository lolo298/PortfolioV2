import { writable } from 'svelte/store';

export enum Status {
	OPENED = 'opened',
	OPENING = 'opening',
	CLOSING = 'closing',
	CLOSED = 'closed'
}
const { subscribe, set } = writable<Status>(Status.CLOSED);

export const LoadingStore = {
	delay: 1000,
	subscribe,
	open: () => {
		set(Status.OPENING);
		setTimeout(() => set(Status.OPENED), LoadingStore.delay);
	},
	close: () => {
		set(Status.CLOSING);
		setTimeout(() => set(Status.CLOSED), LoadingStore.delay);
	}
};
