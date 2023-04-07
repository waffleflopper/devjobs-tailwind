import type { LayoutServerLoad } from './$types';
import jobs from '$lib/data/data.json';

export const load = (async () => {
	return {
		jobs
	};
}) satisfies LayoutServerLoad;
