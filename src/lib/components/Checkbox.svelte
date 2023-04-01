<script lang="ts">
	import { Style } from '../utils/tailwind';
	import checkIcon from '$assets/desktop/icon-check.svg';
	import { innerWidth, tabletBreak } from '$lib/data/stores';
	export let checked: boolean = false;

	let styles = {
		container: new Style({
			base: 'mx-4 flex justify-start items-center gap-4 min-w-[6.5rem]'
		}),
		checkbox: new Style({
			base: 'relative appearance-none bg-gray-200 border-gray-300 min-w-[1.5rem] min-h-[1.5rem] cursor-pointer rounded',
			before: 'scale-0 origin-center transition-transform -left-px top-0 absolute bg-cover h-6 w-6',
			checked: `bg-[--violet] before:scale-[0.8] before:bg-[url('${checkIcon}')]`,
			focus: 'ring-indigo-800 ring-1',
			dark: 'bg-gray-800',
			'dark:checked': 'bg-[--violet]'
		}),
		label: new Style({
			base: 'text-black text-sm font-bold cusor-pointer',
			dark: 'text-white'
		})
	};
</script>

<!-- <div class=" {styles.container}">
	<label for="fullTime" class="{styles.label} "> Full-Time Only </label>
</div> -->

<div class=" {styles.container}">
	<input
		type="checkbox"
		class=" {styles.checkbox}"
		id="fullTime"
		aria-describedby="fullTime"
		bind:checked
	/>
	<label class=" {styles.label}" for="fullTime"
		>Full-Time {$innerWidth > $tabletBreak ? ' Only' : ''}</label
	>
</div>
