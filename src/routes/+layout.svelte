<script lang="ts">
	import '../app.css';
	let { children } = $props();

	let primary = $state('sauce');
</script>

<div style="">
	{@render children()}
</div>

<style>
	@reference "../app.css";

	:global(:root) {
		@apply font-sans;
	}

	@font-face {
		font-family: 'GreycliffCF';
		font-weight: 400;
		src:
			url($lib/fonts/GreycliffCF-Regular.woff2) format('woff2'),
			url($lib/fonts/GreycliffCF-Regular.woff) format('woff');
		font-display: swap;
	}
	@font-face {
		font-family: 'GreycliffCF';
		font-weight: 500;
		src:
			url($lib/fonts/GreycliffCF-Medium.woff2) format('woff2'),
			url($lib/fonts/GreycliffCF-Medium.woff) format('woff');
		font-display: swap;
	}
	@font-face {
		font-family: 'GreycliffCF';
		font-weight: 600;
		src:
			url($lib/fonts/GreycliffCF-DemiBold.woff2) format('woff2'),
			url($lib/fonts/GreycliffCF-DemiBold.woff) format('woff');
		font-display: swap;
	}
	@font-face {
		font-family: 'GreycliffCF';
		font-weight: 600;
		font-style: italic;
		src:
			url($lib/fonts/GreycliffCF-DemiBoldOblique.woff2) format('woff2'),
			url($lib/fonts/GreycliffCF-DemiBoldOblique.woff) format('woff');
		font-display: swap;
	}
	@font-face {
		font-family: 'GreycliffCF';
		font-weight: 900;
		src:
			url($lib/fonts/GreycliffCF-Heavy.woff2) format('woff2'),
			url($lib/fonts/GreycliffCF-Heavy.woff) format('woff');
		font-display: swap;
	}
	@font-face {
		font-family: 'FiraCode';
		font-weight: 100.1;
		src: url($lib/fonts/FiraCode-VariableFont_wght.ttf) format('ttf');
		font-display: swap;
	}
</style>
