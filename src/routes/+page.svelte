<script>
	import Hero from '$lib/components/Hero.svelte';
	import Container from '$lib/components/Container.svelte';
	import CTA from '$lib/components/CTA.svelte';
	import Mock from '$lib/components/Mock.svelte';
	import Gallery from '$lib/components/Gallery.svelte';
	import LightBox from '$lib/components/LightBox.svelte';

	import { getContext } from 'svelte';

	const data = getContext('data');
</script>

<LightBox />

<Hero />

<section class="section space-y-12" id="about">
	<Container standard>
		<h2 class="section-heading">About Me.</h2>
		<div class="side flex flex-col gap-6">
			{@html data.bio}
			<Gallery />
		</div>
	</Container>

	<Container>
		<CTA />
	</Container>
</section>

<section class="section">
	<Container standard>
		<h2 class="section-heading">Experience.</h2>
		<div
			class="side flex flex-col gap-6 border-l border-gray-50 pl-6 
		lg:pl-6"
		>
			<div class="flex flex-col gap-6">
				<div class="flex flex-col md:flex-row justify-start gap-6">
					<div class="-translate-x-3 md:translate-x-0 min-w-[200px] text-gray/70 text-sm">
						<time datetime="2008-02-14 20:00">October 2015</time> -
						<time datetime="2008-02-14 20:00">Present</time>
					</div>
					<div class="-mt-2 md:mt-auto prose prose-sm">
						<h3 class="font-serif text-2xl font-bold leading-none mb-1	">
							AllDay (Remote) - Web Agency.
						</h3>
						<h4 class="text-xl font-medium italic">Founder, Design & Development Lead</h4>
						<ul>
							<li>In charge of all design and development projects.</li>
							<li>
								Manages all employees within design and development. This includes but is not
								limited to code reviews, design reviews, workload management, and 1 on 1 check ins.
							</li>
							<li>Provides project timelines and budget requirements.</li>
							<li>In charge of qualifying, hiring, and training all designers & developers.</li>
							<li>Played a vital role in project management, often using the Kanban framework.</li>
							<li>
								Technologies used: JavaScript, TypeScript, Svelte, SvelteKit, Tailwind CSS, React,
								Gatsby, NextJS, HTML, CSS, Figma, GitHub, Webflow, Photoshop, Illustrator
							</li>
						</ul>
					</div>
				</div>
				<div class="flex flex-col md:flex-row justify-start gap-6">
					<div class="-translate-x-3 md:translate-x-0 min-w-[200px] text-gray/70 text-sm">
						<time datetime="2008-02-14 20:00">February 2015 </time> -
						<time datetime="2008-02-14 20:00">October 2015</time>,<br />
						<time datetime="2008-02-14 20:00">July 2012</time> -
						<time datetime="2008-02-14 20:00">October 2013</time>
					</div>
					<div class="-mt-2 md:mt-auto prose prose-sm">
						<h3 class="font-serif text-2xl font-bold leading-none mb-1	">
							Freelance Consultant (Remote)
						</h3>
						<h4 class="text-xl font-medium italic">Designer/Engineer</h4>
						<ul>
							<li>Independently work with companies to create websites.</li>
							<li>Specialize in doing both the design and development.</li>
							<li>
								Technologies used: JavaScript, HTML, CSS, SCSS, Responsive design, PHP, GitHub,
								MySQL, Figma, Sketch, Photoshop, Illustrator
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</Container>
</section>

<section class="section space-y-12">
	<Container standard>
		<h2 class="section-heading">Work.</h2>
		<div class="side flex flex-col items-start gap-6">
			<div>
				<h3 class="font-serif text-2xl font-bold">Birdables (Passion Project)</h3>

				<p class="text-gray/70 text-xl">
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit.
					Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel,
					nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget
					blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.
				</p>
			</div>
			<Mock src="birdables/main.webp" offset />

			<p class="text-gray/70 text-xl">
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque
				aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed
				pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc
				tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.
			</p>
			<a
				class="w-auto justify-center border border-gray hover:border-gray bg-gray hover:bg-white inline-flex gap-[22px] px-[30px] py-[17px] text-white hover:text-gray font-medium text-xl items-center transition"
				href="/case-studies/birdables"
			>
				<span>View Case Study</span>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
					><path fill="none" d="M0 0h24v24H0z" /><path
						fill="currentColor"
						d="M1.181 12C2.121 6.88 6.608 3 12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9zM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
					/></svg
				>
			</a>

			<div class="h-[1px] w-full bg-gray-50 mb-3 mt-4" />

			<div>
				<h3 class="font-serif text-2xl font-bold">Red Ventures Blog</h3>

				<p class="text-gray/70 text-xl">
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit.
					Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel,
					nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget
					blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.
				</p>
			</div>
			<Mock src="rv-blog/main.webp" offset />

			<p class="text-gray/70 text-xl">
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque
				aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed
				pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc
				tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.
			</p>
			<a
				class="w-auto justify-center border border-gray hover:border-gray bg-gray hover:bg-white inline-flex gap-[22px] px-[30px] py-[17px] text-white hover:text-gray font-medium text-xl items-center transition"
				href="#"
			>
				<span>View Case Study</span>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
					><path fill="none" d="M0 0h24v24H0z" /><path
						fill="currentColor"
						d="M1.181 12C2.121 6.88 6.608 3 12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9zM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
					/></svg
				>
			</a>
		</div>
	</Container>
	<Container>
		<CTA />
	</Container>
</section>
