<script lang="ts">
	import { Style } from '../utils/tailwind';
	import { svgs } from '$assets/icons';
	import { innerWidth, tabletBreak } from '$lib/data/stores';
	export let checked: boolean = false;

	let styles = {
		container: new Style('relative m-0 max-w-fit flex'),
		label: new Style('cursor-pointer font-bold dark:text-white text-black'),
		checkbox: new Style(''),
		input: new Style({
			base: 'peer appearance-none h-6 w-6 bg-slate-400 m-0 rounded-sm cursor-pointer',
			focus: 'outline outline-indigo-800 outline-offset-1',
			checked: 'bg-indigo-800'
		})
	};
</script>

<!-- <div class=" {styles.container}">
	<label for="fullTime" class="{styles.label} "> Full-Time Only </label>
</div> -->

<div class="relative mx-4 flex justify-start items-center gap-4 min-w-[6.5rem]">
	<input
		type="checkbox"
		class="relative appearance-none bg-[--gray] checked:bg-[--violet] border-gray-300 focus:ring-1 focus:ring-indigo-800 min-w-[1.5rem] min-h-[1.5rem] rounded before:w-6 before:h-6 checked:before:bg-[url('/src/assets/desktop/icon-check.svg')] before:bg-cover before:absolute before:top-0 before:-left-px before:transition-transform before:origin-center before:scale-0 checked:before:scale-[0.8] cursor-pointer"
		id="fullTime"
		aria-describedby="fullTime"
		bind:checked
	/>
	<label class=" dark:text-white text-black text-sm font-bold cursor-pointer" for="fullTime"
		>Full-Time {$innerWidth > $tabletBreak ? ' Only' : ''}</label
	>
</div>
