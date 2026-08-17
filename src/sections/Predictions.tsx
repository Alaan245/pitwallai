import { useEffect, useState } from "react";
import {
  AlertTriangle,
  BrainCircuit,
  Calendar,
  CheckCircle2,
  CloudRain,
  Gauge,
  MapPin,
  Route,
  Thermometer,
  Wind,
  Zap,
} from "lucide-react";
import { upcomingRaces } from "../data/upcoming";
import type { UpcomingRace } from "../data/upcoming";
import { FREE_PREDICTION_IDS } from "../data/access";
import { usePlan } from "../hooks/usePlan";
import { LockBadge, PaywallOverlay } from "../components/PaywallGate";

function ConfidenceBadge({ level }: { level: UpcomingRace["confidence"] }) {
  const color =
    level === "Élevée" ? "text-emerald-400 border-emerald-400/40" : level === "Moyenne" ? "text-amber-400 border-amber-400/40" : "text-red-400 border-red-400/40";
  return (
    <span className={`border px-2 py-1 font-data text-[10px] uppercase tracking-widest ${color}`}>
      Confiance {level}
    </span>
  );
}

function ProbBar({ c, max, rank }: { c: UpcomingRace["contenders"][number]; max: number; rank: number }) {
  return (
    <div className="group">
      <div className="flex items-baseline justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className={`font-data text-xs ${rank === 0 ? "text-[#ff9d0a]" : "text-white/35"}`}>
            {String(rank + 1).padStart(2, "0")}
          </span>
          <span className="font-display text-lg font-semibold uppercase">{c.driver}</span>
          <span className="font-data text-[10px] uppercase tracking-widest text-white/35">{c.team}</span>
        </div>
        <span className={`font-data text-xl font-semibold tabular-nums ${rank === 0 ? "text-[#ff9d0a]" : "text-white/70"}`}>
          {c.probability}%
        </span>
      </div>
      <div className="mt-1.5 h-2 bg-white/8">
        <div
          className="anim-bar-grow h-full transition-all duration-700"
          style={{
            width: `${(c.probability / max) * 100}%`,
            backgroundColor: rank === 0 ? "#ff9d0a" : c.teamColor,
            opacity: rank === 0 ? 1 : 0.55,
            animationDelay: `${0.15 + rank * 0.12}s`,
          }}
        />
      </div>
      <p className="mt-2 text-[13px] font-light leading-relaxed text-white/50">{c.rationale}</p>
    </div>
  );
}

function AnalysisLoader({ race, step }: { race: UpcomingRace; step: number }) {
  const steps = [
    "Initialisation du modèle Pitwall v2.6…",
    `Télémétrie ${race.circuit} synchronisée`,
    `Météo intégrée — risque pluie ${race.weather.rainRisk} %`,
    "Historique pilote-circuit croisé (2010 → 2026)",
    "Calcul des probabilités de victoire…",
  ];
  return (
    <div className="anim-fade-in relative mt-8 overflow-hidden border border-[#ff9d0a]/40 bg-[#0e0f10] p-6 sm:p-8">
      {/* scanline */}
      <span
        className="pointer-events-none absolute left-0 h-px w-full bg-gradient-to-r from-transparent via-[#ff9d0a]/70 to-transparent"
        style={{ animation: "scanline 1.6s linear infinite" }}
      />
      <div className="flex items-center justify-between">
        <p className="flex items-center gap-2.5 font-data text-[11px] uppercase tracking-[0.3em] text-[#ff9d0a]">
          <span className="anim-pulse-dot h-2 w-2 rounded-full bg-[#ff9d0a]" />
          Analyse en cours — {race.gp}
        </p>
        <BrainCircuit className="h-4 w-4 text-[#ff9d0a]/60" />
      </div>

      <div className="mt-6 min-h-36 space-y-2.5 font-data text-[13px]">
        {steps.slice(0, step + 1).map((s, i) => (
          <p key={i} className="anim-rise flex items-center gap-2.5 text-white/70">
            {i < step ? (
              <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
            ) : (
              <span className="shrink-0 text-[#ff9d0a]">▸</span>
            )}
            {s}
            {i === step && <span className="anim-cursor ml-1 inline-block h-3.5 w-1.5 bg-[#ff9d0a]" />}
          </p>
        ))}
      </div>

      <div className="mt-6 h-1 bg-white/10">
        <div className="anim-load-bar h-full bg-[#ff9d0a]" />
      </div>
      <p className="font-data mt-2 text-[10px] uppercase tracking-[0.25em] text-white/30">
        Simulation du raisonnement du modèle — démo
      </p>
    </div>
  );
}

function RacePanel({ race, locked }: { race: UpcomingRace; locked: boolean }) {
  const max = Math.max(...race.contenders.map((c) => c.probability));
  return (
    <div className="anim-fade-in relative mt-8">
      {locked && <PaywallOverlay label="Prédiction Premium" intensity="strong" />}
      <div className="grid gap-10 lg:grid-cols-[380px_1fr]">
      {/* Left column: facts */}
      <div className="space-y-4">
        <div className="border border-white/10 bg-white/[0.02] p-5">
          <p className="font-data text-[10px] uppercase tracking-[0.3em] text-white/40">Circuit</p>
          <div className="mt-3 space-y-2.5 font-data text-sm">
            <p className="flex items-center gap-2.5 text-white/70">
              <MapPin className="h-4 w-4 text-[#ff9d0a]" /> {race.circuit}
            </p>
            <p className="flex items-center gap-2.5 text-white/70">
              <Calendar className="h-4 w-4 text-[#ff9d0a]" /> {race.days} 2026
              {race.sprint && (
                <span className="bg-[#ff9d0a]/15 px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-[#ff9d0a]">
                  Sprint
                </span>
              )}
            </p>
            <p className="flex items-center gap-2.5 text-white/70">
              <Route className="h-4 w-4 text-[#ff9d0a]" /> {race.laps} tours · {race.circuitLength} · {race.drsZones} zones DRS
            </p>
          </div>
          <ul className="mt-4 space-y-1.5 border-t border-white/10 pt-4">
            {race.traits.map((t) => (
              <li key={t} className="flex gap-2 text-[13px] font-light text-white/60">
                <span className="mt-1.5 h-1 w-1 shrink-0 bg-[#ff9d0a]" /> {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="border border-white/10 bg-white/[0.02] p-5">
          <p className="font-data text-[10px] uppercase tracking-[0.3em] text-white/40">Météo prévisionnelle</p>
          <div className="mt-3 grid grid-cols-3 gap-3 font-data text-center">
            <div>
              <Thermometer className="mx-auto h-4 w-4 text-[#ff9d0a]" />
              <p className="mt-1 text-sm font-semibold">{race.weather.temp}</p>
              <p className="text-[10px] uppercase text-white/35">Piste</p>
            </div>
            <div>
              <CloudRain className="mx-auto h-4 w-4 text-sky-400" />
              <p className="mt-1 text-sm font-semibold">{race.weather.rainRisk}%</p>
              <p className="text-[10px] uppercase text-white/35">Pluie</p>
            </div>
            <div>
              <Wind className="mx-auto h-4 w-4 text-white/50" />
              <p className="mt-1 text-sm font-semibold">{race.weather.wind.split(" ")[0]}</p>
              <p className="text-[10px] uppercase text-white/35">Vent</p>
            </div>
          </div>
        </div>

        <div className="border border-[#ff9d0a]/30 bg-[#ff9d0a]/5 p-5">
          <p className="flex items-center gap-2 font-data text-[10px] uppercase tracking-[0.3em] text-[#ff9d0a]">
            <Zap className="h-3.5 w-3.5" /> Facteur X
          </p>
          <p className="mt-2 text-sm font-light leading-relaxed text-white/70">{race.xFactor}</p>
        </div>
      </div>

      {/* Right column: probabilities + scenario */}
      <div>
        <p className="flex items-center gap-2 font-data text-[10px] uppercase tracking-[0.3em] text-[#ff9d0a]">
          <Gauge className="h-4 w-4" /> Probabilités de victoire — modèle Pitwall
        </p>
        <div className="stagger mt-5 space-y-6">
          {race.contenders.map((c, i) => (
            <ProbBar key={c.code} c={c} max={max} rank={i} />
          ))}
        </div>

        <div className="mt-8 border-t border-white/10 pt-6">
          <p className="flex items-center gap-2 font-data text-[10px] uppercase tracking-[0.3em] text-[#ff9d0a]">
            <BrainCircuit className="h-4 w-4" /> Scénario du modèle
          </p>
          <p className="mt-3 text-[15px] font-light leading-relaxed text-white/75">{race.scenario}</p>
        </div>

        <p className="mt-6 flex items-start gap-2 font-data text-[11px] leading-relaxed text-white/30">
          <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          Probabilités issues d'un modèle de démonstration (forme 2026, historique pilote-circuit,
          caractéristiques du tracé, météo). À visée illustrative — pas un conseil de pari.
        </p>
      </div>
      </div>
    </div>
  );
}

export default function Predictions() {
  const [activeId, setActiveId] = useState(upcomingRaces[0].id);
  const [analyzing, setAnalyzing] = useState(false);
  const [step, setStep] = useState(0);
  const { isPremium } = usePlan();
  const active = upcomingRaces.find((r) => r.id === activeId)!;

  useEffect(() => {
    if (!analyzing) return;
    const stepTimer = setInterval(() => setStep((s) => s + 1), 460);
    const doneTimer = setTimeout(() => setAnalyzing(false), 2450);
    return () => {
      clearInterval(stepTimer);
      clearTimeout(doneTimer);
    };
  }, [analyzing]);

  const handleSelect = (id: string) => {
    if (id === activeId || analyzing) return;
    setActiveId(id);
    setStep(0);
    setAnalyzing(true);
  };

  return (
    <div className="pt-12">
      <p className="font-data text-xs uppercase tracking-[0.35em] text-[#ff9d0a]">03 — Prédictions</p>
      <h2 className="font-display mt-2 text-4xl font-bold uppercase sm:text-5xl">
        Qui gagne le prochain GP ?
      </h2>
      <p className="mt-3 max-w-2xl font-light text-white/50">
        Le modèle croise forme du moment, affinité pilote-circuit, traits du tracé et météo
        pour projeter chaque course à venir de la saison 2026.
      </p>

      {/* Race selector */}
      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {upcomingRaces.map((r) => (
          <button
            key={r.id}
            onClick={() => handleSelect(r.id)}
            className={`border p-4 text-left transition-colors ${
              activeId === r.id
                ? "border-[#ff9d0a] bg-[#ff9d0a]/10"
                : "border-white/10 bg-white/[0.02] hover:border-white/30"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-data text-[10px] uppercase tracking-[0.25em] text-white/40">
                R{r.round} · {r.date}
              </span>
              {r.sprint && (
                <span className="font-data text-[9px] uppercase tracking-wider text-[#ff9d0a]">Sprint</span>
              )}
            </div>
            <h3 className="font-display mt-2 text-xl font-bold uppercase leading-tight">{r.gp}</h3>
            <p className="font-data mt-1 text-xs text-white/40">{r.circuit}</p>
            <div className="mt-3 flex items-center gap-2">
              <ConfidenceBadge level={r.confidence} />
              {!isPremium && !FREE_PREDICTION_IDS.has(r.id) && <LockBadge />}
            </div>
          </button>
        ))}
      </div>

      {analyzing ? (
        <AnalysisLoader race={active} step={step} />
      ) : (
        <RacePanel
          key={active.id}
          race={active}
          locked={!isPremium && !FREE_PREDICTION_IDS.has(active.id)}
        />
      )}
    </div>
  );
}
