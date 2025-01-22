/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bg: '#26343e',
        primary: '#3ebbd6',
        card: '#fdcb5b',
        link: '#065868'
      }
    },
  },
  plugins: [],
}

