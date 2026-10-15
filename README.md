# My Portfolio

> 🇺🇸 English · [🇧🇷 Português](#português)

Personal portfolio of **Lucas Fernandes Souza** — a bilingual (English/Portuguese) single-page application with light/dark theme, built with React 19, Vite 6, and TypeScript.

🔗 **Live:** https://lucasfernandesbr.github.io/my-portifolio

## Features

- 🌐 **Bilingual** — switch between English (US) and Portuguese (BR) via i18next.
- 🌓 **Light/dark theme** — class-based dark mode with persisted preference and `prefers-color-scheme` detection.
- 📜 **Scroll-based navigation** — smooth scrolling to sections (no real routing).
- ✨ **Entrance animations** — sections reveal their content when they enter the viewport (Framer Motion).
- 📱 **Responsive** — dedicated mobile and desktop layouts.

## Stack

| Area | Technology |
| --- | --- |
| UI | React 19 + TypeScript |
| Build | Vite 6 |
| Styling | Tailwind CSS 4 (class-based dark mode) |
| Animation | Motion (Framer Motion v12) |
| i18n | i18next + react-i18next |
| State | Zustand |
| Markdown | react-markdown + rehype-raw + dompurify |
| Deploy | GitHub Pages (`gh-pages`) |

## Getting started

Prerequisites: **Node.js** and **Yarn**.

```bash
yarn install   # install dependencies
yarn dev       # start the Vite dev server
```

## Scripts

| Command | Description |
| --- | --- |
| `yarn dev` | Start the Vite dev server. |
| `yarn build` | Type-check (`tsc -b`) then build for production. |
| `yarn lint` | Run ESLint over the repo. |
| `yarn preview` | Serve the production build locally. |
| `yarn deploy` | Build and publish `dist/` to GitHub Pages. |

> There is no test runner configured. Names like Jest/Cypress/Playwright that appear in the code are portfolio **content**, not project dependencies.

## Architecture

A single-page application with no backend — all content is **typed data** in the locale files.

### Content is data, not JSX

All displayed text lives in `src/locales/{us,br}/index.ts` as parallel typed objects. Components never hardcode copy.

- `pages/main/content.ts` exposes `useContent()`, which pulls each top-level locale key (`header`, `hero`, `about_me`, ...) via `t(key, { returnObjects: true })` and casts it to the feature's `*Content` type.
- `Main` (`pages/main/index.tsx`) destructures that object and passes each slice into the matching feature as a `content` prop.
- **When changing any text or section data, edit both `locales/us` and `locales/br`** and keep their shapes identical — the `*Content` types in each `types.ts` are the contract between the locale data and the component.

### Single route, scroll-based navigation

`routes.tsx` defines exactly one route (`/` → `Main`) with `basename: '/my-portifolio'`. React Router is present but there is no real routing: navigation is **smooth-scroll to section IDs** via `utils/scrollToId.ts` (72px offset for the fixed header).

### Feature / component layout

- `features/*` — one folder per page section (`Hero`, `Introduction`, `AboutMe`, `Expertises`, `Journeys`, `Projects`, `Curiosities`), each with `index.tsx` + `types.ts`.
- `components/*` — reusable pieces: `Section` (the centered `max-w-[1224px]` container), `Header` (renders both `Mobile` and `Desktop`), `Footer`, `Anchor`, `Icon`, `Markdown`.

### State (Zustand)

Three stores in `src/stores`:

- `useDarkModeTheme` — toggles the `dark` class on `document.documentElement`.
- `useCountry` — holds the active country and calls `i18n.changeLanguage()`, re-rendering all content through `useContent`.
- `useAssets` — loads assets via `import.meta.glob`.

### Assets via `import.meta.glob`

`stores/useAssets/getAssets.ts` loads assets through Vite globs:

- `techs` (SVG) and `flags` (WebP) load **eagerly/synchronously**.
- `images` (jpg/png/webp) load **lazily** via `loadImages()`.

Each asset is keyed by filename without extension. Locale entries reference assets by that `key` (e.g. `{ key: 'about_me', alt: '...' }`).

## Conventions

- **Path aliases** (defined in both `vite.config.ts` and `tsconfig.app.json` — keep them in sync): `@/`, `@features`, `@components`, `@stores`, `@hooks`, `@utils`, `@locales`, `@assets`, `@lib`, `@/types`.
- Brand colors use `brand-*` tokens (e.g. `bg-brand-white dark:bg-brand-black`); dark mode is class-based.
- Each feature/component folder follows the `index.tsx` + `types.ts` split; types are named `<Feature>Content` / `<Feature>Props`.
- Prettier runs with `prettier-plugin-tailwindcss` (class sorting) and ESLint enforces `simple-import-sort`, jsx-a11y, and react-hooks rules.

---

## Português

> [🇺🇸 English](#my-portfolio) · 🇧🇷 Português

Portfólio pessoal de **Lucas Fernandes Souza** — uma single-page application bilíngue (Inglês/Português) com tema claro/escuro, construída com React 19, Vite 6 e TypeScript.

🔗 **Online:** https://lucasfernandesbr.github.io/my-portifolio

### Features

- 🌐 **Bilíngue** — alternância entre Inglês (US) e Português (BR) via i18next.
- 🌓 **Tema claro/escuro** — dark mode baseado em classe, com preferência persistida e detecção de `prefers-color-scheme`.
- 📜 **Navegação por scroll** — rolagem suave até as seções (sem roteamento real).
- ✨ **Animações de entrada** — seções revelam conteúdo ao entrar na viewport (Framer Motion).
- 📱 **Responsivo** — layouts dedicados para mobile e desktop.

### Stack

| Área | Tecnologia |
| --- | --- |
| UI | React 19 + TypeScript |
| Build | Vite 6 |
| Estilização | Tailwind CSS 4 (dark mode por classe) |
| Animação | Motion (Framer Motion v12) |
| i18n | i18next + react-i18next |
| Estado | Zustand |
| Markdown | react-markdown + rehype-raw + dompurify |
| Deploy | GitHub Pages (`gh-pages`) |

### Começando

Pré-requisito: **Node.js** e **Yarn**.

```bash
yarn install   # instala as dependências
yarn dev       # inicia o servidor de desenvolvimento do Vite
```

### Scripts

| Comando | Descrição |
| --- | --- |
| `yarn dev` | Inicia o servidor de desenvolvimento do Vite. |
| `yarn build` | Type-check (`tsc -b`) e build de produção. |
| `yarn lint` | Roda o ESLint no repositório. |
| `yarn preview` | Serve o build de produção localmente. |
| `yarn deploy` | Faz o build e publica `dist/` no GitHub Pages. |

> Não há runner de testes configurado. Nomes como Jest/Cypress/Playwright que aparecem no código são **conteúdo** do portfólio, não dependências do projeto.

### Arquitetura

Single-page application sem backend — todo o conteúdo é **dado tipado** nos arquivos de locale.

#### Conteúdo é dado, não JSX

Todo texto exibido vive em `src/locales/{us,br}/index.ts` como objetos tipados paralelos. Componentes nunca fazem hardcode de texto.

- `pages/main/content.ts` expõe `useContent()`, que puxa cada chave de topo do locale (`header`, `hero`, `about_me`, ...) via `t(key, { returnObjects: true })` e faz cast para o tipo `*Content` da feature.
- `Main` (`pages/main/index.tsx`) desestrutura esse objeto e passa cada fatia para a feature correspondente como prop `content`.
- **Ao alterar qualquer texto ou dado de seção, edite tanto `locales/us` quanto `locales/br`** e mantenha o shape idêntico — os tipos `*Content` em cada `types.ts` são o contrato entre os dados de locale e o componente.

#### Rota única, navegação por scroll

`routes.tsx` define exatamente uma rota (`/` → `Main`) com `basename: '/my-portifolio'`. O React Router está presente, mas não há roteamento real: a navegação é **scroll suave para IDs de seção** via `utils/scrollToId.ts` (offset de 72px para o header fixo).

#### Layout de features / componentes

- `features/*` — uma pasta por seção da página (`Hero`, `Introduction`, `AboutMe`, `Expertises`, `Journeys`, `Projects`, `Curiosities`), cada uma com `index.tsx` + `types.ts`.
- `components/*` — peças reutilizáveis: `Section` (container centralizado `max-w-[1224px]`), `Header` (renderiza `Mobile` e `Desktop`), `Footer`, `Anchor`, `Icon`, `Markdown`.

#### Estado (Zustand)

Três stores em `src/stores`:

- `useDarkModeTheme` — alterna a classe `dark` em `document.documentElement`.
- `useCountry` — mantém o país ativo e chama `i18n.changeLanguage()`, re-renderizando todo o conteúdo via `useContent`.
- `useAssets` — carrega assets via `import.meta.glob`.

#### Assets via `import.meta.glob`

`stores/useAssets/getAssets.ts` carrega assets por meio de globs do Vite:

- `techs` (SVG) e `flags` (WebP) carregam **eagerly/sincronamente**.
- `images` (jpg/png/webp) carregam **lazily** via `loadImages()`.

Cada asset é indexado pelo nome do arquivo sem extensão. Entradas de locale referenciam assets por essa `key` (ex.: `{ key: 'about_me', alt: '...' }`).

### Convenções

- **Path aliases** (definidos em `vite.config.ts` e `tsconfig.app.json` — mantenha sincronizados): `@/`, `@features`, `@components`, `@stores`, `@hooks`, `@utils`, `@locales`, `@assets`, `@lib`, `@/types`.
- Cores de marca usam tokens `brand-*` (ex.: `bg-brand-white dark:bg-brand-black`); dark mode é por classe.
- Cada pasta de feature/componente segue o split `index.tsx` + `types.ts`; tipos são nomeados `<Feature>Content` / `<Feature>Props`.
- Prettier roda com `prettier-plugin-tailwindcss` (ordenação de classes) e o ESLint aplica `simple-import-sort`, jsx-a11y e regras de react-hooks.
