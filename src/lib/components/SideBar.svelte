<script lang="ts">
	let { breadcrumbs = undefined } = $props<{ breadcrumbs?: string[] }>();
</script>

<aside
	class="bg-primary text-primary-text text-md fixed top-0 left-0 z-20 flex h-screen w-16 flex-col items-center justify-start py-4"
>
	<nav class="items center flex h-full flex-col-reverse justify-between">
		<ul class="flex flex-col-reverse items-center gap-6">
			<li>
				<a href="/" class="">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="w-6"
						><path
							d="M20 20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20Z"
						></path></svg
					>
					<span class="sr-only">Home</span>
				</a>
			</li>
			<li class="text-orientation-mixed [writing-mode:vertical-rl]">
				<a class="" href="/posts">Posts</a>
			</li>
			<li class="text-orientation-mixed [writing-mode:vertical-rl]">
				<a class="" href="/birds">Birds</a>
			</li>
			<li class="text-orientation-mixed [writing-mode:vertical-rl]">
				<a class="" href="/videos">Videos</a>
			</li>
		</ul>
		{#if breadcrumbs}
			<ul
				class="bg-light text-dark-text flex flex-col gap-2 rounded-full px-2 py-4 text-sm font-semibold"
			>
				{#each breadcrumbs as crumb, i}
					<li class="text-orientation-mixed [writing-mode:vertical-rl]">
						{#if i === breadcrumbs.length - 1}
							<span class="">{crumb}</span>
						{:else}
							<div class="flex items-center gap-2">
								<a class="underline" href="/{crumb.toLowerCase()}">{crumb}</a>

								<span class="">|</span>
							</div>
						{/if}
					</li>
				{/each}
			</ul>
		{/if}
	</nav>
</aside>
