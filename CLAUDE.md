# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is **yarn**.

- `yarn dev` — start the Vite dev server
- `yarn build` — type-check (`tsc -b`) then build for production
- `yarn lint` — run ESLint over the repo
- `yarn preview` — serve the production build locally
- `yarn deploy` — build and publish `dist/` to GitHub Pages via `gh-pages`

There is no test runner configured (no test script, no test files). The Jest/Cypress/Playwright names that appear in the code are portfolio *content*, not project dependencies.

## Architecture

A single-page personal portfolio (React 19 + Vite 6 + TypeScript). Bilingual (English/Portuguese) with light/dark mode, deployed to GitHub Pages under the `/my-portifolio` base path. **No backend** — all content is typed data in the locale files.

### Content is data, not JSX

The single most important pattern: **all displayed text lives in `src/locales/{us,br}/index.ts`** as parallel typed objects. Components never hardcode copy.

- `pages/main/content.ts` exposes `useContent()`, which pulls each top-level locale key (`header`, `hero`, `about_me`, ...) via i18next's `t(key, { returnObjects: true })` and casts it to the feature's `*Content` type.
- `Main` (`pages/main/index.tsx`) destructures that object and passes each slice into the matching feature as a `content` prop.
- **When changing any text or section data, edit both `locales/us` and `locales/br`** and keep their shapes identical — the `*Content` types in each feature's `types.ts` are the contract between the locale data and the component.

### Single route, scroll-based navigation

`routes.tsx` defines exactly one route (`/` → `Main`) with `basename: '/my-portifolio'`. React Router is present but there is no real routing. Navigation is **smooth-scroll to section IDs** via `utils/scrollToId.ts` (uses a 72px offset for the fixed header). Header, Hero's "Scroll Down" button, and Footer all scroll to the `id` defined in each section's locale entry.

### Feature / component layout

- `features/*` — one folder per page section (`Hero`, `Introduction`, `AboutMe`, `Expertises`, `Journeys`, `Projects`, `Curiosities`), each with `index.tsx` + `types.ts`. These are page-specific.
- `components/*` — reusable pieces: `Section` (the `max-w-[1224px]` centered container — wrap section content in it), `Header` (renders both `Mobile` and `Desktop`), `Footer`, `Anchor`, `Icon`, `Markdown`.
- `Markdown` renders locale strings that contain HTML/markdown via `react-markdown` + `rehype-raw`, sanitized with `dompurify`. Several locale fields (e.g. `about_me.content`) embed `<br />` and rely on this.

### State (Zustand)

Three stores in `src/stores`:
- `UseDarkModeTheme` — toggles the `dark` class on `document.documentElement`.
- `useCountry` — holds the active country and calls `i18n.changeLanguage()` on switch, which re-renders all content through `useContent`.
- `useAssets` — see below.

### Assets via `import.meta.glob`

`stores/useAssets/getAssets.ts` loads assets through Vite globs rather than direct imports:
- `techs` (SVG) and `flags` (WebP) load **eagerly/synchronously**.
- `images` (jpg/png/webp) load **lazily** via `loadImages()`.

Each asset is keyed by filename without extension. Locale entries reference assets by that `key` (e.g. `{ key: 'about_me', alt: '...' }`), and components resolve the key against the store. `invertIcons` marks tech icons that need color inversion in dark mode.

### Animation

`hooks/useSectionReveal.ts` returns `{ ref, revealed }`. Attach `ref` to a section; `revealed` flips to `true` once ~25% is visible (manual scroll + `getBoundingClientRect`, fires once) and drives the entrance animation. Animations use `motion` (Framer Motion v12).

## Conventions

- **Path aliases** (defined in both `vite.config.ts` and `tsconfig.app.json` — keep them in sync): `@/`, `@features`, `@components`, `@stores`, `@hooks`, `@utils`, `@locales`, `@assets`, `@lib`, `@/types`.
- Styling is **Tailwind CSS 4**. Brand colors use `brand-*` tokens (e.g. `bg-brand-white dark:bg-brand-black`); dark mode is class-based.
- Each feature/component folder follows the `index.tsx` + `types.ts` split; types are named `<Feature>Content` / `<Feature>Props`.
- Prettier runs with `prettier-plugin-tailwindcss` (class sorting) and ESLint enforces `simple-import-sort`, jsx-a11y, and react-hooks rules.
