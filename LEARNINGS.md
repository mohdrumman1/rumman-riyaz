## 2026-07-31: Hero re-pitched to lead with SRE / production engineering

**Tags:** copy, hero, positioning
**Status:** Fixed

**Issue:** Hero led with generic "I build software and ship AI products," not aligned with the SRE / production-engineering roles being targeted.

**Investigation:** Re-read the actual Projects data (`src/data/projects.js`) to check what the site really shows before rewriting the pitch: 4 PM-tooling projects, 4 AI-automation projects, and 3 "professional" engineering projects (AWS Lambda enterprise portals for utility companies, an AWS SAM/Rekognition image-validation pipeline, a Jenkins CI/CD pipeline, a ServiceNow-to-S3 claims pipeline that saved clients $10K/week). It is a genuine mix, not a pure-SRE portfolio, so the heading leads with the target framing and the sub-line states the mix honestly rather than overclaiming.

**Root cause:** Hero copy was written before the SRE / production-engineering career target was locked in, and was never revisited.

**Fix:** `src/components/Hero/Hero.jsx` heading changed from "I build software and ship AI products." to "Rumman Riyaz. Production engineering, site reliability." Subtext changed from the 3-line PMP/Forma AI/Newcastle bio to one line: "A mix of production AWS systems, CI/CD, and AI automation projects." No other file touched, nav, CSS, and all other sections were explicitly out of scope for this pass.

**Verify:** grep for U+2014 across the repo returns 0. `npm run build` succeeds. Live bundle contains "production engineering" and "site reliability", checked via the built JS asset directly, since this is a client-rendered Vite SPA with no SSR: a plain `curl` of the HTML shell never contains React-rendered text regardless of what Hero.jsx says.

**If it recurs:** Check `src/components/Hero/Hero.jsx` heading and subtext directly. To confirm any future hero-copy change actually shipped, grep the built JS bundle (`dist/assets/index-*.js` or the deployed equivalent) for the new phrase, not the raw page HTML, since this site has no server-side rendering.

---

## 2026-07-30: Em dash cleanup + 5-second hero clarity pass

**Tags:** copy, em-dash, hero, nav, clarity
**Status:** Fixed

**Issue:** Em dashes scattered through copy. Hero + nav didn't pass 5-second test.

**Investigation:** Grepped repo for U+2014 (em dash) and U+2013 (en dash) across all non-node_modules/dist files. Found 17 em-dash occurrences, 0 en-dashes, across `index.html` (4), `README.md` (10), `src/components/WhatIDo/WhatIDo.jsx` (1), `src/data/projects.js` (1 line, 2 dashes). Reviewed Hero, Nav, Footer, ProjectCard, and all section components for the 5-second test (who / role / what's-to-find / navigation). Checked `Nav.css` to confirm desktop nav is not hamburger-hidden (`.nav-links` is `display:flex` by default, hamburger only shows under `max-width:767px`, already correct, no change needed). Checked `Hero.css` (`min-height:100vh`) but skipped shrinking it: the brief's "reduce hero height so a project card peeks" assumes Projects is the section right after Hero, but this repo's order is Hero → About → WhatIDo → Projects, so shrinking hero height would only reveal a sliver of the About section, not a project card, would add CSS risk for zero benefit, so left untouched.

**Root cause:** Copy pass never happened since initial build. Hero heading/subtext were already tight ("I build software and ship AI products." + PMP/Forma AI/Newcastle line) but the primary CTA said "Learn more ↓" → `#about`, never mentioning projects, so a visitor had no explicit signal that projects/portfolio work was the thing to look at. Nav labelled the projects link "Work" (ambiguous with "employment/career", which is actually a separate Timeline section) instead of "Projects". Em dashes were used as ad hoc separators for name/title pairs, appositives, and list glossary entries throughout `index.html` meta tags, `README.md`, one `WhatIDo` card body, and one project `longDescription`.

**Fix:** Replaced all 17 em dashes with the punctuation that matches how each was actually being used: colon for "Name → Role" title/label pairs (matches the existing `<title>` tag convention already in the codebase), comma for appositives/interruptions that can't stand alone as their own sentence, period for two independent clauses joined by a dash, colon for "metric: list" and "term → definition" glossary-style list items. Changed Hero's primary CTA from `Learn more ↓` (`#about`) to `View projects ↓` (`#projects`), one line, makes "what you'll find" and "how to get there" explicit in the single most prominent above-the-fold element. Renamed Nav's `Work` label to `Projects` to match the CTA and remove ambiguity with the separate Career/Timeline section. Files touched: `index.html`, `README.md`, `src/components/WhatIDo/WhatIDo.jsx`, `src/data/projects.js`, `src/components/Hero/Hero.jsx`, `src/components/Nav/Nav.jsx`. Project cards, Footer, and About/Contact/FormaAI copy were already clear/complete per the brief's own checklist, so left untouched (shortest diff).

**Verify:** grep across the repo (excluding node_modules/.git/dist/.wrangler) for U+2014 and U+2013 returns 0 matches. `npm run build` succeeds; grep of `dist/` for U+2014 returns 0. `curl -s https://rummanriyaz.com` piped through a U+2014 count returns 0 (confirmed stable across 5 independent edge requests with `cf-cache-status: DYNAMIC`, unique `cf-ray` IDs; one immediate post-deploy check briefly caught a stale edge node, resolved within ~60s). Live hero read: label "Software Engineer · Technical PM · AI Founder", heading "I build software and ship AI products.", primary CTA "View projects ↓" pointing at `#projects`. Live nav: About · Projects · Stack · Contact.

**If it recurs:** Run a repo-wide grep for U+2014 and U+2013 (excluding node_modules, .git, dist) and rewrite per punctuation-substitution rules (colon for name/label pairs and glossary lists, comma for non-standalone interruptions, period for two independent clauses, ` to `/`-` for ranges). For hero/nav clarity, re-check against: who, role, what's-to-find, how-to-navigate. The primary CTA and nav labels are the highest-leverage single-line fixes.
