export interface Job {
	id: number;
	company: string;
	logo: string;
	logoBackground: string;
	position: string;
	postedAt: string;
	contract: 'Full Time' | 'Part Time';
	location: string;
	website: string;
	apply: string;
	description: string;
	requirements: {
		content: string;
		items: string[];
	};
	role: {
		content: string;
		items: string[];
	};
}

export interface searchParams {
	location?: string;
	contract?: 'Full Time' | 'Part Time';
	query?: string;
}
