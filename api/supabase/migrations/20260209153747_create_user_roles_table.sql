-- Custom types for user roles
create type public.app_role as enum ('super-admin', 'admin', 'manager');

-- User roles table
create table public.user_roles (
  id        bigint generated always as identity primary key,
  user_id   uuid references auth.users on delete cascade not null,
  role      app_role not null,
  unique (user_id, role)
);

comment on table public.user_roles is 'Application roles for each user.';

grant usage on schema public to supabase_auth_admin;

revoke all on table public.user_roles from public, anon, authenticated;

grant all on table public.user_roles to supabase_auth_admin;

grant select, insert, update on table public.user_roles to authenticated;
