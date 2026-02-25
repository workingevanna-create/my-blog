// src/pages/rss.xml.ts
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export const prerender = true;

export async function GET(context: APIContext) {
  const posts = await getCollection('posts', ({ data }) => !data.draft);

  // 依發佈日期由新到舊排序
  const sorted = posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: '你的部落格',
    description: '分享 Web 開發、GEO 優化與極簡設計的深度文章。',
    site: context.site!,
    xmlns: {
      dc: 'http://purl.org/dc/elements/1.1/',  // 支援 dc:creator
    },
    items: sorted.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/articles/${post.slug}/`,
      categories: post.data.tags,
      customData: `<dc:creator>你的名字</dc:creator>`,
    })),
    // 啟用 stylesheet 讓 RSS 在瀏覽器有可讀的排版
    stylesheet: '/rss/styles.xsl',
  });
}
