# Primcard Web

This folder contains the **Primcard web app** (Next.js).

## Sections

- [Local development](#local-development)
- [Deploy](#deploy)
- [Git workflow (root README)](../README.md#git-workflow)

## Local development

1. Clone the main repository.
2. Install dependencies:

```bash
npm i
```

3. Create `web/.env.local`.
   Use `web/.env.example` as a template.
4. Start dev server:

```bash
npm run dev
```

App will be available on `http://localhost:3000` (if the port is free).

## Deploy

We deploy with **Vercel**.

- Only pushes to `develop`, `stage`, and `master` trigger automatic builds in Vercel.
- Release branches do not trigger Vercel builds by default.
- Each branch uses its own Vercel environment variables (preview / stage / production).

Production process:

- A build from `master` does **not** update the main production domain automatically.
- Vercel will provide a private preview link for review.
- If everything is OK, you can promote the selected build to production (Vercel “Promote to Production”).
