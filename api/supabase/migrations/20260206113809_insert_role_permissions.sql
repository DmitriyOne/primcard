-- Migration: Insert default role permissions

insert into public.role_permissions (role, permission)
values
  ('super-admin', 'orders.update'),
  ('super-admin', 'orders.delete'),
  ('super-admin', 'orders.insert'),
  ('super-admin', 'orders.select'),
  ('admin', 'orders.update'),
  ('admin', 'orders.delete'),
  ('admin', 'orders.insert'),
  ('admin', 'orders.select'),
  ('manager', 'orders.select');
