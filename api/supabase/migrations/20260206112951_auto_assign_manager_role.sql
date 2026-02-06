-- Migration: Auto-assign manager role to new users

-- Function to automatically assign manager role to new users
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  -- Automatically assign 'manager' role to new user
  insert into public.user_roles (user_id, role)
  values (new.id, 'manager'::public.app_role)
  on conflict (user_id, role) do nothing;

  return new;
end;
$$;

-- Create trigger on auth.users to call the function after user creation
create trigger on_auth_user_created
  after insert on auth.users
  for each row
  execute function public.handle_new_user();
