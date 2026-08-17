import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  Crown,
  Flag,
  MinusCircle,
  Trophy,
  X,
  Zap,
} from "lucide-react";
import { FREE_DRIVER_IDS } from "../data/access";
import { usePlan } from "../hooks/usePlan";
import { LockBadge } from "../components/PaywallGate";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import { currentDrivers, legendDrivers, modernDrivers, SKILL_LABELS } from "../data/drivers";
import type { Driver } from "../data/drivers";

type Era = "current" | "modern" | "legend";

const ERAS: { id: Era; label: string; list: Driver[] }[] = [
  { id: "current", label: "Saison 2026", list: currentDrivers },
  { id: "modern", label: "Ère 2010s", list: modernDrivers },
  { id: "legend", label: "Légendes", list: legendDrivers },
];

function StatBox({ label, value, accent }: { label: string; value: number; accent?: boolean }) {
  return (
    <div className={`border px-3 py-2 ${accent ? "border-[#ff9d0a]/40 bg-[#ff9d0a]/5" : "border-white/10"}`}>
      <p className={`font-data text-xl font-semibold tabular-nums ${accent ? "text-[#ff9d0a]" : ""}`}>
        {value}
      </p>
      <p className="font-data text-[10px] uppercase tracking-widest text-white/40">{label}</p>
    </div>
  );
}

function DriverCard({ d, locked, onSelect }: { d: Driver; locked: boolean; onSelect: (d: Driver) => void }) {
  return (
    <button
      onClick={() => onSelect(d)}
      className="group relative border border-white/10 bg-white/[0.02] p-5 text-left transition-colors hover:border-[#ff9d0a]/60 hover:bg-white/[0.05]"
    >
      <span
        className="absolute left-0 top-0 h-full w-1"
        style={{ backgroundColor: d.teamColor }}
      />
      {locked && (
        <span className="absolute right-3 top-3">
          <LockBadge />
        </span>
      )}
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-data text-[10px] uppercase tracking-[0.25em] text-white/40">
            {d.team} · {d.country}
          </p>
          <h3 className="font-display mt-1 text-2xl font-bold uppercase leading-tight group-hover:text-[#ff9d0a]">
            {d.name}
          </h3>
        </div>
        {d.number && (
          <span className="font-display text-4xl font-bold leading-none text-white/10">
            {d.number}
          </span>
        )}
      </div>

      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 font-data text-xs text-white/60">
        <span className="flex items-center gap-1.5">
          <Crown className="h-3.5 w-3.5 text-[#ff9d0a]" /> {d.titles} titre{d.titles > 1 ? "s" : ""}
        </span>
        <span className="flex items-center gap-1.5">
          <Trophy className="h-3.5 w-3.5 text-white/40" /> {d.wins} victoires
        </span>
        <span className="flex items-center gap-1.5">
          <Zap className="h-3.5 w-3.5 text-white/40" /> {d.poles} poles
        </span>
      </div>

      <p className="mt-3 line-clamp-2 text-sm font-light leading-relaxed text-white/50">
        {d.verdict}
      </p>

      <p className="mt-4 flex items-center gap-1 font-data text-[10px] uppercase tracking-[0.25em] text-[#ff9d0a]/80 group-hover:text-[#ff9d0a]">
        <BrainCircuit className="h-3.5 w-3.5" /> Analyse IA <ChevronRight className="h-3 w-3" />
      </p>
    </button>
  );
}

