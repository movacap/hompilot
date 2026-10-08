# HomPilot SEO and bilingual publishing

Run `npm ci` and `npm run build` before publishing. Vercel runs this same build.

## Sources

- Homepage markup: `dist/app.js`, `dist/sections.js`, `dist/site-header.js`.
- Homepage translations and visible FAQ: `dist/content.js`.
- Homepage document shell: `src/home.html`.
- French agent content: `src/agents/1.html` through `9.html`.
- English agent translations: `dist/agent-content-en.js`.
- Static agent translation renderer: `scripts/render-agent.mjs`.
- Metadata, structured data and generated discovery files: `scripts/build-seo.mjs`.

The build generates complete visible HTML for the English homepage at `/`, the French homepage at `/fr`, and nine agent pages at `/en/agents/1`–`9` and `/fr/agents/1`–`9`. Explicit /en and /fr URLs retain their language. On the neutral / homepage, an early browser script selects French for a French browser, or respects the saved manual choice. Other browser languages default to English. Static HTML and canonical metadata remain deterministic. Keep source files authoritative; hand edits to generated HTML are overwritten by the next build.

`/en` is an explicit English entry point canonicalized to `/`. `/homepage3` and legacy `/agents` routes permanently redirect in production. They are excluded from the sitemap. The widget test page is noindex. The sitemap has canonical URLs and reciprocal language alternates. Structured data describes existing content and does not include invented ratings, reviews or performance claims.

`llms.txt` is a supplemental product index, not a ranking guarantee or replacement for crawlable HTML. FAQ markup matches the visible questions and answers; eligibility for search features is determined by each search engine.

`verify.mjs` checks JavaScript and local assets. `scripts/verify-seo.mjs` checks all 42 canonical pages, metadata, static headings, JSON-LD, FAQ parity and internal links. These checks run at every build.

After deploying, submit `https://www.hompilot.com/sitemap.xml` in the site's Google Search Console and Bing Webmaster Tools properties if access is available. Submission and indexing are external to this repository.

## Legacy directory migration (2026-10-08)

The former homeowner directory has indexed URLs such as `/roof-repair/montreal`, `/roof-repair/calgary`, `/roofer/edmonton`, `/electrician/montreal` and `/services/roofer`. The old directory data is not present in this repository. Do not fabricate providers, availability, ratings or local prices.

Ten service guides and their index are available at `/services` and `/fr/services`, with canonical metadata and reciprocal language links. They explain how to prepare a service request, explicitly identify the retired directory and link to the current product. Known service/city URL patterns permanently redirect (308) to the corresponding service guide, consolidating city pages without creating duplicate city landing pages. Unrelated unknown URLs still return a real 404.

Edit `scripts/service-content.mjs` for categories, aliases and bilingual guide text; `scripts/render-service.mjs` for layout. Run `npm run redirects` after changing aliases and commit the generated `vercel.json`. `scripts/verify-redirects.mjs` checks known indexed URLs, destination files, loops, canonical routes and negative cases at every build. Legacy redirects are excluded from the sitemap.

Public search results do not provide a complete index inventory. Export Google Search Console's indexed and not-found URLs for an exhaustive migration audit, and add any additional historical URL families only after mapping their content to a relevant destination.
