<script lang="ts">
	export let theme: 'primary' | 'secondary' | 'transparent' = 'primary';
	export let variant: 'button' | 'link' | 'icon' = 'button';
	export let className: string = '';
	export let name: string = '';
	export let staticWidth: boolean = true;
	import { innerWidth, tabletBreak } from '$lib/data/stores';
</script>

{#if variant !== 'link'}
	<button
		{name}
		id={name}
		class="w-32 h-12 rounded {className}"
		class:primary={theme === 'primary'}
		class:secondary={theme === 'secondary'}
		class:transparent={theme === 'transparent'}
		class:tablet={$innerWidth < $tabletBreak && !staticWidth}
		class:icon={variant === 'icon'}
	>
		<slot /></button
	>
{/if}

<style lang="postcss">
	.primary {
		@apply bg-[#5964E0] text-white font-bold p-1 hover:bg-[#939BF4] active:bg-[#5964E0];
	}
	.secondary {
		@apply bg-indigo-200 text-indigo-800 font-bold hover:bg-indigo-300 active:bg-indigo-200 dark:bg-[#6E8098] dark:hover:bg-[#9DAEC2] dark:text-white m-2 dark:active:bg-[#6e8098];
	}
	.transparent {
		@apply bg-transparent dark:hover:bg-white/5 hover:bg-black/5;
	}
	.icon {
		@apply w-12 h-12 rounded flex items-center justify-center;
	}
	.tablet {
		@apply w-24;
	}
</style>
