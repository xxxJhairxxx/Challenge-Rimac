/** @format */

export default {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}', // Asegúrate de que Tailwind escanee estos archivos
		'./public/index.html', // Si tienes archivos HTML en el public
	],
	theme: {
		extend: {
			colors: {
				primary: '#509415',
				secundary: '#EDEFFC',
				warning: '#FF1C44',
				success: '#4F4FFF',
				gris: {
					100: '#7981B2',
					200: '#606060',
				},
				dark: {
					100: '#03050F',
					200: '#202020',
				},
			},
			fontFamily: {
				primary: ['var(--font-axiforma)'],
				secundary: ['var(--font-inter)'],
			},
			backgroundImage: {
				'custom-gradient': 'linear-gradient(90deg, rgba(0,244,226,1) 0%, rgba(0,255,127,1) 100%)',
				
			},
			screens: {
				phone: '414px',
				tablet: '768px',
				tabletlg: '960px',
				tabletxl: '1024px',
				laptop: '1200px',
				laptoplg: '1400px',
				desktop: '1700px',
			},
		},
	},
	plugins: [],
};
