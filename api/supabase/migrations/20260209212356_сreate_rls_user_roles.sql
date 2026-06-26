
alter table public.user_roles
  enable row level security;

create policy "Allow authorized users to select roles"
  on public.user_roles
  for select
  to authenticated
  using (public.authorize('user_roles.select'));

create policy "Allow authorized users to assign role"
  on public.user_roles
  for insert
  to authenticated
  with check (public.authorize('user_roles.insert') and public.check_role_hierarchy_permissions(user_id, role));

create policy "Allow authorized users to update roles"
  on public.user_roles
  for update
  to authenticated
  using (public.authorize('user_roles.update'))
  with check (public.check_role_hierarchy_permissions(user_id, role));
