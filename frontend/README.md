# NIVA

Stages A and B: Next.js App Router homepage for a Kerala-first hospitality brand. TypeScript is strict; Tailwind v4 is available through PostCSS, with CSS design tokens and purpose-built component styles. No additional UI or animation libraries.

## Run

Use Node 24 (Node 22.18+ also supports the test runner). `npm ci`, then `npm run dev`. Open http://localhost:3000.

Checks: `npm run lint`, `npm run typecheck`, `npm test`, `npm run build`. Run `npm start` after building for production preview.

## Architecture

- `src/app`: root metadata, layout, homepage entry, responsive styling and design tokens.
- `src/components/home.tsx`: named reusable Navbar, Footer, Hero, SearchBar, SectionHeading, CTA, PropertyCard, DestinationCard, ExperienceCard and EnquiryForm components. The homepage composes these; state is limited to navigation, sample search and demo form validation.
- `src/lib/domain.ts`: typed property, experience, destination, enquiry and search contracts; pure filter and validation functions.
- `src/lib/content.ts`: centralized brand configuration and explicitly illustrative inventory. Replace this data boundary with an API adapter while retaining the domain contracts and presentation components.
- `src/lib/domain.test.ts`: tests covering combined location/capacity filters and enquiry validation.

## Design and behavior

Warm ivory, deep forest green, muted gold and terracotta; system Georgia and sans-serif fonts avoid external font requests. Local Next Image assets provide responsive optimization. Keyboard focus, skip link, labelled controls, accessible validation and reduced-motion support are included.

Homepage navigation intentionally targets completed sections, not later-stage routes. Search filters location and capacity. Dates express a preference only and never represent live availability. Destinations with no sample inventory show an empty state. The demo form validates locally and explicitly confirms that nothing was sent or stored.

## Photography

`public/images/kerala.jpg` is downloaded from Unsplash's image CDN: https://images.unsplash.com/photo-1602216056096-3b40cc0c9944 . It is a mood image, not an inventory representation. Confirm the photographer attribution and asset license record before commercial launch. Property images are original CSS illustrations, labelled as replaceable placeholders. There are no fabricated guest reviews or business metrics.

## Awaiting review / future stages

Only `/` is implemented. Stays browsing, stay detail routes, experiences page, hosts page, about and contact pages remain for Stages C–D, after review. The homepage contains previews of these concepts. Full FilterPanel, price/type filtering, sorting and route loading/error states belong to those stages.

Real inventory, enquiry delivery endpoint, configured contact/social details, property photography, approved privacy/terms, availability and any future payments are not integrated. `brand` intentionally leaves unavailable contact fields and the enquiry endpoint null. No real submission is attempted. No deployment was performed.

## Verification notes

Run the commands above after changes. The dependency audit currently reports a high-severity advisory chain through the development-only Next ESLint configuration (braces/micromatch/fast-glob). npm's suggested downgrade crosses a major version and is not applied automatically. Review upstream fixes before launch.

Build verification: lint, strict TypeScript, both domain tests and the production build passed. Next.js Webpack is selected explicitly for dev/build because this Windows environment fails to launch Turbopack's CSS subprocess. `src/components/ui.tsx` holds reusable components; `home.tsx` composes the homepage sections. Browser visual QA has not been completed.
