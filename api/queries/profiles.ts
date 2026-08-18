import { getSupabaseAdmin } from "../lib/supabase.js";
import type { Database } from "@contracts/database.types";

type Profile = Database["public"]["Tables"]["profiles"]["Row"];

export async function getProfileByUserId(userId: string): Promise<Profile | null> {
  const { data, error } = await getSupabaseAdmin()
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();

  if (error) {
    console.error("[profiles] getProfileByUserId error:", error.message);
    return null;
  }
  return data;
}

export async function ensureProfile(userId: string): Promise<Profile> {
  const existing = await getProfileByUserId(userId);
  if (existing) return existing;

  const { data, error } = await getSupabaseAdmin()
    .from("profiles")
    .insert({ id: userId, plan: "free" })
    .select()
    .single();

  if (error || !data) {
    throw new Error(`Failed to create profile: ${error?.message ?? "unknown"}`);
  }
  return data;
}

export async function setPlan(
  userId: string,
  plan: "free" | "premium",
): Promise<Profile> {
  await ensureProfile(userId);

  const { data, error } = await getSupabaseAdmin()
    .from("profiles")
    .update({
      plan,
      upgraded_at: plan === "premium" ? new Date().toISOString() : null,
    })
    .eq("id", userId)
    .select()
    .single();

  if (error || !data) {
    throw new Error(`Failed to update plan: ${error?.message ?? "unknown"}`);
  }
  return data;
}
