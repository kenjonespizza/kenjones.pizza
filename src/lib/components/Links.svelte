<script>
	import { getContext } from 'svelte';

	import LinkedinFill from 'svelte-remixicon/RiLinkedinFill.svelte';
	import DribbbleFill from 'svelte-remixicon/RiDribbbleFill.svelte';
	import GithubFill from 'svelte-remixicon/RiGithubFill.svelte';

	const data = getContext('data');

	export let sizeClass = 'h-12';
</script>

{#if data?.links?.menu?.linkedIn}
	<a
		href={data?.links.menu?.linkedIn}
		class="transition rounded"
		target="_blank"
		rel="noopener noreferrer"
	>
		<LinkedinFill
			size="auto"
			class={`${sizeClass} transition py-2 border-b-2 border-transparent hover:border-current`}
		/>
	</a>
{/if}
{#if data?.links?.menu?.dribbble}
	<a
		href={data?.links.menu?.dribbble}
		class="transition rounded"
		target="_blank"
		rel="noopener noreferrer"
	>
		<DribbbleFill
			size="auto"
			class={`${sizeClass} transition py-2 border-b-2 border-transparent hover:border-current`}
		/>
	</a>
{/if}
{#if data?.links?.menu?.github}
	<a
		href={data?.links.menu?.github}
		class="transition rounded"
		target="_blank"
		rel="noopener noreferrer"
	>
		<GithubFill
			size="auto"
			class={`${sizeClass} transition py-2 border-b-2 border-transparent hover:border-current`}
		/>
	</a>
{/if}
{#if data?.links?.menu?.polywork}
	<a
		href={data?.links.menu?.polywork}
		class="transition rounded"
		target="_blank"
		rel="noopener noreferrer"
	>
		<svg
			class={`${sizeClass} transition py-2 border-b-2 border-transparent hover:border-current`}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 25 24"
			fill="none"
		>
			<g clip-path="url(#clip0_66_27005)" class="">
				<path
					d="M8.33911 23.4V16.2H15.9201V19.125C15.9201 21.45 14.0249 23.4 11.5989 23.4H8.33911Z"
					fill="transparent"
				/>
				<path
					d="M16.0718 16.0499V8.3999H23.6528V11.7749C23.6528 14.0999 21.7575 16.0499 19.3316 16.0499H16.0718Z"
					fill="transparent"
				/>
				<path d="M15.9201 8.3999H8.33911V15.9749H15.9201V8.3999Z" fill="transparent" />
				<path
					d="M0.606445 8.2501V4.8751C0.606445 2.5501 2.5017 0.600098 4.92763 0.600098H8.18747V8.2501H0.606445Z"
					fill="transparent"
				/>
				<path
					d="M16.0718 8.2501V0.600098H19.3316C21.6817 0.600098 23.6528 2.4751 23.6528 4.8751V8.2501H16.0718Z"
					fill="transparent"
				/>
				<path d="M15.9201 0.600098H8.33911V8.1751H15.9201V0.600098Z" fill="transparent" />
				<path
					d="M0.606445 19.125V16.2H8.18747V23.4H4.92763C2.5017 23.4 0.606445 21.525 0.606445 19.125Z"
					fill="transparent"
				/>
				<path d="M8.18747 8.3999H0.606445V15.9749H8.18747V8.3999Z" fill="transparent" />
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M0 19.125V4.875C0 2.175 2.1985 0 4.92766 0H19.3316C22.0608 0 24.2593 2.175 24.2593 4.875V11.775C24.2593 14.475 22.0608 16.65 19.3316 16.65H16.5266V19.125C16.5266 21.825 14.3281 24 11.5989 24H4.92766C2.1985 24 0 21.825 0 19.125ZM7.58102 7.575H1.28877V4.8C1.28877 2.85 2.88079 1.2 4.92766 1.2H7.58102V7.575ZM19.3316 15.45H16.6783V8.99998H22.9705V11.85C22.9705 13.8 21.3785 15.45 19.3316 15.45ZM11.5989 22.8H8.94558V16.875H15.2378V19.2C15.2378 21.15 13.6458 22.8 11.5989 22.8ZM8.94558 15.45H15.2378V8.99998H8.94558V15.45ZM16.6783 7.575H22.9705V4.875C22.9705 2.85 21.3027 1.275 19.3316 1.275H16.6783V7.575ZM15.2378 7.575H8.94558V1.2H15.2378V7.575ZM1.21296 16.8V19.125C1.21296 21.15 2.88079 22.725 4.85185 22.725H7.58102V16.8H1.21296ZM7.58102 15.45H1.21296V8.99998H7.58102V15.45Z"
					fill="currentColor"
				/>
			</g>
			<defs>
				<clipPath id="clip0_66_27005">
					<rect width="24.2593" height="24" fill="white" />
				</clipPath>
			</defs>
		</svg>
	</a>
{/if}
