/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./_theme/**/*.{tsx,html}", "./content/**/*.{tsx,html}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        backgroundDark: "var(--color-background-dark)",
        highlight: "var(--color-highlight)",
        highlightLight: "var(--color-highlight-light)",
        highlightprimary: "var(--color-highlight-primary)",
        text: "var(--color-text)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
      },
      fontFamily: {
        sans: ["'096A0A1D-34C4-4386-8FE0-5990B1DCC981'"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
