import { useState } from "react";
import { Link } from "react-router-dom";
import { Crown, Flag, History, Sparkles, User, Users } from "lucide-react";
import Hero from "../sections/Hero";
import Pilotes from "../sections/Pilotes";
import Historique from "../sections/Historique";
import Predictions from "../sections/Predictions";
import Footer from "../sections/Footer";
import { usePlan } from "../hooks/usePlan";

type Tab = "pilotes" | "historique" | "predictions";

const TABS: { id: Tab; label: string; icon: typeof Users }[] = [
  { id: "pilotes", label: "Pilotes", icon: Users },
  { id: "historique", label: "Courses passées", icon: History },
  { id: "predictions", label: "Prédictions", icon: Sparkles },
];

export default function Analyzer() {
  const [tab, setTab] = useState<Tab>("pilotes");
  const { isAuthenticated, isPremium } = usePlan();

  return (
    <div className="min-h-screen bg-[#0b0c0d] carbon-texture text-[#ece9e2]">
      {/* ── Top bar ─────────────────────────────── */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0b0c0d]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-3 py-3">
            <div className="flex h-9 w-9 items-center justify-center bg-[#ff9d0a]">
              <Flag className="h-5 w-5 text-[#0b0c0d]" strokeWidth={2.5} />
            </div>
            <div className="leading-none">
              <span className="font-display text-2xl font-bold uppercase tracking-wide">
                Pitwall<span className="text-[#ff9d0a]">.AI</span>
              </span>
              <p className="font-data text-[10px] uppercase tracking-[0.25em] text-white/40">
                Analyse F1 par intelligence artificielle
              </p>
            </div>
          </Link>

          <nav className="flex items-center">
            {TABS.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setTab(id)}
                className={`group relative flex items-center gap-2 px-3 py-4 font-display text-sm font-semibold uppercase tracking-wider transition-colors sm:px-5 sm:text-base ${
                  tab === id ? "text-[#ff9d0a]" : "text-white/55 hover:text-white"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{label}</span>
                {tab === id && (
                  <span className="absolute inset-x-0 bottom-0 h-[3px] bg-[#ff9d0a]" />
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {isPremium ? (
              <Link
                to="/profil"
                className="font-data flex items-center gap-2 border border-[#ff9d0a]/50 bg-[#ff9d0a]/10 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-[#ff9d0a]"
              >
                <Crown className="h-3.5 w-3.5" /> Premium
              </Link>
            ) : (
              <Link
                to="/tarifs"
                className="font-display hidden items-center gap-2 bg-[#ff9d0a] px-4 py-2 text-sm font-bold uppercase tracking-wider text-[#0b0c0d] transition-opacity hover:opacity-85 sm:flex"
              >
                <Crown className="h-4 w-4" /> Passer Premium
              </Link>
            )}
            <Link
              to={isAuthenticated ? "/profil" : "/login"}
              className="flex h-9 w-9 items-center justify-center border border-white/15 text-white/60 transition-colors hover:border-[#ff9d0a] hover:text-[#ff9d0a]"
              title={isAuthenticated ? "Mon profil" : "Se connecter"}
            >
              <User className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>

      <Hero />

      {/* ── Tab content ─────────────────────────── */}
      <main className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
        {tab === "pilotes" && <Pilotes />}
        {tab === "historique" && <Historique />}
        {tab === "predictions" && <Predictions />}
      </main>

      <Footer />
    </div>
  );
}
