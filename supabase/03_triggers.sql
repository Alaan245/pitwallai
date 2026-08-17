-- PitWallAI — Triggers Supabase
-- À exécuter après 01_schema.sql et 02_rls.sql

-- =============================================================================
-- 3. Fonction + trigger : création automatique du profil à l'inscription
-- =============================================================================
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, plan, upgraded_at)
  values (new.id, 'free', null);
  return new;
end;
$$;

-- Trigger déclenché après création d'un utilisateur dans auth.users.
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- =============================================================================
-- 4. Fonction + trigger : mise à jour automatique de updated_at
-- =============================================================================
create or replace function public.handle_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists on_profile_updated on public.profiles;
create trigger on_profile_updated
  before update on public.profiles
  for each row execute function public.handle_updated_at();
