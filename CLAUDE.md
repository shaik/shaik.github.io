# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is the root GitHub Pages site for the **personal** GitHub account (`@shaik`, shai.kfir@gmail.com), deployed at https://shaik.github.io. It's a single-page portfolio/directory hub linking to other live projects. Pushing to `main` deploys directly via GitHub Pages — there is no build step, bundler, linter, or test suite.

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
