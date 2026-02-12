-- Returns true if the current user can view the profile of target_user_id.
-- Allowed: own profile, or viewer role priority >= target user max role priority.
--
-- security definer: reads public.user_roles and public.user_role_priority,
-- which authenticated users cannot select directly. execute granted to authenticated.

create or replace function public.can_view_user(target_user_id uuid)
returns boolean
language plpgsql
stable
security definer
set search_path = ''
as $$
  declare
    viewer_id uuid;
    viewer_role public.app_role;
    viewer_priority int;
    target_priority int;
  begin
    viewer_id := auth.uid();
    if viewer_id is null then
      return false;
    end if;

    if viewer_id = target_user_id then
      return true;
    end if;

    begin
      viewer_role := (auth.jwt() ->> 'user_role')::public.app_role;
    exception
      when others then
        return false;
    end;

    if viewer_role is null then
      return false;
    end if;

    select (urp.priority::text::int) into viewer_priority
    from public.user_role_priority urp
    where urp.role = viewer_role;

    if viewer_priority is null then
      return false;
    end if;

    select coalesce(max(urp.priority::text::int), 0) into target_priority
    from public.user_roles ur
    join public.user_role_priority urp on ur.role = urp.role
    where ur.user_id = target_user_id;

    return viewer_priority >= target_priority;
  end;
$$;

comment on function public.can_view_user(uuid) is
  'Returns true if the current user may view the profile of target_user_id (own profile or priority >= target).';

revoke execute
  on function public.can_view_user(uuid)
  from anon, public;

grant execute
  on function public.can_view_user(uuid)
  to authenticated, supabase_auth_admin;
