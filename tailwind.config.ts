import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: "#9673ad",
                secondary: "#63a8c6",
                accent: "#88b4af",
                offBlack: "#0d0d0d",
                
            },
            fontFamily: {
                serif: ['var(--font-playfair-display)'],
                sans: ['var(--font-montserrat)'],
            },
            gridTemplateColumns: {
                24: 'repeat(24, minmax(0, 1fr))',
            },
            gridTemplateRows: {
                16: 'repeat(16, minmax(0, 1fr))',
            },
        },
    },
    plugins: [],
} satisfies Config;
