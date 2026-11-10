# cell-landing-page

The public page for Cell and its two products, Cell Channel and Cell Seal. Static, one route, no backend.

All copy and sample values live in `src/content/landing-copy.ts`. Seal copy follows the Cell Seal TDD (`Cell-Seal-TDD`) and the testnet report in `cell-seal-mvp/docs/testnet-demo.md`.

Design tokens, type and the mark come from `cell-protocol-workflow/design/` (`globals.css`, `cell-app.pen`), so the page reads as the same product as `cell-frontend`.

```bash
pnpm install
pnpm dev        # http://localhost:5173
pnpm build      # dist/
```

`VITE_CONTACT_URL` is where "Talk to us" points (see `.env.example`). Deploys on Vercel with the included `vercel.json`.
