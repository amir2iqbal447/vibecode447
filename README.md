# Inventera — clone

A faithful recreation of the editorial design of **inventera.com** (the site of
Amir Husain), built with **React + Vite + Tailwind CSS**.

The clone reproduces the original's design system — dark/cream alternating
sections, serif (Newsreader) headlines, monospace eyebrow labels, and the full
section structure (hero, essays grid, "from code to consequence" thesis, work,
six questions, timeline, talks, footer). Body copy is original/placeholder text
in the spirit of the source; brand imagery uses open stock photography.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
```

## Structure

- `src/App.jsx` — page composition
- `src/components/*` — one file per section (Nav, Hero, Essays, Thesis, Work,
  Questions, Timeline, Talks, Footer) plus shared `ui.jsx` primitives
- `tailwind.config.js` — color palette, fonts, and tokens
