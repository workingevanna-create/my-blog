import { ImageResponse } from '@vercel/og';
export { renderers } from '../../renderers.mjs';

const prerender = false;
async function GET({ request }) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? "文章標題";
  const desc = searchParams.get("desc") ?? "";
  const truncated = desc.length > 80 ? desc.slice(0, 80) + "…" : desc;
  return new ImageResponse(
    {
      type: "div",
      props: {
        style: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          width: "100%",
          height: "100%",
          padding: "60px",
          background: "#09090b",
          fontFamily: "sans-serif"
        },
        children: [
          {
            type: "p",
            props: {
              style: { color: "#a1a1aa", fontSize: 22, margin: "0 0 16px" },
              children: "你的部落格"
            }
          },
          {
            type: "h1",
            props: {
              style: {
                color: "#fafafa",
                fontSize: 56,
                fontWeight: 700,
                lineHeight: 1.2,
                margin: "0 0 20px"
              },
              children: title
            }
          },
          {
            type: "p",
            props: {
              style: { color: "#71717a", fontSize: 24, lineHeight: 1.5, margin: 0 },
              children: truncated
            }
          }
        ]
      }
    },
    { width: 1200, height: 630 }
  );
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
