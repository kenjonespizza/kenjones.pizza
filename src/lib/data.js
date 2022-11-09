const name = 'Ken Jones';
const titles = ['Designer', 'Engineer', 'Birder', '🐶 Foster Dad'];
const bio = `<p class="font-serif text-5xl font-light leading-tight">
I’m a web consultant with skills and experience as a <strong class="font-bold"
  >designer</strong
>,
<strong class="font-bold">engineer</strong>, and
<strong class="font-bold">manager</strong>. I’ve been building the web for the past
<strong class="font-bold">15 years</strong>
and am ready for my
<strong class="font-bold"
  ><a href="#" class="underline underline-offset-[6px]  hover:text-primary transition-all"
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
const bioImages = [
	{ src: '/images/photos/1.webp', alt: name },
	{ src: '/images/photos/2.webp', alt: name },
	{ src: '/images/photos/3.webp', alt: name },
	{ src: '/images/photos/4.webp', alt: name },
	{ src: '/images/photos/5.webp', alt: name },
	{ src: '/images/photos/6.webp', alt: name },
	{ src: '/images/photos/7.webp', alt: name },
	{ src: '/images/photos/8.webp', alt: name },
	{ src: '/images/photos/9.webp', alt: name },
	{ src: '/images/photos/10.webp', alt: name },
	{ src: '/images/photos/11.webp', alt: name },
	{ src: '/images/photos/12.webp', alt: name }
];
const caseStudies = [
	{
		slug: 'birdables',
		name: 'Birdables',
		mainImage: 'birdables/main.webp',
		images: [],
		description: `<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</p>
      
      <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>`
	},
	{
		slug: 'rv-blog',
		name: 'Red Ventures Blog',
		mainImage: 'rv-blog/main.webp',
		images: [],
		description: `<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</p>
      
      <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>`
	},
	{
		slug: 'birdables',
		name: 'Birdables',
		mainImage: 'birdables/main.webp',
		images: [],
		description: `<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</p>
      
      <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>`
	},
	{
		slug: 'rv-blog',
		name: 'Red Ventures Blog',
		mainImage: 'rv-blog/main.webp',
		images: [],
		description: `<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</p>
      
      <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>`
	}
];

export const data = {
	name,
	titles,
	bio,
	bioImages,
	caseStudies
};
