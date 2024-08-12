// https://docs.astro.build/en/guides/content-collections/#defining-a-collection-schema

import { z, defineCollection } from "astro:content";

const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    summary: z.string(),
    linktext: z.string(),
    published: z.boolean(),
  }),
});

// The key must match the name of the folder
export const collections = {
  projects: projectCollection,
};
