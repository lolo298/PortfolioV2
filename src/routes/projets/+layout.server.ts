import type { LayoutServerLoad } from './$types';
import projects from '$assets/projects.json';

export const load: LayoutServerLoad = async () => {
	type ProjectList = {
		url: string;
	} & ProjectMeta;

	const metadatas: ProjectList[] = [];

	for (const project of projects) {
		metadatas.push({
			...project,
			url: `/projets/${project.title.replace(/ /g, '-')}`
		});
	}

	return {
		projects: metadatas
	};
};
