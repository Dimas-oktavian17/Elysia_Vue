/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./formkit.theme.ts" // <-- add your theme fil
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

