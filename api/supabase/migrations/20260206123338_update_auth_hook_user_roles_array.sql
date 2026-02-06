-- Migration: Update auth hook to return array of user roles
-- Purpose: Change user_role from single value to array of all user roles
-- Affected functions: public.custom_access_token_hook

create or replace function public.custom_access_token_hook(event jsonb)
returns jsonb
language plpgsql
stable
set search_path = ''
as $$
  declare
    claims jsonb;
    user_roles_array jsonb;
  begin
    -- Fetch all user roles and collect them into a JSON array
    select coalesce(jsonb_agg(role::text order by case role
      when 'super-admin'::public.app_role then 1
      when 'admin'::public.app_role then 2
      when 'manager'::public.app_role then 3
    end), '[]'::jsonb)
    into user_roles_array
    from public.user_roles
    where user_id = (event->>'user_id')::uuid;

    claims := event->'claims';

    -- Set the user_roles claim as an array
    claims := jsonb_set(claims, '{user_roles}', user_roles_array);

    -- Keep user_role for backward compatibility (highest priority role)
    if jsonb_array_length(user_roles_array) > 0 then
      claims := jsonb_set(claims, '{user_role}', user_roles_array->0);
    else
      claims := jsonb_set(claims, '{user_role}', 'null'::jsonb);
    end if;

    -- Update the 'claims' object in the original event
    event := jsonb_set(event, '{claims}', claims);

    -- Return the modified or original event
    return event;
  end;
$$;

comment on function public.custom_access_token_hook(jsonb) is 'Auth hook that adds user roles array and highest priority role to JWT access token claims';
