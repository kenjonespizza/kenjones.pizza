import { writable } from 'svelte/store';

export const isLightBoxOpen = writable(false);
export const CurrentLightBoxImageSrc = writable('');
export const CurrentLightBoxImageAlt = writable('');

export const isMenuOpen = writable(false);
export const isFullScreenMockOpen = writable(false);
export const fullScreenMockSrc = writable('');
export const fullScreenMockAlt = writable('');
