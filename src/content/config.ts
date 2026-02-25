// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content', // 'content' = .md / .mdx；改 'data' 則為純 JSON/YAML
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1).max(120),
      description: z.string().min(1).max(300),
      pubDate: z.coerce.date(),                  // 支援 "2025-02-20" 字串自動轉 Date
      updatedDate: z.coerce.date().optional(),
      image: z
        .object({
          src: image(),                           // Astro image() 提供本地圖片型別安全
          alt: z.string(),
          caption: z.string().optional(),
        })
        .optional(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),          // 草稿控制
      canonicalUrl: z.string().url().optional(),  // 轉載文章可指定原始網址
    }),
});

export const collections = { posts };
