declare module 'rollup-plugin-svg';

declare interface ProjectMeta {
	title: string;
	description: string;
	role: string;
	client: string;
	date: string;
	content: string;
	images: { src: string; alt: string }[];
}
