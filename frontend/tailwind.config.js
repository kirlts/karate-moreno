/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                karate: {
                    // Usando OKLCH para estética Zen / Light Mode
                    white: 'oklch(97.28% 0.005 80.25)', // Zen White (Fondo)
                    dark: 'oklch(14.46% 0 0)',       // Texto / Contraste
                    red: 'oklch(53.24% 0.225 26.15)', // Acentos energéticos
                    gold: 'oklch(76.24% 0.147 84.72)', // Tradición premium
                    gray: 'oklch(90% 0.005 0)',       // Gris suave para superficies light
                }
            },
            fontFamily: {
                sans: ['"Inter"', 'system-ui', 'sans-serif'],
                display: ['"Outfit"', 'system-ui', 'sans-serif'],
            },
            spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
            },
            letterSpacing: {
                tightest: '-0.04em',
                widest: '0.2em',
            },
            backgroundImage: {
                'glass-gradient': 'linear-gradient(135deg, oklch(0% 0 0 / 0.05) 0%, oklch(0% 0 0 / 0.01) 100%)',
                'gold-gradient': 'linear-gradient(to right, oklch(76.24% 0.147 84.72), oklch(60% 0.15 80))',
            },
            animation: {
                'spotlight': 'spotlight 2s ease .75s 1 forwards',
            },
            keyframes: {
                spotlight: {
                    "0%": {
                        opacity: 0,
                        transform: "translate(-72%, -62%) scale(0.5)",
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translate(-50%,-40%) scale(1)",
                    },
                },
            },
        },
    },
    plugins: [],
}
