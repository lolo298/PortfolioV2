import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#691AFF',
				secondary: {
					600: '#E7E9EB',
					700: 'rgb(169 169 169 / 0.5)',
					900: '#1E1E1E'
				}
			},
			fontFamily: {
				primary: ['aeoniktrial', ...defaultTheme.fontFamily.sans]
			},
			spacing: {
				'2/1': '200%'
			},
			gridTemplateColumns: {
				'image-3': '11fr 19fr 7fr'
			}
		}
	},
	plugins: []
};
