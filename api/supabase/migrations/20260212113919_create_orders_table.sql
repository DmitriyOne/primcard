-- Orders table: customer orders with contact information and payment status.
-- Stores order details including contact methods, delivery address, and payment status.

-- Create enum for contact methods
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

-- Create enum for payment status
create type public.payment_status as enum (
  'paid',
  'unpaid'
);

-- Create orders table
create table public.orders (
  id                        bigint generated always as identity primary key,
  order_id                  text not null unique,
  email                     text not null,
  phone                     text,
  social_username           text,
  preferred_contact_method  public.contact_method not null,
  delivery_address          text,
  message                   text,
  payment_status            public.payment_status not null default 'unpaid',
  created_at                timestamptz default now() not null,
  updated_at                timestamptz default now() not null
);

comment on table public.orders is 'Customer orders with contact information, delivery details, and payment status.';

comment on column public.orders.id is 'Unique identifier for the order record.';
comment on column public.orders.order_id is 'Unique order identifier for customer reference.';
comment on column public.orders.email is 'Customer email address (required).';
comment on column public.orders.phone is 'Customer phone number (optional).';
comment on column public.orders.social_username is 'Customer social media username.';
comment on column public.orders.preferred_contact_method is 'Preferred method of contact for the customer.';
comment on column public.orders.delivery_address is 'Delivery address for the order (optional).';
comment on column public.orders.message is 'Additional message or notes from the customer (optional).';
comment on column public.orders.payment_status is 'Payment status: paid or unpaid. Defaults to unpaid.';
comment on column public.orders.created_at is 'Timestamp when the order was created.';
comment on column public.orders.updated_at is 'Timestamp when the order was last updated.';

-- Create indexes for common queries
create index idx_orders_order_id on public.orders (order_id);
create index idx_orders_email on public.orders (email);
create index idx_orders_payment_status on public.orders (payment_status);
create index idx_orders_created_at on public.orders (created_at);

-- Enable Row Level Security
alter table public.orders
  enable row level security;

-- RLS Policies
-- Allow authenticated users to view all orders
create policy "Authenticated users can view orders"
  on public.orders
  for select
  to authenticated
  using (public.is_super_admin() or public.authorize('orders.select'));

-- Allow anonymous users to create orders (for public order submission)
create policy "Anonymous users can create orders"
  on public.orders
  for insert
  to anon
  with check (true);

-- Allow authenticated users to create orders
create policy "Authenticated users can create orders"
  on public.orders
  for insert
  to authenticated
  with check (true);

-- Allow authenticated users to update orders
create policy "Authenticated users can update orders"
  on public.orders
  for update
  to authenticated
  using (public.is_super_admin() or public.authorize('orders.update'))
  with check (public.is_super_admin() or public.authorize('orders.update'));

-- Allow authenticated users to delete orders
create policy "Authenticated users can delete orders"
  on public.orders
  for delete
  to authenticated
  using (public.is_super_admin() or public.authorize('orders.delete'));
