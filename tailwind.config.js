/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        poppins: ['Poppins', 'Helvetica', 'Arial', 'sans-serif'],
      },
      backgroundColor:{
        'primary':'#fefbf6'
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '968px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1255px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1440px',
        // => @media (min-width: 1536px) { ... }
      },
      fontSize: {
        'custom': ['50.25926px', 'calc(10.25926px+ 1.48148vw)'],
        'custom-sm': ['22.14815px', 'calc(22.14815px + 1.2037vw)'],
      },
      

    },
  },
  plugins: [],
}