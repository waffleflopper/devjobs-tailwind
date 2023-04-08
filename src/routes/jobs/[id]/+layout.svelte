<script lang="ts">
	import ThemerToggle from '$components/ThemerToggle.svelte';
	import Header from '$components/Header.svelte';
	import { innerWidth, mobileBreak, tabletBreak } from '$lib/data/stores';

	$: headerPath =
		$innerWidth < $mobileBreak ? 'mobile' : $innerWidth < $tabletBreak ? 'tablet' : 'desktop';
</script>

<div
	id="bg"
	class="absolute top-0 left-0 right-0 w-full h-60 bg-no-repeat bg-left-top -z-10 bg-color[--light-gray] background bg-[url('$assets/mobile/bg-pattern-header.svg')]"
	class:mobileBg={headerPath === 'mobile'}
	class:desktopBg={headerPath === 'desktop' || headerPath === 'tablet'}
/>
<Header>
	<div class="flex h-[7.5rem] items-center">
		<a href="/" aria-label="Home Link" class="hover:bg-transparent"
			><img class=" justify-self-start" src="/src/assets/desktop/logo.svg" alt="logo" /></a
		>
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
