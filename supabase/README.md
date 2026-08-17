# Supabase — Setup PitWallAI

Ce dossier contient les scripts SQL exécutés dans Supabase pour remplacer l'ancienne stack Kimi OAuth + MySQL par **Supabase Auth + Postgres**.

## Variables d'environnement

Dans `.env` à la racine du projet :

```env
VITE_SUPABASE_URL=https://xxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIs...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIs...

# Optionnel : si tu préfères séparer la variable backend.
# SUPABASE_URL=https://xxxx.supabase.co
```

> Le backend accepte `SUPABASE_URL` ou, à défaut, `VITE_SUPABASE_URL`.  
> La `SUPABASE_SERVICE_ROLE_KEY` reste côté backend uniquement.

## Scripts SQL

À coller dans l'éditeur SQL de Supabase (SQL Editor → New query), dans l'ordre :

1. `01_schema.sql` — table `public.profiles`
2. `02_rls.sql` — politiques RLS
3. `03_triggers.sql` — création auto de profil + `updated_at`

## Tables

- `auth.users` : gérée par Supabase Auth (email / mot de passe)
- `public.profiles` : plan `free`/`premium`, dates

## Ce qui a été supprimé du code

- `api/kimi/` (OAuth Kimi)
- `api/auth-router.ts`
- `api/queries/users.ts`
- `api/queries/connection.ts`
- `api/lib/cookies.ts`
- `db/` (schema Drizzle MySQL)
- `drizzle.config.ts`
- Dépendances : `mysql2`, `drizzle-orm`, `drizzle-kit`, `jose`, `cookie`
