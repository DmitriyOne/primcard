-- Creates a profile row for new users on registration.
-- Copies email from auth.users, derives username from raw_user_meta_data or email prefix + id.
--
-- security definer: insert runs in auth context; profiles has no insert policy for authenticated.

create or replace function public.handle_new_user_profile()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.profiles (id, email, username)
  values (
    new.id,
    new.email,
    coalesce(
      new.raw_user_meta_data->>'username',
      split_part(new.email, '@', 1) || '_' || substr(new.id::text, 1, 8)
    )
  );
  return new;
end;
$$;

comment on function public.handle_new_user_profile() is
  'Trigger function: creates profile row for new users on registration.';

create trigger on_auth_user_created_profile
  after insert on auth.users
  for each row
  execute function public.handle_new_user_profile();
