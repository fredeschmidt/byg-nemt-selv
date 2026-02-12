---
name: architecture
description: Maintain and extend the Byg Nemt Selv frontend architecture with lowercase component folders, SCSS-first source files, strict semantic HTML, mobile-first styling, and JavaScript only when strictly necessary.
---

# Architecture Skill

Use this skill when creating or updating frontend pages in this project.

## Current Project Structure

```text
.
├── index.html
├── boernefamilie.html
├── lille-entre.html
├── smal-gang.html
├── images/
│   ├── lille-entre.jpg
│   ├── bornefamilie.jpg
│   └── smal-gang.jpg
├── components/
│   ├── header/
│   │   └── header.scss
│   ├── category-grid/
│   │   └── category-grid.scss
│   └── category-card/
│       └── category-card.scss
├── styles/
│   ├── global.scss
│   └── global.css   (generated)
└── package.json
```

## Rules To Follow

1. Keep each UI component in its own folder under `components/`.
2. Component folder names must use lowercase letters only.
3. Use kebab-case for multi-word component folder names (for example `category-grid`).
4. Each component should have its own SCSS file.
5. Use HTML and SCSS by default.
6. Never add JavaScript unless it is strictly necessary for behavior that HTML/CSS cannot handle.
7. Keep page HTML files simple and readable.
8. Frontend must load `styles/global.css`.
9. Keep image assets in `images/`.
10. All styling must follow a mobile-first approach.

## Semantic HTML Enforcement (Strict)

These rules are mandatory.

1. Use semantic layout tags: `header`, `main`, `nav`, `section`, `article`, `aside`, `footer`.
2. Use one `h1` per page; follow heading hierarchy (`h1` -> `h2` -> `h3`) without skipping levels.
3. Use `a` for navigation, and `button` for actions. Never use clickable `div`/`span`.
4. Wrap grouped links in `nav` where it is navigation.
5. Use `ul`/`ol` + `li` for lists. Never fake lists with paragraph stacks.
6. Use `figure`/`figcaption` where image caption context exists.
7. Use `form`, `label`, and correct input types for user input. Every control must have an accessible label.
8. Use `strong`/`em` for meaning, not purely visual styling.
9. Do not use generic wrappers when a semantic element fits better.
10. Avoid ARIA when native semantic HTML already provides the meaning.

## Mobile-First Styling (Strict)

These rules are mandatory.

1. Write base styles for mobile first (small screens as default).
2. Scale up with `@media (min-width: ...)` breakpoints.
3. Do not start with desktop styles and patch down with `max-width` unless absolutely required.
4. Keep spacing, typography, and layout readable at small widths before adding desktop enhancements.
5. Ensure touch targets and interactive elements remain usable on mobile.

## SCSS Convention (Strict)

These rules are mandatory and represent the preferred SCSS way of building in this project.

1. Use `@use` in `styles/global.scss` to load component SCSS files.
2. Write SCSS mobile-first and place media queries inside the relevant selector block whenever possible.
3. Use nesting for pseudo-classes, pseudo-elements, modifiers, and tightly coupled child selectors.
4. Keep nesting shallow (target max 3 levels). If deeper nesting appears, refactor selector structure.
5. Follow clear component naming (BEM-style classes are preferred for readability and scalability).
6. Keep component-specific styles inside the component SCSS file.
7. Keep global variables/tokens in `styles/global.scss` unless they clearly belong to one component.
8. Keep formatting clean and readable: logical grouping, blank lines between groups, and consistent property order.
9. Never manually edit `styles/global.css`. It is generated output.

Example `styles/global.scss` imports:

```scss
@use "../components/header/header";
@use "../components/category-grid/category-grid";
@use "../components/category-card/category-card";
```

## Build Workflow (Required)

- Run one-time build: `npm run scss:build`
- Run watch mode while developing: `npm run dev`
- `styles/global.css` must always be generated from `styles/global.scss`

## JavaScript Policy

- Do not introduce JS for static layout, navigation, or styling.
- Add JS only for real interactivity/state/logic that cannot be solved with semantic HTML and CSS.
- If JS is required, keep it minimal and scoped to one component.

## When Extending

- For a new section, create a new component folder first.
- Use lowercase naming for all new component folder names.
- Add/extend markup directly in HTML when static.
- Add its SCSS import to `styles/global.scss`.
- Avoid inline styles unless there is a strong reason.
- Validate semantic structure before finalizing changes.
- Validate mobile behavior first, then desktop.
- Rebuild styles before finalizing (`npm run scss:build`).
