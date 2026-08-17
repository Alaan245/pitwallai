-- PitWallAI — Row Level Security (RLS)
-- À exécuter après 01_schema.sql

-- =============================================================================
-- 2. Sécurité : RLS
-- =============================================================================
alter table public.profiles enable row level security;

-- Politique : un utilisateur ne peut lire que SON profil.
create policy "Users can read own profile"
  on public.profiles
  for select
  to authenticated
  using (auth.uid() = id);

-- Politique : un utilisateur ne peut modifier que SON profil.
-- (Le passage Premium est normalement fait côté serveur via service_role.)
create policy "Users can update own profile"
  on public.profiles
  for update
  to authenticated
  using (auth.uid() = id)
  with check (auth.uid() = id);

-- Politique : insertion réservée au service_role / triggers.
-- Le trigger handle_new_user() s'exécute avec les droits du propriétaire de la fonction
-- (security definer), donc il contourne RLS.
