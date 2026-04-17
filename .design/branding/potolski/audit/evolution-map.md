# Evolution Map

> Phase: audit | Brand: potolski | Generated: 2026-04-17

---

Element-by-element PRESERVE / EVOLVE / REPLACE decisions. Every rationale ties back to one of the two personas: **PRIMARY** = engineering lead running a 90-second credibility check; **SECONDARY** = recruiter running a 30-second scan. This file is the primary deliverable consumed by downstream phases.

## Legend
- PRESERVE — keep as-is; it is doing real work.
- EVOLVE — keep the underlying move, sharpen the execution.
- REPLACE — remove and re-do with a new approach.

---

## Identity & visual bones

### Profile photo (160x160 centered) — EVOLVE (shrink dramatically or relocate)
**Rationale (PRIMARY):** A large centered portrait is the strongest "portfolio template" signal; reference portfolios (Lovin, Rauno, Emil, Paco) do not lead with a photo. The primary persona pattern-matches this against consultant sites, which hurts the 90-second test.
**Direction:** Either drop the photo from home and reserve it for a future `/about`, OR shrink to a 24–40px inline avatar next to the name. Keep the asset itself.

### Serif heading + Inter body pairing — PRESERVE (move); EVOLVE (execution)
**Rationale (PRIMARY):** This is the site's one deliberate typographic decision and it creates an editorial register rare in the blockchain portfolio category — a differentiator worth keeping.
**Direction:** Replace the Tailwind-default serif stack (ui-serif/Georgia) with a crafted serif — Fraunces, Source Serif 4, GT Alpina, Newsreader, or similar — loaded via `next/font`. This converts the move from "intent" to "execution."

### Orange accent (#f97316) — EVOLVE (discipline, not color)
**Rationale (PRIMARY):** The color is fine; the usage is not. Using it in 6+ registers (dividers, CTAs, links, company names, gradient blobs, carousel dots) reads as "landing page highlighter" and undermines the restraint the personality demands.
**Direction:** Reduce to ONE accent role — either links OR a single CTA. Remove from H2 dividers, company-name headings, gradient blobs, carousel dots. If the outcome still feels over-warm, darkening toward `#ea580c` (orange-600) for light mode and `#fb923c` (orange-400) for dark is a conservative refinement that keeps recognition while reducing intensity. Replacement of the hue entirely is allowed but not required.

### Dark mode — PRESERVE
**Rationale (PRIMARY):** Engineering leads default to dark; absence would hurt credibility. The implementation works.
**Direction:** Keep the toggle. Normalize the three-tier dark surface palette (`#171717` / `#2b2b2c` / `#161617`) down to two tiers — the third is imperceptible and looks like a bug.

### Generous whitespace — PRESERVE (move); EVOLVE (density)
**Rationale (PRIMARY):** Whitespace is aligned with editorial intent. BUT currently it leans *too* generous — the site has 2019-template density. Engineer portfolios reward information density.
**Direction:** Tighten vertical rhythm. Reduce `py-14` section gaps, make body text tighter, let the About band and Experience live closer together.

### Section-divider orange bars (h-0.5 w-16) — REPLACE (remove)
**Rationale (PRIMARY):** Pure landing-page chrome. None of the reference portfolios use it. Removing it alone would de-template the site meaningfully.
**Direction:** Delete. Let whitespace + heading typography carry hierarchy.

### Decorative gradient blobs (`/projects`) — REPLACE (remove)
**Rationale (PRIMARY):** Contradicts "precise, grounded, understated." A marketing-site visual trope.
**Direction:** Delete.

---

## Layout & navigation

### Left sidebar nav / bottom-tab mobile nav — EVOLVE (commit or simplify)
**Rationale (PRIMARY):** Has a reference (Brian Lovin) but currently carries only 3 items, icon-only, which reads as over-engineered chrome. Feels like app frame, not portfolio nav.
**Direction:** Two acceptable paths. (a) Commit: add labels, add more surfaces (Writing, About, Uses), make it earn its presence. (b) Simplify: replace with a conventional top-right inline nav (Home / Projects / Writing / GitHub). Path (b) is lower-risk for the 90-second test. Path (a) requires additional content before it's worth keeping.

### Content width (`max-w-4xl`) — PRESERVE
**Rationale:** Comfortable reading width. No change needed.

### Scroll-spy on home sections — REPLACE (remove if no visible payoff)
**Rationale:** The `activeSection` state is computed and stored but never reflected visibly. Dead code that ships JS for no UX.
**Direction:** Remove the scroll listener unless the simplified nav includes section links that light up.

