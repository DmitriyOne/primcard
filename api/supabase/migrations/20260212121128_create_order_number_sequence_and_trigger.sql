-- Creates sequence and trigger for auto-generating unique order_id values.
-- Generates order_id in format R-XXXXXX (e.g., R-000001, R-000002) using a dedicated sequence.
-- Trigger fires before insert on public.orders to ensure order_id is always set.
--
-- security definer: ensures function has access to sequence even when called by anon users
-- who may not have direct permissions on the sequence.

-- Create separate sequence for order_id to ensure uniqueness
create sequence public.order_number_seq
  start with 1
  increment by 1
  no maxvalue
  cache 1;

comment on sequence public.order_number_seq is 'Sequence for generating unique order numbers';

-- Grant usage on sequence to anon and authenticated roles
-- Although function uses security definer, granting usage ensures compatibility
grant usage on sequence public.order_number_seq to anon, authenticated;

-- Create function to generate order_id in format R-XXXXXX
create or replace function public.generate_order_id()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  -- Only generate order_id if it's not already set
  if new.order_id is null or new.order_id = '' then
    new.order_id := 'R-' || lpad(nextval('public.order_number_seq')::text, 6, '0');
  end if;
  return new;
end;
$$;

comment on function public.generate_order_id() is
  'Trigger function: generates unique order_id in format R-XXXXXX using dedicated sequence.';

-- Create trigger to auto-generate order_id before insert
create trigger trigger_generate_order_id
  before insert on public.orders
  for each row
  execute function public.generate_order_id();
