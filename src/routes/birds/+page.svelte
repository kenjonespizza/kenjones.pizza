<script>
	const exoticBirds = [
		{ name: 'Monk Parakeet', location: 'Florida, Texas', color: 'Bright green', hex: '#32CD32' },
		{ name: 'Red-whiskered Bulbul', location: 'Florida', color: 'Brown and white', hex: '#8B4513' },
		{ name: 'Eurasian Collared-Dove', location: 'Nationwide', color: 'Pale gray', hex: '#D3D3D3' },
		{
			name: 'European Starling',
			location: 'Nationwide',
			color: 'Black with iridescent sheen',
			hex: '#1A1A1A'
		},
		{ name: 'House Sparrow', location: 'Nationwide', color: 'Brown and gray', hex: '#8B7355' },
		{
			name: 'Rose-ringed Parakeet',
			location: 'California, Florida',
			color: 'Bright green',
			hex: '#32CD32'
		},
		{ name: 'Japanese White-eye', location: 'Hawaii', color: 'Olive green', hex: '#6B8E23' },
		{ name: 'Red-vented Bulbul', location: 'Hawaii', color: 'Dark brown', hex: '#654321' },
		{ name: 'Common Myna', location: 'Florida, Hawaii', color: 'Brown and black', hex: '#3E2723' },
		{
			name: 'Mitred Parakeet',
			location: 'California, Florida',
			color: 'Green and red',
			hex: '#228B22'
		},
		{ name: 'Yellow-chevroned Parakeet', location: 'California', color: 'Green', hex: '#228B22' },
		{ name: 'White-rumped Shama', location: 'Hawaii', color: 'Black and orange', hex: '#FF4500' },
		{ name: 'Red-crowned Parrot', location: 'Texas', color: 'Green and red', hex: '#228B22' },
		{ name: 'Scaly-breasted Munia', location: 'California, Texas', color: 'Brown', hex: '#8B4513' },
		{
			name: 'Orange-cheeked Waxbill',
			location: 'Hawaii',
			color: 'Gray and orange',
			hex: '#FFA500'
		},
		{ name: 'Java Sparrow', location: 'Hawaii', color: 'Gray and pink', hex: '#C0C0C0' },
		{ name: 'Common Waxbill', location: 'Hawaii', color: 'Gray and red', hex: '#DC143C' },
		{ name: 'Yellow-fronted Canary', location: 'Hawaii', color: 'Yellow and gray', hex: '#FFD700' },
		{ name: 'Red-masked Parakeet', location: 'California', color: 'Green and red', hex: '#228B22' },
		{ name: 'Saffron Finch', location: 'Hawaii', color: 'Yellow', hex: '#FFD700' }
	];
</script>

<div class="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
	{#each exoticBirds as bird}
		<a
			data-sveltekit-preload
			href="/birds/{bird.name.toLowerCase().replace(/\s+/g, '-')}"
			class="block"
		>
			<div class="rounded-lg bg-white p-4 shadow-md transition-shadow hover:shadow-lg">
				<div class="mb-2 flex items-center gap-3">
					<h3 class="text-primary text-xl font-bold">{bird.name}</h3>
					<svg width="24" height="24" viewBox="0 0 24 24">
						<circle cx="12" cy="12" r="10" fill={bird.hex} />
					</svg>
				</div>
				<p class="text-gray-600">Location: {bird.location}</p>
				<p class="text-gray-600">Color: {bird.color}</p>
			</div>
		</a>
	{/each}
</div>
