insert into public.role_permissions (role, permission)
values
  ('super-admin', 'user_roles.select'),
  ('super-admin', 'user_roles.insert'),
  ('super-admin', 'user_roles.update'),
  ('super-admin', 'user_roles.delete'),
  ('admin', 'user_roles.select'),
  ('admin', 'user_roles.update'),
  ('manager', 'user_roles.select'),
  ('manager', 'user_roles.update');
