insert into public.role_permissions (role, permission)
values
  ('super-admin', 'orders.select'),
  ('super-admin', 'orders.update'),
  ('super-admin', 'orders.delete'),
  ('admin', 'orders.select'),
  ('admin', 'orders.update'),
  ('manager', 'orders.select');
