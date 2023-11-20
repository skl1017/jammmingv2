/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'pc' : {'min': '1515px'},
    },
    extend: {},
  },
  plugins: [],
}