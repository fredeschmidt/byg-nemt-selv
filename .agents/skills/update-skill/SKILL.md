---
name: update-skill
description: Update existing skills while keeping them simple, coherent, and non-duplicative; always recommend the best placement for new rules.
---

# Update Skill

Use this skill when a user asks to update `SKILL.md` or `AGENTS.md` and wants the result cleaner without losing intent.

## Goal

Keep instructions short, clear, and non-duplicative.
Integrate updates into the full skill flow, not as isolated add-ons.

## Required Rules

1. Read the whole target skill file before editing.
2. Read relevant related files (for example `AGENTS.md`) before editing.
3. Place changes where they logically belong; do not append blindly.
4. Remove or merge overlaps and repeated wording.
5. Keep sections short, headings predictable, and language direct.
6. Preserve behavioral intent when refactoring.

## Placement Decision (Mandatory)

Recommend the best location before editing, even if the user named a file.

Choose in this order:

1. Existing skill, existing section (best).
2. Existing skill, new section (if concept is new but belongs there).
3. Different existing skill (if concern belongs elsewhere).
4. New skill (only if reusable and it does not fit existing skills cleanly).

If the requested file is a poor fit, state:
1. Why it is a mismatch.
2. Which file is better.
3. Whether to move or duplicate (default: move).

Recommend a new skill only when all are true:
1. The rule is reusable across multiple skills.
2. It defines a distinct workflow.
3. Adding it to an existing skill would cause clutter.

## Workflow

1. Parse the requested update.
2. Read all relevant file(s) end-to-end.
3. Identify duplication, conflicts, and wording drift.
4. Give placement recommendation with rationale.
5. Apply edit in the chosen location.
6. Refactor nearby text for flow and consistency.
7. Run a cleanup pass: deduplicate, normalize terms, tighten sections.
8. Report outcome clearly.

## Output Requirements

Report:

1. Placement recommendation and reason.
2. Files changed.
3. Cleanup performed.
4. Remaining ambiguity and recommended next step.
