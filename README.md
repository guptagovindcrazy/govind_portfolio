# Govind Gupta — Developer Portfolio

A premium, animated developer portfolio built with **React + TypeScript +
Tailwind CSS + Framer Motion**, generated from the real content on
[github.com/guptagovindcrazy](https://github.com/guptagovindcrazy).

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Where the content comes from

- `src/data/profile.ts` — name, bio, location, avatar, and stats, copied
  directly from the GitHub profile page.
- `src/data/projects.ts` — six real repositories, each with a description
  pulled from that repo's README/About text and its actual language/stack.
  Every "Repository" button links to the real `github.com/guptagovindcrazy/...`
  URL. No live-demo links are shown because none of the source repos expose
  one — add `liveUrl` to a project entry in `projects.ts` if that changes.
- The GitHub section embeds **live** widgets (contribution graph, stats,
  top languages) that read straight from the GitHub API at request time —
  they aren't static screenshots, so they stay current automatically.

If the GitHub profile changes (new repos, new bio, new pinned projects),
update `src/data/profile.ts` and `src/data/projects.ts` — everything else
is driven from those two files.

## Structure

```
src/
  components/   UI building blocks (Hero, ProjectCard, CustomCursor, ...)
  data/         Real content sourced from GitHub
  hooks/        usePrefersReducedMotion
  lib/          small utilities
```

## Notes on the animation system

- All scroll reveals use `whileInView` with `once: true` so they don't
  re-trigger and feel busy.
- `prefers-reduced-motion` is respected throughout — the custom cursor,
  parallax background, and magnetic buttons all fall back to static/simple
  states automatically.
- The custom cursor and magnetic buttons are desktop-only (`pointer: fine`);
  touch devices get the normal system cursor and simple tap states.
