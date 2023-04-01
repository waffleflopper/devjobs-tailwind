import { writable } from 'svelte/store';

export const innerWidth = writable(0);
export const mobileBreak = writable(730);
export const tabletBreak = writable(1050);
