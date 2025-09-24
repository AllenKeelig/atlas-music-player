/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E1B3C",   // deep purple
        secondary: "#FF6B6B", // coral red
        accent: "#4ECDC4",    // turquoise
        background: "#F7FFF7" // light background
      },
    },
  },
  plugins: [],
};