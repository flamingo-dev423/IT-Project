/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
  
    extend: {
      backgroundImage: {
        'hero-pattern' : "url('../assets/bg-curvy-desktop.svg')",
        'hero-pattern-mobile' : "url('../assets/bg-curvy-mobile.svg')",
      }
    },
  },
  plugins: [],
}
