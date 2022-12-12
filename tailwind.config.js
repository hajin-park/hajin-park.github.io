/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/index.html",
  ],
  theme: {
    extend: {
      spacing: {
        112: '28rem'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        fadeIn: "fadeIn 1.5s ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      },
      clipPath: {
        "poly-right": "polygon(0 0, 100% 150px, 100% 100%, 0 100%)",
        "poly-left": "polygon(0 150px, 100% 0, 100% 100%, 0 100%)",
      },
    }
  },
  plugins: [require('tailwind-clip-path')],
}
