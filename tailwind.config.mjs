/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				intro: {
					'0%': { transform: 'translateY(-100%)' },
					'100%': { transform: 'translateY(0)' },
				},
			},
			animation: {
				intro: 'intro 1s ease-out',
			},
			fontFamily: {
				sans: ['Kanit', 'sans-serif'],
				scrollBehavior: ['smooth'],
			},

		},
	},
	plugins: [],
}
