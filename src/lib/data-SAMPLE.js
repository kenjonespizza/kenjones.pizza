const name = 'Bob Ross';
const email = 'bob@bobross.com';
const links = {
	chat: {
		text: 'Schedule a Chat',
		url: 'https://calendly.com/BobRoss/'
	},
	linkedIn: 'https://www.linkedin.com/in/bobross/',
	resume: 'https://d.novoresume.com/images/doc/preview/minimalist-resume-template.png' // If placing in the static dir, use /resume/YOUR_RESUME.pdf.  Otherwise any old URL will do.
};
const titles = ['🎨 Painter', '😊 Happy', '🐶 Dog Lover', '🌲 Nature Lover'];
const bio = `<p class="font-serif text-3xl lg:text-5xl font-light leading-tight">
Hi I'm Bob and Im a painter.  I like to paint  <strong class="font-bold"
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
	cloudName: 'bobrossCloudname',
	folder: '' // leave blank if no folder was used
};
const logoImage = {
	src: '1',
	alt: name
};
const bioImages = [
	{ src: '1', alt: name },
	{ src: '2', alt: name },
	{ src: '3', alt: name }
];
const resume = `<!-- Entry -->
<div class="flex flex-col md:flex-row justify-start gap-6">
					<div class="-translate-x-3 md:translate-x-0 min-w-[200px] text-gray/70 text-sm">
						<time datetime="2015-10-01 20:00">October 2015</time> -
						<time datetime="2023-12-05 20:00">Present</time>
					</div>
					<div class="-mt-2 md:mt-auto prose prose-sm">
						<h3 class="font-serif text-2xl leading-none mb-1	">
							<span class="font-bold">Bob Ross Inc</span> (Remote) - Paint Studio.
						</h3>
						<h4 class="text-xl font-medium italic">Founder, Lead Painter</h4>
						
					</div>
				</div>`;
const caseStudies = [
	{
		slug: 'sample1',
		name: 'Sample Project 1',
		mainImage: 'sample-main', // Name from Cloudinary
		images: [
			{
				src: 'sample-1', // Name from Cloudinary
				alt: 'Sample Painting',
				title: 'Painting',
				isBrowserPreview: false
			},
			{
				src: 'sample-website', // Name from Cloudinary
				alt: 'Bob Ross Website',
				title: 'Homepage',
				isBrowserPreview: true
			}
		],
		shortDescription: `This is a short description that shows on the homepage.`,
		longDescription: `<p>This is a longer description that shows on the case study page.  HTML is accepted here,</p>`, // can be html
		button: {
			url: 'https://bobross.com',
			text: 'View Live Site'
		}
	},
	{
		slug: 'sample1',
		name: 'Sample Project 1',
		mainImage: 'sample-main', // Name from Cloudinary
		images: [
			{
				src: 'sample-1', // Name from Cloudinary
				alt: 'Sample Painting',
				title: 'Painting',
				isBrowserPreview: false
			},
			{
				src: 'sample-website', // Name from Cloudinary
				alt: 'Bob Ross Website',
				title: 'Homepage',
				isBrowserPreview: true
			}
		],
		shortDescription: `This is a short description that shows on the homepage.`,
		longDescription: `<p>This is a longer description that shows on the case study page.  HTML is accepted here,</p>`, // can be html
		button: {
			url: 'https://bobross.com',
			text: 'View Live Site'
		}
	}
];
const cta = {
	heading: 'I’m currently looking for new opportunities',
	text: 'I love to paint what can I say.  I love painting <strong class="font-extrabold">nature</strong>, <strong class="font-extrabold">birds</strong>, <strong class="font-extrabold">water</strong>, and <strong class="font-extrabold">paradise</strong>.' // Can be HTML
};
const copyright = 'BobRoss';
const meta = {
	favicon: '1',
	OgImage: '1',
	title: `${name} | Painter`,
	description: `${name}'s portfolio website.  Email him at: ${email}`,
	siteName: `BobRoss`,
	twitterUsername: 'bobross'
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
