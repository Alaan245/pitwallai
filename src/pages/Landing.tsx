import { Link } from "react-router-dom";
import {
  ArrowRight,
  BrainCircuit,
  Crown,
  Flag,
  History,
  Lock,
  RotateCcw,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";
import { usePlan } from "../hooks/usePlan";
import { drivers } from "../data/drivers";
import { pastRaces } from "../data/races";
import { upcomingRaces } from "../data/upcoming";

const FEATURES = [
  {
    icon: Users,
    num: "01",
    title: "Profils pilotes augmentés",
    desc: "34 pilotes — grille 2026 complète, ère 2010s et légendes. Stats carrière, radar de pilotage en 6 axes, forces et points de vigilance détectés par le modèle.",
    stat: "34 profils",
  },
  {
    icon: History,
    num: "02",
    title: "Courses passées décortiquées",
    desc: "De Monaco 1984 à Budapest 2026 : 21 Grands Prix réanalysés tour par tour, avec timeline des moments de bascule et probabilités recalculées.",
    stat: "33 debriefs",
  },
  {
    icon: Sparkles,
    num: "03",
    title: "Prédictions des prochains GP",
    desc: "Forme du moment, affinité pilote-circuit, météo, traits du tracé : le modèle projette chaque course à venir avec probabilités de victoire et scénarios.",
    stat: "4 projections",
  },
];

export default function Landing() {
  const { isAuthenticated, isPremium } = usePlan();

  return (
    <div className="min-h-screen bg-[#0b0c0d] carbon-texture text-[#ece9e2]">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0b0c0d]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center bg-[#ff9d0a]">
              <Flag className="h-5 w-5 text-[#0b0c0d]" strokeWidth={2.5} />
            </div>
            <span className="font-display text-2xl font-bold uppercase tracking-wide">
              Pitwall<span className="text-[#ff9d0a]">.AI</span>
            </span>
          </div>
          <nav className="flex items-center gap-2 sm:gap-4">
            <Link
              to="/tarifs"
              className="hidden font-display text-sm font-semibold uppercase tracking-wider text-white/55 transition-colors hover:text-white sm:block"
            >
              Tarifs
            </Link>
            <Link
              to="/app"
              className="hidden font-display text-sm font-semibold uppercase tracking-wider text-white/55 transition-colors hover:text-white sm:block"
            >
              Ouvrir l'app
            </Link>
            {isAuthenticated ? (
              <Link
                to="/profil"
                className="font-display flex items-center gap-2 border border-[#ff9d0a]/60 px-4 py-2 text-sm font-bold uppercase tracking-wider text-[#ff9d0a] transition-colors hover:bg-[#ff9d0a] hover:text-[#0b0c0d]"
              >
                Mon profil
              </Link>
            ) : (
              <Link
                to="/login"
                className="font-display flex items-center gap-2 bg-[#ff9d0a] px-4 py-2 text-sm font-bold uppercase tracking-wider text-[#0b0c0d] transition-opacity hover:opacity-85"
              >
                Créer mon profil
              </Link>
            )}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
          <p className="font-data text-xs uppercase tracking-[0.35em] text-[#ff9d0a]">
            Analyse de Formule 1 par intelligence artificielle
          </p>
          <h1 className="font-display mt-5 max-w-5xl text-6xl font-bold uppercase leading-[0.92] tracking-tight sm:text-8xl">
            Chaque course
            <br />
            a une histoire.
            <br />
            <span className="text-[#ff9d0a]">Le modèle la lit.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg font-light leading-relaxed text-white/60">
            Pitwall.AI réanalyse 70 ans de Formule 1 avec un modèle statistique : profils de
            pilotes, debriefs de courses légendaires et prédictions des Grands Prix à venir —
            chiffrés, sourcés, sans langue de bois.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/app"
              className="font-display flex items-center gap-2 bg-[#ff9d0a] px-7 py-3.5 text-base font-bold uppercase tracking-wider text-[#0b0c0d] transition-opacity hover:opacity-85"
            >
              Explorer gratuitement <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/tarifs"
              className="font-display flex items-center gap-2 border border-white/20 px-7 py-3.5 text-base font-bold uppercase tracking-wider text-white transition-colors hover:border-[#ff9d0a] hover:text-[#ff9d0a]"
            >
              <Crown className="h-4 w-4" /> Voir Premium
            </Link>
          </div>

          {/* Bandeau chiffres */}
          <div className="mt-16 grid grid-cols-2 gap-px border border-white/10 bg-white/10 sm:grid-cols-4">
            {[
              { v: String(drivers.length), l: "pilotes analysés" },
              { v: String(pastRaces.length), l: "courses décortiquées" },
              { v: String(upcomingRaces.length), l: "GP projetés" },
              { v: "1950-2026", l: "de données F1" },
            ].map((s) => (
              <div key={s.l} className="bg-[#0e0f10] px-6 py-5">
                <p className="font-display text-4xl font-bold tabular-nums text-[#ff9d0a]">{s.v}</p>
                <p className="font-data mt-1 text-[10px] uppercase tracking-[0.25em] text-white/40">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <p className="font-data text-xs uppercase tracking-[0.35em] text-[#ff9d0a]">
            Ce que le modèle fait pour toi
          </p>
          <h2 className="font-display mt-3 text-4xl font-bold uppercase sm:text-5xl">
            Trois modules, une obsession : la donnée
          </h2>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div key={f.num} className="group border border-white/10 bg-white/[0.02] p-7 transition-colors hover:border-[#ff9d0a]/50">
                <div className="flex items-center justify-between">
                  <f.icon className="h-6 w-6 text-[#ff9d0a]" />
                  <span className="font-data text-xs text-white/25">{f.num}</span>
                </div>
                <h3 className="font-display mt-5 text-2xl font-bold uppercase leading-tight">
                  {f.title}
                </h3>
                <p className="mt-3 text-[15px] font-light leading-relaxed text-white/55">{f.desc}</p>
                <p className="font-data mt-5 border-t border-white/10 pt-4 text-xs uppercase tracking-[0.25em] text-[#ff9d0a]">
                  {f.stat}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modèle */}
      <section className="border-b border-white/10 bg-[#0e0f10]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="font-data text-xs uppercase tracking-[0.35em] text-[#ff9d0a]">
              <BrainCircuit className="mr-2 inline h-4 w-4" />
              La méthode
            </p>
            <h2 className="font-display mt-3 text-4xl font-bold uppercase leading-tight sm:text-5xl">
              Pas des opinions.
              <br />
              Des indices.
            </h2>
            <p className="mt-5 max-w-lg font-light leading-relaxed text-white/55">
              Chaque pilote est noté sur 6 axes (qualification, racecraft, gestion pneus, pluie,
              mental, constance) à partir de métriques ajustées au contexte : niveau de la machine,
              époque, fiabilité, pression du championnat. Chaque course reçoit ses probabilités
              recalculées tour par tour.
            </p>
          </div>
          <div className="space-y-px border border-white/10 bg-white/10">
            {[
              ["Qualification", 97],
              ["Racecraft", 98],
              ["Gestion pneus", 92],
              ["Pilotage pluie", 96],
              ["Mental", 93],
              ["Constance", 90],
            ].map(([label, v]) => (
              <div key={label as string} className="bg-[#0e0f10] px-6 py-4">
                <div className="flex items-baseline justify-between">
                  <span className="font-data text-xs uppercase tracking-[0.2em] text-white/60">{label}</span>
                  <span className="font-data text-lg font-semibold tabular-nums text-[#ff9d0a]">{v}</span>
                </div>
                <div className="mt-2 h-1.5 bg-white/10">
                  <div className="h-full bg-[#ff9d0a]" style={{ width: `${v}%` }} />
                </div>
              </div>
            ))}
            <p className="bg-[#0e0f10] px-6 py-3 font-data text-[10px] uppercase tracking-[0.25em] text-white/30">
              Exemple : profil de Max Verstappen — indices /100
            </p>
          </div>
        </div>
      </section>

      {/* Paywall teaser */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_420px]">
            <div>
              <p className="font-data text-xs uppercase tracking-[0.35em] text-[#ff9d0a]">
                Accès libre vs Premium
              </p>
              <h2 className="font-display mt-3 text-4xl font-bold uppercase leading-tight sm:text-5xl">
                20 % des analyses gratuites.
                <br />
                <span className="text-white/35">Les 80 % qui font la différence sont Premium.</span>
              </h2>
              <ul className="mt-8 space-y-3">
                {[
                  "5 profils pilotes et 4 debriefs complets offerts, sans compte",
                  "Premium : les 34 profils, les 33 debriefs, toutes les prédictions",
                  "Nouvelles analyses ajoutées après chaque Grand Prix",
                ].map((t) => (
                  <li key={t} className="flex gap-3 text-[15px] font-light text-white/65">
                    <Trophy className="mt-0.5 h-4 w-4 shrink-0 text-[#ff9d0a]" /> {t}
                  </li>
                ))}
              </ul>
              <Link
                to="/tarifs"
                className="font-display mt-9 inline-flex items-center gap-2 bg-[#ff9d0a] px-7 py-3.5 text-base font-bold uppercase tracking-wider text-[#0b0c0d] transition-opacity hover:opacity-85"
              >
                <Crown className="h-4 w-4" /> Passer Premium
              </Link>
              <p className="mt-3 flex items-center gap-2 font-data text-[11px] uppercase tracking-[0.2em] text-white/35">
                <RotateCcw className="h-3.5 w-3.5" />
                Abonnement résiliable à tout moment
              </p>
            </div>
            <div className="relative border border-white/10 bg-white/[0.02] p-7">
              <div className="pointer-events-none select-none opacity-40 blur-[3px]">
                <p className="font-data text-[10px] uppercase tracking-[0.3em] text-white/40">
                  Debrief IA — extrait verrouillé
                </p>
                <p className="mt-4 text-sm font-light leading-relaxed text-white/70">
                  Le modèle de probabilités en temps réel donne un basculement unique dans
                  l'histoire : à 3 virages de l'arrivée, Massa a 94 % de chances d'être champion.
                  La pluie sur Glock (pneus secs, -38 s dans le dernier tour) fait chuter sa
                  vitesse de 15 % — Hamilton passe à 240 m de la ligne...
                </p>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center border border-[#ff9d0a]/50 bg-[#ff9d0a]/10">
                  <Lock className="h-5 w-5 text-[#ff9d0a]" />
                </span>
                <p className="font-data text-[10px] uppercase tracking-[0.3em] text-[#ff9d0a]">
                  Contenu Premium
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="border-b border-white/10 bg-[#0e0f10]">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6">
          <h2 className="font-display text-5xl font-bold uppercase leading-tight sm:text-6xl">
            Prêt pour le <span className="text-[#ff9d0a]">tour de formation</span> ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-light text-white/55">
            {isPremium
              ? "Tu es Premium : tout le paddock t'est ouvert."
              : isAuthenticated
                ? "Ton profil est créé — explore le contenu gratuit ou passe Premium."
                : "Crée ton profil en 10 secondes et accède immédiatement aux analyses gratuites."}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/app"
              className="font-display flex items-center gap-2 bg-[#ff9d0a] px-8 py-4 text-base font-bold uppercase tracking-wider text-[#0b0c0d] transition-opacity hover:opacity-85"
            >
              Ouvrir l'analyseur <ArrowRight className="h-4 w-4" />
            </Link>
            {!isAuthenticated && (
              <Link
                to="/login"
                className="font-display flex items-center gap-2 border border-white/20 px-8 py-4 text-base font-bold uppercase tracking-wider text-white transition-colors hover:border-[#ff9d0a] hover:text-[#ff9d0a]"
              >
                Créer mon profil
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="kerb-stripes h-2 w-full opacity-80" />
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="font-display text-lg font-bold uppercase">
              Pitwall<span className="text-[#ff9d0a]">.AI</span>
            </span>
            <p className="max-w-xl font-data text-[11px] leading-relaxed text-white/30">
              Analyses générées par IA à partir de données publiques de Formule 1. Projet non
              affilié à la FIA, Formula 1 ou aux écuries. Les prédictions sont illustratives et ne
              constituent pas un conseil de pari.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-4 border-t border-white/10 pt-5 font-data text-[11px] uppercase tracking-[0.2em] text-white/35">
            <Link to="/mentions-legales" className="transition-colors hover:text-[#ff9d0a]">
              Mentions légales
            </Link>
            <span className="hidden sm:inline">·</span>
            <Link to="/cgu" className="transition-colors hover:text-[#ff9d0a]">
              Conditions générales d'utilisation
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
