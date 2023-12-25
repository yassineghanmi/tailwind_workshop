/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      container: {
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1580px",
        },
      },
      colors: {
        primary: "#314584",
        secondary: "#ff3946",
        tertiary: "#6e757a",
      },
      fontFamily: {
        body: ["Work Sans"],
      },
      fontSize: {
        cardParaSize: "15px",
        textSize: "18px",
        navSize: "24px",
        cardSize: "28px",
        titleSize: "45px",
        footerSize: "49px",
        heroSize: "74px",
      },
    },
  },
  plugins: [],
};
