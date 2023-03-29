<script lang="ts">
	import moon from '$assets/desktop/icon-moon.svg';
	import sun from '$assets/desktop/icon-sun.svg';
	import { onMount } from 'svelte';
	import { SvelteComponentDev } from 'svelte/internal';
	let dark: boolean;
	let hidden: boolean = true;
	let checked = false;

	//get our initial value of dark based on if it's set on the html tag
	onMount(() => {
		dark = document.documentElement.classList.contains('dark');

		hidden = false;

		const themeListener = window.matchMedia('(prefers-color-scheme: dark)');
		themeListener.addEventListener('change', handleThemeChange);

		return () => themeListener.removeEventListener('change', handleThemeChange);
	});

	function handleThemeChange({ matches: dark }: MediaQueryListEvent) {
		if (!localStorage.theme) {
			setMode(dark);
		}
	}

	function setMode(value: boolean) {
		dark = value;
		if (dark) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}

		localStorage.theme = dark ? 'dark' : 'light';

		//since we aren't using drop down selection, if the theme matches the preference on the browser, just remove the store
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			localStorage.removeItem('theme');
		}
	}

	function toggleDarkMode() {
		setMode(!dark);
	}
</script>

<svelte:head>
	<!--good place to pop in this little script to prevent FOUC-->
	<!--good place to pop in this little script to prevent FOUC-->
	<!--good place to pop in this little script to prevent FOUC-->
	<!--good place to pop in this little script to prevent FOUC-->
	<!--good place to pop in this little script to prevent FOUC-->
	<script>
		if (
			localStorage.theme === 'dark' ||
			(!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			//dark is in local storage/preference is dark
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	</script>
</svelte:head>

<input type="checkbox" id="dark-mode" bind:checked on:click={toggleDarkMode} />
