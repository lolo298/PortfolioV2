import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	type ProjectList = {
		url: string;
	} & Omit<ProjectMeta, 'content'>;

	const metadatas: ProjectList[] = [];

	const paths = import.meta.glob('/src/routes/projets/md/*.md', {eager: true});
	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '')

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const meta = file.metadata as Omit<ProjectMeta, 'content'>;
			metadatas.push({
				...meta,
				url: `/projets/${slug}#page`
			});
		}
	}

	return {
		projects: metadatas.sort((a,b) => a.order >= b.order ? 1 : -1)
	};
};
