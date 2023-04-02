<script lang="ts">
	export let iconPath: string = '';
	export let placeholder: string = '';
</script>

<div
	class="textInput inline-block {iconPath !== ''
		? `before:z-10 before:absolute before:bg-[url('${iconPath}')] before:w-6 before:h-6 before:bg-no-repeat before:bg-center before:top-7 before:left-4 relative`
		: ''} only-of-type:rounded shadow-sm first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:first:rounded-tr-none sm:last:rounded-bl-none -mt-px -ml-px sm:mt-0 sm:first:ml-0 sm:last:rounded-r-lg bg-white dark:bg-[--light-midnight]"
>
	<input type="text" {placeholder} class=" h-20 pl-14 pr-2 bg-transparent focus:outline-none" />
</div>
