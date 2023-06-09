<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Button from './Button.svelte';
	import Icon from './Icon.svelte';
	import Modal from './Modal.svelte';
	import Checkbox from './Checkbox.svelte';
	import type { searchParams } from '../data/types';
	export let placeholder: string = '';
	export let name: string;

	// !search params
	let queryValue: string = '';
	let locationValue: string = '';
	let fullTimeOnly: boolean = false;

	const dispatch = createEventDispatcher<{ message: { params: searchParams } }>();

	function onSearchClick() {
		let params: searchParams = {};
		if (queryValue) params.query = queryValue;
		if (locationValue) params.location = locationValue;
		if (fullTimeOnly) params.contract = 'Full Time';

		dispatch('message', {
			params: params
		});

		fullTimeOnly = false;
		queryValue = '';
		locationValue = '';
	}
</script>

<div class="relative w-full">
	<input
		{name}
		bind:value={queryValue}
		type="text"
		id={name}
		{placeholder}
		class="w-full h-20 border-none px-6 rounded-md dark:bg-[--light-midnight] bg-white focus:outline-none shadow-sm"
	/>
	<Button
		name="search"
		theme="primary"
		variant="icon"
		className="absolute right-6 top-[calc(50%-1.5rem)] primary fill-white"
		on:click={onSearchClick}
	>
		<Icon svg="search" className="fill-white" /></Button
	>
	<Modal>
		<div slot="trigger" let:open>
			<Button
				name="filter"
				theme="transparent"
				variant="icon"
				className="absolute right-20 top-[calc(50%-1.5rem)] transparent fill-[--gray]"
				on:click={open}
			>
				<Icon svg="filter" className="fill-gray-600" />
			</Button>
		</div>
		<div
			slot="header"
			class="relative flex before:z-10 before:absolute before:bg-[url('$assets/desktop/icon-location.svg')] before:w-6 before:h-6 before:bg-no-repeat before:bg-center before:top-7 before:left-6"
		>
			<input
				type="text"
				placeholder="Filter by location..."
				class="flex-1 h-[4.5rem] pl-16 border-b dark:border-b-gray-500/20 bg-white dark:bg-[--light-midnight] focus:outline-none"
				bind:value={locationValue}
			/>
		</div>
		<div slot="body" class="px-2 my-6">
			<Checkbox bind:checked={fullTimeOnly}>Full Time Only</Checkbox>
		</div>
		<div slot="footer" let:modalState={{ close }} class="flex px-6">
			<Button on:click={close} className="flex-1 mb-4">Close</Button>
		</div>
	</Modal>
</div>
