/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sacramento: ["Sacramento", "cursive", 'sans-serif'],
        visuelt: ["Visuelt", "sans-serif"],
      },
    },
  },
  plugins: [],
}