---

## Hero & home page structure

### Centered-hero layout — REPLACE
**Rationale (PRIMARY):** Centered hero + photo + social-button row is the single most template-coded pattern. Reference portfolios left-align and lead with prose.
**Direction:** Left-aligned hero. Name in serif. One-line role + availability. One short paragraph of prose. Links inline (not as rounded buttons).

### "Founder @ Kmino • Core Manager @ Syscoin" subline — REPLACE
**Rationale (PRIMARY):** Leading with "Founder" signals "I am running a business" — the exact objection the repositioning must defuse.
**Direction:** Rewrite to lead with current employed role: "Core Manager at Syscoin. Also running Kmino on the side." Or simpler: "Blockchain engineer. Currently at Syscoin. Open to full-time roles."

### Hero tagline ("Blockchain engineer working across EVM and UTXO chains…") — PRESERVE
**Rationale:** Already in the target voice. First-person-adjacent, specific, carries the availability signal.

### Social-button row (GitHub, LinkedIn, Email, Blog) — EVOLVE
**Rationale (BOTH personas):** Contact paths are essential (recruiter needs them in 30s). But rendered as four rounded-border buttons in a row, they look like a template. Reference portfolios render these as plain inline text links.
**Direction:** Render as a quiet row of inline text links with small icons, or as a single line: "GitHub / LinkedIn / Email / Writing". De-emphasize.

### Orange-highlighted tech keywords row (Solidity • Move • UTXO • EVM • ZK • DeFi) — REPLACE
**Rationale (PRIMARY):** Highlighting one-word tags is a skills-tag-cloud pattern from template sites. Does not survive the 90-second test — reads as marketing.
**Direction:** Drop entirely. Let the named systems in Experience/Projects carry skills signal. Or replace with a single sentence naming the stack in prose.

### About Me section — PRESERVE (copy); EVOLVE (treatment)
**Rationale:** The copy is clean first-person voice. But the band-with-subtle-background-and-divider-bar presentation is landing-page chrome.
**Direction:** Keep the paragraph verbatim. Drop the `#2b2b2c` band background and the divider bar. Let it sit as body prose directly under the hero.

---

## Experience section

### Overall Experience structure (role, company, dates, city, bullets) — PRESERVE
**Rationale (SECONDARY):** This is the single feature that makes the site recruiter-forwardable and passes the 30-second scan. Do not break.

### Company-name styling (text-2xl font-bold text-orange-500) — EVOLVE
**Rationale (PRIMARY):** Painting every company name orange reads as "design flourish" not "information design."
**Direction:** Drop the orange. Use weight + size for emphasis. Reserve orange for the single accent role chosen above.

### Experience bullets — REPLACE (rewrite)
**Rationale (PRIMARY):** Bullets currently lean outcomes-without-specifics ("enhanced scalability, security, and interoperability while optimizing gas efficiency", "built automated, trustless coverage solutions"). The personality explicitly rejects this register.
**Direction:** Rewrite each bullet to name one concrete system, repo, or technical decision. Examples of the target register: "Led zkSYS rollup implementation (Syscoin's first zk Edgechain)." "Shipped the Epic Cash MimbleWimble upgrade in Rust from v2.17 → v3.0." "Built the KYC + DID layer for on-chain primary and secondary sales at Pollum."

### Kmino bullets — PRESERVE
**Rationale:** Recently rewritten. In the correct voice.

### "View Full Work History" orange CTA button — EVOLVE
**Rationale (SECONDARY):** The LinkedIn link is useful for recruiters. The solid-orange-rounded-lg button is the most "marketing CTA" element on the page.
**Direction:** Demote to a plain inline link: "Full history on LinkedIn →". No fill, no pill.

---

## Skills section

### Skills cards with green checkmarks — REPLACE (entirely)
**Rationale (PRIMARY):** Single most template-y element on the site. Directly contradicts the "not template-y" non-negotiable. Every bullet is a category, not a named system — zero information density.
**Direction:** Replace with one of:
  (a) A prose paragraph naming the actual stack and what was done with it.
  (b) A two-column named-systems table: "Solidity → Pegasys.fi (Uniswap v3 fork); UnoRe; Lunos coverage contracts. Rust → Epic Cash MimbleWimble upgrade. Move → [recent work]. UTXO → Syscoin core contributions. ZK → zkSYS Edgechain."
  (c) A short "Stack" list with zero check icons, just typography.
