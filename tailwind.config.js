/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Times New Roman', 'serif'], 
        cursive: ['Brush Script MT', 'cursive'], 
      }
    },
  },
  plugins: [],
}