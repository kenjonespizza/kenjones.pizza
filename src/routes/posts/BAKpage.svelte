<script>
	let items = [
		{
			id: 1,
			title: 'Really long long long long long title',
			content: 'this is an excerpt about the blog post.  La la la oh hiii!'
		},
		{
			id: 2,
			title: 'Shorter short content',
			content: 'this is an excerpt about the blog post.  La la la oh hiii!'
		},
		{
			id: 3,
			title: 'Really long  title',
			content: 'this is an excerpt about the blog post.  La la la oh hiii!'
		},
		{
			id: 4,
			title: 'Shorter short content short content',
			content: 'this is an excerpt about the blog post.  La la la oh hiii!'
		},
		{
			id: 5,
			title: 'Really long long long long long title long long title',
			content: 'this is an excerpt about the blog post.  La la la oh hiii!'
		},
		{
			id: 6,
			title: 'Shorter short content',
			content: 'this is an excerpt about the blog post.  La la la oh hiii!'
		},
		{
			id: 7,
			title: 'Really long long long long long title',
			content: 'this is an excerpt about the blog post.  La la la oh hiii!'
		},
		{
			id: 8,
			title: 'Shorter short',
			content: 'this is an excerpt about the blog post.  La la la oh hiii!'
		},
		{
			id: 9,
			title: 'Really long long long long long title',
			content: 'this is an excerpt about the blog post.  La la la oh hiii!'
		},
		{
			id: 10,
			title: 'Shorter short content',
			content: 'this is an excerpt about the blog post.  La la la oh hiii!'
		}
	];
</script>

<div class="grid grid-cols-12 gap-6 p-6">
	<div
		class="sticky top-6 col-span-4 flex h-[calc(100vh-(var(--spacing)*12))] flex-col justify-center"
	>
		<h1 class="text-9xl font-bold">Posts</h1>
		<p class="text-primary text-2xl">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
		</p>
	</div>

	<div class="col-span-8 columns-2 gap-px">
		{#each items as item, i}
			<a
				href="/posts/{item.id}"
				class="bg-dark {i % 4 === 1
					? 'hover:bg-sauce hover:text-light'
					: i % 4 === 2
						? 'hover:bg-berry'
						: i % 4 === 3
							? 'hover:bg-cheese '
							: 'hover:bg-gum'} hover:text-dark mb-px flex aspect-square break-inside-avoid-column flex-col gap-3 p-6 text-white"
			>
				<h2 class=" text-4xl font-bold">{i} - {item.title}</h2>
				<p class=" text-md">{item.content}</p>
			</a>
		{/each}
	</div>

	<!-- <div class="masonry-2-col before:box-inherit after:box-inherit mx-auto box-border">
		<div class="break-inside my-6 rounded-lg bg-gray-100 p-8">
			<p>Really long content</p>
		</div>
		<div class="break-inside my-6 rounded-lg bg-gray-100 p-8">
			<p>Really long content</p>
		</div>
		<div class="break-inside my-6 rounded-lg bg-gray-100 p-8">
			<p>Really long content</p>
		</div>
		<div class="break-inside my-6 rounded-lg bg-gray-100 p-8">
			<p>Really long content</p>
		</div>
		<div class="break-inside my-6 rounded-lg bg-gray-100 p-8">
			<p>Really long content</p>
		</div>
		<div class="break-inside my-6 rounded-lg bg-gray-100 p-8">
			<p>Really long content</p>
		</div>
		<div class="break-inside my-6 rounded-lg bg-gray-100 p-8">
			<p>Really long content</p>
		</div>
		<div class="break-inside my-6 rounded-lg bg-gray-100 p-8">
			<p>Really long content</p>
		</div>
		<div class="break-inside my-6 rounded-lg bg-gray-100 p-8">
			<p>Really long content</p>
		</div>
		<div class="break-inside my-6 rounded-lg bg-gray-100 p-8">
			<p>Really long content</p>
		</div>
		<div class="break-inside my-6 rounded-lg bg-gray-100 p-8">
			<p>Really long content</p>
		</div>
		<div class="break-inside my-6 rounded-lg bg-gray-100 p-8">
			<p>Really long content</p>
		</div>
		<div class="break-inside my-6 rounded-lg bg-gray-100 p-8">
			<p>Really long content</p>
		</div>
		<div class="break-inside my-6 rounded-lg bg-gray-100 p-8">
			<p>Really long content</p>
		</div>
		<div class="break-inside my-6 rounded-lg bg-gray-100 p-8">
			<p>Really long content</p>
		</div>
	</div> -->
</div>

<style>
	@reference "../../app.css";

	.masonry-3-col {
		column-count: 3;
		column-gap: 1em;
	}
	.masonry-2-col {
		column-count: 2;
		column-gap: 1em;
	}
	.break-inside {
		break-inside: avoid;
	}
</style>
