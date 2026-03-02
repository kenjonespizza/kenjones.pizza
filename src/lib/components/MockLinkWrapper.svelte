<script>
	/**
	 * @typedef {Object} Props
	 * @property {string} [href]
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { href = '', children } = $props();
</script>

{#if href}
	<a {href} class="block">
		{@render children?.()}
	</a>
{:else}
	{@render children?.()}
{/if}
