import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const prerender = true;

const escapeXml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

export const GET: APIRoute = async ({ site }) => {
  const base = (site ?? new URL('https://atjhsu.dev')).href.replace(/\/$/, '');

  const posts = (await getCollection('posts')).sort(
    (a, b) => new Date(b.data.publishDate).valueOf() - new Date(a.data.publishDate).valueOf(),
  );

  const items = posts
    .map((post) => {
      const url = `${base}/blog/${post.data.slug}`;
      const pubDate = new Date(post.data.publishDate).toUTCString();
      return [
        '    <item>',
        `      <title>${escapeXml(post.data.title)}</title>`,
        `      <link>${escapeXml(url)}</link>`,
        `      <guid isPermaLink="true">${escapeXml(url)}</guid>`,
        `      <pubDate>${pubDate}</pubDate>`,
        `      <description>${escapeXml(post.data.description)}</description>`,
        '    </item>',
      ].join('\n');
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Joe Hsu</title>
    <link>${escapeXml(base)}/</link>
    <description>Notes on building software with AI — what works, what doesn't, and the systems around the work.</description>
    <language>en-us</language>
    <atom:link href="${escapeXml(base)}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
