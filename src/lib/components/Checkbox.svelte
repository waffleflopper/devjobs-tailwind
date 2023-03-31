<script lang="ts">
	import { Style } from '../utils/tailwind';
	import { svgs } from '$assets/icons';
	export let checked: boolean = false;
	export let className: string = '';

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

	console.log(styles.input);
</script>

<div class=" {styles.container}">
	<label for="fullTime" class="{styles.label} "> Full-Time Only </label>
</div>
