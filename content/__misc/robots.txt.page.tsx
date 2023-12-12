export const data = {
  permalink: "/robots.txt",
  eleventyExcludeFromCollections: true,
  layout: null,
};

export function render() {
  return `Sitemap: https://catherineknepper.com/sitemap.xml
  User-agent: *
  Disallow:
    `;
}
