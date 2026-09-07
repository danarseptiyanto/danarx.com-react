# danarx.com-react — agent guide

Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.


Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.


## Commands

| Command | What |
|---------|------|
| `npm run dev` | Dev server on port 3000 |
| `npm run build` | Production build → `dist/` |
| `npm run lint` | ESLint v9 flat config, lints `**/*.{js,jsx}` |
| `npm run preview` | Preview production build |
| `npx prettier --write src/` | Format with Prettier (tabWidth 4, tailwindcss plugin) |

No test or typecheck scripts exist.

## Project structure

```
src/
  main.jsx          — Entrypoint: creates React Router, mounts app
  App.jsx           — Home page (Hero, Projects, Writings, Tools)
  Pages/            — Route page components
  layouts/          — RootLayout (Navbar + Outlet + Footer)
  components/       — Shared UI components
  contexts/         — ThemeProvider, LocomotiveScrollProvider
  hooks/            — useHashNavigation, useTitle
  blog/             — Markdown posts (gray-matter frontmatter + marked)
```

## Key facts

- **JavaScript** only (no TypeScript). JSX in `.jsx` files.
- **Tailwind CSS v4** — no `postcss.config.js` or `tailwind.config.js`. Configured via `@tailwindcss/vite` plugin and `@import "tailwindcss"` in CSS.
- **Dark mode** uses `.dark` class on `<html>`, defined via `@custom-variant dark (&:where(.dark, .dark *))` in `App.css`.
- **Path alias**: `@/` → `./src/` (configured in both `jsconfig.json` and `vite.config.js`).
- **Routing**: React Router v7 `createBrowserRouter`. SPA fallback via `historyApiFallback: true` (dev) and `public/_redirects` (Netlify) or `.htaccess` (Apache).
- **`no-unused-vars` error** — variables starting with uppercase or underscore (`^[A-Z_]`) are ignored.
- **Blog** — `.md` files in `src/blog/` loaded at build time via Vite raw imports, parsed with `gray-matter` + `marked`.

## Dead / stale code

- `src/Pages/Home.jsx` renders `<p>hehe</p>` — not imported by the router. Do not use.
- Component filenames have a typo: `ButttonFooter`, `ButttonPrimary`, `ButttonSecondary` (triple `t`). Keep consistent if referencing.

## Deploy

- `dist/` is built output (not gitignored).
- `public/_redirects` → Netlify SPA routing.
- `public/.htaccess` → Apache SPA routing.
