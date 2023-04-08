import { getJobById } from '$src/lib/data/api';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	const { id } = params;

	return {
		job: getJobById(+id)
	};
}) satisfies PageServerLoad;
