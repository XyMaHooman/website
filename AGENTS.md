# Horizon Properties — dev notes

## Stack
- Vite + React (plain JS, no TypeScript, no router — single homepage with anchor nav)
- Styles: two global stylesheets (`src/index.css` design tokens, `src/components.css` component styles). Dark editorial theme: bg `#0d1422`, accent sand `#c8b39b`, uppercase headers, thin `--line` separators.

## Run
```
docker compose -f docker-compose.base44.yml up -d
```
App on host port 3000 (Vite dev server, live reload, `allowedHosts: true` is REQUIRED — the preview proxy host rotates).

## Conventions / quirks
- All imagery is remote Unsplash URLs. Unsplash search/scrape endpoints are blocked from this sandbox — verify a photo ID with `curl -s -o /dev/null -w "%{http_code}" https://images.unsplash.com/<id>?q=80&w=600` (must be 200) before using it. Many plausible IDs are 404.
- Property data lives in `src/data/properties.js` (structured so it can later move to a database).
- No secrets needed; app is fully self-contained.
