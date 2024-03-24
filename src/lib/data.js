const name = 'Ken Jones';
const email = 'email@kenjones.pizza';
const links = {
	chat: {
		text: 'Schedule a Chat',
		url: 'https://calendly.com/kenjonespizza/'
	},
	linkedIn: 'https://www.linkedin.com/in/kenjazzyjones/',
	resume: 'https://res.cloudinary.com/kenjones/image/upload/v1711254193/Resume-Ken-Jones.pdf', // If placing in the static dir, use /resume/YOUR_RESUME.pdf.  Otherwise any old URL will do.
	menu: {
		linkedIn: 'https://www.linkedin.com/in/kenjazzyjones/',
		dribbble: 'https://www.dribbble.com/kenjazzy/',
		github: 'https://www.github.com/kenjonespizza/',
		polywork: 'https://poly.me/kenjones'
	}
};
const titles = [
	'🧑🏾‍💻 Front-End Dev',
	'🎨 Designer',
	'🐶 Foster Dad',
	'🦉 Birder',
	'🌲 Nature Lover',
	'🕹 Gamer'
];
const bio = `<p class="font-serif text-3xl lg:text-5xl font-light leading-tight">
I’m a web consultant with skills and experience as a <strong class="font-bold"
  >designer</strong
>,
<strong class="font-bold">engineer</strong>, and
<strong class="font-bold">team lead</strong>. I’ve been building the web for the past
<strong class="font-bold">15 years</strong>
and am ready for my
<strong class="font-bold"
  ><a href="/#next-opportunity" class="underline underline-offset-[6px]  hover:text-primary transition-all"
    >next opportunity</a
  ></strong
>.
</p>
<p class="text-xl lg:text-2xl text-gray/70 leading-normal">
When not creating for the web, I'm off hanging out with my dog, birding in the woods, riding my bike, or playing video games.  I take pride in my free time and am always looking for new ways to spend it.
</p>`;
const cloudinaryConfig = {
	cloudName: 'kenjones',
	folder: 'kenjones.pizza' // leave blank if no folder was used
};
const logoImage = {
	src: '1',
	alt: name
};
const bioImages = [
	{ src: '1', alt: name },
	{ src: '2', alt: name },
	{ src: '3', alt: name },
	{ src: '4', alt: name },
	{ src: '5', alt: name },
	{ src: '6', alt: name },
	{ src: '7', alt: name },
	{ src: '8', alt: name },
	{ src: '9', alt: name },
	{ src: '10', alt: name },
	{ src: '11', alt: name },
	{ src: '12', alt: name }
];
const resume = `<!-- Entry -->
<div class="flex flex-col md:flex-row justify-start gap-6">
					<div class="-translate-x-3 md:translate-x-0 min-w-[200px] text-gray/70 text-sm">
						2023 - Present
					</div>
					<div class="-mt-2 md:mt-auto prose prose-sm">
						<h3 class="font-serif text-2xl leading-none mb-1	">
							<span class="font-bold">Sanity.io</span>
						</h3>
						<h4 class="text-xl font-medium italic">Senior Solution Engineer/Architect</h4>
						
					</div>
				</div>

				<!-- Entry -->
				<div class="flex flex-col md:flex-row justify-start gap-6">
					<div class="-translate-x-3 md:translate-x-0 min-w-[200px] text-gray/70 text-sm">
						2015 - 2023
					</div>
					<div class="-mt-2 md:mt-auto prose prose-sm">
						<h3 class="font-serif text-2xl leading-none mb-1	">
							<span class="font-bold">AllDay</span> (Remote) - Web Agency.
						</h3>
						<h4 class="text-xl font-medium italic">Founder, Design & Enginering Lead</h4>
						
					</div>
				</div>
				
				<!-- Entry -->
				<div class="flex flex-col md:flex-row justify-start gap-6">
					<div class="-translate-x-3 md:translate-x-0 min-w-[200px] text-gray/70 text-sm">
						2013 - 2015
					</div>
					<div class="-mt-2 md:mt-auto prose prose-sm">
						<h3 class="font-serif text-2xl leading-none mb-1	">
							<span class="font-bold">Red Ventures</span> (Charlotte, NC.) - Customer Acquisition Specialists
						</h3>
						<h4 class="text-xl font-medium italic">Web Designer / Developer Hybrid</h4>
						
					</div>
				</div>
				<!-- Entry -->
				<div class="flex flex-col md:flex-row justify-start gap-6">
					<div class="-translate-x-3 md:translate-x-0 min-w-[200px] text-gray/70 text-sm">
						2012 - 2015
					</div>
					<div class="-mt-2 md:mt-auto prose prose-sm">
						<h3 class="font-serif text-2xl leading-none mb-1	">
							<span class="font-bold">Freelance Consultant</span> (Remote)
						</h3>
						<h4 class="text-xl font-medium italic">Designer/Engineer</h4>
						
					</div>
				</div>
				<!-- Entry -->
				<div class="flex flex-col md:flex-row justify-start gap-6">
					<div class="-translate-x-3 md:translate-x-0 min-w-[200px] text-gray/70 text-sm">
						2013 - 2015
					</div>
					<div class="-mt-2 md:mt-auto prose prose-sm">
						<h3 class="font-serif text-2xl leading-none mb-1	">
							<span class="font-bold">Paradise Advertising and Marketing</span> (St. Petersburg, Fl.)
							- Agency
						</h3>
						<h4 class="text-xl font-medium italic">Front-End Developer & Web Designer</h4>
						
					</div>
				</div>
				<!-- Entry -->
				<div class="flex flex-col md:flex-row justify-start gap-6">
					<div class="-translate-x-3 md:translate-x-0 min-w-[200px] text-gray/70 text-sm">
						2008 - 2012
					</div>
					<div class="-mt-2 md:mt-auto prose prose-sm">
						<h3 class="font-serif text-2xl leading-none mb-1	">
							<span class="font-bold">eLink Design</span> (Lexington, Ky.) - Web Agency
						</h3>
						<h4 class="text-xl font-medium italic">
							Front-End Developer & Lead Designer
						</h4>
						
					</div>
				</div>`;
