import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { generateOpenGraphImage } from 'astro-og-canvas';

const projectRoot = process.cwd();
const postsDir = path.join(projectRoot, 'src/data/blog-posts');
const outputDir = path.join(projectRoot, 'public/open-graph');

const staticPages = [
  {
    route: 'home',
    title: 'Joe Hsu',
    description: 'Notes on building software with AI — what works, what doesn\'t, and the systems around the work.',
  },
  {
    route: 'about',
    title: 'About Joe Hsu',
    description: 'Software engineer in New York writing about building with AI agents.',
  },
  {
    route: 'blog',
    title: 'Writing',
    description: 'Field notes on software, AI agents, and the systems around the work.',
  },
];

function parseFrontmatter(markdown) {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};

  const data = {};
  for (const rawLine of match[1].split('\n')) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const splitIndex = line.indexOf(':');
    if (splitIndex === -1) continue;

    const key = line.slice(0, splitIndex).trim();
    const value = line.slice(splitIndex + 1).trim().replace(/^['\"]|['\"]$/g, '');
    data[key] = value;
  }

  return data;
}

async function getPostPages() {
  const files = await readdir(postsDir);
  const markdownFiles = files.filter((file) => file.endsWith('.md'));
  const pages = [];

  for (const file of markdownFiles) {
    const raw = await readFile(path.join(postsDir, file), 'utf-8');
    const frontmatter = parseFrontmatter(raw);
    if (!frontmatter.slug || !frontmatter.title) continue;

    pages.push({
      route: `blog/${frontmatter.slug}`,
      title: frontmatter.title,
      description: frontmatter.description ?? 'Read the full post on Joe Hsu\'s blog.',
    });
  }

  return pages;
}

function toBuffer(image) {
  if (Buffer.isBuffer(image)) return image;
  if (image instanceof Uint8Array) return Buffer.from(image);
  if (image instanceof ArrayBuffer) return Buffer.from(image);
  if (typeof image === 'string') return Buffer.from(image);
  return Buffer.from([]);
}

async function generateImage(page) {
  const body = await generateOpenGraphImage({
    title: page.title,
    description: page.description,
    logo: {
      path: './public/assets/profile.png',
      size: [104, 104],
    },
    bgGradient: [
      [247, 243, 234],
      [235, 229, 215],
    ],
    border: {
      color: [169, 85, 43],
      width: 14,
      side: 'block-end',
    },
    padding: 68,
    font: {
      title: {
        color: [35, 32, 26],
        size: 82,
        lineHeight: 1.02,
        weight: 'Bold',
      },
      description: {
        color: [92, 86, 75],
        size: 31,
        lineHeight: 1.25,
      },
    },
  });

  const filePath = path.join(outputDir, `${page.route}.png`);
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, toBuffer(body));
}

const postPages = await getPostPages();
const pages = [...staticPages, ...postPages];

await Promise.all(pages.map((page) => generateImage(page)));
