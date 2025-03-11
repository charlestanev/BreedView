import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/APP/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				AppPrimary: '#7D4CDB',
				AppSecondary: '#E4C1F9',
				AppTertiary: '#FAFAFA',
				AppPop: '#FF6B6B',
				AppMutedPop: '#4A4E69',
				background: '#F7F7F7',
				foreground: '#2D2D2D',

				card: {
					DEFAULT: '#FFFFFF',
					foreground: '#333333'
				},
				popover: {
					DEFAULT: '#FFFFFF',
					foreground: '#222222'
				},
				primary: {
					DEFAULT: '#6D28D9',
					foreground: '#F3E8FF'
				},
				secondary: {
					DEFAULT: '#A78BFA',
					foreground: '#FAF5FF'
				},
				muted: {
					DEFAULT: '#E0E0E0',
					foreground: '#616161'
				},
				accent: {
					DEFAULT: '#FF6B6B',
					foreground: '#FFF5F5'
				},
				destructive: {
					DEFAULT: '#E63946',
					foreground: '#FFF'
				},
				border: '#D1D5DB',
				input: '#F3F4F6',
				ring: '#A78BFA',

				gradientStart: "#7D4CDB",
				gradientEnd: "#FF6B6B",

				chart: {
					'1': '#6D28D9',
					'2': '#E63946',
					'3': '#A78BFA',
					'4': '#4A4E69',
					'5': '#FF6B6B'
				}
			},
			fontFamily: {
				sans: ["Poppins", "Inter", "sans-serif"],
			},
			borderRadius: {
				lg: '12px',
				md: '8px',
				sm: '6px'
			},
			boxShadow: {
				soft: '0px 10px 15px -3px rgba(0, 0, 0, 0.1)',
				strong: '0px 10px 25px -3px rgba(0, 0, 0, 0.25)'
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(circle, var(--tw-gradient-stops))",
				"gradient-linear": "linear-gradient(135deg, var(--tw-gradient-stops))",
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};

export default config;
