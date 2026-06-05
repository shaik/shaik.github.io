# AGENTS.md

This file provides guidance to AI coding agents (Claude Code, Codex, Gemini, etc.) when working with code in this repository. `CLAUDE.md` is a symlink to this file.

## Overview

This is the root GitHub Pages site for the **personal** GitHub account (`@shaik`, shai.kfir@gmail.com), deployed at **https://shaikfir.com**. It's a single-page portfolio/directory hub linking to other live projects. Pushing to `main` deploys directly via GitHub Pages — there is no build step, bundler, linter, or test suite.

## Domain & Deployment

- **Canonical URL:** https://shaikfir.com (since June 2026). Use this in all links, docs, and metadata — not `shaik.github.io`.
- The custom domain is set via the `CNAME` file in the repo root — do not delete or rename it.
- `shaik.github.io` and `www.shaikfir.com` both 301-redirect to the apex server-side; no client-side redirect script is needed in `index.html`.
- DNS lives on Cloudflare (4 apex A records → GitHub Pages IPs + `www` CNAME, all DNS-only). HTTPS is enforced in the repo's Pages settings.
- Other projects (e.g. `/clockoclocks`) are separate repos still served under `shaik.github.io/<name>` — unaffected by this domain.

**GitHub account:** Use the personal account (`@shaik`), not the work account. Switch with `~/projects/switch-github-account.sh` if needed.

## Running Locally

Pure static files — serve the directory with any static server:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Architecture

Three files, vanilla web stack (no frameworks, no dependencies):

- **`index.html`** — All content lives here. Each project is a hand-written `<article class="project-card featured-card">` block containing: a `.card-glow` div (required for the spotlight effect), an icon SVG, a GitHub source link, domain/title/description, language tags (`.tag tag-js`, `.tag-ts`, etc.), and a "Visit Live App" footer button. To add/edit a project, copy an existing card block and adjust it — keep the structure intact.
- **`style.css`** — Design system built on CSS custom properties defined in `:root` (colors, accent glows, fonts, transitions). Glassmorphic dark theme with fixed background glow elements. Per-tag colors (`.tag-js`, `.tag-ts`, `.tag-react`, ...) and per-icon-wrapper colors are defined here; a new tag or icon type needs a corresponding CSS rule.
- **`script.js`** — Single behavior: tracks the mouse and sets `--x`/`--y` custom properties on each `.project-card`, which `style.css` uses for the radial cursor-spotlight glow.

Keep `README.md`'s featured-projects list in sync when adding or removing project cards.
