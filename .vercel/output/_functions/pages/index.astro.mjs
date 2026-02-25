import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_GG-IueK7.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Crw_cV0x.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://yourdomain.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = [
    {
      slug: "getting-started-with-astro",
      title: "\u7528 Astro \u6253\u9020\u6975\u901F\u7DB2\u7AD9",
      excerpt: "\u63A2\u7D22 Astro \u7684 Islands Architecture\uFF0C\u5982\u4F55\u8B93\u4F60\u7684\u7DB2\u7AD9\u5728 Core Web Vitals \u62FF\u5230\u6EFF\u5206\u3002",
      date: "2025-02-20",
      category: "\u958B\u767C",
      readingTime: "5"
    },
    {
      slug: "geo-optimization-guide",
      title: "GEO \u512A\u5316\u6307\u5357\uFF1A\u8B93 AI \u770B\u61C2\u4F60\u7684\u5167\u5BB9",
      excerpt: "Generative Engine Optimization \u662F SEO \u7684\u4E0B\u4E00\u500B\u6F14\u5316\u3002\u672C\u6587\u62C6\u89E3\u7D50\u69CB\u5316\u6578\u64DA\u8207\u8A9E\u610F\u5BEB\u4F5C\u7684\u6838\u5FC3\u6280\u5DE7\u3002",
      date: "2025-02-10",
      category: "\u884C\u92B7",
      readingTime: "8"
    },
    {
      slug: "tailwind-v4-new-features",
      title: "Tailwind CSS v4 \u65B0\u529F\u80FD\u5168\u89E3\u6790",
      excerpt: "\u5F9E CSS-first configuration \u5230\u5168\u65B0\u7684 theme() \u51FD\u6578\uFF0C\u5E36\u4F60\u5FEB\u901F\u4E0A\u624B v4 \u7684\u91CD\u5927\u6539\u8B8A\u3002",
      date: "2025-01-28",
      category: "\u8A2D\u8A08",
      readingTime: "6"
    }
  ];
  const formatDate = (d) => new Date(d).toLocaleDateString("zh-TW", { month: "long", day: "numeric" });
  const categoryColor = {
    "\u958B\u767C": "bg-blue-50 text-blue-600",
    "\u884C\u92B7": "bg-violet-50 text-violet-600",
    "\u8A2D\u8A08": "bg-amber-50 text-amber-600"
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "\u4F60\u7684\u90E8\u843D\u683C \xB7 \u6280\u8853 \xD7 \u8A2D\u8A08 \xD7 \u601D\u8003", "description": "\u5206\u4EAB Web \u958B\u767C\u3001GEO \u512A\u5316\u8207\u6975\u7C21\u8A2D\u8A08\u7684\u6DF1\u5EA6\u6587\u7AE0\u3002\u6BCF\u7BC7\u90FD\u503C\u5F97\u6162\u6162\u8B80\u3002" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative overflow-hidden border-b border-zinc-100"> <!-- 背景裝飾光暈 --> <div class="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px]
                bg-gradient-to-br from-violet-100 via-blue-50 to-transparent
                rounded-full blur-3xl opacity-60"></div> <div class="relative mx-auto max-w-2xl px-6 pt-24 pb-20"> <!-- 狀態標籤 --> <div class="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full
                  border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-500 shadow-sm"> <span class="size-1.5 rounded-full bg-emerald-400"></span>
持續更新中
</div> <h1 class="animate-fade-up animation-delay-100
                 text-5xl font-bold leading-[1.15] tracking-tight text-zinc-900 sm:text-6xl">
技術．設計．<br> <span class="italic font-light text-zinc-400">思考的軌跡</span> </h1> <p class="animate-fade-up animation-delay-200
                mt-6 text-lg leading-relaxed text-zinc-500 max-w-lg">
這裡記錄我在 Web 開發路上的深度探索——從架構設計到 AI 時代的內容優化，每篇文章都力求有料、有觀點。
</p> <div class="animate-fade-up animation-delay-300 mt-8 flex items-center gap-4"> <a href="/articles" class="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white
                  hover:bg-zinc-700 transition-colors">
閱讀文章
</a> <a href="/rss.xml" class="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-zinc-700 transition-colors"> <svg class="size-4" viewBox="0 0 24 24" fill="currentColor"> <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19.01 7.38 20 6.18 20C4.98 20 4 19.01 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1z"></path> </svg>
RSS
</a> </div> </div> </section>  <section class="mx-auto max-w-2xl px-6 py-16"> <div class="mb-10 flex items-center justify-between"> <h2 class="text-xs font-semibold uppercase tracking-widest text-zinc-400">最新文章</h2> <a href="/articles" class="text-xs text-zinc-400 hover:text-zinc-700 transition-colors">
查看全部 →
</a> </div> <ol class="space-y-2"> ${posts.map((post, i) => renderTemplate`<li> <a${addAttribute(`/articles/${post.slug}`, "href")} class="group flex items-start gap-4 rounded-2xl p-5
                   hover:bg-zinc-50 transition-colors"> <!-- 編號 --> <span class="mt-0.5 min-w-[1.75rem] text-sm font-light tabular-nums text-zinc-300
                         group-hover:text-zinc-400 transition-colors"> ${String(i + 1).padStart(2, "0")} </span> <!-- 內容 --> <div class="flex-1 min-w-0"> <div class="mb-1.5 flex flex-wrap items-center gap-2"> <span${addAttribute(`rounded-full px-2.5 py-0.5 text-xs font-medium
                              ${categoryColor[post.category] ?? "bg-zinc-100 text-zinc-500"}`, "class")}> ${post.category} </span> <span class="text-xs text-zinc-400">${formatDate(post.date)}</span> <span class="text-xs text-zinc-300">${post.readingTime} 分鐘閱讀</span> </div> <h3 class="text-base font-semibold text-zinc-900 group-hover:text-violet-600
                         transition-colors leading-snug"> ${post.title} </h3> <p class="mt-1 text-sm leading-relaxed text-zinc-500 line-clamp-2"> ${post.excerpt} </p> </div> <!-- 箭頭 --> <span class="mt-1 text-zinc-200 group-hover:text-violet-400
                         group-hover:translate-x-1 transition-all">
→
</span> </a> </li>`)} </ol> </section>  <section class="mx-auto max-w-2xl px-6 pb-24"> <div class="rounded-3xl bg-zinc-900 px-8 py-10 text-center"> <p class="mb-1 text-xs font-medium uppercase tracking-widest text-zinc-500">電子報</p> <h2 class="mt-2 text-2xl font-bold text-white">不錯過任何一篇</h2> <p class="mt-3 text-sm text-zinc-400">新文章發布時直接寄到你的信箱，沒有廣告，隨時可退訂。</p> <form class="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-center"> <input type="email" placeholder="your@email.com" class="rounded-full border border-zinc-700 bg-zinc-800 px-4 py-2.5
                 text-sm text-white placeholder-zinc-500
                 focus:outline-none focus:ring-2 focus:ring-violet-500 sm:w-64"> <button type="submit" class="rounded-full bg-violet-500 px-5 py-2.5 text-sm font-medium text-white
                 hover:bg-violet-400 transition-colors">
訂閱
</button> </form> </div> </section> ` })}`;
}, "/Users/shiyiwen/my-blog/src/pages/index.astro", void 0);

const $$file = "/Users/shiyiwen/my-blog/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
