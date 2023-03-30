<script lang="ts">
	export let placeholder: string = '';
	export let className: string = '';
	export let name: string;
	export let value: string = '';
	export let icon: string = '';
	export let inGroup: boolean = false;
	let hasIcon = icon !== '';
</script>

<input {name} bind:value type="text" id={name} {placeholder} class={className} />

<style lang="postcss">
	input[type='text'] {
		@apply relative w-80 h-20 border-none py-7 px-8;
	}
</style>
