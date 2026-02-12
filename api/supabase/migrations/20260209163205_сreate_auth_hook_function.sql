
create or replace function public.custom_access_token_hook(event jsonb)
returns jsonb
language plpgsql
stable
set search_path = ''
as $$
  declare
    claims jsonb;
    user_role public.app_role;
  begin
    -- Fetch the highest priority role for the user
    -- Using priority from user_role_priority table
    select ur.role into user_role
    from public.user_roles ur
    inner join public.user_role_priority urp on ur.role = urp.role
    where ur.user_id = (event->>'user_id')::uuid
    order by urp.priority::text::int desc
    limit 1;

    claims := event->'claims';

    if user_role is not null then
      -- Set the claim
      claims := jsonb_set(claims, '{user_role}', to_jsonb(user_role));
    else
      claims := jsonb_set(claims, '{user_role}', 'null');
    end if;

    -- Update the 'claims' object in the original event
    event := jsonb_set(event, '{claims}', claims);

    -- Return the modified or original event
    return event;
  end;
$$;

revoke execute
  on function public.custom_access_token_hook
  from authenticated, anon, public;

grant execute
  on function public.custom_access_token_hook
  to supabase_auth_admin;

create policy "Allow auth admin to read user roles" ON public.user_roles
as permissive for select
to supabase_auth_admin
using (true);
