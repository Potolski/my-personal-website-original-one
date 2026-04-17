# Brand Roadmap

## Brand: potolski
**Created:** 2026-04-17

---

## Phase 0: Audit
**Status:** pending (next)
**Command:** `/gsp-brand-audit`
**Input:** Existing brand assets (current site at `app/page.js`, `app/projects/page.js`) + BRIEF.md
**Output:** `audit/`
**Goal:** Audit the existing site's coherence, market fit (vs. engineer-portfolio norms), and equity. Produce an evolution map that guides what to preserve / evolve / replace.

## Phase 1: Research
**Status:** pending
**Command:** `/gsp-brand-research`
**Input:** BRIEF.md + audit/
**Output:** `discover/`
**Goal:** Research reference engineer portfolios (Brian Lovin, Rauno, Emil Kowalski, Paco Coursey), type pairings, color systems, and layout patterns used in top-tier personal sites.

## Phase 2: Strategy
**Status:** pending
**Command:** `/gsp-brand-strategy`
**Input:** BRIEF.md + discover/
**Output:** `strategy/`
**Goal:** Lock positioning ("precise, grounded, understated — engineer-to-engineer"), voice, and the messaging hierarchy for the hero, about, work, and contact surfaces.

## Phase 3: Identity
**Status:** pending
**Command:** `/gsp-brand-identity`
**Input:** BRIEF.md + strategy/
**Output:** `identity/` + `palettes.json`
**Goal:** Decide accent color (keep #f97316 or evolve), type pairing (keep Inter + serif or evolve), and spacing/radius/elevation tokens.

## Phase 4: Guidelines (Operationalize)
**Status:** pending
**Command:** `/gsp-brand-guidelines`
**Input:** Identity + Strategy + BRIEF.md
**Output:** `patterns/` (potolski.yml, STYLE.md, guidelines.html, components/)
**Goal:** Operationalize the brand as tokens + STYLE.md so the redesign can pull from a real system instead of inline magic strings.
