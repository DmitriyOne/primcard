# Primcard Web

This folder contains the **Primcard web app** (Next.js).

## Sections

- [Git workflow](#git-workflow)
- [Local development](#local-development)
- [Deploy](#deploy)

## Git workflow

We use strict branches:

- `master`: main layout / main release branch
- `stage`: based on `master` (release to the staging domain)
- `develop`: based on `stage` (releases to preview domains)

Rules:

- All new branches must be created from `develop` and include the release name, for example:
  `release-xxx/feature/name` or `release-xxx/fix/name`
- Merge flow is always:
  `release-xxx/*` → `develop` → `stage` → `master`
- **Do not use any other flow.**

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
