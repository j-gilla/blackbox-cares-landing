/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        blackbox: {
          primary: "#00C4CC",
          text: "#000000",
          background: "#FFFFFF",
          soft: "#F2F2F2",
        },
      },
    },
  },
  plugins: [],
};