import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Check, Crown, Flag } from "lucide-react";
import { usePlan } from "../hooks/usePlan";

const WHOP_CHECKOUT_URL = "https://whop.com/checkout/plan_7NnRIdmkBrcdr";

const FREE_FEATURES = [
  "5 profils pilotes complets (sur 34)",
  "4 debriefs de courses (sur 33)",
  "1 prédiction de Grand Prix (sur 4)",
  "Compte à rebours et flux paddock",
];

const PREMIUM_FEATURES = [
  "Les 34 profils pilotes : radars, forces, faiblesses, analyses",
  "Les 33 debriefs avec timelines des moments de bascule",
  "Toutes les prédictions : probabilités, scénarios, facteurs X",
  "Nouvelles analyses après chaque Grand Prix",
  "Mises à jour du modèle en continu",
];

export default function Pricing() {
  const { isAuthenticated, isPremium } = usePlan();
  const [cycle, setCycle] = useState<"monthly" | "yearly">("monthly");
  const navigate = useNavigate();

  const handleUpgrade = () => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
    window.location.href = WHOP_CHECKOUT_URL;
  };

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

      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <p className="font-data text-xs uppercase tracking-[0.35em] text-[#ff9d0a]">Tarifs</p>
        <h1 className="font-display mt-3 text-5xl font-bold uppercase leading-tight sm:text-6xl">
          Choisis ta <span className="text-[#ff9d0a]">stratégie</span>
        </h1>
        <p className="mt-4 max-w-2xl font-light text-white/55">
          Comme au stand : le plan gratuit te fait rouler, le plan Premium te fait gagner du
          temps. 20 % des analyses resteront toujours accessibles gratuitement.
        </p>

        {/* Cycle toggle */}
        <div className="mt-10 inline-flex border border-white/15">
          {(
            [
              { id: "monthly", label: "Mensuel" },
              { id: "yearly", label: "Annuel · -30 %" },
            ] as const
          ).map((c) => (
            <button
              key={c.id}
              onClick={() => setCycle(c.id)}
              className={`px-5 py-2.5 font-display text-sm font-semibold uppercase tracking-wider transition-colors ${
                cycle === c.id ? "bg-[#ff9d0a] text-[#0b0c0d]" : "text-white/55 hover:text-white"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {/* Free */}
          <div className="border border-white/15 bg-white/[0.02] p-8">
            <p className="font-data text-[10px] uppercase tracking-[0.3em] text-white/40">
              Plan gratuit
            </p>
            <p className="font-display mt-3 text-5xl font-bold">
              0 €<span className="text-lg text-white/40"> / toujours</span>
            </p>
            <p className="mt-2 text-sm font-light text-white/50">
              L'essentiel pour découvrir le modèle.
            </p>
            <ul className="mt-6 space-y-3 border-t border-white/10 pt-6">
              {FREE_FEATURES.map((f) => (
                <li key={f} className="flex gap-3 text-sm font-light text-white/65">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-white/40" /> {f}
                </li>
              ))}
            </ul>
            <Link
              to="/app"
              className="font-display mt-8 block border border-white/20 py-3 text-center text-sm font-bold uppercase tracking-wider text-white transition-colors hover:border-[#ff9d0a] hover:text-[#ff9d0a]"
            >
              Explorer gratuitement
            </Link>
          </div>

          {/* Premium */}
          <div className="relative border border-[#ff9d0a]/60 bg-[#ff9d0a]/[0.06] p-8">
            <span className="font-data absolute right-4 top-4 bg-[#ff9d0a] px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#0b0c0d]">
              Recommandé
            </span>
            <p className="font-data flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#ff9d0a]">
              <Crown className="h-4 w-4" /> Premium
            </p>
            <p className="font-display mt-3 text-5xl font-bold">
              {cycle === "monthly" ? "6,99 €" : "59 €"}
              <span className="text-lg text-white/40">
                {" "}/ {cycle === "monthly" ? "mois" : "an"}
              </span>
            </p>
            <p className="mt-2 text-sm font-light text-white/50">
              100 % du modèle, sans voile ni limite.
            </p>
            <ul className="mt-6 space-y-3 border-t border-[#ff9d0a]/20 pt-6">
              {PREMIUM_FEATURES.map((f) => (
                <li key={f} className="flex gap-3 text-sm font-light text-white/75">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#ff9d0a]" /> {f}
                </li>
              ))}
            </ul>
            {isPremium ? (
              <p className="font-display mt-8 flex items-center justify-center gap-2 border border-[#ff9d0a] bg-[#ff9d0a]/10 py-3 text-sm font-bold uppercase tracking-wider text-[#ff9d0a]">
                <Crown className="h-4 w-4" /> Tu es Premium
              </p>
            ) : (
              <button
                onClick={handleUpgrade}
                className="font-display mt-8 flex w-full items-center justify-center gap-2 bg-[#ff9d0a] py-3 text-sm font-bold uppercase tracking-wider text-[#0b0c0d] transition-opacity hover:opacity-85"
              >
                <Crown className="h-4 w-4" />
                {isAuthenticated
                  ? `Passer Premium — ${cycle === "monthly" ? "6,99 €/mois" : "59 €/an"}`
                  : "Créer un profil pour continuer"}
              </button>
            )}
            <p className="mt-3 text-center font-data text-[10px] leading-relaxed text-white/30">
              Paiement sécurisé via Whop. Accès Premium immédiat après validation.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
