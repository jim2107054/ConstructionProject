/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#fe538d',
        secondary: '#ffb703',
        textColor: '#000',
      }
    },
  },
  plugins: [],
}