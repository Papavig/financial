/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        pixel: ["Silkscreen", "sans-serif"],
      },
      colors:{
        main: "#000000",
        mainAccent: "#0d0d0d",
        mainText: "#b39c4d",
        btn1: "#768948",
        hbtn1: "#5c6d34",
        btn2: "#34623f",
        hbtn2: "#295333",
      }
    },
  },
  plugins: [],
};
