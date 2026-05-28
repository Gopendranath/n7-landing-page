# N7 — Modern Banking Landing Page

A pixel-perfect, fully responsive landing page for N7 — a modern banking platform. Built with React 19, TypeScript, Vite, and Tailwind CSS v4.

## Tech Stack

- **React 19** — UI library
- **TypeScript 6** — Type safety
- **Vite 8** — Build tool and dev server
- **Tailwind CSS v4** — Utility-first CSS with Vite plugin
- **ESLint** — Code quality and consistency

## Setup

```bash
pnpm install
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

| Command           | Description                  |
| ----------------- | ---------------------------- |
| `pnpm dev`        | Start dev server             |
| `pnpm build`      | Type-check and build for production |
| `pnpm preview`    | Preview production build     |
| `pnpm lint`       | Run ESLint                   |

## Project Structure

```
src/
├── assets/              # Static assets (SVGs, images)
├── components/          # React components
│   ├── AutoScrollingBanner/
│   ├── CaseStudiesSection/
│   ├── CtaSection.tsx
│   ├── CtaSectionTwo/
│   ├── DescriptiveFeatureOne/
│   ├── DescriptiveFeatureTwo/
│   ├── HeroBottom/
│   ├── HeroSection/
│   ├── InsightsSection/
│   ├── Navbar.tsx
│   ├── SolutionSectionOne/
│   ├── footer/
│   ├── CheckIcon.tsx      # Shared component
│   ├── LinkWithArrow.tsx  # Shared component
│   └── index.ts           # Barrel exports
├── App.tsx
├── main.tsx
└── index.css              # Tailwind import + theme config
```

## Deployment

Deployed via Vercel. Connect the repo and it auto-detects the Vite framework.

[Live Demo](https://n7-landing-page-ten.vercel.app/)
