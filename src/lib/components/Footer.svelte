<script>
	import GithubFill from 'svelte-remixicon/RiGithubFill.svelte';
	import { data } from '$lib/data';

	const date = new Date();
</script>

<section class="p-10 border-t border-gray-50">
	<div class="text-center text-gray-500 flex justify-center gap-4">
		<span>&copy;{date.getFullYear()} {data.copyright}</span>

		{#if data?.sourceCode?.showCode}
			<span>|</span>
			<a
				href={data.sourceCode.link}
				target="_blank"
				rel="noopener noreferrer"
				class="underline flex gap-2 items-center"><GithubFill size="20" /> View Source Code</a
			>
		{/if}
	</div>
</section>