function DriverDetail({ d, onClose }: { d: Driver; onClose: () => void }) {
  const radarData = useMemo(
    () =>
      (Object.keys(SKILL_LABELS) as (keyof typeof SKILL_LABELS)[]).map((k) => ({
        skill: SKILL_LABELS[k],
        value: d.skills[k],
      })),
    [d]
  );

  return (
    <div className="anim-fade-in fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm" onClick={onClose}>
      <div
        className="anim-panel-in h-full w-full max-w-2xl overflow-y-auto border-l border-white/15 bg-[#0e0f10] p-6 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="anim-rise flex items-start justify-between">
          <div>
            <p className="font-data text-xs uppercase tracking-[0.3em]" style={{ color: d.teamColor }}>
              {d.team} · {d.country} {d.active ? "· Saison 2026" : d.era === "modern" ? "· Ère 2010s" : "· Légende"}
            </p>
            <h2 className="font-display mt-2 text-4xl font-bold uppercase leading-none sm:text-5xl">
              {d.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="border border-white/15 p-2 text-white/60 transition-colors hover:border-[#ff9d0a] hover:text-[#ff9d0a]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <p className="anim-rise mt-4 border-l-2 border-[#ff9d0a] pl-4 text-lg font-light italic text-white/70" style={{ animationDelay: "0.08s" }}>
          {d.verdict}
        </p>

        {/* Career stats */}
        <div className="anim-rise mt-8 grid grid-cols-3 gap-2 sm:grid-cols-5" style={{ animationDelay: "0.14s" }}>
          <StatBox label="Titres" value={d.titles} accent />
          <StatBox label="Victoires" value={d.wins} />
          <StatBox label="Poles" value={d.poles} />
          <StatBox label="Podiums" value={d.podiums} />
          <StatBox label="Départs" value={d.starts} />
        </div>

        {/* Radar */}
        <div className="anim-rise mt-8 border border-white/10 bg-white/[0.02] p-4" style={{ animationDelay: "0.2s" }}>
          <p className="font-data text-[10px] uppercase tracking-[0.3em] text-white/40">
            Profil de pilotage — indices IA /100
          </p>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData} outerRadius="72%">
                <PolarGrid stroke="rgba(255,255,255,0.12)" />
                <PolarAngleAxis
                  dataKey="skill"
                  tick={{ fill: "rgba(255,255,255,0.65)", fontSize: 11, fontFamily: "IBM Plex Mono" }}
                />
                <PolarRadiusAxis domain={[60, 100]} tick={false} axisLine={false} />
                <Radar
                  dataKey="value"
                  stroke="#ff9d0a"
                  fill="#ff9d0a"
                  fillOpacity={0.25}
                  strokeWidth={2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Forces / Faiblesses */}
        <div className="anim-rise mt-8 grid gap-4 sm:grid-cols-2" style={{ animationDelay: "0.26s" }}>
          <div className="border border-emerald-400/25 bg-emerald-400/5 p-5">
            <p className="flex items-center gap-2 font-data text-[10px] uppercase tracking-[0.3em] text-emerald-400">
              <CheckCircle2 className="h-4 w-4" /> Forces détectées
            </p>
            <ul className="mt-3 space-y-2.5">
              {d.forces.map((f) => (
                <li key={f} className="flex gap-2 text-[13px] font-light leading-relaxed text-white/70">
                  <span className="mt-1.5 h-1 w-1 shrink-0 bg-emerald-400" /> {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-red-400/25 bg-red-400/5 p-5">
            <p className="flex items-center gap-2 font-data text-[10px] uppercase tracking-[0.3em] text-red-400">
              <MinusCircle className="h-4 w-4" /> Points de vigilance
            </p>
            <ul className="mt-3 space-y-2.5">
              {d.faiblesses.map((f) => (
                <li key={f} className="flex gap-2 text-[13px] font-light leading-relaxed text-white/70">
                  <span className="mt-1.5 h-1 w-1 shrink-0 bg-red-400" /> {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* AI analysis */}
        <div className="anim-rise mt-8" style={{ animationDelay: "0.32s" }}>
          <p className="flex items-center gap-2 font-data text-[10px] uppercase tracking-[0.3em] text-[#ff9d0a]">
            <BrainCircuit className="h-4 w-4" /> Analyse du modèle
          </p>
          <div className="mt-4 space-y-4">
            {d.analysis.map((p, i) => (
              <div key={i} className="flex gap-4">
                <span className="font-data mt-0.5 shrink-0 text-xs text-[#ff9d0a]/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[15px] font-light leading-relaxed text-white/75">{p}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Signature race */}
        <div className="anim-rise mt-8 border border-[#ff9d0a]/30 bg-[#ff9d0a]/5 p-5" style={{ animationDelay: "0.38s" }}>
          <p className="flex items-center gap-2 font-data text-[10px] uppercase tracking-[0.3em] text-[#ff9d0a]">
            <Flag className="h-3.5 w-3.5" /> Course signature
          </p>
          <p className="font-display mt-2 text-xl font-semibold uppercase">{d.signature}</p>
        </div>
      </div>
    </div>
  );
}

export default function Pilotes() {
  const [era, setEra] = useState<Era>("current");
  const [selected, setSelected] = useState<Driver | null>(null);
  const { isPremium } = usePlan();
  const navigate = useNavigate();
  const active = ERAS.find((e) => e.id === era)!;

  const handleSelect = (d: Driver) => {
    const locked = !isPremium && !FREE_DRIVER_IDS.has(d.id);
    if (locked) {
      navigate("/tarifs");
      return;
    }
    setSelected(d);
  };

  return (
    <div className="pt-12">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="font-data text-xs uppercase tracking-[0.35em] text-[#ff9d0a]">01 — Pilotes</p>
          <h2 className="font-display mt-2 text-4xl font-bold uppercase sm:text-5xl">
            Les hommes derrière la donnée
          </h2>
        </div>
        <div className="flex border border-white/15">
          {ERAS.map((t) => (
            <button
              key={t.id}
              onClick={() => setEra(t.id)}
              className={`px-5 py-2.5 font-display text-sm font-semibold uppercase tracking-wider transition-colors ${
                era === t.id
                  ? "bg-[#ff9d0a] text-[#0b0c0d]"
                  : "text-white/55 hover:text-white"
              }`}
            >
              {t.label}
              <span className="ml-2 font-data text-xs opacity-60">{t.list.length}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {active.list.map((d) => (
          <DriverCard
            key={d.id}
            d={d}
            locked={!isPremium && !FREE_DRIVER_IDS.has(d.id)}
            onSelect={handleSelect}
          />
        ))}
      </div>

      {selected && <DriverDetail d={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
