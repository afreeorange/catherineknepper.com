/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./_theme/**/*.{tsx,html}", "./content/**/*.{tsx,html}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        sans: ["'096A0A1D-34C4-4386-8FE0-5990B1DCC981'"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
