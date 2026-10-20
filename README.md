# Kaimanmich webdesign

Website van Kaimanmich — uw expert voor online zichtbaarheid. React 19, Vite 8, react-router 7, framer-motion.

## Lokaal draaien

```bash
npm install
npm run dev        # http://localhost:5190
```

## Publiceren

Elke push naar `main` bouwt en publiceert de site via GitHub Actions naar GitHub Pages
(`.github/workflows/deploy.yml`). De workflow vult zelf het juiste pad en adres in, dus de site werkt
op `<gebruiker>.github.io/<repo>/`, op `<gebruiker>.github.io` en op een eigen domein.

Eigen domein koppelen: Settings → Pages → Custom domain, en `VITE_SITE_URL` in `.env` aanpassen.

## Scripts

| Script | Wat het doet |
| --- | --- |
| `npm run build` | Productiebuild in `dist/`, plus een HTML-bestand per route, `404.html`, sitemap en robots.txt |
| `npm run lint` | oxlint |
| `npm run demos` | Bouwt de vier concepten opnieuw in `public/demos/` (vereist de conceptprojecten naast deze map) |
| `npm run ui-kit` | Bouwt `../ui-kit` en kopieert het naar `vendor/ui-kit` |

## Structuur

- `src/data/content.js` — alle teksten, prijzen, concepten
- `src/pages/` — Home, Diensten, Projecten, Concept (`/werk/:slug`), Contact, Privacy, Cookies
- `public/demos/` — gebouwde live demo's van de concepten
- `vendor/ui-kit/` — gebouwde componentbibliotheek (bron in `../ui-kit`)
