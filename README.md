# TAJ Sample Engine

A single-template restaurant website system for TAJ STUDIO. It is static and GitHub Pages compatible.

## Personalize a customer website
1. Open `config.js`.
2. Change the business name, tagline, phone, WhatsApp number, address, links, colours, images, story and menu.
3. Replace image URLs with direct image URLs or local files in `assets/`.
4. Save and open `index.html` in a browser to preview.

For phone and WhatsApp, use digits only with country code (India: `91`), e.g. `919876543210`.

## Publish on GitHub Pages
1. Create a repository and upload the contents of this folder (not the outer ZIP).
2. In repository Settings → Pages, choose Deploy from a branch.
3. Select `main` and `/ (root)`, then Save.

## Important
- Edit `config.js` for normal customer changes.
- `app.js` handles rendering and `style.css` handles layout.
- Images use remote Unsplash URLs in the demo. For client delivery, use customer-approved images and consider placing them in `assets/` so they remain under your control.
- This is a demo template: replace sample menu items, prices, address and contact details before showing it as a real business website.
- `heroTitle` and `storyTitle` support simple HTML emphasis with `<em>...</em>`. Other config text is inserted as text.
