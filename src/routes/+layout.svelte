<script lang="ts">
	import '$src/app.css';
	import ThemerToggle from '$components/ThemerToggle.svelte';
	import FilterBarMobile from '$components/FilterBarMobile.svelte';

	let screenWidth: number = 0;
	let sm: number = 640;
</script>

<svelte:window bind:innerWidth={screenWidth} />
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
<div class="w-full max-w-[80%] md:max-w-[70%] mx-auto mt-6">
	<ThemerToggle />
	{#if screenWidth < sm}
		<FilterBarMobile name="textInput" placeholder="Filter by title..." />
	{/if}
	<slot />
</div>
