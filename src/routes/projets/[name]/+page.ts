import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ params: { name }, parent }) => {
	const data = await parent();
	const project = data.projects.find((project) => project.title.replace(/ /g, '') === name);

	if (!project) {
		error(404, 'Project not found');
	}

	return {project: {
			...project,
			content: (await import(`../md/${project.title.replace(/ /g, '')}.md`)).default
		}
	};
}) satisfies PageLoad;
