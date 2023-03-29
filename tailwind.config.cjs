const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		colors: {
			transparent: 'transparent',
			currentColor: 'currentColor',
			indigo: colors.indigo,
			slate: colors.slate,
			gray: colors.gray,
			white: '#ffffff',
			black: '#000000'
		},
		extend: {
			fontFamily: {
				sans: ['Kumbh Sans', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: []
};
