<script lang="ts">
	export let logo: string;
	export let color: string;
</script>

<div
	class="relative h-[14.25rem] bg-white rounded-md shadow-sm dark:bg-[--light-midnight] pt-12 p-8 flex flex-col mt-8"
>
	<div
		class="h-[50px] w-[50px] grid place-items-center rounded-2xl absolute -top-[25px] left-8"
		style="background-color: {color}"
	>
		<img src={logo} alt="scoot logo" />
	</div>
	<div>
		<span
			class="pr-8 relative before:absolute before:top-3 before:right-3 before:rounded before:h-1 before:w-1 before:bg-currentColor"
		>
			<slot name="postedAt" /></span
		>

		<span>
			<slot name="contract" />
		</span>
	</div>
	<div class="flex-1">
		<h3 class="my-2">
			<slot name="position" />
		</h3>
		<span>
			<slot name="company" />
		</span>
	</div>
	<div>
		<span class="text-[--violet] font-bold text-sm">
			<slot name="location" />
		</span>
	</div>
</div>
