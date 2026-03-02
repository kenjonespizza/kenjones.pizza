export const lightbox = $state({
	isOpen: false,
	images: /** @type {{ src: string, alt: string }[]} */ ([]),
	index: 0
});

export const menu = $state({
	isOpen: false
});

export const fullScreenMock = $state({
	isOpen: false,
	src: '',
	alt: ''
});
