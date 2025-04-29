// tailwind.config.js
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        italianno: ["Italianno", "cursive"],
        italiana: ["Italiana", "sans-serif"],
      },
      colors: {
        cream: {
          500: "#FCFAF6", // Replace with your desired cream color hex code
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
