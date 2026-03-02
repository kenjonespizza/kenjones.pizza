<script>
	import posthog from 'posthog-js';
	import '$lib/css/app.postcss';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import FullScreenMock from '$lib/components/FullScreenMock.svelte';
	import { returnFavicon, returnOgImage } from '$lib/utils.js';
	import { page } from '$app/state';
	import { browser, dev } from '$app/environment';
	import { setContext } from 'svelte';

	/**
	 * @typedef {Object} Props
	 * @property {import('./$types').PageData} data
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { data = $bindable(), children } = $props();
	setContext('data', data);

	data.siteInfo = {
		url: page.url,
		route: page.route
	};

	if (browser && !dev && data?.posthog?.key) {
		posthog.init(data.posthog.key, {
			api_host: 'https://app.posthog.com'
		});

		posthog.capture('my event', { property: 'value' });
	}
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Bitter:wght@200;300;400;600;700;800&display=swap"
		rel="stylesheet"
	/>
	<link rel="shortcut icon" href={returnFavicon(data.meta.favicon)} type="image/x-icon" />
	<meta property="og:image" content={returnOgImage(data.meta.OgImage)} />
</svelte:head>

<div class="page-wrapper relative">
	<Header />
	{@render children?.()}
	<Footer />
	<FullScreenMock />
</div>
