<script context="module" lang="ts">
	const modalList: HTMLElement[] = [];
	import { fly, fade } from 'svelte/transition';
</script>

<script lang="ts">
	import Button from '$components/Button.svelte';
	import { modalStore } from '$lib/data/stores';

	const modalState = modalStore(false);
	const { isOpen, open, close } = modalState;

	function keydown(e: KeyboardEvent) {
		e.stopPropagation();
		if (e.key === 'Escape') {
			close();
		}
	}

	function transitionend(e: TransitionEvent) {
		const node = e.target as HTMLElement;
		node.focus();
	}

	function modalAction(node: HTMLElement) {
		const returnFn: any[] = [];
		if (document.body.style.overflow !== 'hidden') {
			const original = document.body.style.overflow;
			document.body.style.overflow = 'hidden';
			returnFn.push(() => {
				document.body.style.overflow = original;
			});
		}
		node.addEventListener('keydown', keydown);
		node.addEventListener('transitionend', transitionend);
		node.focus();
		modalList.push(node);
		returnFn.push(() => {
			node.removeEventListener('keydown', keydown);
			node.removeEventListener('transitionend', transitionend);
			modalList.pop();

			modalList[modalList.length - 1]?.focus();
		});
		return {
			destroy: () => returnFn.forEach((fn) => fn())
		};
	}
</script>

<slot name="trigger" {open}>
	<!-- fallback -->
	<Button variant="button" theme="primary" on:click={open}>Open Modal</Button>
</slot>

{#if $isOpen}
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<div
		id="modal"
		use:modalAction
		tabindex="0"
		class="fixed top-0 left-0 flex z-20 items-center justify-center w-full h-[100dvh]"
		transition:fade={{ duration: 100 }}
	>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div id="modal-blackout" class="absolute w-full h-full bg-black/40" on:click={close} />
		<div
			transition:fly={{ y: 200, duration: 150 }}
			id="modal-content"
			class="z-10 max-w-[90%] min-w-[85%] rounded bg-white dark:bg-[--light-midnight] overflow-hidden"
		>
			<slot name="header" {modalState}>
				<!-- fallback -->
				<div id="modal-header" class="mb-4">
					<h1>Modal Heading</h1>
				</div>
			</slot>

			<div id="modal-body" class="max-h-[50dvh] overflow-auto">
				<slot name="body" {modalState}>
					<!-- fallback -->
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
						dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
						mollit anim id est laborum.
					</p>
				</slot>
			</div>

			<slot name="footer" {modalState}>
				<!-- fallback -->
				<div id="modal-footer" class="flex justify-end mt-4">
					<Button variant="button" theme="primary" on:click={close}>Close</Button>
				</div>
			</slot>
		</div>
	</div>
{/if}

<style lang="postcss">
	/* lets us know when focus leaves the modal */
	#modal:not(:focus-within) {
		transition: opacity 0.1ms;
		opacity: 0.99;
	}
</style>
