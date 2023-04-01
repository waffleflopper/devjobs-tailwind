<!-- should probably always be in a container -->
<script lang="ts">
	import type { IconTypes } from '$assets/icons';
	import { onMount } from 'svelte';
	import { svgs } from '$assets/icons';
	export let className = '';

	export let svg: IconTypes = 'search';

	onMount(() => {
		if (!svgs[svg]) {
			throw new Error(`Icon ${svg} not found`);
		}
	});
</script>

<div class="icon {className} w-full h-full flex items-center justify-center">
	{@html svgs[svg]}
</div>
