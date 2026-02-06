-- Migration: Add RLS policies for role_levels table
-- Purpose: Allow all authenticated users to read, restrict write to super-admin only
-- Affected tables: public.role_levels

alter table public.role_levels enable row level security;

create policy "authenticated_select_role_levels"
  on public.role_levels
  for select
  to authenticated
  using (true);

comment on policy "authenticated_select_role_levels" on public.role_levels is 'Allow authenticated users to view role hierarchy levels';

create policy "super_admin_insert_role_levels"
  on public.role_levels
  for insert
  to authenticated
  with check (public.is_super_admin());

comment on policy "super_admin_insert_role_levels" on public.role_levels is 'Allow only super-admin to add role levels';

create policy "super_admin_update_role_levels"
  on public.role_levels
  for update
  to authenticated
  using (public.is_super_admin())
  with check (public.is_super_admin());

comment on policy "super_admin_update_role_levels" on public.role_levels is 'Allow only super-admin to update role levels';

create policy "super_admin_delete_role_levels"
  on public.role_levels
  for delete
  to authenticated
  using (public.is_super_admin());

comment on policy "super_admin_delete_role_levels" on public.role_levels is 'Allow only super-admin to delete role levels';
