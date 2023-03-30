/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      fontFamily: {
        Hanken: ["HankenGrotesk"],
      },
      colors: {
        "one-blue": "#6642FE",
        "two-blue": "#322BEA",
        "main-text-gray": "#BEB5FE",
        "main-text-gray-light": "#FCFBFE",
        "text-dark": "#353B53",
        "reaction-red": "#F55"
      },
    },
  },
  plugins: [],
};
