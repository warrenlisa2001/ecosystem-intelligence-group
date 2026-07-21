# Site update — Government Relations & ESG + full Meta/SEO/Schema/AI pass

This package contains 88 changed files plus this README. Copy them into your local
ecosystem-intelligence-group repo (overwriting same-named files), delete
industry-hospitality.html (superseded — see below), then commit and push.

## Part 1 — Government Relations & ESG (Ayesha)

- industry-government.html: rebuilt from an old placeholder stub into a full
  practice page (hero, stats, "what we deliver" cards, engagement-model section,
  named-leader section) led by Ayesha Alafeefi, focused on Government Relations &
  ESG rather than Hospitality & Tourism. Full bilingual EN/AR support.
- industry-hospitality.html: deleted (its content is now folded into
  industry-government.html). Nothing else links to it.
- leadership.html: fixed two pre-existing markup bugs on Ayesha's card (a
  duplicated <div> and a missing <div> that likely broke the layout from her card
  onward), reframed her card around Government Relations & ESG, added her real
  photo (from your connected Leaders folder), and added a "View practice" link.
- home.html: ticker/showcase card/globe node renamed from Hospitality & Tourism to
  Government Relations & ESG; domain-count copy corrected from eight to nine.
- Navigation: "Government Relations & ESG" added to the Intelligence dropdown,
  mobile nav, and footer across every page using the current template (~20 files),
  each with Arabic translation strings. Footer domain-count copy corrected from
  ten to eleven where applicable.

## Part 2 — Site-wide Meta / SEO / Schema / AI pass (all 110 HTML files audited)

Coverage now stands at:
- Canonical tag: 110/110
- Meta description: 108/110
- Open Graph tags: 109/110
- Twitter Card tags: 109/110
- Schema.org structured data: 109/110
- Robots meta: 108/110

The two pages intentionally left without full tagging are industry-ai.html (an
instant redirect stub to industry-agentic-ai.html — already has its own
canonical) and schema-snippet.html (not a real page — it's a reference snippet
of your own SEO head-block template, which I followed as the standard for
everything else).

What was added, file by file:

- **Meta description, canonical link, Open Graph tags, Twitter Card tags** — added
  wherever missing. Descriptions were extracted from each page's own hero
  copy where possible (not generic filler), truncated to ~165 characters.
- **BreadcrumbList schema** — added to every page that lacked any Schema.org data.
- **Article schema** — added to blog-*.html posts (headline, description,
  publisher) alongside their BreadcrumbList. I did not fabricate publish dates —
  omitted rather than guessed.
- **Person schema** — added for all 8 named leaders on leadership.html (name,
  job title, employer, email/LinkedIn where known), plus a BreadcrumbList and
  full OG/Twitter tags for the page (it had none before).
- **Organization + WebSite schema** — added to home.html, the true homepage
  (it had zero Open Graph tags or structured data before this pass — the single
  biggest gap on the site). index.html (the splash/loading page) stays
  intentionally noindexed and now has correct OG tags for social sharing.
- **robots meta = noindex, follow** applied to content that isn't part of the
  live SIB Consulting site and shouldn't compete in search results: the two
  Masafi client-demo pages, museum-future-platform.html, sc-intelligence-demo.html,
  both eig-website.html variants, and index-ashwin.html. Everything else is
  index, follow.
- **Accessibility/SEO**: lisa-warren.html had no <h1> at all (heading structure
  gap) — added a visually-hidden <h1> matching its title, with no visual change.
- **llms.txt**: updated to list eleven domains (was ten) and added Ayesha
  Alafeefi / Government Relations & ESG to the leadership and key-pages lists.
- **robots.txt**: already allows GPTBot, ChatGPT-User, Claude-Web, PerplexityBot
  and Googlebot explicitly, and points to sitemap.xml — no changes needed.
- **sitemap.xml**: already included industry-government.html from before; left
  as-is otherwise (didn't attempt to re-audit which of the ~70 blog/case/service
  pages should be added, to keep this pass focused).

## Also noticed, not fixed (pre-existing, out of scope)

- 25 files have a mismatched <div>/</div> count (off by 1, sometimes more) that
  predates this session — most are the newer blog posts and intel-/service-*.html
  pages. Purely a template bug, not something I introduced; flagging in case it's
  causing layout issues you've noticed.
- home.html and leadership.html were, before today, running on an older page
  template (fewer practices, no Arabic toggle) than the rest of the site.
- Christopher Morley (IT & Digital) still has no leader card on leadership.html.
- The footer "Intelligence" column on home.html only lists 5 of the 9 (now
  Government-inclusive) domains.
