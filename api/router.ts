import { planRouter } from "./plan-router";
import { createRouter, publicQuery } from "./middleware";

export const appRouter = createRouter({
  ping: publicQuery.query(() => ({ ok: true, ts: Date.now() })),
  plan: planRouter,
});

export type AppRouter = typeof appRouter;
