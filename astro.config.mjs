import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://catherineknepper.com",
  build: {
    assets: "_assets",
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [tailwind(), mdx()],
});
