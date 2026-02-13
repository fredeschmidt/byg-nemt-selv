---
name: architecture
description: Maintain and extend the Byg Nemt Selv frontend architecture with lowercase component folders, SCSS-first source files, strict semantic HTML, mobile-first styling, and JavaScript only when strictly necessary.
---

# Architecture Skill

Use this skill when creating or updating frontend pages in this project.

## Core Rules

1. Build with HTML + SCSS by default.
2. Add JavaScript only for behavior HTML/CSS cannot handle.
3. Keep each UI component in `components/<component-name>/` with its own SCSS file.
4. Use lowercase folder names; use kebab-case for multi-word names.
5. Keep page HTML simple and readable.
6. Keep image assets in `images/`.
7. Load `styles/global.css` in frontend pages.
8. Follow mobile-first styling.

## Semantic HTML Enforcement (Strict)

1. Use semantic layout tags (`header`, `main`, `nav`, `section`, `article`, `aside`, `footer`) where appropriate.
2. Use one `h1` per page and maintain heading order without skipping levels.
3. Use `a` for navigation and `button` for actions; never clickable `div`/`span`.
4. Use real list markup (`ul`/`ol` + `li`) for lists.
5. Use `form`, `label`, and correct input types for inputs; every control needs an accessible label.
6. Prefer semantic elements over generic wrappers.
7. Prefer native semantics before ARIA.

## Mobile-First Styling (Strict)

1. Write base styles for mobile first (small screens as default).
2. Scale up with `@media (min-width: ...)` breakpoints.
3. Do not start desktop-first with `max-width` overrides unless unavoidable.
4. Ensure spacing, typography, layout, and touch targets are usable on small screens first.

## SCSS Convention (Strict)

1. Use `@use` in `styles/global.scss` to load component SCSS files.
2. Write SCSS mobile-first; keep media queries close to related selectors when possible.
3. Use nesting for pseudo-classes, pseudo-elements, modifiers, and tightly coupled child selectors.
4. Keep nesting shallow (target max 3 levels). If deeper nesting appears, refactor selector structure.
5. Use clear component naming (BEM-style preferred).
6. Keep component-specific styles inside the component SCSS file.
7. Keep global variables and tokens in `styles/global.scss` unless clearly component-specific.
8. Keep formatting clean: logical groups, consistent spacing, consistent property order.
9. Never manually edit `styles/global.css`. It is generated output.

## Design Tokens (Strict)

1. Define global font-family, font-style tokens (for example weights and line-height), and color tokens in `:root` in `styles/global.scss`.
2. Use `var(...)` tokens in component SCSS instead of hardcoded color/font values.
3. Add new global tokens only when reused or clearly part of the design system.
4. Keep token names semantic (`--color-text-primary`, not `--blue-500` unless palette mapping is intentional).

Example `styles/global.scss` imports:

```scss
@use "../components/header/header";
@use "../components/category-grid/category-grid";
@use "../components/category-card/category-card";
```

## Build Workflow (Required)

- Run one-time build: `npm run scss:build`
- Run watch mode while developing: `npm run dev`
- `styles/global.css` is generated from `styles/global.scss`

## When Extending

1. For a new section, create a new component folder first.
2. Add or extend static markup directly in HTML.
3. Add the component SCSS import to `styles/global.scss`.
4. Avoid inline styles unless strongly justified.
5. Validate semantic structure before finalizing.
6. Validate mobile behavior before desktop behavior.
7. Rebuild styles before finalizing: `npm run scss:build`.
