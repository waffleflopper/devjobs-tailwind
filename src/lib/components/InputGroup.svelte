<script lang="ts">
	import Button from '$components/Button.svelte';
	import Checkbox from './Checkbox.svelte';
	import { innerWidth, tabletBreak } from '$lib/data/stores';
</script>

<div
	class="flex shadow-sm bg-white dark:bg-[--light-midnight] rounded-lg items-center justify-center gap-px p-1 z-10"
>
	<div
		class="flex-1 before:z-10 before:absolute before:bg-[url('$assets/desktop/icon-search.svg')] before:w-6 before:h-6 before:bg-no-repeat before:bg-center before:top-7 before:left-5 relative"
	>
		<input
			type="text"
			placeholder="Filter by title{$innerWidth > $tabletBreak ? ', company, experience...' : '...'}"
			class="min-w-[11.25rem] w-full h-20 pr-1 pl-14 border-solid -mt-px -ml-px mr-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg relative dark:bg-[--light-midnight] focus:outline-none larger"
		/>
	</div>
	<div class="divider" />
	<div
		class="flex-1 before:z-10 before:absolute before:bg-[url('$assets/desktop/icon-location.svg')] before:w-6 before:h-6 before:bg-no-repeat before:bg-center before:top-7 before:left-4 relative"
	>
		<input
			type="text"
			placeholder="Filter by location..."
			class="min-w-[11rem] w-full h-20 pl-14 pr-1 -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg relative dark:bg-[--light-midnight] focus:outline-none"
		/>
	</div>
	<div class="divider" />

	<Checkbox>Full-Time{$innerWidth > $tabletBreak ? ' Only' : ''}</Checkbox>
	<Button theme="primary" variant="button" staticWidth={false} name="searchButton" className="mx-4"
		>Search</Button
	>
</div>

<style lang="postcss">
	.divider {
		@apply w-px h-20 bg-[#6E8098] opacity-20 min-w-[1px];
	}
	.larger {
		flex: 1.3;
	}
</style>
