/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: { fontFamily: { montserrat: "Montserrat", poppins: "Poppins" } },
    colors: {
      white: "#fff",
      black: "#000",
      gray: { "100": "#808080", "200": "#242424" },
      brown: "#d90429",
    },
    fontSize: {
      sm: "14px",
      base: "18px",
      lg: "22px",
      xl: "34px",
      "2xl": "53px",
      "3xl": "250px",
    },
  },
  corePlugins: { preflight: false },
};
