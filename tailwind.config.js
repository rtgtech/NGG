/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: "#FF4D94", // Playful Pink
                "background-light": "#F0F7FF", // Soft Sky Blue
                "background-dark": "#0F172A", // Deep Midnight
                "card-light": "#FFFFFF",
                "card-dark": "#1E293B",
                "accent-yellow": "#FFD93D",
                "accent-green": "#6BCB77",
                "accent-blue": "#4D96FF",
            },
            fontFamily: {
                display: ["Fredoka", "sans-serif"],
                body: ["Quicksand", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "1.5rem",
                "xl": "2.5rem",
            },
            boxShadow: {
                'chunky': '0 8px 0 0 rgba(0,0,0,0.1)',
                'chunky-hover': '0 4px 0 0 rgba(0,0,0,0.1)',
                'inner-soft': 'inset 0 4px 8px 0 rgba(0,0,0,0.05)',
            }
        },
    },
    plugins: [],
}
