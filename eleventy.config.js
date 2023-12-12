const markdownIt = require("markdown-it");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = (eleventyConfig) => {
  eleventyConfig.addExtension(["layout.tsx", "page.tsx", "json.tsx"], {
    key: "11ty.js",
  });

  eleventyConfig.setLibrary("md", markdownIt({
    html: true,
    typographer: true,
  }));

  eleventyConfig.addWatchTarget("./_site/assets/css/*.css");
  eleventyConfig.addWatchTarget("./_theme/**/*.tsx");

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addCollection((api) =>
    api.getFilteredByGlob(`content/**/*.md`)
  );

  eleventyConfig.ignores.add("README.md");
  eleventyConfig.addPassthroughCopy({ "_theme/assets": "assets" });

  return {
    dir: {
      data: "_data",
      layouts: "_theme/layouts",
      output: "_site",
    },
  };
};
