import { cloudinary } from '$lib/cloudinary';
import { fill, thumbnail } from '@cloudinary/url-gen/actions/resize';
import { max } from '@cloudinary/url-gen/actions/roundCorners';
import { focusOn } from '@cloudinary/url-gen/qualifiers/gravity';
import { face } from '@cloudinary/url-gen/qualifiers/focusOn';
import { format, quality } from '@cloudinary/url-gen/actions/delivery';
import { browser } from '$app/environment';

import { data } from '$lib/data';

export const convertToSquareimageAutoFormatAndQuality = (image) => {
	let img = cloudinary.image(
		`${data.cloudinaryConfig.folder ? `${data.cloudinaryConfig.folder}/${image}` : image}`
	);

	img
		.resize(fill().aspectRatio(1).gravity(focusOn(face())))
		.delivery(format('auto'))
		.delivery(quality('auto'));

	const src = img.toURL();

	return src;
};

export const imageAutoFormatAndQuality = (image) => {
	let img = cloudinary.image(
		`${data.cloudinaryConfig.folder ? `${data.cloudinaryConfig.folder}/${image}` : image}`
	);

	img.delivery(format('auto')).delivery(quality('auto'));

	const src = img.toURL();

	return src;
};

export const returnFavicon = (image) => {
	let img = cloudinary.image(
		`${data.cloudinaryConfig.folder ? `${data.cloudinaryConfig.folder}/${image}` : image}`
	);

	img
		.resize(thumbnail().width(16).height(16).gravity(focusOn(face())))
		.roundCorners(max())
		.delivery(format('auto'))
		.delivery(quality('auto'));

	const src = img.toURL();

	return src;
};

export function scrollToElementById(id) {
	if (browser) {
		const element = document.getElementById(id);

		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}
}
