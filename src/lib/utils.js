import { fill } from '@cloudinary/url-gen/actions/resize';
import { focusOn } from '@cloudinary/url-gen/qualifiers/gravity';
import { face } from '@cloudinary/url-gen/qualifiers/focusOn';
import { format, quality } from '@cloudinary/url-gen/actions/delivery';
import { browser } from '$app/environment';

export const convertToSquareimageAutoFormatAndQuality = (image) => {
	image
		.resize(fill().aspectRatio(1).gravity(focusOn(face())))
		.delivery(format('auto'))
		.delivery(quality('auto'));

	return image;
};

export const imageAutoFormatAndQuality = (image) => {
	image.delivery(format('auto')).delivery(quality('auto'));

	return image;
};

export function scrollToElementById(id) {
	if (browser) {
		const element = document.getElementById(id);

		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}
}
