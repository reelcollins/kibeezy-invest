/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
	safelist: [
		'bg-blue-500', 'bg-blue-600', 'bg-blue-700',
		'bg-green-500', 'bg-green-600', 'bg-green-700',
		'bg-purple-500', 'bg-purple-600', 'bg-purple-700',
		'bg-red-500', 'bg-red-600', 'bg-red-700',
		'bg-yellow-500', 'bg-yellow-600', 'bg-yellow-700',
		'bg-indigo-500', 'bg-indigo-600', 'bg-indigo-700',
	],
};
