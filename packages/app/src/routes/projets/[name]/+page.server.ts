import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ params: { name }, parent }) => {
	const data = await parent();
	const project = data.projects.find((project) => project.title.replace(/ /g, '-') === name);

	if (!project) {
		error(404, 'Project not found');
	}

	return {
		project
	};
}) satisfies PageServerLoad;
