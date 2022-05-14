module.exports = {
  purge: false,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extends: {
      colors: {
        One: "#E93D44",
        Two: "#111823",
        Three: "#222529",
        Four: "#203449",
      },
    },
  },
  plugins: [],
};
