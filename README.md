# CEMS LTD website

Company website for **CEMS LTD** (Civil Engineering & Multi-services), Kigali, Rwanda. Built with Next.js (App Router), TypeScript and Tailwind CSS. Content lives in `/content` so it can be edited without a database.

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

| Variable | Required | Purpose |
|---|---|---|
| `RESEND_API_KEY` | For sending mail | Resend API key |
| `CONTACT_TO_EMAIL` | For sending mail | Inbox that receives enquiries (e.g. `cemsltd2023@gmail.com`) |
| `RESEND_FROM_EMAIL` | For sending mail | Verified Resend from address, e.g. `CEMS LTD <noreply@cemsltd.com>` |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical site URL, `https://cemsltd.com` |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Optional | GA4 id such as `G-XXXX`. Analytics is not loaded if this is empty |

Without Resend keys, the contact form still validates but shows an error asking visitors to call or WhatsApp.

## How to edit content

| File | What it controls |
|---|---|
| [`content/site.ts`](content/site.ts) | Company name, tagline, address, phone, email, map, social placeholders |
| [`content/about.ts`](content/about.ts) | Mission and values |
| [`content/services.ts`](content/services.ts) | Four services and their detail pages |
| [`content/projects.ts`](content/projects.ts) | Project gallery and detail pages |
| [`content/team.ts`](content/team.ts) | Team grid on About (empty by default — add people to show it) |

Copy the logo into `public/images/logo.jpg` (already done from `cems logo /logo.jpeg`). Drop real photos into `public/images/` and point the paths in the content files at those files.

## How to add a project

1. Add image files under `public/images/` (JPEG or PNG).
2. Open `content/projects.ts` and append an object:

```ts
{
  slug: "my-project",           // URL: /projects/my-project
  title: "Project title",
  category: "Commercial",       // Commercial | Residential | Roads & Infrastructure | Water Treatment
  location: "Kicukiro, Kigali",
  year: 2026,
  summary: "One sentence for cards and SEO.",
  description: "Longer text for the detail page.",
  coverImage: "/images/my-cover.jpg",
  images: [
    { src: "/images/my-cover.jpg", alt: "Describe the photo" },
    { src: "/images/my-detail.jpg", alt: "Describe the photo" },
  ],
  featured: true,               // optional — shows on the home page
}
```

3. Save and refresh. No rebuild of a database is required.

## Placeholder images

`photos/` is empty, so the site uses generated gradient JPEGs in `public/images/`. To regenerate them:

```bash
node scripts/generate-placeholders.mjs
```

Replace those files with real project photos when you have them. The current logo is a photograph of the printed sign; a cropped transparent PNG will look cleaner in the header.

## Deploy to Vercel

1. Push this folder to GitHub.
2. Import the repo in [Vercel](https://vercel.com/new). Framework preset: Next.js.
3. Set the environment variables from `.env.example`.
4. Deploy. Domain: `cemsltd.com`.

Verify the Resend domain (or use a Resend onboarding from-address) before expecting the contact form to email you.

## Scripts

- `npm run dev` — local development
- `npm run lint` — ESLint
- `npm run build` — production build
- `npm run start` — serve the production build
