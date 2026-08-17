import { createClient } from "@supabase/supabase-js";
import type { Database } from "../../contracts/database.types";

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!url || !anonKey) {
  console.warn("[supabase] VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY is missing.");
}

export const supabase = createClient<Database>(url ?? "", anonKey ?? "");

export type SupabaseUser = {
  id: string;
  email?: string;
  name?: string;
  avatar?: string;
  createdAt: string;
};

export function mapSupabaseUser(user: {
  id: string;
  email?: string;
  user_metadata?: { name?: string; avatar_url?: string };
  created_at?: string;
}): SupabaseUser {
  return {
    id: user.id,
    email: user.email ?? undefined,
    name: user.user_metadata?.name ?? user.email?.split("@")[0] ?? "Pilote",
    avatar: user.user_metadata?.avatar_url,
    createdAt: user.created_at ?? new Date().toISOString(),
  };
}
