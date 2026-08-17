import type { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";
import type { User } from "@supabase/supabase-js";
import { supabaseAdmin } from "./lib/supabase";

export type TrpcContext = {
  req: Request;
  resHeaders: Headers;
  user?: User;
};

function getBearerToken(headers: Headers): string | undefined {
  const auth = headers.get("authorization");
  if (auth?.startsWith("Bearer ")) return auth.slice(7);
  return undefined;
}

export async function createContext(
  opts: FetchCreateContextFnOptions,
): Promise<TrpcContext> {
  const ctx: TrpcContext = { req: opts.req, resHeaders: opts.resHeaders };
  const token = getBearerToken(opts.req.headers);
  if (!token) return ctx;

  try {
    const { data, error } = await supabaseAdmin.auth.getUser(token);
    if (!error && data.user) {
      ctx.user = data.user;
    }
  } catch {
    // Authentication is optional here
  }
  return ctx;
}
