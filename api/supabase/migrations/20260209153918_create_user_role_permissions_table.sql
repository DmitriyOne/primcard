-- Custom types for user role permissions
create type public.app_permission as enum (
  'user_roles.select',
  'user_roles.insert',
  'user_roles.update', 
  'user_roles.delete'
);

-- User role permissions table
create table public.role_permissions (
  id           bigint generated always as identity primary key,
  role         app_role not null,
  permission   app_permission not null,
  unique (role, permission)
);

comment on table public.role_permissions is 'Application permissions for each role.';

revoke all on table public.role_permissions
  from public, anon, authenticated, supabase_auth_admin;

grant select on table public.role_permissions to supabase_auth_admin;
