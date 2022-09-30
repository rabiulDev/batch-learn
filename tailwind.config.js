/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '600px',
      // => @media (min-width: 600px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
    },
    extend: {
      backgroundImage: {
        'auth-bg': "url('./assets/images/bg.png')",
      },
      fontFamily: {
        'nunito': ['Nunito Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
