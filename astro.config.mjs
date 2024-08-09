import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkSlug from "remark-slug";

// https://astro.build/config
export default defineConfig({
  site: "https://hhackerman.com",
  integrations: [tailwind(), mdx(), react()],
  markdown: {
    remarkPlugins: [
      remarkSlug,
      [remarkToc, { heading: "Table of Contents", maxDepth: 2 }],
    ],
    rehypePlugins: [],
  },
});
