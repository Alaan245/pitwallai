import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Crown, Flag, Loader2, LogOut, User } from "lucide-react";
import { usePlan } from "../hooks/usePlan";
import { useAuth } from "../hooks/useAuth";
import { LOGIN_PATH } from "../const";

export default function Profile() {
  const { user, isAuthenticated, isLoading, logout } = useAuth({
    redirectOnUnauthenticated: true,
    redirectPath: LOGIN_PATH,
  });
  const { isPremium, plan, downgrade } = usePlan();
  const navigate = useNavigate();

  if (isLoading || !isAuthenticated || !user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0b0c0d]">
        <Loader2 className="h-6 w-6 animate-spin text-[#ff9d0a]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0c0d] carbon-texture text-[#ece9e2]">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center bg-[#ff9d0a]">
              <Flag className="h-5 w-5 text-[#0b0c0d]" strokeWidth={2.5} />
            </div>
            <span className="font-display text-2xl font-bold uppercase tracking-wide">
              Pitwall<span className="text-[#ff9d0a]">.AI</span>
            </span>
          </Link>
          <Link
            to="/app"
            className="font-display flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white/55 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Retour à l'app
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p className="font-data text-xs uppercase tracking-[0.35em] text-[#ff9d0a]">Mon profil</p>
        <h1 className="font-display mt-3 text-5xl font-bold uppercase">
          {user.name ?? "Pilote"}
        </h1>
        <p className="font-data mt-2 text-sm text-white/40">{user.email ?? "Compte Kimi"}</p>

        {/* Plan card */}
        <div
          className={`mt-10 border p-7 ${
            isPremium ? "border-[#ff9d0a]/60 bg-[#ff9d0a]/[0.06]" : "border-white/15 bg-white/[0.02]"
          }`}
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-data text-[10px] uppercase tracking-[0.3em] text-white/40">
                Plan actuel
              </p>
              <p className="font-display mt-2 flex items-center gap-3 text-3xl font-bold uppercase">
                {isPremium ? (
                  <>
                    <Crown className="h-6 w-6 text-[#ff9d0a]" /> Premium
                  </>
                ) : (
                  <>
                    <User className="h-6 w-6 text-white/50" /> Gratuit
                  </>
                )}
              </p>
              <p className="mt-2 text-sm font-light text-white/55">
                {isPremium
                  ? "Accès illimité aux 34 profils, 33 debriefs et toutes les prédictions."
                  : "Accès à 20 % des analyses. Premium débloque tout le modèle."}
              </p>
            </div>
            {isPremium ? (
              <button
                onClick={() => downgrade()}
                className="font-display border border-white/20 px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-white/60 transition-colors hover:border-red-400 hover:text-red-400"
              >
                Résilier (démo)
              </button>
            ) : (
              <button
                onClick={() => navigate("/tarifs")}
                className="font-display flex items-center gap-2 bg-[#ff9d0a] px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-[#0b0c0d] transition-opacity hover:opacity-85"
              >
                <Crown className="h-4 w-4" /> Passer Premium
              </button>
            )}
          </div>

          {/* Usage meter */}
          <div className="mt-6 border-t border-white/10 pt-5">
            <div className="flex items-baseline justify-between">
              <span className="font-data text-[10px] uppercase tracking-[0.25em] text-white/40">
                Analyses débloquées
              </span>
              <span className="font-data text-sm font-semibold tabular-nums text-[#ff9d0a]">
                {isPremium ? "100 %" : "20 %"}
              </span>
            </div>
            <div className="mt-2 h-2 bg-white/10">
              <div
                className="h-full bg-[#ff9d0a] transition-all"
                style={{ width: isPremium ? "100%" : "20%" }}
              />
            </div>
          </div>
        </div>

        {/* Account meta */}
        <div className="mt-6 border border-white/10 bg-white/[0.02] p-7">
          <p className="font-data text-[10px] uppercase tracking-[0.3em] text-white/40">Compte</p>
          <dl className="mt-4 space-y-3 font-data text-sm">
            <div className="flex justify-between">
              <dt className="text-white/40">Identifiant</dt>
              <dd className="text-white/80">#{user.id}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-white/40">Plan</dt>
              <dd className="uppercase text-white/80">{plan}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-white/40">Membre depuis</dt>
              <dd className="text-white/80">
                {new Date(user.createdAt).toLocaleDateString("fr-FR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </dd>
            </div>
          </dl>
          <button
            onClick={async () => {
              await logout();
              navigate(LOGIN_PATH);
            }}
            className="font-display mt-6 flex items-center gap-2 border border-white/15 px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-white/60 transition-colors hover:border-[#ff9d0a] hover:text-[#ff9d0a]"
          >
            <LogOut className="h-4 w-4" /> Se déconnecter
          </button>
        </div>
      </main>
    </div>
  );
}
