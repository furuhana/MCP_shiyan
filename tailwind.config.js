/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // extracted from Figma
                'custom-bg': '#d6cdc1',
                'custom-green': '#468361',
                'custom-shadow': '#2f6652',
                'custom-text': '#5e9e7b',
                'custom-text-gray': '#96908c',
            },
            fontFamily: {
                sans: ['Inter', 'Noto Sans JP', 'Noto Sans SC', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
