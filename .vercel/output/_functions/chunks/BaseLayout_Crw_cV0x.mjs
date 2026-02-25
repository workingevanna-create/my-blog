import { c as createAstro, a as createComponent, b as renderTemplate, u as unescapeHTML, d as addAttribute, r as renderComponent, h as renderHead, i as renderSlot } from './astro/server_GG-IueK7.mjs';
import 'piccolore';
/* empty css                          */
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://yourdomain.com");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SEO;
  const {
    title,
    description,
    canonicalUrl = Astro2.url.href,
    ogImage,
    ogType = "website",
    pubDate,
    updatedDate,
    tags = [],
    authorName = "\u4F60\u7684\u540D\u5B57",
    siteName = "\u4F60\u7684\u90E8\u843D\u683C"
  } = Astro2.props;
  const ogImageUrl = ogImage ? new URL(ogImage, Astro2.site).toString() : new URL(
    `/api/og?title=${encodeURIComponent(title)}&desc=${encodeURIComponent(description)}`,
    Astro2.site
  ).toString();
  const resolvedCanonical = (() => {
    try {
      const u = new URL(canonicalUrl);
      if (u.hostname === "localhost" || u.hostname === "127.0.0.1") {
        return new URL(u.pathname + u.search, Astro2.site).toString();
      }
      return u.toString();
    } catch {
      return new URL(canonicalUrl, Astro2.site).toString();
    }
  })();
  const effectiveModified = updatedDate || pubDate;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${Astro2.site}#website`,
        url: Astro2.site?.toString(),
        name: siteName,
        inLanguage: "zh-TW",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${Astro2.site}search?q={search_term_string}`
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Person",
        "@id": `${Astro2.site}#author`,
        name: authorName,
        url: Astro2.site?.toString()
      },
      ...ogType === "article" && pubDate ? [
        {
          "@type": "BlogPosting",
          "@id": `${resolvedCanonical}#article`,
          headline: title,
          description,
          url: resolvedCanonical,
          // ✅ 時間欄位：統一使用 ISO 8601，機器可解析
          datePublished: pubDate,
          dateModified: effectiveModified,
          // ✅ keywords：用於 Entity Linking，以逗號分隔字串
          ...tags.length > 0 && { keywords: tags.join(", ") },
          image: {
            "@type": "ImageObject",
            url: ogImageUrl,
            width: 1200,
            height: 630
          },
          author: { "@id": `${Astro2.site}#author` },
          publisher: { "@id": `${Astro2.site}#website` },
          isPartOf: { "@id": `${Astro2.site}#website` },
          inLanguage: "zh-TW"
        }
      ] : []
    ]
  };
  return renderTemplate(_a || (_a = __template(["<!-- Primary Meta --><title>", '</title><meta name="description"', '><link rel="canonical"', '><meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"><!-- Open Graph --><meta property="og:type"', '><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:site_name"', '><meta property="og:locale" content="zh_TW"><!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', "><!-- Article timestamps -->", "", "", '<!-- JSON-LD --><script type="application/ld+json">', "<\/script>"])), title, addAttribute(description, "content"), addAttribute(resolvedCanonical, "href"), addAttribute(ogType, "content"), addAttribute(resolvedCanonical, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImageUrl, "content"), addAttribute(siteName, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImageUrl, "content"), pubDate && renderTemplate`<meta property="article:published_time"${addAttribute(pubDate, "content")}>`, effectiveModified && renderTemplate`<meta property="article:modified_time"${addAttribute(effectiveModified, "content")}>`, tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`), unescapeHTML(JSON.stringify(jsonLd)));
}, "/Users/shiyiwen/my-blog/src/components/SEO.astro", void 0);

const $$Astro = createAstro("https://yourdomain.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title,
    description,
    ogType = "website",
    pubDate,
    updatedDate,
    canonicalUrl,
    ogImage,
    tags = []
  } = Astro2.props;
  const fontsUrl = "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,700;1,9..144,300&family=Inter:wght@400;500;600&display=swap";
  return renderTemplate`<html lang="zh-TW" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link${addAttribute(fontsUrl, "href")} rel="stylesheet"><link rel="alternate" type="application/rss+xml" title="你的部落格 RSS" href="/rss.xml">${renderComponent($$result, "SEO", $$SEO, { "title": title, "description": description, "ogType": ogType, "pubDate": pubDate?.toISOString(), "updatedDate": updatedDate?.toISOString(), "canonicalUrl": canonicalUrl, "ogImage": ogImage, "tags": tags })}${renderHead()}</head> <body class="bg-white text-zinc-800 antialiased"> <header class="sticky top-0 z-50 border-b border-zinc-100 bg-white/80 backdrop-blur-sm"> <div class="mx-auto flex max-w-2xl items-center justify-between px-6 py-4"> <a href="/" class="text-sm font-semibold tracking-tight text-zinc-900 transition-colors hover:text-zinc-600">
你的部落格
</a> <nav aria-label="主導覽"> <ul class="flex gap-6 text-sm text-zinc-500"> <li><a href="/articles" class="transition-colors hover:text-zinc-900">文章</a></li> <li><a href="/about" class="transition-colors hover:text-zinc-900">關於</a></li> </ul> </nav> </div> </header> <main id="main-content" tabindex="-1"> ${renderSlot($$result, $$slots["default"])} </main> <footer class="mt-24 border-t border-zinc-100 py-10 text-center text-xs text-zinc-400"> <p>&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} 你的名字 · 保留所有權利</p> </footer> </body></html>`;
}, "/Users/shiyiwen/my-blog/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
