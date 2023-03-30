<script lang="ts">
	/*
        indigo 800/700? 8.75/3rem, white text, primary
        secondary: 300(400?)/200, 800 text, secondary
        secondary-dark: white text, 500/400

    */
	export let theme: 'primary' | 'secondary' | 'icon-transparent' | 'icon' = 'primary';
	export let variant: 'button' | 'link' = 'button';
</script>

{#if variant !== 'link'}
	<button class="btn {theme}"><slot /></button>
{/if}

<style lang="postcss">
	.btn {
		@apply w-32 h-12 rounded text-white bg-gray-700 hover:bg-gray-600 font-bold active:bg-gray-700;
	}
	.primary {
		@apply bg-[#5964E0] text-white font-bold p-1 hover:bg-[#939BF4] active:bg-[#5964E0];
	}
	.secondary {
		@apply bg-indigo-200 text-indigo-800 hover:bg-indigo-300 active:bg-indigo-200 dark:bg-[#6E8098] dark:hover:bg-[#9DAEC2] dark:text-white m-2 dark:active:bg-[#6e8098];
	}
</style>
