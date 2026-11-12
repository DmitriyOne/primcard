# Primcard

Marketing site with an order flow, and the Supabase backend behind it, in one monorepo.

## What's in it

- **`web/`**: Next.js (App Router) site: landing page, order flow (`/order/[plan]`, thank-you), legal pages (privacy, terms, cookies). Structured with Feature-Sliced Design (`src/01_app` to `src/06_shared`). Deployed on Vercel, one environment per branch.
- **`api/`**: Supabase project: Postgres migrations, row-level security, an auth hook, email templates.
- **`crm/`**: not started yet.

## Roles and access

The part of this repo I'd point a reviewer to first is the access model in `api/supabase/migrations`.

- Three roles: `super-admin` (priority 100), `admin` (90), `manager` (80). Roles live in `user_roles`, priorities in their own table.
- `custom_access_token_hook` writes the user's highest-priority role into the JWT as a `user_role` claim, so RLS policies can read it without a join on every request.
- `check_role_hierarchy_permissions` decides whether an editor may assign a role: nobody changes their own role, and an editor needs a priority at least equal to the target's current maximum and to the new role (`super-admin` bypasses this). It runs as `security definer` because the role tables are not readable by the `authenticated` role.
- Triggers create the profile and assign the default role on sign-up. Orders get a sequence-based order number and an `updated_at` trigger.

## Sections

- [Projects](#projects)
- [Local setup and production deploy](#local-setup-and-production-deploy)
- [Branches](#branches)

## Projects

- **Web**: `./web` ([open](./web))
- **Api**: `./api` ([open](./api))
- **CRM**: not started yet

## Local setup and production deploy

You can find **local development** and **production deploy** instructions inside each folder (see its `README.md`):

- Web: [`./web/README.md`](./web/README.md)
- Api: [`./api/README.md`](./api/README.md)

## Branches

The repository uses three long-lived branches:

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
