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

The build generates complete visible HTML for the English homepage at `/`, the French homepage at `/fr`, and nine agent pages at `/en/agents/1`–`9` and `/fr/agents/1`–`9`. Language comes from the URL, not a visitor's local storage. Keep source files authoritative; hand edits to generated HTML are overwritten by the next build.

`/en`, `/homepage3`, and legacy `/agents` routes permanently redirect in production. They are excluded from the sitemap. The widget test page is noindex. The sitemap has canonical URLs and reciprocal language alternates. Structured data describes existing content and does not include invented ratings, reviews or performance claims.

`llms.txt` is a supplemental product index, not a ranking guarantee or replacement for crawlable HTML. FAQ markup matches the visible questions and answers; eligibility for search features is determined by each search engine.

`verify.mjs` checks JavaScript and local assets. `scripts/verify-seo.mjs` checks all 20 canonical pages, metadata, static headings, JSON-LD, FAQ parity and internal links. These checks run at every build.

After deploying, submit `https://hompilot.com/sitemap.xml` in the site's Google Search Console and Bing Webmaster Tools properties if access is available. Submission and indexing are external to this repository.
