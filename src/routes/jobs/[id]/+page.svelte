<script lang="ts">
	import type { Job } from '$src/lib/data/types';
	import Button from '$components/Button.svelte';
	export let data: { job: Job };

	const { job } = data;
	const displayUrl = job.website.replace(/^https?:\/\//i, '');
</script>

<!-- Header -->

<div
	id="header"
	class="relative bg-white rounded-md shadow-sm dark:bg-[--light-midnight] pt-12 p-8 flex flex-col mt-8 items-center"
>
	<div
		id="logo "
		style="background-color: {job.logoBackground}; left: calc(50% - 25px);"
		class="h-[50px] w-[50px] flex items-center justify-center rounded-2xl absolute -top-[25px]"
	>
		<img src="/{job.logo}" alt="company logo" />
	</div>
	<h2>{job.company}</h2>
	<p class="mt-2 mb-4"><a class="link" href={job.website}>{displayUrl}</a></p>
	<Button variant="link" href={job.website} theme="secondary">Company Site</Button>
</div>

<!-- /Header -->

<!-- Listing -->
<div id="body" class="bg-white rounded-md shadow-sm dark:bg-[--light-midnight] pt-6 p-6 mt-6 mb-44">
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
	<div id="spacer" class="m-12" />
	<Button variant="link" className="w-full mb-6" href={job.apply} theme="primary">Apply Now</Button>

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

<div class="bg-white dark:bg-[--light-midnight] rounded-md mt-16 p-6 fixed bottom-0 left-0 right-0">
	<Button variant="link" className="w-full mb-6" href={job.apply} theme="primary">Apply now</Button>
</div>

<style lang="postcss">
	.link {
		@apply font-normal text-[#6E8098];
	}
	li::before {
		content: attr(value) ' ';
		display: inline-block;
		text-align: right;
		white-space: pre;
		@apply absolute -left-4 font-bold text-[--violet];
	}
</style>
