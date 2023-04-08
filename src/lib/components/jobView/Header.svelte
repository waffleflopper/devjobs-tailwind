<script lang="ts">
	import Button from '$components/Button.svelte';
	export let mobile: boolean;

	export let data;

	const { logoBackground, logo, company, website, displayUrl } = data;
</script>

{#if mobile}
	<div
		id="header"
		class="relative bg-white rounded-md shadow-sm dark:bg-[--light-midnight] pt-12 p-8 flex flex-col mt-8 items-center"
	>
		<div
			id="logo "
			style="background-color: {logoBackground}; left: calc(50% - 25px);"
			class="h-[50px] w-[50px] flex items-center justify-center rounded-2xl absolute -top-[25px]"
		>
			<img src="/{logo}" alt="company logo" />
		</div>
		<h2><slot name="company">Company</slot></h2>
		<p class="mt-2 mb-4">
			<a class="link" href={website}><slot name="website">displayUrl.com</slot></a>
		</p>
		<Button variant="link" href={website} theme="secondary"
			><slot name="buttonText">Company Site</slot></Button
		>
	</div>
{:else}
	<div
		id="header"
		class="bg-white dark:bg-[--light-midnight] rounded-md shadow-sm rounded-tl-none flex"
	>
		<div
			id="logo"
			class="w-[140px] h-[140px] grid place-items-center"
			style="background-color: {logoBackground};"
		>
			<img src="/{logo}" alt="company logo" class="w-7/12" />
		</div>
		<div class="flex-1 flex items-center justify-between px-8">
			<div class="flex flex-col">
				<h3><slot name="company">Company</slot></h3>
				<p class="mt-2 mb-4">
					<a class="link" href={website}><slot name="website">displayUrl.com</slot></a>
				</p>
			</div>
			<div class="flex flex-1 items-center justify-end">
				<Button variant="link" href={website} theme="secondary"
					><slot name="buttonText">Company Site</slot></Button
				>
			</div>
		</div>
	</div>
{/if}

<style lang="postcss">
	.link {
		@apply font-normal text-[#6E8098];
	}
</style>
