# Homeopathy Clinic Landing Page

Premium, responsive clinic landing page concept built with **React + Vite + Tailwind CSS v4**, Motion for React, and React Icons.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`.

## First edits before launch

1. Open `src/data/clinic.js` and replace the clinic name, phone, email, address, hours, practitioner name and qualifications.
2. Replace the sample categories in `sampleServices` with the clinic's confirmed services and approved descriptions.
3. Replace the practitioner portrait and interior images with images the clinic owns or is licensed to use.
4. Connect the appointment form to a real booking endpoint, email service, WhatsApp link or CRM. It is intentionally a front-end demo and does not transmit or store submissions.
5. Replace the placeholder social links and add verified reviews only with the clinic's permission.
6. Have the clinic approve all medical wording. Do not publish unverified qualifications, treatment claims, success rates or testimonials.

## Design notes

- Palette: deep brown, taupe, sand, ivory and warm white.
- Typography: Manrope (headings) + Inter (body).
- Icons: React Icons only.
- Animations: Motion for React, with reduced-motion support.
- Images: remote Unsplash demo images; replace with clinic-approved assets for production.

## Deployment

Deploy the project to any static hosting provider that supports Vite. Set the build command to `npm run build` and the output directory to `dist`.
# homeopathic
