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

interface IViewerData {
	node: HTMLImageElement | null;
	src: string;
	isOpen: boolean;
	pos: IPos;
}

interface IPos {
	width: number | "auto";
	height: number | "auto";
	top: number;
	left: number;
	x: number;
	y: number;
}
interface IViewerStore extends Omit<Writable<IViewerData>, 'set' | 'update'> {
	open: (node: HTMLImageElement, pos: IPos) => void;
	close: () => void;
}

function createViewerStore(): IViewerStore {
	const { subscribe, update } = writable<IViewerData>({
		node: null,
		src: '',
		isOpen: false,
		pos: { width: 0, height: 0, top: 0, left: 0, x: 0, y: 0 }
	});

	return {
		subscribe,
		open: (node, pos) => update((state) => ({ ...state, node, src: node.src, pos, isOpen: true })),
		close: () => update((state) => ({ ...state, isOpen: false }))
	};
}

export const ViewerStore = createViewerStore();
