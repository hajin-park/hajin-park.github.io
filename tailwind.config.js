/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/index.html",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '8': 'repeat(8, minmax(0, 1fr))',
      }
    },
  },
  plugins: [],
}
