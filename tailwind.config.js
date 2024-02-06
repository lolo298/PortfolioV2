/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#691AFF',
				secondary: {
					700: 'rgb(169 169 169 / 0.5)',
					900: '#1E1E1E'
				}
			}
		}
	},
	plugins: []
};
