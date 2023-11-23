/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
			  primary: {
				cyan: "hsl(180, 66%, 49%)",
				darkVoilet: "hsl(257, 27%, 26%)",
			  },
			  secondary: {
				red: "hsl(0, 87%, 67%)",
			  },
			  neutral: {
				gray: "hsl(0, 0%, 75%)",
				grayTwo: "hsl(230, 25%, 95%)",
				grayishViolet: "hsl(257, 7%, 63%)",
				veryDarkBlue: "hsl(255, 11%, 22%)",
				veryDarkViolet: "hsl(260, 8%, 14%)",
			  },
			},
			keyframes: {
                'fade-in-down': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(-15px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    },
                },
                
            },
            animation: {
                'fade-in-down': 'fade-in-down 1s ease-out',
            }
		  },
	},

	plugins: [],
}