Option (b) is the strongest for the 90-second test — it couples each skill to a specific named artifact.

---

## Projects page

### Project grid + accordion + carousel pattern — PRESERVE (move); EVOLVE (content)
**Rationale:** The interactive pattern is fine. The content layer is thin.
**Direction:** Keep the accordion/carousel. Expand each project's description from one tagline to: (a) role ("Tech Lead" / "Core Manager" / etc.), (b) stack, (c) one hard problem solved, (d) direct links (repo, live site, notable PR if any).

### Project descriptions (one-line taglines) — REPLACE
**Rationale (PRIMARY):** "Automated, trustless coverage solutions for digital assets." is product-marketing register.
**Direction:** Engineer-note register: what it is, what was shipped, one technical specific.

### Decorative gradient blobs — REPLACE (remove)
See above under visual bones.

### Projects H1 typography (sans, not serif) — EVOLVE
**Rationale:** Inconsistent with home H1. Apply `font-serif` for parity OR commit to all-sans headings across the site.

---

## Technical hygiene (visible to PRIMARY persona in DevTools)

### Tailwind 2.2.19 + FontAwesome via CDN — REPLACE
**Rationale (PRIMARY):** An engineering lead opening DevTools will see a legacy CDN setup alongside Next.js's built-in Tailwind. This is a small but real credibility hit.
**Direction:** Remove both CDN links. Use the project's installed Tailwind. Replace FontAwesome with Lucide / react-icons (tree-shaken) or inline SVGs. Site ships fewer bytes, loads faster, and the network tab tells a cleaner story.

### Inline color tokens (#f97316, #171717, #2b2b2c, #3b3b3c, #161617) repeated across files — EVOLVE
**Rationale:** Small site, inline is acceptable. But the repetition means any color change is a 40-line diff.
**Direction:** Extract to a single tokens file (CSS vars or Tailwind theme extension). Low urgency; do this when the final palette is decided.

### Meta title and description — REPLACE
**Rationale (BOTH personas):** "Blockchain & Emerging Technologies" and "Software engineer and technical leader with expertise in…" are exactly the registers the BRIEF rejects. Also: "Lafeta" is missing the accent from "Lafetá."
**Direction:** `title: "David Potolski Lafetá — Blockchain Engineer"`. `description: "Blockchain engineer working across EVM and UTXO chains, DeFi, ZK, and smart contracts. Currently at Syscoin, open to full-time roles."`

---

## New elements to introduce (not currently on the site)

### Writing surface — ADD
**Rationale (PRIMARY):** Reference portfolios all have first-class writing; this is the highest-leverage addition for the 90-second credibility test.
**Direction:** At minimum, a short "Writing" section on home listing 3–5 Medium post titles with dates, linking out. Ideally, a proper `/writing` index and one native post written in the target voice.

### Explicit availability badge / line — ADD
**Rationale (BOTH personas):** Currently the "— open to new opportunities" is embedded in a subline. Making it a distinct element (small status pill or a line below the name: "Open to full-time roles · Remote · Available from [date]") serves both the 30-second scan and the 90-second check.

### Direct-to-work deep links — ADD
**Rationale (PRIMARY):** Link specific PRs or repos for the biggest named systems (zkSYS, Syscoin core, Epic Cash Rust upgrade). Turns claims into evidence.

---

## Priority sequence for implementation

High-impact, low-effort (do first):
1. Rewrite hero subline and kill "Founder @ Kmino" lead.
2. Replace meta title and description.
3. Remove section-divider orange bars.
4. Remove decorative gradient blobs.
5. Rewrite Experience bullets to name systems.
6. Replace Skills section with named-systems treatment.
7. Demote "View Full Work History" to inline link.

High-impact, medium-effort (do next):
8. Swap Tailwind default serif for a crafted serif via `next/font`.
9. Shrink / remove centered profile photo; left-align hero.
10. Replace FontAwesome + CDN Tailwind with proper imports.
11. Add Writing surface (at minimum a linked list of 3–5 posts).

Reconsider later (only after above is done):
12. Sidebar nav: commit (with more content) or simplify to top-right.
13. Extract color tokens to a central theme layer.
14. Decide final accent direction (keep orange with discipline vs. replace).

---

## Related
- [Brand Inventory](./brand-inventory.md)
- [Coherence Assessment](./coherence-assessment.md)
- [Market Fit](./market-fit.md)
- [Equity Analysis](./equity-analysis.md)
- [Index](./INDEX.md)
