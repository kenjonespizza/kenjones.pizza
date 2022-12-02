import { data } from '$lib/data';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const project = data.caseStudies.find((project) => project.slug === params.slug);
	return {
		project
	};
}
