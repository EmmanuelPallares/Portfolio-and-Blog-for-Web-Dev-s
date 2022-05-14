//Install the dependencies first of colors npm i tailwind-colors
const colors = require("tailwindcss/colors");
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          redred: "#E93D44",
        },
      },
    },
  },
  purge: false,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: [],
  plugins: [],
};
