import fs from 'node:fs/promises';

export async function writeDraftPost({ slug, title, publishDate, description, body }) {
  const file = `src/data/blog-posts/${slug}.md`;
  const content = `---\ntitle: ${title}\nslug: ${slug}\npublishDate: ${publishDate}\ndescription: ${description}\n---\n\n${body}\n`;
  await fs.writeFile(file, content, 'utf8');
  return file;
}
