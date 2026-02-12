# Monorepo

This repository is a **monorepo** for the **Primcard** project.

## Sections

- [Projects](#projects)
- [Local setup and production deploy](#local-setup-and-production-deploy)
- [Git workflow](#git-workflow)

## Projects

- **Web**: `./web` ([open](./web))
- **Backend**: `./backend` — **coming soon** (not available yet)
- **CRM**: `./crm` — **coming soon** (not available yet)

## Local setup and production deploy

You can find **local development** and **production deploy** instructions inside each folder (see its `README.md`):

- Web: [`./web/README.md`](./web/README.md)
- Backend: `./backend/README.md` — **coming soon** (not available yet)
- CRM: `./crm/README.md` — **coming soon** (not available yet)

## Git workflow

We use strict branches:

- `master`: main layout / main release branch
- `stage`: based on `master` (release to the staging domain)
- `develop`: based on `stage` (releases to preview domains)

Rules:

- All new branches must be created from `develop`.
- Branch naming:
  - Format: `r-xxx/<project>/<type>/<task-name>`
  - `r-xxx`: release number (for example, `r-123`)
  - `<project>`: `web` | `crm` | `backend`
  - `<type>`: `feature` | `bug` | `fix`
  - Examples:
    - `r-123/web/feature/new-order-page`
    - `r-123/backend/fix/user-auth-timeout`
- Merge flow is always:
  `<your-branch>` → `develop` → `stage` → `master`
- **Do not use any other flow.**
