<script lang="ts">
	export let checked: boolean = false;
</script>

<div class="mx-4 flex justify-start itmes-center gap-4 min-w-[6.5rem]">
	<input
		id="test"
		type="checkbox"
		class="relative appearance-none bg-gray-200 border-gray-300 min-w-[1.5rem] min-h-[1.5rem] cursor-pointer rounded before:scale-0 before:origin-center before:transition-transform before:-left-px before:top-0 before:absolute before:bg-cover before:h-6 before:w-6 checked:bg-[--violet] checked:before:scale-[0.8] checked:before:bg-[url('$assets/desktop/icon-check.svg')] focus:ring-indigo-800 focus:ring-1 dark:bg-gray-800 dark:checked:bg-[--violet]"
		bind:checked
	/>
	<label class="text-sm font-bold text-black cursor-pointer dark:text-white" for="fullTime"
		><slot>Label</slot></label
	>
</div>
