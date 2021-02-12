module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.3)",
    },
    fontFamily: {
      ledCalculator: ["LEDCalculator"],
    },
    extend: {},
  },
  variants: {
    extend: {},
    margin: ["last", "first"],
  },
  plugins: [],
};
