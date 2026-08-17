import { z } from "zod";
import { createRouter, authedQuery } from "./middleware.js";
import { ensureProfile, setPlan } from "./queries/profiles.js";

export const planRouter = createRouter({
  // Plan courant de l'utilisateur connecté (crée le profil "free" au 1er appel)
  myPlan: authedQuery.query(async ({ ctx }) => {
    const profile = await ensureProfile(ctx.user.id);
    return { plan: profile.plan, upgradedAt: profile.upgraded_at };
  }),

  // Passage au premium (checkout simulé — pas de paiement réel branché)
  upgrade: authedQuery
    .input(z.object({ cycle: z.enum(["monthly", "yearly"]).default("monthly") }))
    .mutation(async ({ ctx }) => {
      const profile = await setPlan(ctx.user.id, "premium");
      return { plan: profile.plan, upgradedAt: profile.upgraded_at };
    }),

  // Retour au plan gratuit
  downgrade: authedQuery.mutation(async ({ ctx }) => {
    const profile = await setPlan(ctx.user.id, "free");
    return { plan: profile.plan };
  }),
});
