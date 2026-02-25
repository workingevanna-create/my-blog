import rss from '@astrojs/rss';
import { g as getCollection } from '../chunks/_astro_content_CTSv9BZZ.mjs';
export { renderers } from '../renderers.mjs';

async function GET(context) {
  const posts = await getCollection("posts", ({ data }) => !data.draft);
  const sorted = posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return rss({
    title: "你的部落格",
    description: "分享 Web 開發、GEO 優化與極簡設計的深度文章。",
    site: context.site,
    xmlns: {
      dc: "http://purl.org/dc/elements/1.1/"
      // 支援 dc:creator
    },
    items: sorted.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/articles/${post.slug}/`,
      categories: post.data.tags,
      customData: `<dc:creator>你的名字</dc:creator>`
    })),
    // 啟用 stylesheet 讓 RSS 在瀏覽器有可讀的排版
    stylesheet: "/rss/styles.xsl"
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
