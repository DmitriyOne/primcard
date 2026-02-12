-- Assigns the manager role to new users on registration.
-- Trigger fires after insert on auth.users and inserts into public.user_roles.
--
-- security definer: insert runs in auth transaction context; public.user_roles
-- is granted only to supabase_auth_admin and authenticated (insert via RLS).

create or replace function public.assign_manager_role_on_signup()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.user_roles (user_id, role)
  values (new.id, 'manager'::public.app_role)
  on conflict (user_id, role) do nothing;
  return new;
end;
$$;

comment on function public.assign_manager_role_on_signup() is
  'Trigger function: assigns manager role to new users on registration.';

create trigger on_auth_user_created_assign_manager
  after insert on auth.users
  for each row
  execute function public.assign_manager_role_on_signup();
