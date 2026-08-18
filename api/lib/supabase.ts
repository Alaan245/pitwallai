import { createClient } from "@supabase/supabase-js";
import { env } from "./env.js";
import type { Database } from "@contracts/database.types";

let client: ReturnType<typeof createClient<Database>> | null = null;

export function getSupabaseAdmin() {
  if (!client) {
    if (!env.supabaseUrl || !env.supabaseServiceRoleKey) {
      throw new Error(
        "Missing SUPABASE_SERVICE_ROLE_KEY or SUPABASE_URL. Check Vercel env vars.",
      );
    }
    client = createClient<Database>(env.supabaseUrl, env.supabaseServiceRoleKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });
  }
  return client;
}
