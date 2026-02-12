-- Custom types for user role priority
create type public.app_role_priority as enum ('100', '90', '80', '70', '60', '50', '40', '30', '20', '10');

-- User role priority table
create table public.user_role_priority (
  id        bigint generated always as identity primary key,
  role      app_role not null,
  priority  app_role_priority not null,
  unique (role, priority)
);

comment on table public.user_role_priority is 'Application role priority for each role.';

revoke all on table public.user_role_priority
  from public, anon, authenticated, supabase_auth_admin;

grant select on table public.user_role_priority to supabase_auth_admin;
