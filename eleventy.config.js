const markdownIt = require("markdown-it");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = (eleventyConfig) => {
  eleventyConfig.addExtension(["layout.tsx", "page.tsx", "json.tsx"], {
    key: "11ty.js",
  });

  eleventyConfig.setLibrary(
    "md",
    markdownIt({
      html: true,
      typographer: true,
    }),
  );

  eleventyConfig.addWatchTarget("./_site/assets/css/*.css");
  eleventyConfig.addWatchTarget("./_theme/**/*.tsx");

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addCollection((api) =>
    api.getFilteredByGlob(`content/**/*.md`),
  );

  eleventyConfig.addCollection("pagesSortedByNavigationOrder", function (api) {
    const items = api.getAll().sort((a, b) => {
      const left = parseInt(a.data.eleventyNavigation.order);
      const right = parseInt(b.data.eleventyNavigation.order);

      return left > right ? 1 : right > left ? -1 : 0;
    });

    return items;
  });

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
