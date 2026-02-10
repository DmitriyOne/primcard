-- Determines whether the current user can assign new_role to target_user_id.
-- Editor cannot change own role. Editor must have priority >= target's max role
-- priority and >= new_role priority (super-admin bypasses these checks).
--
-- security definer: function reads public.user_roles and public.user_role_priority,
-- which are granted only to supabase_auth_admin. Called from RLS by authenticated
-- users who lack direct select on those tables.

create or replace function public.check_role_hierarchy_permissions(
  target_user_id uuid,
  new_role public.app_role
)
returns boolean
language plpgsql
stable
security definer
set search_path = ''
as $$
  declare
    editor_role public.app_role;
    editor_priority int;
    target_priority int;
    new_priority int;
  begin
    -- Avoid exception on invalid/missing JWT claim
    begin
      editor_role := (auth.jwt() ->> 'user_role')::public.app_role;
    exception
      when others then
        return false;
    end;

    if editor_role is null then
      return false;
    end if;

    if auth.uid() = target_user_id then
      return false;
    end if;

    select (urp.priority::text::int) into editor_priority
    from public.user_role_priority urp
    where urp.role = editor_role;

    if editor_priority is null then
      return false;
    end if;

    select coalesce(max(urp.priority::text::int), 0) into target_priority
    from public.user_roles ur
    join public.user_role_priority urp on ur.role = urp.role
    where ur.user_id = target_user_id;

    select (urp.priority::text::int) into new_priority
    from public.user_role_priority urp
    where urp.role = new_role;

    if new_priority is null then
      return false;
    end if;

    if editor_priority = 100 then
      return true;
    end if;

    return editor_priority >= target_priority and editor_priority >= new_priority;
end;
$$;

comment on function public.check_role_hierarchy_permissions(uuid, public.app_role) is
  'Returns true if the current user may assign new_role to target_user_id (cannot change own role; priority rules apply).';

revoke execute 
  on function public.check_role_hierarchy_permissions(uuid, public.app_role) 
  from anon, public;

grant execute 
  on function public.check_role_hierarchy_permissions(uuid, public.app_role) 
  to authenticated, supabase_auth_admin;
