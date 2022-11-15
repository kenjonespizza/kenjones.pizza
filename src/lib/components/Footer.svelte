<script>
	import RemixiconLine from 'svelte-remixicon/lib/icons/RemixiconLine.svelte';
	import HomeLine from 'svelte-remixicon/lib/icons/HomeLine.svelte';

	import Container from '$lib/components/Container.svelte';
	import { now } from 'svelte/internal';
	import { data } from '$lib/data';

	const date = new Date();
</script>

<section class="p-10 border-t border-gray-50">
	<!-- <HomeLine class="w-20 h-20 fill" /> -->
	<div class="text-center text-gray-200">&copy;{date.getFullYear()} {data.copyright}</div>
</section>
