const name = 'Ken Jones';
const email = 'email@kenjones.pizza';
const links = {
	chat: {
		text: 'Schedule a Chat',
		url: 'https://calendly.com/kenjonespizza/'
	},
	linkedIn: 'https://www.linkedin.com/in/kenjazzyjones/',
	resume:
		'https://res.cloudinary.com/kenjones/image/upload/v1668494839/kenjones.pizza/Ken-Jones-Resume.pdf' // If placing in the static dir, use /resume/YOUR_RESUME.pdf.  Otherwise any old URL will do.
};
const titles = ['Designer', 'Engineer', '🐶 Foster Dad', 'Friend', 'Birder 🦉'];
const bio = `<p class="font-serif text-5xl font-light leading-tight">
I’m a web consultant with skills and experience as a <strong class="font-bold"
  >designer</strong
>,
<strong class="font-bold">engineer</strong>, and
<strong class="font-bold">manager</strong>. I’ve been building the web for the past
<strong class="font-bold">15 years</strong>
and am ready for my
<strong class="font-bold"
  ><a href="/#next-opportunity" class="underline underline-offset-[6px]  hover:text-primary transition-all"
    >next opportunity</a
  ></strong
>.
</p>
<p class="text-2xl text-gray/70 leading-normal">
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque
aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed
pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc
tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.
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
						<time datetime="2008-02-14 20:00">October 2015</time> -
						<time datetime="2008-02-14 20:00">Present</time>
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
						<time datetime="2008-02-14 20:00">February 2015 </time> -
						<time datetime="2008-02-14 20:00">October 2015</time>,<br />
						<time datetime="2008-02-14 20:00">July 2012</time> -
						<time datetime="2008-02-14 20:00">October 2013</time>
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
						<time datetime="2008-02-14 20:00">October 2013 </time> -
						<time datetime="2008-02-14 20:00">February 2015</time>
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
						<time datetime="2008-02-14 20:00">October 2013 </time> -
						<time datetime="2008-02-14 20:00">February 2015</time>
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
						<time datetime="2008-02-14 20:00">May 2008 </time> -
						<time datetime="2008-02-14 20:00">April 2012</time>
					</div>
					<div class="-mt-2 md:mt-auto prose prose-sm">
						<h3 class="font-serif text-2xl leading-none mb-1	">
							<span class="font-bold">eLink Design</span> (Lexington, Ky.) - Web Agency
						</h3>
						<h4 class="text-xl font-medium italic">
							Lead Front-End Developer & Web Design Director
						</h4>
						
					</div>
				</div>`;
const caseStudies = [
	{
		slug: 'birdables',
		name: 'Birdable (Passion Project)',
		mainImage: 'birdables-main',
		images: [
			{
				src: 'birdables-main',
				alt: 'Birdables Home Page',
				title: 'Homepage'
			},
			{
				src: 'birdables-cards',
				alt: 'Birdables Cards Page',
				title: 'Cards Page'
			},
			{
				src: 'birdables-about',
				alt: 'Birdables About Page',
				title: 'Cards Page'
			}
		],
		shortDescription: `Birdables is a passion project that I launched in 2021. It's a collection of physical & digital collectable bird cards, accompanied by a custome website.`,
		longDescription: `<p>Birdables is a passion project that I launched in 2021. It's a collection of physical & digital collectable bird cards, accompanied by a custome website.</p>`, // can be html
		button: {
			url: 'https://birdables.com',
			text: 'View Live Site'
		}
	},
	{
		slug: 'red-ventures',
		name: 'Red Ventures (Blog & Careers Site)',
		mainImage: 'rv-blog',
		images: [
			{
				src: 'rv-blog',
				alt: 'Red Ventures Blog',
				title: 'Blog Homepage'
			},
			{
				src: 'rv-blog-post',
				alt: 'Red Ventures Careers',
				title: 'Blog Post'
			},
			{
				src: 'rv-careers',
				alt: 'Red Ventures Careers',
				title: 'Careers Homepage'
			},
			{
				src: 'rv-creatives',
				alt: 'Red Ventures Creatives',
				title: 'Creatives Page'
			}
		],
		shortDescription: `Custom Wordpress blog and PHP/GreenHouse API careers site for Red Ventures.`,
		longDescription: `<p>I've worked with Red Ventures a handful of times.  This set of projects contained a Blog and a Careers site.  The Blog is is a custom Wordpress build, with the goal creating a more editorial feeling experience.  The Careers site is a custom PHP build tied tot he Greenhouse.io API.</p>` // can be html
	},
	{
		slug: 'fly-usa',
		name: 'Fly USA',
		mainImage: 'flyusa-homepage',
		images: [
			{
				src: 'flyusa-homepage',
				alt: 'Fly USA',
				title: 'Homepage'
			},
			{
				src: 'flyusa-booking',
				alt: 'Fly USA',
				title: 'Booking Step 1'
			},
			{
				src: 'flyusa-about',
				alt: 'Fly About',
				title: 'About Page'
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
		mainImage: 'dailyhangar-homepage',
		images: [
			{
				src: 'dailyhangar-homepage',
				alt: 'Daily Hangar Homepage',
				title: 'Homepage'
			},
			{
				src: 'dailyhangar-listing',
				alt: 'Daily Hangar Listing',
				title: 'Hangar Listing'
			},
			{
				src: 'dailyhangar-map',
				alt: 'Daily Hangar map',
				title: 'Daily Hangar map/Listings'
			}
		],
		shortDescription: `Daily Hangar was my first fully custom designed and engineered web app.`,
		longDescription: `<p>daily Hangar came to me as a start up needing a full web app with a backend admin.</p>` // can be html
	}
];
const cta = {
	heading: 'I’m currently looking for new opportunities',
	text: 'After a 7 year stint of successfully running a digital web agency for 7 years, I’m ready for my next challenge. With 15 years experience in <strong class="font-extrabold">design</strong>, <strong class="font-extrabold">engineering</strong>, <strong class="font-extrabold">consulting</strong>, and <strong class="font-extrabold">managing</strong>.' // Can be HTML
};
const copyright = 'KenJonesPizza';
const meta = {
	favicon: '1',
	OgImage: '1',
	title: `${name} | Web designer, developer, specialist`,
	description: `${name}'s portfolio website.  Email him at: ${email}`,
	siteName: `KenJonesPizza`,
	twitterUsername: 'kenjonespizza'
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
	copyright
};
