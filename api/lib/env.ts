import "dotenv/config";

function required(name: string, fallback?: string): string {
  const value = process.env[name] ?? fallback;
  if (!value && process.env.NODE_ENV === "production") {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value ?? "";
}

export const env = {
  isProduction: process.env.NODE_ENV === "production",
  // On accepte SUPABASE_URL (backend) ou VITE_SUPABASE_URL (déjà exposé au navigateur).
  supabaseUrl: required("SUPABASE_URL", process.env.VITE_SUPABASE_URL),
  supabaseServiceRoleKey: required("SUPABASE_SERVICE_ROLE_KEY"),
  supabaseAnonKey: required("VITE_SUPABASE_ANON_KEY"),
};
