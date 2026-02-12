-- Migration: Create function and trigger for automatic updated_at column updates
-- Purpose: Automatically update the updated_at timestamp column when a row is modified
-- Affected tables: public.orders

-- Create function to update updated_at column on row modification
-- This function will be used as a trigger to automatically set updated_at to current timestamp
create or replace function public.update_updated_at_column()
returns trigger
language plpgsql
security invoker
set search_path = ''
as $$
begin
  -- Update the "updated_at" column on row modification
  new.updated_at := now();
  return new;
end;
$$;

comment on function public.update_updated_at_column() is 'Trigger function that automatically updates the updated_at column to the current timestamp when a row is modified.';

-- Create trigger on orders table to automatically update updated_at column
-- This trigger fires before each update operation on the orders table
create trigger update_orders_updated_at
before update on public.orders
for each row
execute function public.update_updated_at_column();

comment on trigger update_orders_updated_at on public.orders is 'Automatically updates the updated_at column when an order row is modified.';
