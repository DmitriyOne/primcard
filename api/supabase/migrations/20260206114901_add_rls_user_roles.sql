-- Migration: Add RLS policies for user_roles table
-- Purpose: Restrict insert/update/delete operations to super-admin only
-- Affected tables: public.user_roles

-- Enable Row Level Security for user_roles table
alter table public.user_roles enable row level security;

-- RLS Policies: Allow authenticated users to view their own roles or super-admin to view all
create policy "authenticated_select_user_roles"
  on public.user_roles
  for select
  to authenticated
  using (
    (select auth.uid()) = user_id
    or public.is_super_admin()
  );

comment on policy "authenticated_select_user_roles" on public.user_roles is 'Allow authenticated users to view their own roles or super-admin to view all';

-- RLS Policies: Allow only super-admin to insert user roles
create policy "super_admin_insert_user_roles"
  on public.user_roles
  for insert
  to authenticated
  with check (public.is_super_admin());

comment on policy "super_admin_insert_user_roles" on public.user_roles is 'Allow only super-admin to assign roles to users';

-- RLS Policies: Allow only super-admin to update user roles
create policy "super_admin_update_user_roles"
  on public.user_roles
  for update
  to authenticated
  using (public.is_super_admin())
  with check (public.is_super_admin());

comment on policy "super_admin_update_user_roles" on public.user_roles is 'Allow only super-admin to update user roles';

-- RLS Policies: Allow only super-admin to delete user roles
create policy "super_admin_delete_user_roles"
  on public.user_roles
  for delete
  to authenticated
  using (public.is_super_admin());

comment on policy "super_admin_delete_user_roles" on public.user_roles is 'Allow only super-admin to remove roles from users';
