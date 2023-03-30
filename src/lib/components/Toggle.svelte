<script lang="ts">
	export let label = '';
	export let name: string;
	export let checked: boolean = false;
</script>

{#if label}
	<label for={name} class="hover:cursor-pointer">
		<input
			type="checkbox"
			{name}
			bind:checked
			id={name}
			on:click
			on:mousedown
			on:mouseenter
			on:mouseleave
			class="toggle hover:cursor-pointer"
		/>
		{label}
	</label>
{:else}
	<input
		type="checkbox"
		{name}
		bind:checked
		id={name}
		on:click
		on:mousedown
		on:mouseenter
		on:mouseleave
		class="toggle"
	/>
{/if}

<style lang="postcss">
	.toggle {
		box-shadow: inset 0 0 0.1rem hsla(0, 0%, 0%, 0.5);
		@apply relative h-6 w-12 rounded-full bg-white appearance-none cursor-pointer outline-none;
	}
	.toggle::before {
		content: '';
		@apply w-[1.15rem] h-[1.15rem] rounded-full bg-indigo-800 absolute top-[0.2rem] left-[0.2rem] duration-150 ease-out transition-transform;
	}
	.toggle:checked::before {
		@apply translate-x-[130%];
	}
	.toggle:hover::before {
		@apply bg-indigo-700;
	}
	.toggle:focus-visible {
		@apply outline-none outline-indigo-800 outline-offset-[-1px];
	}
</style>
