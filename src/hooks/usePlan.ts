import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/lib/supabase";

export type Plan = "free" | "premium";

export function usePlan() {
  const { user, isAuthenticated, isLoading: authLoading } = useAuth();
  const [plan, setPlan] = useState<Plan>("free");
  const [profileLoading, setProfileLoading] = useState(false);

  useEffect(() => {
    if (!isAuthenticated || !user) {
      setPlan("free");
      return;
    }

    let cancelled = false;
    setProfileLoading(true);

    (async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("plan")
        .eq("id", user.id)
        .single();

      if (cancelled) return;

      if (error) {
        console.error("[usePlan] failed to fetch profile:", error.message);
      }
      if (data?.plan) {
        setPlan(data.plan as Plan);
      }
      setProfileLoading(false);
    })();

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
  };
}
