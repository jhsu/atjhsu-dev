to start a dev server, use `portless blog pnpm run dev` and start it in tmux (use an existing session if possible)

# Blog posts

- New blog posts should be created in `src/data/blog-posts/` as Markdown files, usually one post per `<slug>.md` file.
- Include frontmatter at the top of each post with at least:
  - `title`
  - `slug`
  - `publishDate` (for example: `18 Mar 2026`)
  - `description`
- Use this template:

```md
---
title: Your Post Title
slug: your-post-slug
publishDate: 18 Mar 2026
description: A short one-sentence summary of the post.
---

Write the post body here.
```

- Keep the filename aligned with the slug when possible, e.g. `src/data/blog-posts/your-post-slug.md`.
- If a post has local images/assets, place them in a sibling folder under `src/data/blog-posts/` named after the post slug.

## Writing style

refer to `./WRITING_GUIDE.md` for writing style when writing a blog post.
