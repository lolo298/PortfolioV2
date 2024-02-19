import { writable, type Writable } from 'svelte/store';

export enum Status {
	OPENED = 'opened',
	OPENING = 'opening',
	CLOSING = 'closing',
	CLOSED = 'closed'
}

interface ILoadingStore extends Omit<Writable<Status>, 'set' | 'update'> {
	delay: number;
	open: () => void;
	close: () => void;
}

function createLoading(): ILoadingStore {
	const { subscribe, set } = writable<Status>(Status.CLOSED);

	return {
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
}

export const LoadingStore = createLoading();

interface IMenuStore extends Omit<Writable<boolean>, 'set' | 'update'> {
	toggle: () => void;
	open: () => void;
	close: () => void;
}

function createHamburgerMenu(): IMenuStore {
	const { subscribe, update, set } = writable<boolean>(false);

	return {
		subscribe,
		toggle: () => update((state) => !state),
		open: () => set(true),
		close: () => set(false)
	};
}

export const HamburgerMenuStore = createHamburgerMenu();
