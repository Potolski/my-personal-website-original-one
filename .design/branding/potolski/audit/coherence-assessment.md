# Coherence Assessment

> Phase: audit | Brand: potolski | Generated: 2026-04-17

---

Rating how well the existing elements work together. Scale: 1 (incoherent) — 5 (tight). The headline finding is that the **visual system is internally consistent, but misaligned with the repositioned strategy** — the look still implies "professional services site" while the intended voice is "engineer-to-engineer".

## Dimension 1 — Strategy coherence: 2/5
The strategy itself has been explicitly restated in the BRIEF ("specifics, not claims"; seeking full-time role; engineer-to-engineer voice). The shipped site pre-dates this strategy and still carries the prior framing:
- Hero opens "Founder @ Kmino" — signals "I run a business" before "I am available for hire."
- Services-tinted language survives in Skills and several Experience bullets ("trustless coverage solutions that protect digital assets across the blockchain ecosystem").
- Meta title says "Blockchain & Emerging Technologies" — a pitch-deck category, not a person.
- There is no writing surface, no `/uses`, no deep technical artifact — so "specifics, not claims" is not structurally supported even if copy is tightened.

## Dimension 2 — Strategy ↔ Visual alignment: 2.5/5
The visual is clean but "safe corporate-minimal" rather than "engineer-precise". Concrete mismatches:
- **Centered hero with large profile photo + social button row** is the layout pattern of portfolio templates (Cvwing, resume-site starters), not of engineer-first references like brian.lovin or rauno.me — those open left-aligned with prose and a nav.
- **Section H2s with underline-bar dividers** (`h-0.5 w-16 bg-#f97316`) read as "landing page section header" — a services-site convention. Engineer portfolios typically skip H2 dividers and let whitespace carry hierarchy.
- **Skills cards with green checkmarks** (`fas fa-check-circle text-green-500`) are the single most template-y element on the site and directly contradict the "not template-y" non-negotiable.
- **Decorative gradient blobs** on `/projects` (orange→pink, orange→yellow, blurred) pull toward marketing-site aesthetic — exactly the "web3 degen / agency gloss" the brief flags to avoid.
- The serif H1 + sans body pairing, the dark mode, and the generous whitespace DO align with the "editorial-minimal engineer portfolio" aspiration. These are the load-bearing visual moves worth keeping.

## Dimension 3 — Internal consistency: 3.5/5
Within its own system, the site is reasonably consistent — but the inconsistencies that exist are telling:
- **Font-serif is applied on home H1/H2 but NOT on the projects H1** (`text-2xl md:text-4xl font-semibold tracking-tight` — no `font-serif`). So serif is "sometimes editorial heading, sometimes not" with no rule.
- **Orange appears in 6+ registers:** #f97316 (inline divider bars + CTA), text-orange-500 (company names, carousel dot), text-orange-600 (light-mode links), text-orange-400 (dark-mode links), orange-400→pink-500 gradient (decorative blob), and green-500 (the skill checkmarks) — accent discipline is loose.
- **Surface palette in dark mode is three-tiered** (`#171717` bg, `#2b2b2c` subtle surface, `#161617` "darker-than-bg" skills cards). The third tier is subtle to the point of looking like a render bug.
- **Card radii drift:** `rounded-lg` (skills, side button), `rounded-xl` (project cards), `rounded-2xl` (sidebar pill), `rounded` (social buttons). No scale.
- **No design-token layer** — every color lives inline, often repeated 5–10 times. This is fine for a small site but means "change the accent" is a 40-line diff.

## Dimension 4 — Channel / surface consistency: 3/5
There are only two surfaces (`/` and `/projects`) and they share the sidebar + theme, so drift is limited. Visible gaps:
- Projects page has decorative background gradients; home does not.
- Projects H1 uses sans; home H1 uses serif.
- Card treatment differs between home skills cards and projects cards (different radii, different dark-mode surface color, different border weights).

## Dimension 5 — Voice consistency: 2.5/5
The voice is **already mid-refactor**, and it shows:
- Cleanest register: Hero tagline and About Me paragraph. First-person, specific, no hype. This is where the target voice lives.
- Mid register: Kmino bullet ("small engineering studio alongside a few other engineers") — recently softened per BRIEF.md notes.
- Worst register: Lunos/Syscoin/Pollum bullets ("built automated, trustless coverage solutions", "strategic tracking across development initiatives", "managed development of Pali wallet, a successful crypto wallet extension") and the entire Skills section.
- Projects descriptions use one-line taglines ("Automated, trustless coverage solutions for digital assets.") — these read like product hero copy, not engineer notes.

## Composite: 2.7/5
The site is a coherent services-era personal site that has been partly edited toward a new strategy. The visual bones (serif H1, dark mode, whitespace, orange accent) can carry the new strategy; the decorative overlays, the checkmark skills grid, the section dividers, and the residual agency-speak cannot.

## Top 5 coherence fixes (in order of impact)
1. Kill the green-checkmark Skills section outright — replace with a named-systems / named-protocols table or a prose paragraph.
2. Rewrite the remaining Experience bullets to name systems, not outcomes ("Led zkSYS rollup implementation" not "optimized gas efficiency across the ecosystem").
3. Remove or redesign the section-divider orange bars; they are the strongest "landing page" tell.
4. Delete the decorative gradient blobs on `/projects`.
5. Normalize serif H1 usage — either every page heading is serif or none are.

---

## Related
- [Brand Inventory](./brand-inventory.md)
- [Market Fit](./market-fit.md)
- [Equity Analysis](./equity-analysis.md)
- [Evolution Map](./evolution-map.md)
- [Index](./INDEX.md)
