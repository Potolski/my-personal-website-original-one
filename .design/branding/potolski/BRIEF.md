# Brand Brief

## Brand
- **Name:** potolski
- **Date:** 2026-04-17

## Company
- **Company name:** David Potolski Lafetá (personal portfolio)
- **Industry:** Blockchain engineering — protocol, smart contract, DeFi
- **Founded:** N/A (personal site)
- **Size:** 1 (individual)
- **Stage:** established (7+ years professional experience)
- **Existing brand?** Yes — shipped personal site with orange accent, Inter + serif pairing, dark mode

## Brand Mode
- **Mode:** evolve
- **Reason:** Audience and intent shift. Site was positioned as "founder of an engineering studio selling services." Now repositioning as "individual blockchain engineer actively seeking a full-time role." Visual system is coherent but tone, structure, and emphasis need rework.

### Existing Brand State (evolve only)
- **Current brand age:** ~2 years
- **Existing guidelines?** No — tokens and patterns live inline in the codebase (Tailwind utility classes, hardcoded `#f97316` accent, Inter from next/font, serif headings via `font-serif`)
- **Brand equity:**
  - Orange (#f97316) accent reads as warm, confident, not generic Web3-blue
  - Dark mode support signals attention to craft
  - Clean, minimal layout — no marketing gloss
  - Serif headings + sans body is a deliberate, editorial choice
- **Pain points:**
  - Copy is written as a services pitch ("I design, ship, and scale production-grade…") — reads as agency-speak
  - Hero leads with "Founder @ Kmino" which signals "I run a business" not "I'm available"
  - No clear "open to work" signal
  - No work samples beyond project cards — nothing that shows depth of thinking (writing, case studies, code snippets)
  - Tooling/skills grid feels template-y compared to the rest of the site

### Evolution Scope (evolve only)
- **Preserve:**
  - Minimal layout + generous whitespace
  - Dark mode support
  - Serif-for-headings / sans-for-body split
  - Project card grid on `/projects`
- **Evolve:**
  - Voice: from services-pitch to first-person engineer-to-engineer
  - Hero emphasis: foreground "looking for work" over "running a company"
  - Type scale: tighten hierarchy, likely a more deliberate scale
  - Accent color: still in consideration — orange is warm but not locked in
  - Skills section: replace the generic checkmark list with something more specific (named systems, named shipped work)
- **Replace:**
  - Current services-framing copy (already partially rewritten)
  - Template-looking "Blockchain Development / Development Tools" skills cards

## Business
- **Problem:** N/A — this is not a business, it's a portfolio site for a job search.
- **Goal of the site:** Convince technical hiring managers that David is a senior blockchain engineer worth hiring, and give recruiters enough structure (roles, dates, skills) to forward confidently.
- **Defensibility:** Real shipped work (zkSYS, Pali Wallet, Pegasys, Lunos, Syscoin core) and named companies are the defensible proof points.

## Personas

### Primary: Engineering Lead / CTO (technical hiring manager)
- **Role:** Head of engineering, tech lead, or CTO at a Web3 company (protocol, DeFi, L2, or infra)
- **Age range:** 30–45
- **Day-in-the-life:** Reviews candidates sent by recruiters or sourcing. Opens the portfolio while reviewing a resume on the side. Looks at the work section first, clicks into GitHub for code quality, skims writing if it exists. Decides in ~90 seconds whether the candidate is worth a technical screen.
- **Frustration:** Portfolios that read like marketing sites. Engineers who over-claim ("expert", "world-class"). No links to actual shipped work. Vague roles ("Led engineering at…") without concrete systems.
- **Aspiration:** Wants to quickly verify: is this person actually senior, have they shipped real things, can they operate without hand-holding?
- **Discovery:** Recruiter intro, GitHub, LinkedIn, referral. Rarely Google.
- **Trust signals:** Named systems shipped, links to real repos, specific contributions. Distrust: superlatives, generic "solutions", no mention of any production issue or tradeoff.

### Secondary: Technical Recruiter / Sourcer
- **Role:** In-house or external recruiter screening candidates for senior blockchain engineering roles
- **Age range:** 25–40
- **Day-in-the-life:** Scans 50+ profiles per day. Needs to confirm: blockchain experience ≥5 years, named projects, availability signal, location/remote preference.
- **Frustration:** Portfolios where the current role is unclear or it's not obvious the candidate is actually looking.
- **Aspiration:** 30-second scan that answers: is this person senior, are they available, are they remote-friendly?
- **Discovery:** LinkedIn, resume platforms, portfolio links in applications.
- **Trust signals:** Clear current role, dates, skills list, availability/contact. Distrust: no dates, no clear contact path, ambiguous employment status.

## Brand Essence

### Promise
- **Core promise:** When a hiring manager lands on this site, they should feel "this person is the real deal — senior, grounded, no BS."
- **Functional promise:** Proof of technical depth in under 90 seconds. Clear "open to work" signal. Easy path to contact.
- **Emotional promise:** Competence without arrogance. Confidence without marketing.

### Point of View
- **Category disagreement:** Engineer portfolios in Web3 overwhelmingly either (a) look like agency sites selling services, or (b) are minimal to the point of saying nothing. There's a gap for a portfolio that is explicit, technical, and first-person — that treats the reader as a peer.
- **Underestimated truth:** Hiring managers at senior levels can spot overselling in one sentence. Understatement + specifics beats superlatives every time.
- **Manifesto line:** "Specifics, not claims."

### Personality
- **Personality:** precise, grounded, understated
- **Personality reference:** Brian Lovin's portfolio meets a good README.md
- **Not us:** agency-polished, marketing-warm
- **Never be:** salesy, hype-driven, template-y, "Web3 hype-bro"
- **Tone:** Engineer-to-engineer. Short sentences. Specifics over claims. First-person, no corporate "we". Confident enough to name what's shipped; humble enough not to call itself "world-class".

## Competitive Landscape
- **Direct competitors:** Other senior blockchain engineers' portfolios competing for the same roles
- **Reference portfolios (admired):** Brian Lovin (brian.lovin), Rauno (rauno.me), Emil Kowalski (emilkowal.ski), Paco Coursey (paco.me) — all engineer-first, zero marketing gloss
- **What sets David apart:** Named protocol-level work (zkSYS, Syscoin core, MimbleWimble Rust upgrades), cross-stack fluency (UTXO + EVM + Move), and actual shipped products with real users (Pali Wallet, Pegasys.fi)
- **Brands admired:** Vercel (precision), Linear (restraint), Stripe docs (clarity)

## Inspiration
- **Styles liked:** Editorial-minimal engineer portfolios. Serif + sans pairing. Dark mode that isn't just "grey on grey". Generous whitespace.
- **Styles to avoid:** Agency sites, Web3 degen aesthetic (neon gradients, 3D logos, "decentralized future" language), template CVs (progress bars for skills, timeline widgets with icons), services grids with CTAs
- **Existing assets:**
  - `/public/profile-photo.jpeg`
  - Project preview images: `pali-preview.png`, `lunos-preview.png`, `pegasys.png`, `syscoin.png`
  - Current tokens (inline): `#f97316` orange accent, Inter (next/font), `font-serif` for headings, Tailwind gray scale, custom dark-mode bg `#171717` / surfaces `#2b2b2c`

## Constraints
- **Timeline:** Flexible — no hard deadline. Tied to job search.
- **Budget:** Self-funded, no external design resources.
- **Must-haves:**
  - Keep Next.js 14 + current component structure (solo-maintainable)
  - Keep dark mode
  - Clear "open to work" signal
  - Links to GitHub, LinkedIn, email, Medium blog
- **Non-negotiables:**
  - Don't oversell — no "expert," "world-class," "cutting-edge"
  - Don't read like an agency / studio site
  - First-person, not "we"

## Goals
- **Business goal:** Land a senior full-time role in protocol or smart contract engineering
- **Brand goal:** Site passes the 90-second technical-credibility test for engineering leads, and the 30-second scan for recruiters
- **Success metrics:**
  - Inbound messages from hiring managers (qualitative)
  - Self-assessment: would Brian Lovin / Rauno / Emil Kowalski find this site credible?
  - Bounce rate on /projects (should be low — people should explore)

## Deliverables
- [ ] Discovery & research
- [ ] Brand strategy & voice
- [ ] Visual identity
- [ ] Design system

## Notes
- Copy was partially rewritten before this brief: About Me now opens first-person with "I'm a blockchain engineer…" and ends with "I'm currently looking for my next full-time role." Kmino bullet softened from "engineering studio delivering…" to "small engineering studio alongside a few other engineers."
- Consider adding a writing/blog surface on the home page (excerpts from Medium) — currently only linked via a button.
- Consider tightening Projects page to foreground technical depth (tech stack line is fine; descriptions could name one hard problem solved per project).
