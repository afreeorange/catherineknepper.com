export const data = {
  eleventyExcludeFromCollections: true,
  layout: null,
  permalink: "/sitemap.xml",
};

export function render(data) {
return `<?xml version="1.0" encoding="utf-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${data.collections.all.map(_ => `
      <url>
        <loc>https://catherineknepper.com${ _.page.url }</loc>
        <lastmod>${_.date.toISOString()}</lastmod>
      </url>
    `).join("")}
</urlset>
  `;
}
