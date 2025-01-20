/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bg: '#065868',
        bg: '#26343e',
        primary: '#3ebbd6',
        card: '#fdcb5b',
        // card: '#ccc',
        link: '#8a638e',
        link: '#065868',
        // link: '#3ebbd6'
      }

    },
  },
  plugins: [],
}

