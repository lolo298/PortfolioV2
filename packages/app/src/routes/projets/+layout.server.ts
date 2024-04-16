import type { LayoutServerLoad } from './$types';
import { supabase } from '$lib/supabase';
import { error } from '@sveltejs/kit';

export const load: LayoutServerLoad = async () => {
	const { data, error: err } = await supabase.from('projects').select('*, images(*)');
	if (err) {
		error(500, err.message);
	}

	type ProjectList = {
		url: string;
	} & (typeof data)[number];

	const projects: ProjectList[] = data.map((project) => {
		return {
			...project,
			url: `/projets/${project.title.replace(/ /g, '-')}`
		};
	});

	return {
		projects
	};
};
