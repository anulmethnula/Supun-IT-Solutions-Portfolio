# Supun IT Solutions — Portfolio Application

This folder contains the **single-page company portfolio** for Supun IT Solutions, part of Supun Group of Companies.

For the full overview, banner, projects, and contact details, see the **[main repository README](../README.md)**.

## Local development

**Requirements:** Node.js 22.13.0 or later and npm.

From this folder:

```bash
npm install
npm run dev
```

Open the development URL printed in the terminal, normally `http://127.0.0.1:5173`.

## Common commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Build the app |
| `npm run lint` | Check source with ESLint |
| `npm start` | Start the local preview for an existing build |

The app uses **React, Next.js, TypeScript, Tailwind CSS, Framer Motion**, and a **Vinext/Vite** development setup. Use the scripts in `package.json` rather than running a framework command directly.

## Where to edit

| Location | Content |
| --- | --- |
| `app/page.tsx` | Single-page portfolio layout and main hero |
| `app/about/page.tsx` | About section |
| `app/projects/page.tsx` | Project filters, animated showcase, and project details |
| `app/team/page.tsx` | Team profiles |
| `app/tech-stack/page.tsx` | Technologies overview |
| `app/contact/page.tsx` | Contact section |
| `src/components/` | Shared components, navigation, and video player |
| `src/data/` | Company, projects, team, and site data |
| `public/images/` | Company photos, logos, and project covers |
| `public/videos/` | Hero video assets |

## Notes

- Keep the website focused on the company and its internal group work.
- Do not expose sensitive project URLs, deployment details, credentials, or internal configuration.
- Existing navigation uses section links such as `/#about`, `/#projects`, and `/#contact`.
- The contact destination is `info@supungroup.lk`.

**[Back to repository overview](../README.md)**
