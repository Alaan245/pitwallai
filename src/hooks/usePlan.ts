import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { trpc } from "@/providers/trpc";
import { useAuth } from "@/hooks/useAuth";

export type Plan = "free" | "premium";

export function usePlan() {
  const { user, isAuthenticated, isLoading: authLoading } = useAuth();
  const [plan, setPlan] = useState<Plan>("free");
  const [profileLoading, setProfileLoading] = useState(true);

  const utils = trpc.useUtils();

  const upgradeMutation = trpc.plan.upgrade.useMutation({
    onSuccess: async () => {
      setPlan("premium");
      await utils.plan.myPlan.invalidate();
    },
  });

  const downgradeMutation = trpc.plan.downgrade.useMutation({
    onSuccess: async () => {
      setPlan("free");
      await utils.plan.myPlan.invalidate();
    },
  });

  useEffect(() => {
    if (!isAuthenticated || !user) {
      setPlan("free");
      setProfileLoading(false);
      return;
    }

    let cancelled = false;
    setProfileLoading(true);

    supabase
      .from("profiles")
      .select("plan")
      .eq("id", user.id)
      .single()
      .then(({ data, error }) => {
        if (cancelled) return;
        if (!error && data?.plan) {
          setPlan(data.plan as Plan);
        }
        setProfileLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [isAuthenticated, user]);

  return {
    user,
    isAuthenticated,
    plan,
    isPremium: plan === "premium",
    isLoading: authLoading || profileLoading,
    upgrade: upgradeMutation.mutateAsync,
    downgrade: downgradeMutation.mutateAsync,
    upgrading: upgradeMutation.isPending,
  };
}
