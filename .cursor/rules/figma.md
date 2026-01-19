## Figma MCP Integration Rules

### Required flow (do not skip)

1.  Run `get_design_context` first to fetch the structured
    representation for the exact node(s).
2.  If the response is too large or truncated, run `Youtube` to get the
    high-level node map and then re-fetch only the required node(s) with
    `get_design_context`.
3.  Run `get_screenshot` for a visual reference of the node variant
    being implemented.
4.  Only after you have both `get_design_context` and `get_screenshot`,
    download any assets needed and start implementation.
5.  Translate the output (React + Tailwind) into this project's
    conventions, styles, and framework. Reuse tokens, components, fonts.
6.  Validate 1:1 against Figma before marking complete.

### 💻 Implementation Rules

1.  All styles must use Tailwind utilities mapped via `@theme inline`.
2.  No direct CSS vars (`var(--main-blue)`) inside components.
3.  No magic numbers --- only tokens or utilities.
4.  Treat Figma MCP output as _design mapping_, not as final code.
5.  Replace Tailwind defaults with project token utilities.
6.  Reuse existing components.
7.  1:1 visual parity is required.
8.  Respect existing project patterns (routing, state, data).
9.  Validate visually before submitting.

### 🤖 Guidance for Cursor AI

- Must use token-based utilities (`bg-main-blue`, `text-base`, etc.).
- Must not generate raw CSS or inline styling.
- Must place components correctly according to FSD.

---

## 🎨 Figma to Code Specification (Tailwind CSS v4.1 Custom Tokens)

This specification defines the strict process and rules for implementing
UI components from the Figma design file into the Next.js application,
ensuring consistency, adherence to the custom token system, and
alignment with **Figma's recommended developer flow**.

### 🎯 Primary Stacking Constraints

- **Design Source:** All visual properties (colors, spacing,
  typography) must be sourced from the Figma Design Tokens.
- **Styling Framework:** Only Tailwind CSS v4.1 is allowed.
- **Architecture:** Components must follow Feature Sliced Design
  (FSD).

---
