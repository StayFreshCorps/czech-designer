# czechdesigner.com

Portfolio for **Petr Kaloč** — senior graphic designer.

Stack: Payload CMS 3 + Next.js App Router + Tailwind CSS + SQLite.

## Local

```bash
cp .env.example .env
pnpm install
pnpm dev
```

- Site: http://localhost:3010 (not 3000 — that port stays free)
- Admin: http://localhost:3010/admin

First boot seeds four case studies, stats, skills, clients, and an admin user from `PAYLOAD_ADMIN_EMAIL` / `PAYLOAD_ADMIN_PASSWORD`.

## Production (Hostinger VPS)

1. Point `czechdesigner.com` DNS to the VPS.
2. Set env vars (`PAYLOAD_SECRET`, `DATABASE_URL`, `NEXT_PUBLIC_SERVER_URL=https://czechdesigner.com`).
3. `pnpm install --frozen-lockfile && pnpm build && pnpm start`
4. Reverse-proxy port 3000 with SSL.
5. Switch `src/app/(frontend)/robots.ts` from `disallow: '/'` to allow indexing when you launch.
6. Set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN=czechdesigner.com` for Plausible.

Replace seeded case-study photography in `/admin` with production stills.
