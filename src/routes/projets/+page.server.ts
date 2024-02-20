import type { PageServerLoad } from './$types';
import { readdir } from 'fs/promises';
import { dirname, join } from 'path';

const relativePath = './(pages)';
const absolutePath = dirname(new URL(import.meta.url).pathname);
const fullPath = join(absolutePath, relativePath);

export const load = (async () => {
	const folders = await readdir(fullPath, { withFileTypes: true });

	type ProjectList = {
		url: string;
	} & Omit<ProjectMeta, 'content'>;

	const metadatas: ProjectList[] = [];

	for (const folder of folders) {
		if (folder.isDirectory()) {
			import(join(fullPath, folder.name, '+page.svelte')).then((res) => {
				if (res.metadata) {
					// eslint-disable-next-line @typescript-eslint/no-unused-vars
					const { content, ...meta } = res.metadata as ProjectMeta;
					const url = `/projets/${folder.name}`;
					metadatas.push({ url, ...meta });
				}
			});
		}
	}

	return {
		projects: metadatas
	};
}) satisfies PageServerLoad;
