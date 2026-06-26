create or replace function public.authorize(
  requested_permission public.app_permission
)
returns boolean
language plpgsql
stable
security definer
set search_path = ''
as $$
  declare
    bind_permissions int;
    user_role public.app_role;
  begin
    -- Fetch user role once and store it to reduce number of calls
    select (auth.jwt() ->> 'user_role')::public.app_role into user_role;

    if user_role is null then
      return false;
    end if;

    select count(*)
    into bind_permissions
    from public.role_permissions
    where role_permissions.permission = requested_permission
      and role_permissions.role = user_role;

    return bind_permissions > 0;
  end;
$$;

revoke execute
  on function public.authorize(public.app_permission)
  from anon, public;

grant execute
  on function public.authorize(public.app_permission)
  to authenticated, supabase_auth_admin;
