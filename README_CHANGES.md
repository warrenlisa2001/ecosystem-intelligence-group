# Government Relations & ESG — site update

## What changed

**New practice page:** `industry-government.html` was rebuilt from scratch (it was
previously an old placeholder stub). It's now a full practice page — hero, stats,
"what we deliver" cards, an engagement-model section, and a named-leader section —
led by Ayesha Alafeefi, reframed around Government Relations & ESG (ministerial
engagement, international delegation leadership, ESG governance, national strategy)
rather than Hospitality & Tourism. Full bilingual (EN/AR) support included, matching
your newest practice-page template.

**Deleted:** `industry-hospitality.html` — this was the page uploaded directly to
GitHub with Ayesha's Hospitality & Tourism content (title/canonical tags were still
pointing at "industry-agentic-ai.html" from copy-paste). Its content has been folded
into the new Government Relations & ESG page above, so this file is now redundant.
Delete it from your live repo when you merge these changes (nothing else links to it
anymore).

**leadership.html:** Ayesha's card already existed here but had two markup bugs —
a duplicated <div> on her card and a missing <div> on Patrick McCrudden's card right
after hers (this was likely breaking the layout from her card onward). Both are
fixed. Her card is also reframed: title, tagline, opening bio line, specialisation
order, and colour (pink -> teal #2dd4bf) now foreground Government Relations & ESG,
and a "View Government Relations & ESG Practice ->" link was added. All her factual
career history (Ministry of Economy & Tourism, UAE Tourism Strategy 2031, G20/BRICS
delegations, UN Tourism, Al Dahra) is preserved as-is.

**home.html:** the ticker item, the domain showcase card, and the interactive globe
node that referenced "Hospitality & Tourism" now say "Government Relations & ESG" and
link to the new page. The "Eight domains" heading/copy and footer tag were corrected
to "Nine domains" (this practice already existed as a 9th domain before today — the
copy just hadn't been updated when it was first added).

**Navigation, 20 other pages:** every page using the current practice-page template
(industry-education.html, industry-healthcare.html, industry-ai-governance.html,
about.html, contact.html, briefing.html, and related blog posts) now lists
"Government Relations & ESG" in the Intelligence dropdown, mobile nav, and footer,
alongside full Arabic translation strings. The "ten domains" footer copy on these
pages was corrected to "eleven domains".

## How to apply

Copy these files into your local ecosystem-intelligence-group repo (overwriting the
same-named files), delete industry-hospitality.html, then commit and push.

## One thing I couldn't do

You shared a headshot photo earlier in our chat, but it wasn't accessible to me as a
file I could embed — only visible inline. Ayesha's photo circle currently uses the
same teal "AA" initials placeholder the site already had for her. If you attach the
photo as a file (not pasted inline) or drop it in a connected folder, I can swap it
into both her leadership card and the new practice page.

## Also noticed (not fixed, out of scope)

- home.html and leadership.html are on an older page template (no Arabic toggle,
  fewer practices) than the rest of the site — likely from before AI Governance/AI
  Training were added. Not something I changed, just worth knowing.
- Christopher Morley (IT & Digital) has no leader card in leadership.html.
- The footer "Intelligence" column on home.html only lists 5 of the 9 domains.
