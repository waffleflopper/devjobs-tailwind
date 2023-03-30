<script lang="ts">
	import moon from '$assets/desktop/icon-moon.svg';
	import sun from '$assets/desktop/icon-sun.svg';
	import { onMount } from 'svelte';
	import Toggle from './Toggle.svelte';
	let dark: boolean;
	let hidden: boolean = true;
	//will let us hide the element until everything is mounted and initial theme is selected.

	//mount it baby
	onMount(() => {
		//initial value can be if it's set or not
		dark = document.documentElement.classList.contains('dark');

		hidden = false;

		const themeListener = window.matchMedia('(prefers-color-scheme: dark)');
		themeListener.addEventListener('change', handleChange);

		//remove it when we unmount
		return () => themeListener.removeEventListener('change', handleChange);
	});

	function handleChange({ matches: dark }: MediaQueryListEvent) {
		// only need to set if we don't have the theme being overridee
		if (!localStorage.theme) {
			setMode(dark);
		}
	}

	function setMode(val: boolean) {
		dark = val;

		if (dark) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}

		localStorage.theme = dark ? 'dark' : 'light';

		//use the color preference as kind of a local store, letting a reset to auto happen if prefered theme matches chosen theme
		if (window.matchMedia(`(prefers-color-scheme: ${localStorage.theme})`).matches) {
			localStorage.removeItem('theme');
		}
	}

	function toggleDark() {
		setMode(!dark);
	}
</script>

<svelte:head>
	<script>
		if (
			localStorage.theme === 'dark' ||
			(!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			//dark set in local storage or not set but prefers dark is one
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	</script>
</svelte:head>

<Toggle name="darkmode-switch" checked={dark} on:click={toggleDark} />
