<script lang="ts">
	export let theme: 'primary' | 'secondary' | 'transparent' = 'primary';
	export let variant: 'button' | 'link' | 'icon' = 'button';
	export let className: string = '';
	export let name: string = '';
	let styles = {
		button: 'w-32 h-12 rounded',
		link: '',
		primary: 'bg-[#5964E0] text-white font-bold p-1 hover:bg-[#939BF4] active:bg=[#5964E0]',
		secondary:
			'bg-indigo-200 text-indigo-800 hover:bg-indigo-300 active:bg-indigo-200 dark:bg-[#6E8098] dark:hover:bg-[#9DAEC2] dark:text-white m-2 dark:active:bg-[#6e8098]',
		icon: 'w-12 h-12 rounded flex items-center justify-center',
		transparent: 'bg-transparent dark:hover:bg-white/5 hover:bg-black/5'
	};
	let classes = `${styles[variant]} ${styles[theme]} ${className}`;
</script>

{#if variant !== 'link'}
	<button {name} id={name} class={classes}><slot /></button>
{/if}
