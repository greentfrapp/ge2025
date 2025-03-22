import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '*.md',
    }),
    posts: defineCollection({
      type: 'page',
      source: 'posts/*.md',
      schema: z.object({
        date: z.string(),
      }),
    }),
  },
})
