<script lang="ts">
	import type { Job } from '$src/lib/data/types';
	import Button from '$components/Button.svelte';
	import { innerWidth, mobileBreak } from '$lib/data/stores';
	import Header from '$lib/components/jobView/Header.svelte';
	import Footer from '$src/lib/components/jobView/Footer.svelte';

	export let data: { job: Job };

	const { job } = data;
	job.displayUrl = job.website.replace(/^https?:\/\//i, '');

	$: mobile = $innerWidth < $mobileBreak;
</script>

<!-- Header -->

<Header data={job} {mobile}>
	<svelte:fragment slot="company">{job.company}</svelte:fragment>
	<svelte:fragment slot="website">{job.displayUrl}</svelte:fragment>
	<svelte:fragment slot="buttonText">Visit Us!</svelte:fragment>
</Header>

<!-- /Header -->

<!-- Listing -->
<div id="body" class="bg-white rounded-md shadow-sm dark:bg-[--light-midnight] p-8 mt-6 mb-44">
	<div class="flex mb-8 items-center" class:flex-col={mobile}>
		<div class="flex-1 w-full flex flex-col gap-2">
			<p>
				<span
					class="pr-8 relative before:absolute before:top-3 before:right-3 before:rounded before:h-1 before:w-1 before:bg-currentColor"
				>
					{job.postedAt}</span
				>

				<span>
					{job.contract}
				</span>
			</p>
			<h3>{job.position}</h3>
			<p class="text-[--violet] font-bold text-sm">{job.location}</p>
		</div>
		<div id="spacer" class="m-6" class:hidden={!mobile} />
		<Button variant="link" className={mobile ? 'w-full' : ''} href={job.apply} theme="primary"
			>Apply Now</Button
		>
	</div>

	<p>{job.description}</p>
	<h3 class="my-8">Requirements</h3>
	<p>{job.requirements.content}</p>
	<ul class="list-disc list-outside my-8 ml-4">
		{#each job.requirements.items as item}
			<li class="my-4 pl-8">{item}</li>
		{/each}
	</ul>
	<h3 class="my-8">What You Will Do</h3>
	<p>{job.role.content}</p>
	<ol class="list-none list-outside my-8 ml-4">
		{#each job.role.items as item, index}
			<li class="my-4 pl-8 marker:text-[--violet] marker:font-bold relative" value={index + 1}>
				{item}
			</li>
		{/each}
	</ol>
</div>
<!-- /Listing -->

<Footer applyLink={job.apply} {mobile}>
	<svelte:fragment slot="position">{job.position}</svelte:fragment>
	<svelte:fragment slot="company">{job.company}</svelte:fragment>
</Footer>

<style lang="postcss">
	li::before {
		content: attr(value) ' ';
		display: inline-block;
		text-align: right;
		white-space: pre;
		@apply absolute -left-4 font-bold text-[--violet];
	}
</style>
