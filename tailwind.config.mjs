/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
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
      // fontFamily: {
      //   sans: ["'096A0A1D-34C4-4386-8FE0-5990B1DCC981'"],
      // },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
