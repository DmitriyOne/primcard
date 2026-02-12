# Primcard API

This folder contains the **Supabase API** for the Primcard project.

## Sections

- [Local development](#local-development)
- [Additional documentation](#additional-documentation)
- [Git workflow (root README)](../README.md#git-workflow)

## Local development

### Prerequisites

1. Install [Supabase CLI](https://supabase.com/docs/guides/cli/getting-started):
   ```bash
   npm install -g supabase
   ```
   
   Alternatively, you can use `npx` to run Supabase CLI without global installation (replace `supabase` with `npx supabase` in all commands below).

2. Make sure Docker Desktop is installed and running (Supabase CLI uses Docker for local development).

### Starting local Supabase

1. Navigate to the `api` folder:
   ```bash
   cd api
   ```

2. Sync with the remote database, authenticate and link your project:
   
   Login to Supabase:
   ```bash
   supabase login
   ```
   
   Link your local repository to your Supabase project:
   ```bash
   supabase link --project-ref $PROJECT_ID
   ```
   
   You can get your `$PROJECT_ID` from your project's dashboard URL:
   ```
   https://supabase.com/dashboard/project/<project-id>
   ```
   
   Pull all migrations from the remote database:
   ```bash
   supabase db pull
   ```
   
   This command creates a new migration in `supabase/migrations/<timestamp>_remote_schema.sql` with all schema changes from the remote database.

3. Start local Supabase:
   ```bash
   supabase start
   ```

   This command will start all necessary Supabase services locally:
   - **API**: `http://127.0.0.1:54321`
   - **Studio**: `http://127.0.0.1:54323` (web interface for database management)
   - **Database**: `postgresql://postgres:postgres@127.0.0.1:54322/postgres`
   - **Inbucket** (email testing): `http://127.0.0.1:54324`

4. After starting, you will see connection credentials. Save them for use in your application.

### Stopping local Supabase

To stop local Supabase:
```bash
supabase stop
```

### Resetting the database

To recreate the local database from scratch and apply all migrations:
```bash
supabase db reset
```

**Note:** This command only affects your local database and will not touch the remote database unless you're using it directly through a linked project.

### Working with migrations

All migrations are located in the `supabase/migrations/` folder. When running `supabase start` or `supabase db reset`, all migrations are applied automatically.

To create a new migration:
```bash
supabase migration new migration_name
```

## Additional documentation

If you need more detailed information about working with Supabase locally or managing environments, check out the official documentation:

- [Managing Environments](https://supabase.com/docs/guides/deployment/managing-environments) — guide for setting up local environment and working with migrations
