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
	<button class={theme}><slot /></button>
{/if}

<style lang="postcss">
	.primary {
		@apply bg-indigo-800 text-white font-bold p-1;
	}
</style>
