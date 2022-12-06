const name = 'Bobbi Ross';
const email = 'bobbi@bobbiross.com';
const links = {
	chat: {
		text: 'Schedule a Chat',
		url: 'https://calendly.com/BobbiRoss/'
	},
	linkedIn: 'https://www.linkedin.com/in/bobbiross/',
	resume: 'https://d.novoresume.com/images/doc/preview/minimalist-resume-template.png', // If placing in the static dir, use /resume/YOUR_RESUME.pdf.  Otherwise any old URL will do.
	menu: {
		linkedIn: 'https://www.linkedin.com/in/bobbi-ross/',
		dribbble: 'https://www.dribbble.com/bobbiross/',
		github: 'https://www.github.com/bobbiross/',
		polywork: 'https://poly.me/kenjones'
	}
};
const titles = ['🎨 Painter', '😊 Happy', '🐶 Dog Lover', '🌲 Nature Lover'];
const bio = `<p class="font-serif text-3xl lg:text-5xl font-light leading-tight">
Hi I'm Bobbi and Im a painter.  I like to paint  <strong class="font-bold"
>landscapes</strong
>,
<strong class="font-bold">happy clouds</strong>, and
<strong class="font-bold">trees</strong>.</p>
<p class="text-xl lg:text-2xl text-gray/70 leading-normal">
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque
aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed
pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc
tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.
</p>`;
const cloudinaryConfig = {
	cloudName: 'kenjones',
	folder: 'portfolio-samples' // leave blank if no folder was used
};
const logoImage = {
	src: 'sample-1',
	alt: name
};
const bioImages = [
	{ src: 'sample-1', alt: name },
	{ src: 'sample-2', alt: name },
	{ src: 'sample-3', alt: name }
];
const resume = `
<!-- Entry -->
<div class="flex flex-col md:flex-row justify-start gap-6">
	<div class="-translate-x-3 md:translate-x-0 min-w-[200px] text-gray/70 text-sm">
		2010 - 2015
	</div>
	<div class="-mt-2 md:mt-auto prose prose-sm">
		<h3 class="font-serif text-2xl leading-none mb-1	">
			<span class="font-bold">Bobbi Ross Inc</span> (Seattle WA.).
		</h3>
		<h4 class="text-xl font-medium italic">Founder, Lead Painter</h4>
		
	</div>
</div>
<!-- Entry -->
<div class="flex flex-col md:flex-row justify-start gap-6">
	<div class="-translate-x-3 md:translate-x-0 min-w-[200px] text-gray/70 text-sm">
		October 2015 - Present
	</div>
	<div class="-mt-2 md:mt-auto prose prose-sm">
		<h3 class="font-serif text-2xl leading-none mb-1	">
			<span class="font-bold">Bob Ross Studio</span> (Remote)
		</h3>
		<h4 class="text-xl font-medium italic">Founder, Assistant Painter</h4>
		
	</div>
</div>`;
const caseStudies = [
	{
		slug: 'sample1',
		name: 'Sample Project 1',
		mainImage: {
			src: 'birdables-main', // Name from Cloudinary
			alt: 'Sample Hopme Page',
			isBrowserPreview: true
		},
		images: [
			{
				src: 'birdables-main', // Name from Cloudinary
				alt: 'Sample Painting',
				title: 'Image Preview',
				isBrowserPreview: false
			},
			{
				src: 'birdables-main', // Name from Cloudinary
				alt: 'Bobbi Ross Website',
				title: 'Website Preview',
				isBrowserPreview: true
			}
		],
		shortDescription: `This is a short description that shows on the homepage.`,
		longDescription: `<p>This is a longer description that shows on the case study page.  HTML is accepted here,</p>`, // can be html
		button: {
			url: 'https://bobbiross.com',
			text: 'View Live Site'
		}
	},
	{
		slug: 'sample2',
		name: 'Sample Project 2',
		mainImage: {
			src: 'birdables-main', // Name from Cloudinary
			alt: 'Sample Hopme Page',
			isBrowserPreview: true
		},
		images: [
			{
				src: 'birdables-main', // Name from Cloudinary
				alt: 'Sample Painting',
				title: 'Image Preview',
				isBrowserPreview: false
			},
			{
				src: 'birdables-main', // Name from Cloudinary
				alt: 'Bobbi Ross Website',
				title: 'Website Preview',
				isBrowserPreview: true
			}
		],
		shortDescription: `This is a short description that shows on the homepage.`,
		longDescription: `<p>This is a longer description that shows on the case study page.  HTML is accepted here,</p>`, // can be html
		button: {
			url: 'https://bobbiross.com',
			text: 'View Live Site'
		}
	}
];
const cta = {
	heading: 'I’m currently looking for new opportunities',
	text: 'I love to paint what can I say.  I love painting <strong class="font-extrabold">nature</strong>, <strong class="font-extrabold">birds</strong>, <strong class="font-extrabold">water</strong>, and <strong class="font-extrabold">paradise</strong>.' // Can be HTML
};
const copyright = 'BobbiRoss';
const meta = {
	favicon: 'sample-1',
	OgImage: 'sample-1',
	title: `${name} | Painter`,
	description: `${name}'s portfolio website.  Email him at: ${email}`,
	siteName: `BobbiRoss`,
	twitterUsername: 'bobbiross'
};
const posthog = {
	key: '' // PostHog Analytics Key EX: phc_asdfasdfasdfasdfsdfsd
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
	copyright,
	posthog
};
