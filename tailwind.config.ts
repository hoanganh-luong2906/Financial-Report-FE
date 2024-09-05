import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		gridTemplateColumns: {
			'14': 'repeat(14, minmax(0, 1fr))',
		},
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
		colors: {
			'light-gray': '#F5F6FA',
			white: '#FFFFFF',
			black: '#000000',
			gray: '#A9A9A9',
			'blue-gray': '#6C7B95',
			'light-blue': '#E6F7FF',
			'light-green': '#E6FFFA',
			'light-red': '#FFF5F5',
		},
	},
	plugins: [],
};
export default config;
