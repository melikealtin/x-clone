// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "TwitterChirp",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        primary: "#E6E9EA",
        secondary: "#71767b",
        tertiary: "#eff3f41a",
        neutral: "#2f3336",
      },
      fontSize: {
        15: "0.938rem",
      },
      boxShadow: {
        box: "rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px",
      },
    },
  },
  plugins: [],
};
