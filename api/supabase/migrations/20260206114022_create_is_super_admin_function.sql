-- Migration: Create is_super_admin helper function
-- Purpose: Check if current user has super-admin role
-- Affected functions: public.is_super_admin

-- Helper function to check if current user is super-admin
create or replace function public.is_super_admin()
returns boolean
language plpgsql
security invoker
set search_path = ''
stable
as $$
begin
  return exists (
    select 1
    from public.user_roles
    where user_id = (select auth.uid())
      and role = 'super-admin'::public.app_role
  );
end;
$$;

comment on function public.is_super_admin() is 'Check if the current authenticated user has super-admin role';
