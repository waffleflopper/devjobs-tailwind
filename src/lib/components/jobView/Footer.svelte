<script lang="ts">
	import Button from '$components/Button.svelte';
	export let mobile: boolean;
	export let applyLink: string;
</script>

<div
	class="bg-white dark:bg-[--light-midnight] rounded-md mt-16 p-6 fixed bottom-0 left-0 right-0 shadow-inner flex items-center"
>
	{#if mobile}
		<Button variant="link" className="sm:w-full" href={applyLink} theme="primary">Apply now</Button>
	{:else}
		<div class="flex-1">
			<h3><slot name="position">Position</slot></h3>
			<p><slot name="company">Company Name</slot></p>
		</div>
		<div class="self-end">
			<Button variant="link" href={applyLink} theme="primary">Apply now</Button>
		</div>
	{/if}
</div>
