<script lang="ts">
	import JobGrid from '$components/JobGrid.svelte';
	import JobCard from '$components/JobCard.svelte';
	import { devJobs } from '$lib/data/stores';
</script>

<JobGrid>
	{#each $devJobs as job}
		<JobCard logo={job.logo} color={job.logoBackground} id={job.id}>
			<svelte:fragment slot="postedAt">{job.postedAt}</svelte:fragment>
			<svelte:fragment slot="contract">{job.contract}</svelte:fragment>
			<svelte:fragment slot="position">{job.position}</svelte:fragment>
			<svelte:fragment slot="company">{job.company}</svelte:fragment>
			<svelte:fragment slot="location">{job.location}</svelte:fragment>
		</JobCard>
	{/each}
</JobGrid>
