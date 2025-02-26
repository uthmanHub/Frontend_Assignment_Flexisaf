/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#26343e",
        primary: "#3ebbd6",
        card: "#fdcb5b",
        link: "#065868",
        danger: "#ef4444"
      },

    },
  },
  plugins: [
    "tailwind-scrollbar-hide",
    function ({ addUtilities }) {
      addUtilities({
        ".button": {
          padding: "13px 20px",
          backgroundColor: "#fdcb5b",
          borderRadius: "20px",
        },
        ".bg-gradient-radial": {
          "background-image":
            "radial-gradient(circle, var(--tw-gradient-stops))",
        },
        ".header": {
          fontWeight: "bold",
          fontSize: "24px",
          lineHeigth: "28px",
          color: '#3ebbd6'
        },
      });
    },
  ],
};
