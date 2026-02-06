-- Migration: Create reusable updated_at trigger function
-- Purpose: Automatically update the updated_at column on row modification
-- Affected tables: Any table with updated_at column (currently: public.orders)
-- Special considerations: Function is reusable across multiple tables

-- Create a reusable function to update updated_at timestamp
create or replace function public.update_updated_at_column()
returns trigger
language plpgsql
security definer
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

comment on function public.update_updated_at_column() is 'Reusable trigger function that sets updated_at to current timestamp on row update';

-- Apply trigger to orders table
create trigger trigger_orders_updated_at
  before update on public.orders
  for each row
  execute function public.update_updated_at_column();

comment on trigger trigger_orders_updated_at on public.orders is 'Automatically updates updated_at timestamp when order is modified';
