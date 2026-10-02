# cell-landing-page

The public page for Cell. Static, one route, no backend.

Design tokens, type and the mark come from `cell-protocol-workflow/design/` (`globals.css`, `cell-app.pen`), so the page reads as the same product as `cell-frontend`.

```bash
pnpm install
pnpm dev        # http://localhost:5173
pnpm build      # dist/
```

`VITE_APP_URL` is where "Open the app" points (see `.env.example`). Deploys on Vercel with the included `vercel.json`.
