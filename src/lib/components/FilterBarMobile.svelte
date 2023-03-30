<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Button from './Button.svelte';
	import Icon from './Icon.svelte';
	export let placeholder: string = '';
	export let name: string;
	export let value: string = '';

	const dispatch = createEventDispatcher();
	function onFilterClick() {
		dispatch('filterClick', {
			openFilterModal: true
		});
	}
</script>

<div class="relative w-full">
	<input
		{name}
		bind:value
		type="text"
		id={name}
		{placeholder}
		class="w-full h-20 border-none px-6 rounded-md dark:bg-[--light-midnight] bg-white focus:outline-none focus:outline-indigo-800 focus:-outline-offset-1"
	/>
	<Button
		name="search"
		theme="primary"
		variant="icon"
		className="absolute right-6 top-[calc(50%-1.5rem)] primary fill-white"
	>
		<Icon svg="search" className="fill-white" /></Button
	>
	<Button
		name="filter"
		theme="transparent"
		variant="icon"
		className="absolute right-20 top-[calc(50%-1.5rem)] transparent fill-[--gray]"
		on:click={onFilterClick}
	>
		<Icon svg="filter" className="fill-gray-600" />
	</Button>
</div>
