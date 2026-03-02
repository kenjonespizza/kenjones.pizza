<script>
	/**
	 * @typedef {Object} Props
	 * @property {boolean} [standard]
	 * @property {string | undefined} [klass]
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { standard = false, klass = '', children } = $props();
</script>

<div
	class={`mx-auto max-w-[1532px] max-lg:px-[25px] max-2xl:px-[50px] ${klass} ${
		standard ? 'standard' : ''
	}`}
>
	{@render children?.()}
</div>
