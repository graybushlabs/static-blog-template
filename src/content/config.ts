import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.date(),
		updatedDate: z.coerce.date().optional(),
		preview: z.string(),
	}),
});

export const collections = { blog };
