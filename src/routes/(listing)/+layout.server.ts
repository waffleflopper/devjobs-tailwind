import { getJobs } from '$src/lib/data/api';
import type { Job } from '$src/lib/data/types';

const jobs: Job[] = getJobs();

export const load = async () => {
	return {
		jobs
	};
};
