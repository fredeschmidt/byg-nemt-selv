---
name: architecture
description: Maintain and extend the Byg Nemt Selv frontend architecture with lowercase component folders, CSS-first structure, strict semantic HTML, and JavaScript only when strictly necessary.
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

## Semantic Anti-Patterns (Do Not Do)

- No clickable cards built as `div` with JS click handlers.
- No button-like links for non-navigation actions.
- No heading styling on non-heading tags when a real heading should be used.
- No empty semantic landmarks.

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
- Validate semantic structure before finalizing changes.
