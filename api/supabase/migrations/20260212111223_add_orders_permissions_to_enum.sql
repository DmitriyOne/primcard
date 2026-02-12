
alter type public.app_permission add value if not exists 'orders.select';
alter type public.app_permission add value if not exists 'orders.insert';
alter type public.app_permission add value if not exists 'orders.update';
alter type public.app_permission add value if not exists 'orders.delete';
