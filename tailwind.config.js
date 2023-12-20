/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        firaMono: ['Fira Mono'],
        firaSans: ['Fira Sans'],
        firaCode: ['Fira Code']
      },
      screens: {
        'hp': '576px',
        'mini': '320px'
      },
    },
  },
  plugins: [],
}