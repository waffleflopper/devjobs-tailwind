<script lang="ts">
	import '$src/app.css';
	import ThemerToggle from '$components/ThemerToggle.svelte';
	import FilterBarMobile from '$components/FilterBarMobile.svelte';
	import InputGroup from '$components/InputGroup.svelte';
	import Header from '$components/Header.svelte';
	import { innerWidth, mobileBreak } from '$lib/data/stores';

	let screenWidth: number = 0;
</script>

<svelte:window bind:innerWidth={$innerWidth} />
<svelte:head>
	<style>
		:root {
			--violet: #5964e0;
			--light-violet: #939bf4;
			--light-midnight: #19202d;
			--midnight: #121721;
			--gray: #9daec2;
			--dark-gray: #6e8098;
		}
	</style>
</svelte:head>
<div
	id="bg"
	class="absolute left-0 top-0 right-0 h-40 -z-10 background bg-left-top bg-[url('$assets/desktop/bg-pattern-header.svg')]"
/>
<Header>
	<div class="flex h-[7.5rem] items-center">
		<img class=" justify-self-start" src="/src/assets/desktop/logo.svg" alt="logo" />
		<div class="flex-1 justify-end flex">
			<ThemerToggle />
		</div>
	</div>
	{#if $innerWidth < $mobileBreak}
		<FilterBarMobile name="textInput" placeholder="Filter by title..." />
	{:else}
		<InputGroup />
	{/if}
</Header>
<div class="w-full max-w-[80%] mx-auto mt-6">
	<slot />
</div>

<style lang="postcss">
	.background {
		background-size: 100% 10rem;
	}
	:global(body) {
		@apply transition-colors;
	}
</style>
