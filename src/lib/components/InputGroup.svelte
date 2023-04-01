<script lang="ts">
	import Button from '$components/Button.svelte';
	import Checkbox from './Checkbox.svelte';
</script>

<div
	class="flex shadow-sm bg-white dark:bg-[--light-midnight] rounded-lg items-center justify-center gap-px"
>
	<input
		type="text"
		placeholder="Filter by title, company, experience..."
		class="min-w-[11.25rem] h-20 px-7 border-solid shadow-sm -mt-px -ml-px mr-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg relative dark:bg-[--light-midnight] focus:outline-none larger"
	/>
	<div class="divider" />
	<input
		type="text"
		placeholder="Filter by location..."
		class="min-w-[11rem] h-20 px-7 flex-1 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg relative dark:bg-[--light-midnight] focus:outline-none"
	/>
	<div class="divider" />

	<Checkbox />
	<Button theme="primary" variant="button" name="searchButton" className="mx-4">Search</Button>
</div>

<style lang="postcss">
	.divider {
		@apply w-px h-20 bg-[#6E8098] opacity-20 min-w-[1px];
	}
	.larger {
		flex: 1.3;
	}
</style>
