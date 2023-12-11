/**
 * https://github.com/tailwindlabs/tailwindcss/issues/4995#issuecomment-989930070
 */
const postcss = require("postcss");

const plugins = {
  prod: [
    {
      postcssPlugin: "grouped",
      Once(root, { result }) {
        return postcss([require("postcss-import")]).process(root, result.opts);
      },
    },
    require("@tailwindcss/nesting"),
    require("tailwindcss"),
    require("autoprefixer"),
  ],

  dev: {
    "postcss-import": {},
    "@tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},
  },
};

if (process.env.CI) {
  plugins.push(require("cssnano"));
}

module.exports = {
  plugins: process.env.CI ? plugins.prod : plugins.dev,
};
