---
name: architecture
description: Maintain and extend the Byg Nemt Selv frontend architecture with lowercase component folders, CSS-first structure, and JavaScript only when strictly necessary.
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
│   │   └── header.css
│   ├── category-grid/
│   │   └── category-grid.css
│   └── category-card/
│       └── category-card.css
└── styles/
    └── global.css
```

## Rules To Follow

1. Keep each UI component in its own folder under `components/`.
2. Component folder names must use lowercase letters only.
3. Use kebab-case for multi-word component folder names (for example `category-grid`).
4. Each component should have its own CSS file.
5. Use HTML and CSS by default.
6. Never add JavaScript unless it is strictly necessary for behavior that HTML/CSS cannot handle.
7. Keep page HTML files simple and readable.
8. Import component styles in `styles/global.css`.
9. In page HTML, include only `styles/global.css` as stylesheet.
10. Keep image assets in `images/`.

## Styling Convention

Add component stylesheet imports at the top of `styles/global.css`, for example:

```css
@import url("../components/header/header.css");
@import url("../components/category-grid/category-grid.css");
@import url("../components/category-card/category-card.css");
```

## JavaScript Policy

- Do not introduce JS for static layout, navigation, or styling.
- Add JS only for real interactivity/state/logic that cannot be solved with semantic HTML and CSS.
- If JS is required, keep it minimal and scoped to one component.

## When Extending

- For a new section, create a new component folder first.
- Use lowercase naming for all new component folder names.
- Add/extend markup directly in HTML when static.
- Add its stylesheet import to `styles/global.css`.
- Avoid inline styles unless there is a strong reason.
