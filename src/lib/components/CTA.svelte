<script>
	import { scrollToElementById } from '$lib/utils';
	import { getContext } from 'svelte';
	const data = getContext('data');
</script>

<div class="-translate-y-24" id="next-opportunity" />

<div
	class="bg-gray p-[50px] xl:p-[100px] rounded-[50px] text-white flex flex-col xl:flex-row justify-between gap-12 xl:items-center"
>
	<h2 class="font-serif text-4xl md:text-6xl xl:text-7xl font-bold shadow-">
		{data.cta.heading}
	</h2>
	<div class="w-full max-[676px] space-y-12">
		<div class="text-2xl max-w-[50ch]">
			{@html data.cta.text}
		</div>
		<div
			class="w-full flex flex-col md:flex-row xl:flex-col 2xl:flex-row justify-start md:justify-between items-start md:items-baseline gap-6"
		>
			<a
				class="w-full whitespace-nowrap rounded-full md:w-auto justify-center bg-white flex gap-[22px] px-[30px] py-[17px] text-gray font-medium text-xl items-center transition hover:bg-primary hover:text-white group"
				rel="noreferrer"
				target="_blank"
				href={data?.links?.chat?.url}
			>
				<span>{data?.links?.chat?.text}</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="text-primary group-hover:text-white transition"
					viewBox="0 0 24 24"
					width="24"
					height="24"
					><path fill="none" d="M0 0h24v24H0z" /><path
						fill="currentColor"
						d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zM4 9v10h16V9H4zm2 4h5v4H6v-4z"
					/></svg
				>
			</a>
			<div class="flex w-full justify-between md:justify-end xl:justify-start gap-[25px] text-xl">
				<a
					class="underline font-medium transition hover:text-primary"
					rel="external"
					href={`mailto:${data.email}`}>Email Me</a
				>
				<a
					href={data.links.resume}
					rel="noreferrer"
					target="_blank"
					class="underline font-mediumm transition hover:text-primary">Download Resume</a
				>
			</div>
		</div>
	</div>
</div>
