<script lang="ts">
	import jobs from '$lib/data/data.json';
	import JobGrid from '$components/JobGrid.svelte';
	import JobCard from '$components/JobCard.svelte';

	import * as api from '$lib/data/api';

	console.log(api.getJobsByAny('senior'));
</script>

<JobGrid>
	{#each jobs as job}
		<JobCard logo={job.logo} color={job.logoBackground}>
			<svelte:fragment slot="postedAt">{job.postedAt}</svelte:fragment>
			<svelte:fragment slot="contract">{job.contract}</svelte:fragment>
			<svelte:fragment slot="position">{job.position}</svelte:fragment>
			<svelte:fragment slot="company">{job.company}</svelte:fragment>
			<svelte:fragment slot="location">{job.location}</svelte:fragment>
		</JobCard>
	{/each}
</JobGrid>
