<script lang="ts">
	import '$src/app.css';
	import { innerWidth, mobileBreak, tabletBreak } from '$lib/data/stores';
</script>

<svelte:window bind:innerWidth={$innerWidth} />
<svelte:head>
	<style>
		:root {
			--violet: #5964e0;
			--light-violet: #939bf4;
			--light-midnight: #19202d;
			--midnight: #121721;
			--gray: #9daec2;
			--dark-gray: #6e8098;
		}
		body {
			min-width: 375px;
		}
	</style>
</svelte:head>
<slot />
