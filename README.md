# Zain Nisar — Azure-focused cloud portfolio

A responsive, buildless portfolio for **zainnisar.com**, hosted on **GitHub Pages**. The Azure-blue design presents cloud architecture, automation, networking, migration, and cost analysis while retaining the existing five case-study URLs.

## Preview

Open `index.html` directly, or run `python3 -m http.server 4173` in this directory and visit `http://localhost:4173`.

There is no package installation, build step, API key, backend, database, analytics service, or paid cloud resource required.

## GitHub Pages

Keep the repository’s current GitHub Pages deployment configuration. `CNAME` remains `zainnisar.com`. Place these files at the same publishing root as the existing portfolio; the redesign does not require moving the domain or changing DNS. Review changes on the redesign branch before merging them into the publishing branch.

Relative asset and navigation paths also support project-site previews. `.nojekyll` prevents unnecessary Jekyll processing.

## Content and interactions

- `index.html`: Azure-first positioning, clickable reference architecture, five project cards, biography, and contact links.
- `index.css`: responsive shared visual system and case-study layout.
- `index.js`: accessible navigation, project filters, architecture descriptions, current copyright year, and keyboard-accessible project image dialogs.
- `projects/`: original project scope and content, with updated presentation and navigation.
- `files/` and `images/`: retained resume, operational guides, deployment screenshot, project diagrams, and portrait.
- `assets/favicon.svg`: self-contained cloud-themed favicon.

The interactive architecture is explicitly illustrative, not a live deployment. Project pages identify BallotOnline work as academic case studies and learning environments. No certification badges, client testimonials, deployment metrics, or new production experience have been invented.

Future project evidence should include source code, validation results, dated deployment captures, and real cost comparisons when available. Do not present sample or historical telemetry as live.

## Visual system

- Azure blue: `#0078d4`
- Deep navy: `#071c34`
- Sky accent: `#55c8ff`
- Light canvas: `#f6f9fc`
- System typography with monospace annotations; no external font or icon requests.
- Editorial headings, architecture drawings, thin technical borders, and generous spacing.
- Responsive navigation, visible keyboard focus, reduced-motion support, semantic content, and functional project filtering.

## Verification

The redesign was checked in Chrome at 375, 390, 768, 1024, and 1440 pixel viewport widths. Browser checks cover all six pages, navigation, filters, reference-diagram controls, image expansion and Escape dismissal, local links and assets, and horizontal overflow. This is functional and visual QA, not a formal accessibility certification or Lighthouse score.

## Credits

Original portfolio template by [Nisar Hassan Naqvi](https://nisar.dev/). Existing project content and assets belong to their original authors. The original `LICENSE.md` and image license are retained. Azure and AWS are referenced descriptively; the portfolio does not claim Microsoft or Amazon affiliation.
