const defaultTheme = require('tailwindcss/defaultTheme');
const typography = require('@tailwindcss/typography');
const lineClamp = require('@tailwindcss/line-clamp');
const forms = require('@tailwindcss/forms');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		container: {
			center: true
		},
		extend: {
			animation: {
				fillBarH: 'fillBarH 0.5s ease-in-out 0.5s 1 forwards',
				fillBarV: 'fillBarV 0.5s ease-in-out 1.25s 1 forwards'
			},
			colors: {
				gray: {
					50: '#E0E5F0',
					100: '#C4CFE3',
					200: '#869BC5',
					300: '#4F6CA6',
					400: '#33466B',
					500: '#161E2E',
					DEFAULT: '#161E2E',
					600: '#121926',
					700: '#0D121C',
					800: '#080B11',
					900: '#05070A'
				},
				white: '#F4F5F7',
				'true-white': '#ffffff',
				primary: {
					50: '#FEEBEC',
					100: '#FDD8D9',
					200: '#FCB1B3',
					300: '#FA898D',
					400: '#F9676C',
					DEFAULT: '#F73F45',
					500: '#F73F45',
					600: '#F00A12',
					700: '#B0070D',
					800: '#760509',
					900: '#3B0204'
				}
			},
			fontFamily: {
				sans: ["'GreycliffCF'", ...defaultTheme.fontFamily.sans],
				serif: ["'Bitter'", ...defaultTheme.fontFamily.serif]
			},
			keyframes: {
				fillBarH: {
					'0%%': { width: '0%' },
					'100%': { width: '100%' }
				},
				fillBarV: {
					'0%%': { height: '0%' },
					'100%': { height: '100%' }
				}
			},
			spacing: {
				18: '4.5rem',
				112: '28rem',
				120: '30rem'
			}
			// typography: (theme) => ({
			// 	DEFAULT: {
			// 		css: {
			// 			'5xl': {
			// 				fontSize: '3.5rem'
			// 			}
			// 		}
			// 	}
			// })
		}
	},
	plugins: [forms, typography, lineClamp]
};

module.exports = config;
