<script lang="ts">
	import '$src/app.css';
	import ThemerToggle from '$components/ThemerToggle.svelte';
	import Header from '$components/Header.svelte';
	import { innerWidth, mobileBreak, tabletBreak, devJobs } from '$lib/data/stores';

	$: headerPath =
		$innerWidth < $mobileBreak ? 'mobile' : $innerWidth < $tabletBreak ? 'tablet' : 'desktop';
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
		body {
			min-width: 375px;
		}
	</style>
</svelte:head>
<div
	id="bg"
	class="absolute top-0 left-0 right-0 w-full h-60 bg-no-repeat bg-left-top -z-10 bg-color[--light-gray] background bg-[url('$assets/mobile/bg-pattern-header.svg')]"
	class:mobileBg={headerPath === 'mobile'}
	class:desktopBg={headerPath === 'desktop' || headerPath === 'tablet'}
/>
<Header>
	<div class="flex h-[7.5rem] items-center">
		<img class=" justify-self-start" src="/src/assets/desktop/logo.svg" alt="logo" />
		<div class="flex justify-end flex-1">
			<ThemerToggle />
		</div>
	</div>
</Header>
<div class="w-full max-w-[80%] mx-auto my-6">
	<slot />
</div>

<style lang="postcss">
	.background {
		background-size: 100% 10rem;
	}
	:global(body) {
		@apply transition-colors;
	}
	.mobileBg {
		@apply bg-[url('$assets/mobile/bg-pattern-header.svg')];
	}
	.desktopBg {
		@apply bg-[url('$assets/desktop/bg-pattern-header.svg')];
	}
</style>
