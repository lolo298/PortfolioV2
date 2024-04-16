declare module 'rollup-plugin-svg';

declare interface ProjectMeta {
	title: string;
	description: string | null;
	roles: string[];
	client: string;
	date: string;
	content: string | null;
	images: { src: string; alt: string }[];
}
