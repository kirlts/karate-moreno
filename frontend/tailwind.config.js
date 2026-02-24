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
                    dark: '#0a0a0a',     // Fondo principal negro
                    red: '#e60000',      // Acentos en rojo intenso
                    gold: '#d4af37',     // Dorado antiguo (tradición)
                    white: '#f7f7f7',    // Off-white para textos
                    gray: '#1a1a1a',     // Gris muy oscuro para superficies secundarias
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Outfit', 'sans-serif'],
            },
            backgroundImage: {
                'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
            },
        },
    },
    plugins: [],
}
