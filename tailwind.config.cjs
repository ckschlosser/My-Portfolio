/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				mainOrange: '#EB5E28',
				mainWhite: '#FFFCF2',
				mainGray: '#252322',
				lighterGray: '#555249',
				cream: '#CCC5B9'
			}
		},
		listStyleType: {
			roman: 'upper-roman'
		}
	},
	plugins: []
};
