# Instructions for coding agents

## Before changing code

- Inspect the existing files and project structure before editing. Confirm current behavior in `index.html`, `src/main.js`, `src/styles.css`, `server.js`, and `build.js` instead of assuming a framework or adding a replacement architecture.
- Preserve existing working behavior and user-provided assets. Keep changes focused on the requested task; do not rename, replace, or re-encode assets without a clear need.
- The current project is a dependency-free static site. Do not add React, Vite, icon packages, or other dependencies unless the task requires them and the change is deliberate.

## Architecture

- `index.html` contains the complete semantic page, section content, metadata, asset references, and external links.
- `src/styles.css` contains the global design system, page layout, component styling, responsive breakpoints, and reduced-motion rules.
- `src/main.js` contains progressive browser interactions: mobile navigation, active-section navigation, and reveal behavior.
- `public/` contains files served from the site root: `AK.png`, `arikaran.png`, and `resume.pdf`.
- `server.js` is a Node built-in HTTP server for local development. It serves the root page and maps site-root asset URLs to `public/`.
- `build.js` copies the page, source files, and public assets into `dist/`. Treat `dist/` as generated output.

## Conventions

- Keep the current plain HTML, CSS, and browser JavaScript architecture unless a task explicitly calls for an architectural change.
- Use semantic HTML, descriptive accessible names, working keyboard interaction, and real links for navigation and contact actions.
- Keep styles in `src/styles.css` and browser interactions in `src/main.js`; avoid inline scripts and styles for new behavior unless there is a specific reason.
- Reuse the existing visual language: white and warm-white backgrounds, dark plum text, violet/blue accents, editorial typography, thin borders, generous spacing, and restrained motion.
- Preserve responsive behavior at narrow widths and honor `prefers-reduced-motion` when adding motion.
- Do not introduce unsupported personal details, project features, employment, statistics, or achievements. JobTrack is presented as in development. Project dashboard compositions are concept previews, not real screenshots.
- Preserve the supplied `public/` assets and their aspect ratios.
- Keep documentation consistent with the code and available scripts.

## Development workflow

1. Read the relevant implementation and identify the smallest suitable change.
2. Make the change without disturbing unrelated content or assets.
3. Run `npm run build` to verify the static build.
4. For browser behavior or styling changes, run `npm run dev` and inspect the affected behavior at relevant viewport sizes when browser tooling is available.
5. Check the changed files and report what was verified, including any verification limits.

The development server uses port `4173` by default and supports the `PORT` environment variable. If that port is already occupied, stop the existing server or select another port rather than silently terminating another process.
