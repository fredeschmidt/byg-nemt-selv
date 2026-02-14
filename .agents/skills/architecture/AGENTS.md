# Architecture Skill

## Entry Skill (Mandatory)

This is the first skill to run for any **new build**.
This skill applies frontend architecture constraints during implementation.
For page/component work, run this skill before editing files.

## Execution Contract (Non-Negotiable)

- Read `SKILL.md` before taking any action.
- Execute workflow rules in `SKILL.md` in order.
- Do not skip, merge, or reorder mandatory rules.
- If required context is missing, resolve it before continuing.
- Enforce semantic HTML, mobile-first styling, and SCSS conventions.
- Enforce global design tokens for fonts/font styling/colors via `:root` in `styles/global.scss`.
- Enforce HTML/SCSS parity: when markup is removed, remove its unused styling rules in the same change.
- Enforce visual consistency with `index.html` for new components/pages unless the user requests a different visual direction.
- Enforce reusable class naming by default so new components can be reused across subpages.
- Enforce page-pair parity: `guide-xxxx.html` must always reflect and stay aligned with the current fields/options in its paired `xxxx.html`.

## Routing

- Use this skill for HTML/SCSS structure and frontend architecture decisions.
- Do not use this skill for backend/tooling tasks.
- Do not use this skill for skill-authoring tasks; use `update-skill` for that.
