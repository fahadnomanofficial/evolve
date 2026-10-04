# Evolve by RS Group

A complete, responsive website built around Evolve's original branding, photography, verified services and product collections. Reviewed against all 32 supplied source URLs on 4 October 2026.

## Preview

Requires Node.js 20 or newer. No dependencies or installation are needed.

```powershell
Set-Location -LiteralPath 'H:\web rs'
npm start
```

Open http://localhost:4173. Alternatively, double-click `Start-Website.cmd` and open the displayed address. Keep that terminal running while viewing the website. Press Ctrl+C to stop it.

## Included

- 38 content routes plus a custom 404 page.
- Original Evolve logo and source website photography, saved locally.
- Logo loading animation, image reveals, hover effects and reduced-motion support.
- Product collection search, portfolio filters and keyboard-operable photo galleries.
- Before-and-after comparison using the original Villa Kappara images.
- Accessible mobile navigation, contact details, opening hours and directions.
- Project enquiry preparation, email-app link and copyable enquiry text.
- Page descriptions, canonical URLs, local-business structured data and XML sitemap.
- Local Manrope fonts; no runtime CDN, tracking script, framework or package dependencies.

## Deploy on Vercel

Import `fahadnomanofficial/evolve` into Vercel and deploy the `main` branch. The repository's `vercel.json` supplies the settings automatically:

- Framework preset: **Other**
- Root directory: repository root
- Build command: `npm run build`
- Output directory: `dist`
- Environment variables: none required

The build verifies internal links and exports only public pages and assets. Source files, documentation and local server code are excluded from the deployed output. Directory routes retain their trailing slashes, and `404.html` provides the missing-page screen. No server or paid database is needed. The enquiry and shop behavior described below remains unchanged on Vercel.

## Editing the website

- `content.cjs`: product categories, subcategories and project galleries.
- `build.cjs`: page templates, page copy, contact details and navigation.
- `styles.css`: design tokens, responsive layouts and animation.
- `app.js`: filters, gallery, menu, comparison and enquiry behavior.
- `assets/`: original brand assets, photographs and fonts.

After editing templates or content, run `npm run build`, followed by `npm run check`. Static HTML pages are generated in their corresponding route folders. The website uses normal links and can be hosted by an ordinary static web server with directory indexes enabled. The preview server binds only to localhost.

## Enquiries and commerce

The enquiry form validates the visitor's details and prepares an email addressed to `sales@rsgroup.com.mt`. It does not send, store or claim to submit enquiries to a server. The visitor must open their email app and send the prepared message, or copy it manually. The verified telephone links are also available.

The shop, basket and checkout intentionally hand off to the existing Evolve store. No prices, inventory, payments or order processing are simulated. Before replacing the existing site on `www.evolve.com.mt`, preserve the live WooCommerce store on a separate working path or hostname and update these handoff links; otherwise they would point back to this new frontend. This is a local website build, not a migration or a public deployment.

The KRAFT colour guide opens the manufacturer link found on the original site. Decorative colour swatches are labelled as illustrations, not exact paint colours. Sample the intended surface before choosing a paint.

Canonical URLs and the sitemap are prepared for `https://www.evolve.com.mt`. Change these in `build.cjs` before publishing to another domain. No production site or hosting account was changed.

See `SOURCE-AUDIT.md` for the source-page audit and content decisions.
