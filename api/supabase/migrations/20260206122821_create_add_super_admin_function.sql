-- Migration: Create add_super_admin helper function
-- Purpose: Safely assign super-admin role to a user
-- Affected functions: public.add_super_admin

create function public.add_super_admin(new_user uuid)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  if current_user != 'postgres' and current_user != 'service_role' then
    raise exception 'Only database superuser or service_role can execute this function';
  end if;

  insert into public.user_roles (user_id, role)
  values (new_user, 'super-admin')
  on conflict (user_id, role) do update set role = 'super-admin';
end;
$$;

comment on function public.add_super_admin(uuid) is 'Safely assign super-admin role to a user. Can only be executed by database superuser or service_role.';

-- Grant execute to service_role (for Supabase service role)
grant execute on function public.add_super_admin(uuid) to service_role;

-- Revoke from other roles for security
revoke execute on function public.add_super_admin(uuid) from authenticated, anon, public;
