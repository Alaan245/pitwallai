import { Webhook } from "npm:standardwebhooks";
import { createClient } from "npm:@supabase/supabase-js";

const UPGRADE_EVENTS = new Set(["payment.succeeded", "membership.activated"]);
const CANCELLATION_EVENTS = new Set([
  "membership.cancelled",
  "membership.deactivated",
  "membership.expired",
]);
const RELEVANT_EVENTS = new Set([...UPGRADE_EVENTS, ...CANCELLATION_EVENTS]);

function getWhopEmail(data: unknown): string | undefined {
  if (!data || typeof data !== "object") return undefined;
  const record = data as Record<string, unknown>;

  const candidate =
    record.user_email ??
    record.email ??
    (record.user && typeof record.user === "object"
      ? (record.user as Record<string, unknown>).user_email
      : undefined);

  return typeof candidate === "string" ? candidate : undefined;
}

function getRequiredEnv(name: string): string {
  const value = Deno.env.get(name);
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function getSupabaseAdmin() {
  return createClient(
    getRequiredEnv("SUPABASE_URL"),
    getRequiredEnv("SUPABASE_SERVICE_ROLE_KEY"),
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    },
  );
}

async function upgradeUserByEmail(email: string) {
  const supabase = getSupabaseAdmin();
  const { data: userData, error: listError } = await supabase.auth.admin.listUsers({
    page: 1,
    perPage: 1000,
  });

  if (listError) {
    throw new Error(`listUsers failed: ${listError.message}`);
  }

  const user = userData.users.find(
    (u) => u.email?.toLowerCase() === email.toLowerCase(),
  );

  if (!user) {
    throw new Error(
      `No Supabase user found for email: ${email} (checked ${userData.users.length} users)`,
    );
  }

  const { error: upsertError } = await supabase
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

async function downgradeUserByEmail(email: string) {
  const supabase = getSupabaseAdmin();
  const { data: userData, error: listError } = await supabase.auth.admin.listUsers({
    page: 1,
    perPage: 1000,
  });

  if (listError) {
    throw new Error(`listUsers failed: ${listError.message}`);
  }

  const user = userData.users.find(
    (u) => u.email?.toLowerCase() === email.toLowerCase(),
  );

  if (!user) {
    throw new Error(
      `No Supabase user found for email: ${email} (checked ${userData.users.length} users)`,
    );
  }

  const { error: upsertError } = await supabase
    .from("profiles")
    .upsert(
      { id: user.id, plan: "free", upgraded_at: null },
      { onConflict: "id" },
    );

  if (upsertError) {
    throw new Error(`upsert profile failed: ${upsertError.message}`);
  }

  return user.id;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204 });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  const secret = Deno.env.get("WHOP_WEBHOOK_SECRET");
  if (!secret) {
    console.error("[whop] WHOP_WEBHOOK_SECRET is not configured");
    return new Response(
      JSON.stringify({ error: "Webhook secret not configured" }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }

  const payload = await req.text();
  const headers = Object.fromEntries(req.headers.entries());

  try {
    const wh = new Webhook(btoa(secret));
    wh.verify(payload, headers);
  } catch (err) {
    console.error("[whop] signature verification failed:", err);
    return new Response(JSON.stringify({ error: "Invalid signature" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  let event: { type?: string; data?: unknown };
  try {
    event = JSON.parse(payload);
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  console.log("[whop] received event:", event.type, event.data);

  if (!RELEVANT_EVENTS.has(event.type ?? "")) {
    return new Response(JSON.stringify({ ok: true, ignored: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }},
    );
  }

  const email = getWhopEmail(event.data);
  if (!email) {
    console.error("[whop] no email found in payload:", event.data);
    return new Response(JSON.stringify({ error: "Missing email in payload" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    if (UPGRADE_EVENTS.has(event.type ?? "")) {
      const userId = await upgradeUserByEmail(email);
      console.log(`[whop] user ${userId} upgraded to premium`);
      return new Response(JSON.stringify({ ok: true, userId }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    const userId = await downgradeUserByEmail(email);
    console.log(`[whop] user ${userId} downgraded to free`);
    return new Response(JSON.stringify({ ok: true, userId }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("[whop] upgrade/downgrade failed:", err);
    return new Response(
      JSON.stringify({
        error: err instanceof Error ? err.message : "Upgrade/downgrade failed",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
});
