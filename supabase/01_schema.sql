-- PitWallAI — Supabase schema
-- À copier/coller dans l'éditeur SQL de Supabase (SQL Editor → New query)
-- Ordre : 01_schema.sql, puis 02_rls.sql, puis 03_triggers.sql

-- =============================================================================
-- 1. Table des profils utilisateurs
-- =============================================================================
-- Supabase Auth gère déjà la table auth.users (id, email, raw_user_meta_data...)
-- On crée juste une table profiles qui y est liée 1:1.

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  plan text not null default 'free' check (plan in ('free', 'premium')),
  upgraded_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

comment on table public.profiles is 'Profils abonnés PitWallAI (plan free/premium).';
comment on column public.profiles.plan is 'free = 20 % du contenu ; premium = 100 %.';

-- Index utile pour les requêtes par plan.
create index if not exists idx_profiles_plan on public.profiles(plan);
