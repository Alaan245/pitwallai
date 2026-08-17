import { createClient } from "@supabase/supabase-js";
import { env } from "./env";
import type { Database } from "../../contracts/database.types";

export const supabaseAdmin = createClient<Database>(
  env.supabaseUrl,
  env.supabaseServiceRoleKey,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  },
);
