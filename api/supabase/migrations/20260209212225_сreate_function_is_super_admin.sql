-- Returns true if the current user has the super-admin role (from JWT claim).

create or replace function public.is_super_admin()
returns boolean
language plpgsql
stable
security invoker
set search_path = ''
as $$
  declare
    user_role public.app_role;
  begin
    begin
      user_role := (auth.jwt() ->> 'user_role')::public.app_role;
    exception
      when others then
        return false;
    end;

    return user_role = 'super-admin'::public.app_role;
  end;
$$;

comment on function public.is_super_admin() is
  'Returns true if the current authenticated user has the super-admin role.';

revoke execute
  on function public.is_super_admin()
  from anon, public;

grant execute
  on function public.is_super_admin()
  to authenticated, supabase_auth_admin;
