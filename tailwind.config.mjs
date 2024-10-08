/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'blue-900': '#10172a',
				'blue-800': '#13315C',
				'blue-700': '#134074',
				'blue-600': '#8DA9C4',
				'blue-100': '#EEF4ED',
			},
		},
	},
	plugins: [
		function ({ addComponents, theme }) {
			addComponents({
			  '.text-color': {
				color: theme('colors.blue-600'),
			  },
			  '.header-color': {
				color: theme('colors.blue-100')
			  }
			});
		}
	],
}
