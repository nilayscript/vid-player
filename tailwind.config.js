/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'darkPrimary':'#010101',
        'lightGray':'#f2f0ea',
        'darkGray':'#a4a4a4',
        'yellowPrmary':'#edcf5d'
      },
    },
  },
  
  plugins: [],
}