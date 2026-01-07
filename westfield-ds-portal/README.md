# Westfield DS Portal (Demo)

A Next.js (App Router) documentation portal for a Shadcn-derived design system.
Includes:
- Brand guidelines (MDX)
- Components catalog driven by metadata
- Copy-to-clipboard “export” snippets
- Ask AI page (stub + server route)

## Quick start (local)
1. Install deps:
   - `pnpm install`
2. Run:
   - `pnpm dev`
3. Open: http://localhost:3000

## Demo access gate
This repo includes a lightweight "demo access code" gate so you can deploy a shareable demo without SSO.

Set an env var:
- `DEMO_ACCESS_CODE=your-code`

Visitors will be prompted to enter the code once; a cookie is set for 7 days.

## Deploy to Vercel
1. Push this repo to GitHub.
2. In Vercel: **New Project** → import the repo.
3. Add env var in Vercel project settings:
   - `DEMO_ACCESS_CODE=your-code`
4. Deploy.

## Switching to Ping SSO later
Replace the demo gate middleware with Auth.js (NextAuth) OIDC for Ping.
This repo keeps the routing/layout compatible with that future change.
