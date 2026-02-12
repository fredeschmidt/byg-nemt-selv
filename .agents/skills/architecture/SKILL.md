---
name: architecture
description: Maintain and extend the Byg Nemt Selv frontend architecture with component folders, per-component CSS/JS, and central stylesheet imports.
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
├── components/
│   ├── header/
│   │   ├── header.css
│   │   └── header.js
│   ├── category-grid/
│   │   ├── category-grid.css
│   │   └── category-grid.js
│   └── category-card/
│       └── category-card.css
├── data/
│   └── categories.js
├── js/
│   └── main.js
└── styles/
    └── global.css
```

## Rules To Follow

1. Keep each UI component in its own folder under `components/`.
2. Component folder names must use lowercase letters only.
3. Use kebab-case for multi-word component folder names (for example `category-grid`).
4. Each component should have its own CSS file.
5. Add a JS file per component when behavior/init logic is needed.
6. Keep page HTML files clean and minimal (mount points + script include).
7. Import component styles in `styles/global.css`.
8. In page HTML, include only `styles/global.css` as stylesheet.
9. Keep shared/static content in `data/` and app entry files in `js/`.

## Styling Convention

Add component stylesheet imports at the top of `styles/global.css`, for example:

```css
@import url("../components/header/header.css");
@import url("../components/category-grid/category-grid.css");
@import url("../components/category-card/category-card.css");
```

## Implementation Pattern

- `index.html` loads `styles/global.css` and `js/main.js`.
- `js/main.js` imports component JS modules and initializes them.
- Data used by components is defined in `data/*.js`.

## When Extending

- For a new section, create a new component folder first.
- Use lowercase naming for all new component folder names.
- Wire the component through `js/main.js`.
- Add its stylesheet import to `styles/global.css`.
- Avoid inline styles unless there is a strong reason.
