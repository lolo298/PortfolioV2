declare module 'rollup-plugin-svg';

declare interface ProjectMeta {
	title: string;
	order: number;
	meta: {
		description: string;
		keywords: string[];
	};
	description: string;
	role: string;
	client: string;
	date: string;
	content: string;
	images: { src: string; alt: string; hidden: boolean }[];
}
