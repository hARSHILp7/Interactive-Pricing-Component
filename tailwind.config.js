/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope6: ["MANROPE600", "sans-serif"],
        manrope8: ["MANROPE800", "sans-serif"],
      },
    },
  },
  plugins: [],
}