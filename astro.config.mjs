// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://my-blog-dun-eight.vercel.app/', // 記得換成你的網址
  output: 'server',
  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()], // ← Tailwind v4 改放在這裡
  },

  integrations: [
    mdx(),
    sitemap(),
  ],
});
