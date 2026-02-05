-- Migration: Create orders table
-- Purpose: Store order information with customer contact preferences
-- Affected tables: public.orders
-- Special considerations: order_id is auto-generated in format R-XXXXXX

-- Create enum type for preferred contact method
create type public.contact_method as enum (
  'email',
  'phone',
  'whatsapp',
  'telegram',
  'facebook',
  'discord',
  'signal',
  'viber',
  'other'
);

comment on type public.contact_method is 'Available contact methods for customer communication';

-- Create orders table
create table public.orders (
  id uuid primary key default gen_random_uuid(),
  order_id text not null unique,
  email text,
  phone text,
  social_username text,
  preferred_contact_method public.contact_method not null,
  delivery_address text,
  message text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  -- At least one contact method must be provided
  constraint chk_contact_required check (
    email is not null or phone is not null or social_username is not null
  )
);

comment on table public.orders is 'Customer orders with contact preferences and delivery information';
comment on column public.orders.order_id is 'Human-readable order identifier in format R-XXXXXX';
comment on column public.orders.preferred_contact_method is 'Required field - how customer prefers to be contacted';
comment on column public.orders.social_username is 'Username for social media contact methods';

-- Create separate sequence for order_id to ensure uniqueness
create sequence public.order_number_seq
  start with 1
  increment by 1
  no maxvalue
  cache 1;

comment on sequence public.order_number_seq is 'Sequence for generating unique order numbers';

-- Create function to generate order_id in format R-XXXXXX
create or replace function public.generate_order_id()
returns trigger
language plpgsql
security definer
as $$
begin
  new.order_id := 'R-' || lpad(nextval('public.order_number_seq')::text, 6, '0');
  return new;
end;
$$;

comment on function public.generate_order_id() is 'Generates unique order_id in format R-XXXXXX using dedicated sequence';

-- Create trigger to auto-generate order_id before insert
create trigger trigger_generate_order_id
  before insert on public.orders
  for each row
  execute function public.generate_order_id();

-- Create index for faster order_id lookups
create index idx_orders_order_id on public.orders (order_id);

-- Enable Row Level Security
alter table public.orders enable row level security;

-- RLS Policies: Allow anonymous users to insert orders (for public order forms)
create policy "anon_insert_orders"
  on public.orders
  for insert
  to anon
  with check (true);

comment on policy "anon_insert_orders" on public.orders is 'Allow anonymous users to create orders via public forms';

-- RLS Policies: Allow authenticated users to view all orders
create policy "authenticated_select_orders"
  on public.orders
  for select
  to authenticated
  using (true);

comment on policy "authenticated_select_orders" on public.orders is 'Allow authenticated users (admins) to view all orders';

-- RLS Policies: Allow authenticated users to update orders
create policy "authenticated_update_orders"
  on public.orders
  for update
  to authenticated
  using (true)
  with check (true);

comment on policy "authenticated_update_orders" on public.orders is 'Allow authenticated users (admins) to update orders';

-- RLS Policies: Allow authenticated users to delete orders
create policy "authenticated_delete_orders"
  on public.orders
  for delete
  to authenticated
  using (true);

comment on policy "authenticated_delete_orders" on public.orders is 'Allow authenticated users (admins) to delete orders';

-- RLS Policies: Allow authenticated users to insert orders
create policy "authenticated_insert_orders"
  on public.orders
  for insert
  to authenticated
  with check (true);

comment on policy "authenticated_insert_orders" on public.orders is 'Allow authenticated users to create orders';
