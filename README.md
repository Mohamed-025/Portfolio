# Portfolio - Mohamed Eid

Personal portfolio for Mohamed Eid, Data Analyst and Front-end Developer.
Live site: https://mohamed-025.github.io/Portfolio/

Built with Next.js (App Router, static export), React, TypeScript, Tailwind CSS 3, Lucide icons. The scroll reveal is a small IntersectionObserver component.

## What is in it

Navigation, hero, overview, skills, experience, projects (filter + detail pages), education, a "What makes me different" Q&A, contact, footer. Dark theme by default with a saved light theme option, mobile menu, skip link, visible focus states, reduced-motion support, Open Graph/Twitter metadata, sitemap, robots.txt and favicon.

## Edit the content

All content lives in `src/data/`. No component needs to change for normal edits.

| File | What it controls |
| --- | --- |
| `profile.ts` | Name, links, email, availability badge, CV path, optional form endpoint |
| `skills.ts` | Skill groups |
| `experience.ts` | Experience timeline |
| `projects.ts` | Every project: title, category, technologies, thumbnail, GitHub URL, live URL, features, status. Leave `github` or `demo` empty and the button disappears. |

To add a project: add an object to `projects` in `src/data/projects.ts`, put a thumbnail in `public/projects/`, and rebuild. The grid, the filter and `/projects/<slug>/` are generated from it.

Replace `public/Mohamed_Eid_CV.pdf` to update the CV download. The source of the current CV is not kept in this repo.

## Run locally

```bash
npm install
npm run dev          # http://localhost:3000 (set NEXT_PUBLIC_BASE_PATH= for no sub-path)
npm run typecheck
npm run lint
npm run build
```

Local development at the root path:

```bash
NEXT_PUBLIC_BASE_PATH="" npm run dev
```

## Deploy (GitHub Pages)

The site is a static export served from the `docs/` folder on the `main` branch.

```bash
npm run deploy:docs   # builds and copies the export into docs/
git add -A && git commit -m "Update site" && git push
```

Repository Settings > Pages > Source: "Deploy from a branch", branch `main`, folder `/docs`. The base path is `/Portfolio` (the repository name). If you rename the repository or use a custom domain, set `NEXT_PUBLIC_BASE_PATH` (empty for a custom domain) and update `siteUrl` in `src/data/profile.ts`.

### Vercel instead

Import the repository in Vercel, set the environment variable `NEXT_PUBLIC_BASE_PATH` to an empty value, and keep the default Next.js settings. Update `siteUrl` in `profile.ts` to the Vercel URL. GitHub Pages is the hosting that was requested for this project.

## Contact form

GitHub Pages has no server, so there is no server-side form handler here. Without an endpoint, the form validates the fields and opens the visitor's email app with the message prefilled. The page says clearly that nothing is sent until they send it from their email app. It never shows a fake "sent" message.

To get a real server-side form, create an account with a form service (for example Formspree), and put its URL in `contactEndpoint` in `src/data/profile.ts`. The form then posts JSON to it, shows a sending state, and shows success only when the service answers with success.

## Missing assets and information

- A real profile photo (the hero shows a monogram placeholder). Put it in `public/images/` and use it in `Hero.tsx`.
- A thumbnail for Learnora. The current one is a drawn illustration, not a screenshot. Its source code is private, so no GitHub or live link is shown.
- Findings and metrics for the HR project beyond what its README states.
- A server-side form endpoint if you want messages delivered without the visitor's email app.
- The design reference image from the original request was not available to the build, so the visual design follows the written brief and is not a pixel match to that image.
