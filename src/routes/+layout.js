import { data } from '$lib/data.js';

/** @type {import('./$types').PageLoad} */
export function load() {
	return {
		...data
	};
}
