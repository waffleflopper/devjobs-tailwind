<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let options = ['test1', 'test2', 'test3', 'test4']; // array of strings to populate the dropdown options
	let selectedOption = ''; // currently selected option
	let filteredOptions = options; // options filtered by search input
	let showDropdownMenu = false;

	function handleSearch(event: any) {
		const searchInput = event.target.value.toLowerCase();

		if (searchInput.length === 0) {
			filteredOptions = options;
		} else {
			filteredOptions = options.filter((option) => option.toLowerCase().includes(searchInput));
		}
	}

	function keydown(e: KeyboardEvent) {
		e.stopPropagation();
		if (e.key === 'Escape') {
			showDropdownMenu = false;
		}
	}

	function a11yAction(node: HTMLElement) {
		node.addEventListener('keydown', keydown);

		return {
			destroy: () => node.removeEventListener('keydown', keydown)
		};
	}

	function handleSelectOption(option: string) {
		selectedOption = option;
		dispatch('selectedOption', selectedOption);
		showDropdownMenu = false;
	}
</script>

{#if showDropdownMenu}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="z-[9998] fixed top-0 left-0 w-full h-full"
		on:click={() => (showDropdownMenu = false)}
	/>
{/if}
<div class="relative z-[9999]" use:a11yAction>
	<input
		class="min-w-[11rem] w-full h-20 pl-14 pr-1 -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg relative focus:outline-none bg-transparent"
		tabindex="0"
		type="text"
		placeholder="Search options..."
		bind:value={selectedOption}
		on:input={handleSearch}
		on:focus={() => (showDropdownMenu = true)}
	/>

	{#if filteredOptions.length > 0 && showDropdownMenu}
		<div
			class="absolute z-10 w-full mt-2 overflow-auto bg-white dark:bg-[--light-midnight] rounded-md shadow-2xl max-h-60"
		>
			{#each filteredOptions as option, index}
				<div
					class="block px-4 py-2 cursor-pointer hover:bg-[--violet] hover:text-white focus:bg-[--violet] focus:text-white"
					on:click={() => handleSelectOption(option)}
					on:keydown={() => handleSelectOption(option)}
				>
					{option}
				</div>
			{/each}
		</div>
	{/if}
</div>
