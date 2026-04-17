# Equity Analysis

> Phase: audit | Brand: potolski | Generated: 2026-04-17

---

Distinguishing what is genuinely worth preserving from what is merely familiar. Standard frame: **equity** means something has earned recognition or trust outside its creator's own head; **inertia** is "it's what the site currently uses, and changing it would be effort."

**Caveat up front:** this is a personal portfolio for an individual engineer seeking work, not a product brand with customers. There is no measurable external recognition, no share-of-voice, no brand tracking. So "equity" here is necessarily softer — it means *"moves that are already doing real work for the strategy, such that replacing them would cost effectiveness, not just effort."* With that frame, most of what the site has is inertia, not equity. The exceptions are small but real.

## Genuine equity (earned, doing work for the strategy)

### 1. Dark mode support — EQUITY
Dark mode is load-bearing for the primary persona. Engineering leads default to dark IDEs and expect dark-mode portfolios. Its presence here silently signals "this person lives in a terminal." The implementation is workmanlike (manual `#171717`/`#2b2b2c` inline, localStorage persistence, sun/moon toggle) but it works. This is equity: removing it would weaken credibility with the primary persona. *Keep.*

### 2. The serif heading + sans body pairing — EQUITY (contingent)
This is a deliberate editorial choice — the single non-default typographic decision the site makes. It gives the site an "I read and write" register rather than a "resume template" register. It's genuine equity ONLY IF the serif is upgraded from the Tailwind default (ui-serif/Georgia) to a crafted serif that earns the editorial signal. As-is it's a signal of intent that undershoots the execution; committing to a real serif (Fraunces, Source Serif, GT Alpina, or similar) would convert this from "nearly equity" to "firmly equity."

### 3. The Kmino softening copy — EQUITY
"Small engineering studio alongside a few other engineers, on the side" is recently-rewritten copy that does specific strategic work: it defuses the "why are you applying if you run a company?" objection in one sentence. That's a hard writing job, and it's done. This is one of the few surviving copy elements that is both recent AND aligned. *Keep verbatim.*

### 4. Named, real-work proof points — EQUITY (structurally)
Named systems (zkSYS, Pali Wallet, Pegasys.fi, Syscoin core, Lunos, UnoRe, MimbleWimble Rust upgrade) are the defensible differentiator. They exist as content, but they are under-displayed — buried in bullets rather than foregrounded. The *existence* is equity; the *presentation* is not. *Keep names; re-present them.*

### 5. Clear dates + named companies on Experience — EQUITY (for secondary persona)
Recruiter-scannability is one dimension where the current site outperforms the reference portfolios. Dates, city/country, company names, clear role titles — all present, all legible. This is the single feature that makes the site recruiter-forwardable. *Preserve this structure even while rewriting bullets.*

## Mere inertia (familiar, not earned)

### 1. Orange #f97316 — INERTIA (with potential)
This is the most-debated element, so be precise. The orange is:
- Not generic-Web3-blue — that's a real positive.
- Warm and distinctive in isolation — also true.
- Used in 6+ registers on the site with no discipline — that's the problem.
- Unrecognized externally — no one has seen this site and remembers "David Potolski uses orange." There is zero external recognition equity.

Verdict: the orange is inertia dressed as equity. It *could* become equity with discipline (used sparingly as a single accent, never as decoration), or it could be replaced entirely with almost no cost. The BRIEF lists accent color as "evolve — open" and that framing is correct. This is the one element to genuinely consider replacing on aesthetic grounds; the "equity" argument for keeping it does not hold up.

### 2. Centered hero with 160x160 profile photo — INERTIA
This is the strongest "I am a portfolio template" signal on the site. It persists because it was in the template, not because it earns trust. The references don't use it. The primary persona already has the face from LinkedIn/resume. *Replace.*

### 3. Green checkmark skills cards — INERTIA
No one looks at these and thinks "this engineer is credible." They persist because the template had them. Directly contradicts the "not template-y" non-negotiable. *Replace entirely.*

### 4. Section-divider orange bars (h-0.5 w-16) — INERTIA
Landing-page chrome. Not present in any reference portfolio. Persists because it was in the template. *Remove.*

### 5. Decorative gradient blobs on /projects — INERTIA
Marketing-site visual trope. Contradicts the "understated, precise" personality. *Remove.*

### 6. FontAwesome via CDN + Tailwind 2.2.19 via CDN — INERTIA (technical)
These are legacy loading strategies that persist because they work. They cost bytes, block render, and signal low attention to build hygiene to the technically-literate primary persona who will open DevTools. *Replace with proper Next.js imports / tree-shaken icon library (Lucide, react-icons tree-shaken, or inline SVG).*

### 7. The icon-only sidebar with 3 items — INERTIA (borderline)
The sidebar has a reference (Brian Lovin) but Lovin's sidebar carries 6+ labeled items in a hierarchy. Ours carries 3 unlabeled icons. It's over-engineered for its payload. Either grow its payload (add Writing, About, Uses) or simplify to top-right inline nav. Not replacing has no strategic cost; simplifying has no strategic cost. This is pure inertia either way. *Decide based on whether new surfaces are added.*

### 8. The "Founder @ Kmino" hero label — INERTIA (actively negative)
This is inertia that is working *against* the strategy. It was the right framing when the site was a services pitch; it's the wrong framing now. *Replace.*

### 9. Meta title "Blockchain & Emerging Technologies" — INERTIA (negative)
Holdover tagline. "Emerging technologies" is the register the brief explicitly calls out as not-us. *Replace.*

## Equity that doesn't currently exist but should
- **A writing surface.** The Medium button is a placeholder. Actual excerpts or a posts index would be the single highest-leverage addition — both for the 90-second test and for long-term search presence.
- **A "now" or availability line above the fold.** The current "— open to new opportunities" is embedded in a subline. Making it explicit (e.g., a small status badge or a short line under the name) would serve both personas immediately.
- **Deep links into GitHub / specific repos, not just the profile.** Linking to specific PRs or repos for named systems turns claims into evidence.

## Summary
Roughly three things are genuine equity: dark mode, serif-for-editorial (contingent on upgrade), and the recruiter-scannable Experience structure. Everything else — orange accent, centered-photo hero, sidebar nav, section dividers, skills cards, CDN assets, "Founder" label — is inertia and should be evaluated on its strategic merit alone, not on "we already have it."

---

## Related
- [Brand Inventory](./brand-inventory.md)
- [Coherence Assessment](./coherence-assessment.md)
- [Market Fit](./market-fit.md)
- [Evolution Map](./evolution-map.md)
- [Index](./INDEX.md)
