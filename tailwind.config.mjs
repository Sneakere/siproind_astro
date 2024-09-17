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
				widfull: {
					'0%': { width: '0%' },
					'100%': { width: '100%' },
				}
			},
			animation: {
				intro: 'intro 1s ease-out',
				widfull: 'widfull 3s ease-in-out'
			},
			fontFamily: {
				sans: ['Kanit', 'sans-serif'],
			},
			transitionDuration: {
				'2000': '2000ms',
				'3000': '3000ms'
			}
		}, variants: {
			scrollBehavior: ['smooth'],
		},
	},
	plugins: [],
}
