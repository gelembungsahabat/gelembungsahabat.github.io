---
name: ui-development
description: "[STEP 1/3 — UI] Build and modify React/TypeScript UI components, page layouts, styles, and sections for this Astro + React portfolio site. Always complete this step before moving to UI Testing (step 2) and Integration Testing (step 3). Use when the user asks about UI, styling, components, layouts, or visual changes."
---

# UI Development Skill

## Workflow

This is **STEP 1 of 3** in the project workflow. Always work on UI first, before UI Testing (step 2) and Integration Testing (step 3). Complete all UI changes before moving on.

You are a UI development specialist for **gelembungsahabat.github.io** — an Astro + React portfolio site. Follow the conventions below when building or modifying UI.

## Architecture

```
src/
├── components/
│   ├── App.tsx                    # Root React app (wraps all sections)
│   ├── App.css                    # Global app styles
│   ├── code-block.tsx             # Reusable code block component
│   ├── sections/                  # Page sections (Hero, About, Skills, etc.)
│   │   ├── index.ts              # Re-exports all sections
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── skills.tsx
│   │   ├── experience.tsx
│   │   ├── articles.tsx
│   │   ├── contact.tsx
│   │   ├── portfolio-list.tsx
│   │   └── styles/
│   │       ├── hero.css
│   │       ├── about.css
│   │       ├── skills.css
│   │       ├── experience.css
│   │       ├── articles.css
│   │       ├── contact.css
│   │       └── portfolio.css
│   ├── pages/
│   │   ├── reactjs/              # React page components for article content
│   │   │   ├── article-wrapper.tsx
│   │   │   ├── basic-aeromodelling.tsx
│   │   │   ├── empty-page.tsx
│   │   │   ├── git-setup.tsx
│   │   │   ├── install-wsl.tsx
│   │   │   └── ssh-setup.tsx
│   │   └── styles/
│   │       └── article.css
│   └── ui/
│       ├── toast.tsx             # Reusable Toast component
│       └── toast.css
├── pages/
│   ├── index.astro               # Homepage (renders <App />)
│   ├── basic-aeromodelling.astro
│   ├── install-wsl.astro
│   ├── git-setup.astro
│   ├── ai-cons.astro
│   ├── htmx.astro
│   ├── ssh-setup.astro
│   └── aseprite.astro
├── data/
│   ├── index.ts                  # Re-exports all data modules
│   ├── article-list-data.tsx
│   ├── experience-data.tsx
│   ├── portfolio-list-data.tsx
│   └── skills-data.tsx
└── assets/
    ├── astro.svg
    └── background.svg
```

## Component Conventions

1. **Use `export function ComponentName()`** (named exports, not default exports for sections)
2. **One component per file**
3. **Colocated CSS** in `./styles/` relative to the component directory
4. **Import icons** from `react-icons/fa` (Font Awesome), `react-icons/si` (Simple Icons), etc.
5. **Use `section` tags** with descriptive class names for all sections
6. **Follow BEM-like naming** for CSS classes (e.g., `.hero-wrapper`, `.hero-header`, `.hero-stats`)
7. **Include `aria-label`** on interactive elements for accessibility
8. **Section re-exports** go in `src/components/sections/index.ts`
9. **Data files** go in `src/data/` and are re-exported via `src/data/index.ts`

## Styling Guidelines

- Use **CSS files** (not CSS-in-JS, not Tailwind)
- Import CSS directly: `import "./styles/component.css"`
- Use CSS custom properties where beneficial
- Ensure responsive design with media queries
- Follow existing color palette and spacing conventions

## Adding a New Section

1. Create the component in `src/components/sections/`
2. Create its CSS in `src/components/sections/styles/`
3. Export from `src/components/sections/index.ts`
4. Import and render in `src/components/App.tsx` inside the `<main>` element
5. Add `<hr />` separators between sections in App.tsx

## Adding a New Article Page

1. Create a `.astro` page in `src/pages/`
2. Create the React content component in `src/components/pages/reactjs/`
3. Use `ArticleWrapper` as the container for article content
4. Reference the page data in `src/data/article-list-data.tsx`

## Key Commands

```bash
pnpm dev         # Start dev server
pnpm build       # Build for production
pnpm preview     # Preview production build
```
