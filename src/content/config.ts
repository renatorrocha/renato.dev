import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        excerpt: z.string(),
        lang: z.enum(["en-US", "pt-BR"]),
        date: z.string(),
        tags: z.array(z.string()),
        image: z.string().optional(),
    }),
});

export const collections = {
    posts: postsCollection,
};
