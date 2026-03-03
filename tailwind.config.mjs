/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {
      colors: {
        aqua: '#00ffff',
        tomato: '#ff6347',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        righteous: ['Righteous', 'cursive'],
        roboto: ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
