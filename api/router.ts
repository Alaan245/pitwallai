import { planRouter } from "./plan-router.js";
import { createRouter, publicQuery } from "./middleware.js";

export const appRouter = createRouter({
  ping: publicQuery.query(() => ({ ok: true, ts: Date.now() })),
  plan: planRouter,
});

export type AppRouter = typeof appRouter;
