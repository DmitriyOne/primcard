create or replace function public.is_super_admin()
returns boolean
language plpgsql
security definer
stable
set search_path = ''
as $$
begin
  return exists (
    select 1
    from public.user_roles
    where user_id = auth.uid()
      and role = 'super-admin'::public.app_role
  );
end;
$$;

alter function public.is_super_admin() owner to postgres;

revoke execute on function public.is_super_admin() from public;
grant execute on function public.is_super_admin() to authenticated;

comment on function public.is_super_admin()
is 'Check if current user has super-admin role (bypasses RLS)';
