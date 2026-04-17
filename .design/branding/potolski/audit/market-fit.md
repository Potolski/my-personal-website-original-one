# Market Fit

> Phase: audit | Brand: potolski | Generated: 2026-04-17

---

Comparing the current site against the reference portfolios the BRIEF names as the target register: Brian Lovin (brian.lovin), Rauno (rauno.me), Emil Kowalski (emilkowal.ski), Paco Coursey (paco.me). These are the rooms the primary persona (engineering lead, 90-second check) lives in. The honest finding: **the current site sits closer to "portfolio template with a good color choice" than to any of the references.**

## Dimension-by-dimension comparison

### Hero pattern
- **References:** Left-aligned, prose-first, no photo or a tiny inline avatar. Brian Lovin's home is a narrow column of writing + "Now" + recent posts. Rauno opens with a single sentence and a demo. Emil Kowalski opens with his name, a role line, and a list of components. Paco opens with an essay excerpt.
- **Current site:** Centered hero, 160x160 circular photo, large serif name, four social buttons in a row, color-highlighted tech keywords separated by bullets. This is the pattern of developer-resume templates (e.g., github.io starters).
- **Gap:** Centering + photo + social-button-row is the single biggest "I am not one of those portfolios" signal to miss.

### Type pairing choice
- **References:** Mostly system sans (Brian Lovin, Paco), sometimes a premium display (Emil uses Söhne/Inter well; Rauno uses sans throughout with tight metrics). None of them use serif headings.
- **Current site:** Serif H1/H2 + Inter body. This is actually a mild differentiator — editorial register. **The serif is not wrong**, but it is not the reference-portfolio default; it leans more toward Stripe Press / NYT personal-site than toward the engineer-minimal cohort.
- **Gap:** Decision to keep: serif heading is fine and can be a point of difference. Decision to sharpen: the specific serif (Georgia via Tailwind default) is generic; loading a crafted serif (e.g., Source Serif, Fraunces, GT Alpina) would turn a neutral default into a deliberate choice.

### Accent color boldness
- **References:** Mostly monochrome or near-monochrome. Brian Lovin uses subtle hue shifts by section (tinted backgrounds per tag), not a signature accent. Rauno: near-monochrome with cyan link color. Emil: black/white with occasional purple. Paco: greyscale + occasional blue.
- **Current site:** Orange (#f97316) at high saturation, used in 6+ places per page.
- **Gap:** The orange is warmer and more confident than competitor-blue, but it is used too liberally — every H2 underline, every company name, CTA fills, link colors, carousel dots, gradient blobs. In the reference register, color is a scalpel; here it's a highlighter.

### Density
- **References:** High textual density, small type (often 14–15px body), tight line-heights, visible secondary metadata (dates, tags, categories). Information-rich.
- **Current site:** Low textual density. `text-base` (16px) body, generous padding, section-per-content-unit, hero with ~50 words. Reads more like a landing page than a portfolio.
- **Gap:** Major. Density is how engineer portfolios signal "I respect your time and you can scan fast." Current site forces scrolling past big whitespace blocks to find the next piece of substance.

### Writing / blog surface
- **References:** All four have a writing surface that is first-class. Brian Lovin's "Writing" is arguably the strongest element on his site. Rauno has notes. Emil has articles. Paco has essays.
- **Current site:** A single Medium button in the hero row. No inline excerpts, no post listing, no titles visible on the site itself.
- **Gap:** Missing entirely. For the 90-second credibility test, a visible post titled "How we shipped zkSYS" does more than any bullet list.

### Motion
- **References:** Sparingly used, usually one signature interaction (Emil's modal work, Paco's command palette, Rauno's demos). Not applied to structural chrome.
- **Current site:** Icon shake on hover and a sun/moon morph on theme toggle. Appropriately restrained.
- **Gap:** Small. Motion is not a liability, but there's no signature interaction that says "I ship craft" — it's all chrome polish.

### Photo vs. no-photo hero
- **References:** None of the four lead with a large portrait photo. Brian Lovin has a tiny avatar. Rauno has no photo on home. Emil has no photo on home. Paco has no photo on home.
- **Current site:** 160x160 profile photo dead-center, first visual element. This is the strongest "not one of us" signal to the primary persona — the pattern belongs to consultant/freelance sites and LinkedIn-style portfolios.
- **Gap:** Large. Either shrink the photo dramatically (12–32px inline avatar) or drop it. The resume context already provides the face.

### Navigation pattern
- **References:** Mostly top-right inline nav (3–5 links). Brian Lovin: left sidebar (the clearest precedent for the current site's pattern). Rauno: top-right. Emil: top-right. Paco: top-right.
- **Current site:** Left floating sidebar pill (desktop) / bottom tab bar (mobile), 3 items with icons only.
- **Assessment:** The sidebar is Brian-Lovin-adjacent, so it has precedent. BUT the current implementation is **icon-only**, which reads more like an app chrome than a portfolio nav. Lovin uses labels + richer structure (Writing, Bookmarks, Sponsors…). The current nav is ambitious-looking but carries only 3 items, which makes it feel over-engineered for what it holds.

## Competitor positioning against personas

### Primary (engineering lead, 90s):
- On the references: immediately sees a name, a role, a recent post title, and a technical artifact. High-density signal.
- On the current site: sees a photo, a name, a "Founder" label, six orange-highlighted one-word tags, four social buttons. Must scroll to find named systems. The Founder label is actively misleading for the repositioning goal.

### Secondary (recruiter, 30s):
- On the references: would struggle, because the references don't optimize for this persona. The current site actually serves recruiters better than the references do (clear dates, clear company names, clear current-role line).
- **This is the one dimension where the current site out-performs the references.** Any evolution must not break this — recruiter-scannability (dates, company names, role titles, explicit availability line) is table stakes for the job search outcome.

## Market gaps the current site is well-positioned to claim
1. **Editorial-minimal blockchain portfolio.** The reference cohort is product/design-engineer heavy. An editorial-minimal engineer site that is explicitly blockchain and explicitly protocol-level is a thin space. Keep the serif + dark mode + whitespace bones — lean in.
2. **Specifics-density in the blockchain niche.** Most Web3 engineer sites are either agency-style or anonymous dev-rel. Naming real systems (zkSYS, Pali, Pegasys, Syscoin core, MimbleWimble Rust upgrade, UnoRe) is a defensible position almost no peer is claiming in one place.
3. **"Studio on the side" honesty.** The recent Kmino softening ("small engineering studio alongside a few other engineers, on the side") is an unusual bit of candor. It's defensible — don't hide Kmino, but keep it subordinate to "available for full-time work."

## Trend alignment summary
- Dark-mode-first, serif/sans pairing, generous whitespace: **on-trend, keep.**
- Large centered photo, green checkmarks, gradient blobs, section-divider bars, CDN Tailwind + CDN FontAwesome: **off-trend (circa 2019–2021 portfolio templates), replace.**
- Orange accent: **neutral-trending.** Warm, confident, not blue — a differentiator. But needs to go from "highlighter" to "scalpel."

---

## Related
- [Brand Inventory](./brand-inventory.md)
- [Coherence Assessment](./coherence-assessment.md)
- [Equity Analysis](./equity-analysis.md)
- [Evolution Map](./evolution-map.md)
- [Index](./INDEX.md)
