-- Migration: Insert role levels into role_levels table
-- Purpose: Insert default role levels for hierarchy checking
-- Affected tables: public.role_levels

-- Insert role levels (idempotent - won't fail if data already exists)
insert into public.role_levels (role, level)
values
  ('super-admin', 100),
  ('admin', 90),
  ('manager', 80)
on conflict (role) do nothing;
