import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './src/assets/projects.json'],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#f4f2ff',
					100: '#ebe7ff',
					200: '#d9d2ff',
					300: '#beaeff',
					400: '#9e80ff',
					500: '#8419ff',
					DEFAULT: '#691aff',
					600: '#691aff',
					700: '#6416eb',
					800: '#5412c5',
					900: '#4611a1',
					950: '#29076e'
				},
				secondary: {
					50: '#f6f6f6',
					100: '#e7e7e7',
					200: '#d1d1d1',
					300: '#b0b0b0',
					400: '#888888',
					500: '#6d6d6d',
					600: '#5d5d5d',
					700: '#4f4f4f',
					800: '#454545',
					900: '#3d3d3d',
					950: '#1e1e1e'
				}
			},
			fontFamily: {
				primary: ['Inter', ...defaultTheme.fontFamily.sans]
			},
			spacing: {
				'2/1': '200%',
				'3/2': '150%',
				'4/3': '133.333%',
				'hscreen-1/2': '50vh',
				'wscreen-1/2': '50vw'
			},
			gridTemplateColumns: {
				'image-3': '11fr 19fr 7fr',
				'experience': '1fr 3fr 1fr',
			},
			maxWidth: {
				'1/2': '50%',
			},
		}
	},
	plugins: []
};
