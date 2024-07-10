/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  important: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.{html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Patrick Hand SC", "cursive"],
        serif: ["Concert One", "sans-serif"],
        mono: ["Courier Prime", "monospace"]
      }
    },
  },
  plugins: [],
  prefix: 'tw-'
 }
 