const caseStudies = [
	{
		slug: 'birdables',
		name: 'Birdable (Passion Project)',
		mainImage: {
			src: 'birdables-main', // Name from Cloudinary
			alt: 'Birdables Homepage',
			isBrowserPreview: true
		},
		images: [
			{
				src: 'birdables-main',
				alt: 'Birdables Homepage',
				title: 'Homepage',
				isBrowserPreview: true
			},
			{
				src: 'birdables-cards',
				alt: 'Birdables Cards Page',
				title: 'Cards Page',
				isBrowserPreview: true
			},
			{
				src: 'birdables-about',
				alt: 'Birdables About Page',
				title: 'Cards Page',
				isBrowserPreview: true
			},
			{
				src: 'brown-pelican',
				alt: 'Brown Pelican Card',
				title: 'Brown Pelican Card',
				isBrowserPreview: false
			},
			{
				src: 'roseate-spoonbill',
				alt: 'Roseate Spoonbill Card',
				title: 'Roseate Spoonbill Card',
				isBrowserPreview: false
			},
			{
				src: 'cards-on-grass',
				alt: 'Cards on grass',
				title: 'Bridables Cards Printed',
				isBrowserPreview: false
			}
		],
		shortDescription: `Birdables is a passion project that I launched in 2021. It's a collection of physical & digital collectable bird cards, accompanied by a custome website.  Completely designed and developed by me.`,
		longDescription: `<p>Birdables is a passion project that I launched in 2021. It's a collection of physical & digital collectable bird cards, accompanied by a custome website.  Completely designed and developed by me.</p>
		<p><span class="font-bold">Technologies Used:</span>
		<ul>
			<li><a href="https://kit.svelte.dev/">SvelteKit</a></li>
				<li><a href="https://turbo.build/repo">Figma</a></li>
				<li><a href="https://www.adobe.com/products/photoshop.html">Photoshop</a></li>
				<li><a href="https://tailwindcss.com/">Tailwind CSS</a></li>
				<li><a href="https://vercel.com/">Vercel</a></li>
				<li><a href="https://sanity.io/">Sanity CMS</a></li>
				<li><a href="https://opensea.io/">OpenSea</a></li>
				<li><a href="https://www.etsy.com">Etsy</a></li>
		</ul>
	</p>`, // can be html
		button: {
			url: 'https://birdables.com',
			text: 'View Live Site'
		}
	},
	{
		slug: 'pcs',
		name: 'PCS Companies',
		mainImage: {
			src: 'pcs', // Name from Cloudinary
			alt: 'PCS Homepage',
			isBrowserPreview: true
		},
		images: [
			{
				src: 'pcs',
				alt: 'PCS Homepage',
				title: 'Blog Homepage',
				isBrowserPreview: true
			},
			{
				src: 'pcs-locations',
				alt: 'PCS Locations',
				title: 'Blog Post',
				isBrowserPreview: true
			},
			{
				src: 'and-estimate',
				alt: '&estimate Homepage',
				title: 'Careers Homepage',
				isBrowserPreview: true
			},
			{
				src: 'and-build',
				alt: '&build Homepage',
				title: 'Creatives Page',
				isBrowserPreview: true
			}
		],
		shortDescription: `PCS, &estimate, and &build are 3 sites that share a UI Component library, to make updating the design system of the sites more efficent.`,
		longDescription: `<p>PCS, &estimate, and &build are 3 sites that share a UI Component library, to make updating the design system of the sites more efficent.  Running 3 connected sites that share code but have differences (colors, logos, text, images, etc) called for an effective use of a Monorepo and some, some nifty config files, and utility functions to keep the wires pointing in the right direction:</p>
		
		<p><span class="font-bold">Technologies Used:</span>
			<ul>
				<li><a href="https://kit.svelte.dev/">SvelteKit</a></li>
				<li><a href="https://turbo.build/repo">Turbo Monorepo</a></li>
				<li><a href="https://tailwindcss.com/">Tailwind CSS</a></li>
				<li><a href="https://vercel.com/">Vercel</a></li>
				<li><a href="https://sanity.io/">Sanity CMS</a></li>
				<li><a href="https://kwesforms.com/">KWES Forms</a></li>
			</ul>
		</p>` // can be html
	},
	{
		slug: 'red-ventures',
		name: 'Red Ventures (Blog & Careers Site)',
		mainImage: {
			src: 'rv-blog', // Name from Cloudinary
			alt: 'RedVentures Blog',
			isBrowserPreview: true
		},
		images: [
			{
				src: 'rv-blog',
				alt: 'Red Ventures Blog',
				title: 'Blog Homepage',
				isBrowserPreview: true
			},
			{
				src: 'rv-blog-post',
				alt: 'Red Ventures Careers',
				title: 'Blog Post',
				isBrowserPreview: true
			},
			{
				src: 'rv-careers',
				alt: 'Red Ventures Careers',
				title: 'Careers Homepage',
				isBrowserPreview: true
			},
			{
				src: 'rv-creatives',
				alt: 'Red Ventures Creatives',
				title: 'Creatives Page',
				isBrowserPreview: true
			}
		],
		shortDescription: `Custom Wordpress blog and PHP/GreenHouse API careers site for Red Ventures.`,
		longDescription: `<p>I've worked with Red Ventures a handful of times.  This set of projects contained a Blog and a Careers site.  The Blog is is a custom Wordpress build, with the goal creating a more editorial feeling experience.  The Careers site is a custom PHP build tied tot he Greenhouse.io API.</p>` // can be html
	},

	{
		slug: 'fly-usa',
		name: 'Fly USA',
		mainImage: {
			src: 'flyusa-homepage', // Name from Cloudinary
			alt: 'Fly USA Homepage',
			isBrowserPreview: true
		},
		images: [
			{
				src: 'flyusa-homepage',
				alt: 'Fly USA',
				title: 'Homepage',
				isBrowserPreview: true
			},
			{
				src: 'flyusa-booking',
				alt: 'Fly USA',
				title: 'Booking Step 1',
				isBrowserPreview: true
			},
			{
				src: 'flyusa-about',
				alt: 'Fly About',
				title: 'About Page',
				isBrowserPreview: true
			}
		],
		shortDescription: `Fly USA came to me needing a newly designed site and Booking process to help successfully convert interested customers.`,
		longDescription: `<p>Fly USA needed a website facelift.  Previously they were dealing with confused customers who didnt understand their product.  I provided them with a fresh design and brand new Booking Process, which as them flying high.</p>`, // can be html
		button: {
			url: 'https://flyusa.com',
			text: 'View Live Site'
		}
	},
	{
		slug: 'daily-hangar',
		name: 'Daily Hangar',
		mainImage: {
			src: 'dailyhangar-homepage', // Name from Cloudinary
			alt: 'Daily Hangar Homepage',
			isBrowserPreview: true
		},
		images: [
			{
				src: 'dailyhangar-homepage',
				alt: 'Daily Hangar Homepage',
				title: 'Homepage',
				isBrowserPreview: true
			},
			{
				src: 'dailyhangar-listing',
				alt: 'Daily Hangar Listing',
				title: 'Hangar Listing',
				isBrowserPreview: true
			},
			{
				src: 'dailyhangar-map',
				alt: 'Daily Hangar map',
				title: 'Daily Hangar map/Listings',
				isBrowserPreview: true
			}
		],
		shortDescription: `Daily Hangar was my first fully custom designed and engineered web app.`,
		longDescription: `<p>Daily Hangar came to me as a startup needing a full web app with a backend admin.  the premis of their product was like an AirBNB for air</p>` // can be html
	}
];
const cta = {
	heading: 'I’m currently looking for new opportunities',
	text: 'After a 7 year stint of successfully running a digital web agency, I’m ready for my next challenge. With 15 years experience in <strong class="font-extrabold">design</strong>, <strong class="font-extrabold">engineering</strong>, <strong class="font-extrabold">consulting</strong>, and <strong class="font-extrabold">managing</strong>.' // Can be HTML
};
const designs = [
	{
		name: 'FlyUSA',
		description: 'Website Design',
		link: 'https://www.figma.com/proto/oYjkKGcGfmwLbPpjBH6uZ8/FlyUSA-Preview?page-id=0%3A1&node-id=508%3A3700&viewport=-583%2C307%2C0.06&scaling=min-zoom',
		image: {
			src: 'FlyUSA-shot', // From Cloudinary
			alt: 'Fly USA website preview'
		}
	},
	{
		name: 'AllPoint Retail Design',
		description: 'Website Design',
		link: 'https://www.figma.com/proto/ecQHIvhnYy52IhrBZufNTr/AllPoint-Preview?page-id=0%3A1&node-id=46%3A3041&viewport=-758%2C205%2C0.08&scaling=min-zoom',
		image: {
			src: 'AllPointRetail-shot', // From Cloudinary
			alt: 'AllPoint Retail website preview'
		}
	},
	{
		name: 'NES Health Design',
		description: 'Website Design',
		link: 'https://www.figma.com/proto/LxtFGE8tWj5HshtrO1AoBP/NES-Health?page-id=0%3A1&node-id=1%3A2&viewport=733%2C342%2C0.03&scaling=min-zoom',
		image: {
			src: 'NES-Health-shot', // From Cloudinary
			alt: 'NES Health website preview'
		}
	},
	{
		name: 'Beacon Home Design',
		description: 'Website Design',
		link: 'https://www.figma.com/proto/znXHR8vx00IENmaDSct24C/Beacon-Home-Design?page-id=0%3A1&node-id=4%3A5&viewport=462%2C650%2C0.23&scaling=min-zoom&starting-point-node-id=4%3A5',
		image: {
			src: 'beacon-shot', // From Cloudinary
			alt: 'Beacon Home Design website preview'
		}
	},
	{
		name: 'Lawrence County Learning Center',
		description: 'Website Design',
		link: 'https://www.figma.com/proto/XleVhUc4ZXpOwadMBx0PwO/Lawrence-County-Learning-Center?page-id=0%3A320&node-id=892%3A519&viewport=381%2C293%2C0.04&scaling=min-zoom&starting-point-node-id=892%3A519',
		image: {
			src: 'LCLC-shot', // From Cloudinary
			alt: 'Lawrence County Learning Center website preview'
		}
	}
];
const copyright = 'KenJonesPizza';
const meta = {
	favicon: '1',
	OgImage: '1',
	title: `${name} | Web designer, developer, specialist`,
	description: `${name}'s portfolio website.  Email him at: ${email}`,
	siteName: `KenJonesPizza`,
	twitterUsername: 'kenjonespizza'
};
const posthog = {
	key: 'phc_w7KCAXCdTTEQBYQeQMmDhzPBECMCIovl19E4mVIiIT2'
};
const sourceCode = {
	showCode: true,
	link: 'https://github.com/kenjonespizza/kenjones.pizza'
};

export const data = {
	name,
	email,
	titles,
	bio,
	links,
	logoImage,
	resume,
	bioImages,
	meta,
	caseStudies,
	cloudinaryConfig,
	cta,
	designs,
	copyright,
	posthog,
	sourceCode
};

// // See data-SAMPLE.js for data structure

// const name = '';
// const email = '';
// const links = {};
// const titles = [];
// const bio = ``;
// const cloudinaryConfig = {};
// const logoImage = {};
// const bioImages = [];
// const resume = ``;
// const caseStudies = [];
// const cta = {};
// const copyright = '';
// const meta = {};
// const posthog = {};
// const sourceCode = {};

// export const data = {
// 	name,
// 	email,
// 	titles,
// 	bio,
// 	links,
// 	logoImage,
// 	resume,
// 	bioImages,
// 	meta,
// 	caseStudies,
// 	cloudinaryConfig,
// 	cta,
// 	copyright,
// 	posthog,
// 	sourceCode
// };
