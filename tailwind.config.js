/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: "#333",
        lightGray :"#474747",
        customYellow: "#fcb900",
        textRed: "#ff611d",
        footerBgColor: "#ebebf1",
        dropdownColor: "#f2f2f2",
      },

      animation: {
        fadeIn: "fadeIn 1s ease-out",
        fadeInUp: "fadeInUp 1s ease-out",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },

      boxShadow: {
        customShadow: "inset 0 0 10px white",  // Correct placement under boxShadow key
      },
    },
  },
  plugins: [],
}
