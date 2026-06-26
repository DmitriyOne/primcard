-- Profiles table: user profile data linked to auth.users.
-- id references auth.users, email and username for display/identity.

create table public.profiles (
  id       uuid not null references auth.users on delete cascade primary key,
  email    text,
  username text unique
);

comment on table public.profiles is 'User profiles linked to auth.users.';

create index idx_profiles_username on public.profiles (username);
create index idx_profiles_email on public.profiles (email);

alter table public.profiles
  enable row level security;

create policy "Users can select profiles at or below own priority"
  on public.profiles
  for select
  to authenticated
  using (public.can_view_user(id));

create policy "Can update own profile or by super-admin"
  on public.profiles
  for update
  to authenticated
  using (public.is_super_admin() or (auth.uid()) = id)
  with check (public.is_super_admin() or (auth.uid()) = id);
