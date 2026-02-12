-- Update SELECT policy for user_roles to combine authorization check with user access check

drop policy if exists "Allow authorized users to select roles"
  on public.user_roles;

create policy "Allow authorized users to select roles"
  on public.user_roles
  for select
  to authenticated
  using (public.authorize('user_roles.select') and public.can_view_user(user_id));
