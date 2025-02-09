/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Nunito"],
      },
      colors: {
        primary: "#004e98",
        secondary: {
          100: "#ffb685",
          200: "#ff6c0a",
        },
      },
    },
    plugins: [],
  },
};
