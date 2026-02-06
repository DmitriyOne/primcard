-- Migration: Add RLS policies for role_permissions table
-- Purpose: Restrict insert/update/delete operations to super-admin only
-- Affected tables: public.role_permissions

-- Enable Row Level Security for role_permissions table
alter table public.role_permissions enable row level security;

-- RLS Policies: Allow authenticated users to view role permissions
create policy "authenticated_select_role_permissions"
  on public.role_permissions
  for select
  to authenticated
  using (true);

comment on policy "authenticated_select_role_permissions" on public.role_permissions is 'Allow authenticated users to view role permissions';

-- RLS Policies: Allow only super-admin to insert role permissions
create policy "authenticated_insert_role_permissions"
  on public.role_permissions
  for insert
  to authenticated
  with check (public.is_super_admin());

comment on policy "authenticated_insert_role_permissions" on public.role_permissions is 'Allow only super-admin to assign permissions to roles';

-- RLS Policies: Allow only super-admin to update role permissions
create policy "authenticated_update_role_permissions"
  on public.role_permissions
  for update
  to authenticated
  using (public.is_super_admin())
  with check (public.is_super_admin());

comment on policy "authenticated_update_role_permissions" on public.role_permissions is 'Allow only super-admin to update role permissions';

-- RLS Policies: Allow only super-admin to delete role permissions
create policy "authenticated_delete_role_permissions"
  on public.role_permissions
  for delete
  to authenticated
  using (public.is_super_admin());

comment on policy "authenticated_delete_role_permissions" on public.role_permissions is 'Allow only super-admin to remove permissions from roles';
