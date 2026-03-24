# Blog issue to PR workflow

This repo keeps published posts in `src/data/blog-posts/` as one Markdown file per post slug.

## Flow

1. A GitHub issue is opened with the post idea, title, and source notes.
2. GitHub Actions sends the issue payload to a Cloudflare Worker.
3. The Worker starts a Cloudflare Sandbox session for the issue.
4. The sandbox researches the topic, writes a draft post, and saves it as `src/data/blog-posts/<slug>.md`.
5. The Worker opens a branch and pull request with the draft and any local assets.

## Post layout

- Markdown file: `src/data/blog-posts/<slug>.md`
- Asset folder: `src/data/blog-posts/<slug>/`
- Frontmatter should include `title`, `slug`, `publishDate`, and `description`.

## Writing voice

Use the existing blog voice from `WRITING_GUIDE.md`: grounded, specific, lightly enthusiastic, and practical.

## Implementation notes

- Keep the GitHub Actions job thin.
- Keep credentials in the Worker, not the sandbox.
- Use the issue number as the idempotency key.
- Ignore bot-authored events to avoid loops.
