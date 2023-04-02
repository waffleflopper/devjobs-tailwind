import { writable } from 'svelte/store';

export const innerWidth = writable(0);
export const mobileBreak = writable(730);
export const tabletBreak = writable(1050);

export function modalStore(initial: boolean) {
	const isOpen = writable<boolean>(initial);
	const { set, update } = isOpen;
	return {
		isOpen,
		open: () => set(true),
		close: () => set(false),
		toggle: () => update((n) => !n)
	};
}
