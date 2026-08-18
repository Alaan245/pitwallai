import { Webhook } from "standardwebhooks";
import { env } from "./lib/env.js";
import { getSupabaseAdmin } from "./lib/supabase.js";
import type { Hono, Env, Schema } from "hono";

const RELEVANT_EVENTS = new Set(["payment.succeeded", "membership.activated"]);

function getWhopEmail(data: unknown): string | undefined {
  if (!data || typeof data !== "object") return undefined;
  const record = data as Record<string, unknown>;

  // Essaie plusieurs emplacements possibles selon le payload Whop.
  const candidate =
    record.user_email ??
    record.email ??
    (record.user && typeof data === "object"
      ? (data as Record<string, unknown>).user_email
      : undefined);

  return typeof candidate === "string" ? candidate : undefined;
}

async function upgradeUserByEmail(email: string) {
  // Récupère l'utilisateur Supabase par email via la clé service_role.
  const { data: userData, error: listError } =
    await getSupabaseAdmin().auth.admin.listUsers({
      page: 1,
      perPage: 1,
    });

  if (listError) {
    throw new Error(`listUsers failed: ${listError.message}`);
  }

  const user = userData.users.find(
    (u) => u.email?.toLowerCase() === email.toLowerCase(),
  );

  if (!user) {
    throw new Error(`No Supabase user found for email: ${email}`);
  }

  // Met à jour le profil en premium (crée le profil si besoin).
  const { error: upsertError } = await getSupabaseAdmin()
    .from("profiles")
    .upsert(
      { id: user.id, plan: "premium", upgraded_at: new Date().toISOString() },
      { onConflict: "id" },
    );

  if (upsertError) {
    throw new Error(`upsert profile failed: ${upsertError.message}`);
  }

  return user.id;
}

export function registerWhopWebhook<E extends Env, S extends Schema, BasePath extends string>(
  app: Hono<E, S, BasePath>,
) {
  app.post("/api/whop/webhook", async (c) => {
    const secret = env.whopWebhookSecret;
    if (!secret) {
      console.error("[whop] WHOP_WEBHOOK_SECRET is not configured");
      return c.json({ error: "Webhook secret not configured" }, 500);
    }

    const payload = await c.req.text();
    const headers = Object.fromEntries(c.req.raw.headers.entries());

    try {
      const wh = new Webhook(btoa(secret));
      wh.verify(payload, headers);
    } catch (err) {
      console.error("[whop] signature verification failed:", err);
      return c.json({ error: "Invalid signature" }, 401);
    }

    let event: { type?: string; data?: unknown };
    try {
      event = JSON.parse(payload);
    } catch {
      return c.json({ error: "Invalid JSON" }, 400);
    }

    console.log("[whop] received event:", event.type, event.data);

    if (!RELEVANT_EVENTS.has(event.type ?? "")) {
      return c.json({ ok: true, ignored: true }, 200);
    }

    const email = getWhopEmail(event.data);
    if (!email) {
      console.error("[whop] no email found in payload:", event.data);
      return c.json({ error: "Missing email in payload" }, 400);
    }

    try {
      const userId = await upgradeUserByEmail(email);
      console.log(`[whop] user ${userId} upgraded to premium`);
      return c.json({ ok: true, userId }, 200);
    } catch (err) {
      console.error("[whop] upgrade failed:", err);
      return c.json(
        { error: err instanceof Error ? err.message : "Upgrade failed" },
        500,
      );
    }
  });
}
