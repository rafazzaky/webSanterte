/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      fontFamily: {
        'canterburry': ['Canterburry', 'sans-serif'],
        'apple': ['Apple', 'sans-serif'] 
      },
      colors: {
        primary: '#171717',
        dark: '#0f172a',
        white: '#FFFFFF',
        secondary: '',
        light: '#404040',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}
