# Brand Inventory

> Phase: audit | Brand: potolski | Generated: 2026-04-17

---

A complete catalog of what currently exists in the shipped site. Every token, asset, and copy sample below was extracted directly from `app/page.js`, `app/projects/page.js`, `app/layout.js`, and `app/contexts/ThemeContext.js`.

## Identity marks
- **No logo / wordmark.** The visual anchor is the circular profile photo at `/public/profile-photo.jpeg` (rendered at 160x160, rounded-full, subtle border + shadow).
- **Favicon:** `/favicon.png` — a PNG, purpose/appearance unverified from code alone.
- **Typeset name:** "David Potolski Lafetá" set in `font-serif` at `text-4xl` with `font-bold tracking-tight`. This serves as the de facto wordmark.

## Color tokens (all inline, no design-token layer)
- **Accent orange — `#f97316`** (Tailwind orange-500). Used for: section-divider bars under H2s, the "View Full Work History" CTA, section-active project titles, company H3 names (`text-orange-500`), carousel pagination dot.
- **Accent variants:** `text-orange-600` (light-mode links), `text-orange-400` (dark-mode links).
- **Dark background — `#171717`** (near-black, set inline on the root `<div>`).
- **Dark surface — `#2b2b2c`** (used for the sidebar pill, the About band, and project cards in dark mode).
- **Dark secondary surface — `#161617`** (skills cards in dark mode — slightly darker than body bg, creating a faintly inverted card).
- **Dark border — `#3b3b3c`**.
- **Dark body text — `#e5e7eb`** (gray-200 equivalent).
- **Light mode:** `bg-white`, `text-gray-800`, Tailwind gray-50/100/200 scale for surfaces and borders.
- **Decorative (projects page only):** radial gradient blobs `from-orange-400 to-pink-500` and `from-orange-300 to-yellow-300` at 10% opacity, blurred.

## Typography
- **Sans — Inter** loaded via `next/font/google` (latin subset). Used for body, nav, metadata, bullets, buttons.
- **Serif — `font-serif`** (Tailwind default stack: `ui-serif, Georgia, Cambria, Times New Roman, Times, serif`). Used for H1 (name), H2 (section headings) on home. Notably NOT used on the `/projects` H1.
- **No custom serif loaded.** The headings fall back to Georgia on most systems.
- **Scale in use:** `text-4xl` (hero name), `text-2xl` (section H2s, company H3s), `text-xl` (role title, skills card H3), `text-lg` (mobile project title), `text-base` (body), `text-sm` (meta, links), `text-xs` (mobile tech line).
- **Weights:** `font-bold`, `font-semibold`, `font-medium`, default. No tabular-nums, no italic.
- **Tracking:** `tracking-tight` on H1s only.

## Iconography
- **FontAwesome 6.4.0** loaded via CDN stylesheet in `layout.js` (not tree-shaken; full library pulled at runtime).
- Icons in use: `fa-home`, `fa-th-large`, `fa-sun`, `fa-moon`, `fa-github` (brand), `fa-linkedin` (brand), `fa-envelope`, `fa-medium` (brand), `fa-external-link-alt`, `fa-check-circle`, `fa-chevron-up/down`.
- **Tailwind CSS 2.2.19 also loaded via CDN** in `layout.js` — legacy approach alongside the Next.js build.

## Layout & navigation
- **Sidebar nav:** Fixed, desktop-only left rail at `top-28 left-4`, vertical stack, rounded-2xl pill, 3 items (Home, Projects, Theme toggle). On mobile, becomes a bottom tab bar spanning full width with `border-t`, respects `safe-area-inset-bottom`.
- **Active-state treatment:** Active item gets a bordered 48x48 rounded-lg button; inactive items are icon-only 48x48. Hover label slides out to the right on desktop (`group-hover:opacity-100 translate-x-1`).
- **Content widths:** `max-w-4xl` on home sections, `max-w-4xl` on projects (was `max-w-5xl` defined but unused).
- **Scroll-spy:** Home tracks `about / experience / skills` via scroll position to update `activeSection` state (though the state is not visually reflected anywhere meaningful — only used internally).

## Motion
- **Subtle icon shake** on sidebar active-button hover (`@keyframes subtle-shake`, 0.25s).
- **Toggle morph** on theme switch (`@keyframes toggle-morph`, 220ms rotate/scale on the sun/moon icon).
- **Transition-colors** on buttons and project cards.
- **Accordion** on desktop projects: vertical expand of the active card's detail panel (no height-animation — snaps open).
- **Mobile carousel** on projects: CSS snap-x horizontal scroll with pagination dots.

## Voice samples (pulled verbatim)
1. **Hero subline** (`page.js:129`): "Founder @ Kmino • Core Manager @ Syscoin" — factual, but leads with "Founder" first.
2. **Hero tagline** (`page.js:132`): "Blockchain engineer working across EVM and UTXO chains, DeFi, ZK, and smart contracts — open to new opportunities" — already first-person-adjacent and carries the availability signal.
3. **About Me** (`page.js:192-193`): "I'm a blockchain engineer, currently Core Manager at Syscoin and running Kmino — a small engineering studio — on the side. Over the past several years I've worked across UTXO and EVM chains, L2s, and ZK systems, contributing to protocols, DeFi markets, wallets, and on-chain identity. Most of my day-to-day is Solidity and Move, along with the tooling around rollups and smart contract infrastructure." — the cleanest voice on the site.
4. **Lunos DAO bullet** (`page.js:248`): "Built automated, trustless coverage solutions that protect digital assets across the blockchain ecosystem" — agency-speak.
5. **Skills card** (`page.js:335-353`): "Blockchain Development / Smart Contracts (Solidity, Move) / UTXO & EVM Systems / DeFi Protocol Architecture / ZK Implementations" — generic resume-language; every bullet is a category, not a named system.
6. **Projects description** (`projects/page.js:44`): "Automated, trustless coverage solutions for digital assets." — agency-tagline register.

## Messaging & positioning artifacts
- **Page `<title>`** (layout.js:4): "David Potolski Lafeta | Blockchain & Emerging Technologies" — note the missing accent in "Lafeta" and the vague "Emerging Technologies" framing.
- **Meta description:** "Software engineer and technical leader with expertise in blockchain, fintech, and distributed systems." — "technical leader with expertise in" is exactly the claim-heavy register the brief flags.
- **Inline availability signal:** present only as a dash fragment in the hero subline (`— open to new opportunities`).
- **No writing/blog surface.** Medium is linked as a button only; no excerpts inline.
- **No /about, /uses, /now, or /writing pages.**

## Assets on disk
- `/public/profile-photo.jpeg`
- `/public/pali-preview.png`, `/public/lunos-preview.png`, `/public/pegasys.png`, `/public/syscoin.png`
- `/public/favicon.png`

---

## Related
- [Coherence Assessment](./coherence-assessment.md)
- [Market Fit](./market-fit.md)
- [Equity Analysis](./equity-analysis.md)
- [Evolution Map](./evolution-map.md)
- [Index](./INDEX.md)
