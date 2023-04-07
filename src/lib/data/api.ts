import raw from '$lib/data/data.json';
import type { Job } from './types';

const data: Job[] = raw as Job[];
//why did i use toUpperCase()? Because I'm being lazy, that's why.
export const getJob = (id: number) => {
	return data.find((job) => job.id === id);
};

export const getJobs = () => {
	return data;
};

export const getJobsByLocation = (location: string) => {
	location = location.toUpperCase();
	return data.filter((job) => job.location.toUpperCase().includes(location));
};

export const getJobsByPosition = (position: string) => {
	position = position.toUpperCase();
	return data.filter((job) => job.position.toUpperCase().includes(position));
};

export const getJobsByAny = (any: string) => {
	//loop through all the jobs and each job object and check if object values includes any string
	any = any.toUpperCase();
	return data.filter((job) => {
		for (const [key, value] of Object.entries(job)) {
			if (typeof value === 'string' && value.toUpperCase().includes(any)) {
				return job;
			}
		}
	});
};

export const getJobsByContract = (contract: string) => {
	contract = contract.toUpperCase();
	if (contract === 'Full Time' || contract === 'Part Time') {
		return data.filter((job) => job.contract.toUpperCase().includes(contract));
	}
};
