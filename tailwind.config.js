/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
],
  theme: {
    extend: {
      colors: {
        primary: "#1B1D31",
        secondary: "#24253C",
        terce: "#B7002C"
      }
    },
    fontFamily: {
        sans: ["Nunito", "Arial", "sans-serif"]
    },
  },
  plugins: [],
}

