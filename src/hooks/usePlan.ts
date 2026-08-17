import { useEffect, useState } from "react";
import { trpc } from "@/providers/trpc";
import { useAuth } from "@/hooks/useAuth";

export type Plan = "free" | "premium";

export function usePlan() {
  const { user, isAuthenticated, isLoading: authLoading } = useAuth();
  const [plan, setPlan] = useState<Plan>("free");

  const utils = trpc.useUtils();

  const { data: profileData, isLoading: profileLoading } =
    trpc.plan.myPlan.useQuery(undefined, {
      enabled: isAuthenticated && !!user,
      retry: false,
    });

  useEffect(() => {
    if (!isAuthenticated || !user) {
      setPlan("free");
      return;
    }
    if (profileData?.plan) {
      setPlan(profileData.plan as Plan);
    }
  }, [isAuthenticated, user, profileData]);

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
