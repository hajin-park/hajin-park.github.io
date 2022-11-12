/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/index.html",
  ],
  theme: {
    extend: {
      transitionDuration: { 
        '2000': '2000ms',
      },
      keyframes: { 
        scrollText: {
          '0%': { transform: 'translateX(0)'},
          '100%': { transform: 'translateX(150vw)'}
        }
      },
      animation: {
        'scroll-text-1': 'scrollText 14s linear infinite',
        'scroll-text-2': 'scrollText 18s linear infinite',
      }
    },
  },
  plugins: [],
}
