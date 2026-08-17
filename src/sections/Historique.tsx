import { useMemo, useState } from "react";
import { BrainCircuit, ChevronDown, CloudRain, Flame, Milestone, Sun, Trophy } from "lucide-react";
import { pastRaces } from "../data/races";
import type { PastRace } from "../data/races";
import { FREE_RACE_IDS } from "../data/access";
import { usePlan } from "../hooks/usePlan";
import { LockBadge, PaywallOverlay } from "../components/PaywallGate";

type Decade = "all" | "2020s" | "2010s" | "classics";

const DECADES: { id: Decade; label: string; match: (y: number) => boolean }[] = [
  { id: "all", label: "Toutes", match: () => true },
  { id: "2020s", label: "2020 → 2026", match: (y) => y >= 2020 },
  { id: "2010s", label: "2010 → 2019", match: (y) => y >= 2010 && y < 2020 },
  { id: "classics", label: "Classiques", match: (y) => y < 2010 },
];

function ConditionIcon({ c }: { c: PastRace["conditions"] }) {
  if (c === "Pluie") return <CloudRain className="h-4 w-4 text-sky-400" />;
  if (c === "Mixte") return <CloudRain className="h-4 w-4 text-amber-300" />;
  return <Sun className="h-4 w-4 text-amber-400" />;
}

function DramaMeter({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-2">
      <Flame className="h-3.5 w-3.5 text-[#ff9d0a]" />
      <div className="h-1.5 w-24 bg-white/10">
        <div className="h-full bg-[#ff9d0a]" style={{ width: `${value}%` }} />
      </div>
      <span className="font-data text-xs tabular-nums text-white/50">{value}</span>
    </div>
  );
}

function RaceRow({ race, open, locked, onToggle }: { race: PastRace; open: boolean; locked: boolean; onToggle: () => void }) {
  return (
    <div className={`border transition-colors ${open ? "border-[#ff9d0a]/50 bg-white/[0.03]" : "border-white/10 bg-white/[0.015] hover:border-white/25"}`}>
      <button onClick={onToggle} className="flex w-full flex-wrap items-center gap-x-6 gap-y-3 px-5 py-5 text-left sm:px-7">
        <span className="font-display text-3xl font-bold tabular-nums text-white/25 sm:text-4xl">
          {race.year}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-xl font-bold uppercase leading-tight sm:text-2xl">
            {race.gp}
          </h3>
          <p className="font-data mt-0.5 text-xs text-white/40">{race.circuit}</p>
        </div>
        <div className="flex items-center gap-2 font-data text-xs text-white/60">
          <ConditionIcon c={race.conditions} /> {race.conditions}
        </div>
        <div className="hidden md:block">
          <DramaMeter value={race.drama} />
        </div>
        <div className="flex items-center gap-2">
          <Trophy className="h-4 w-4 text-[#ff9d0a]" />
          <span className="font-display text-lg font-semibold uppercase">{race.winner}</span>
        </div>
        {locked && <LockBadge />}
        <ChevronDown
          className={`h-5 w-5 text-white/40 transition-transform ${open ? "rotate-180 text-[#ff9d0a]" : ""}`}
        />
      </button>

      {open && (
        <div className="anim-expand-race border-t border-white/10 px-5 py-6 sm:px-7">
          <p className="max-w-4xl text-[15px] font-light leading-relaxed text-white/70">
            {race.summary}
          </p>

          <div className="relative">
          {locked && <PaywallOverlay label="Debrief Premium" />}

          {/* Moments de bascule */}
          <div className="mt-8">
            <p className="flex items-center gap-2 font-data text-[10px] uppercase tracking-[0.3em] text-[#ff9d0a]">
              <Milestone className="h-4 w-4" /> Moments de bascule
            </p>
            <div className="stagger mt-4 space-y-0">
              {race.moments.map((m, i) => (
                <div key={i} className="relative flex gap-5 pb-5 last:pb-0">
                  {i < race.moments.length - 1 && (
                    <span className="absolute left-[27px] top-7 h-full w-px bg-white/10" />
                  )}
                  <span className="font-data z-10 flex h-7 min-w-14 shrink-0 items-center justify-center border border-[#ff9d0a]/50 bg-[#0b0c0d] px-2 text-[11px] font-semibold text-[#ff9d0a]">
                    {m.ref}
                  </span>
                  <p className="pt-1 text-sm font-light leading-relaxed text-white/65">{m.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_300px]">
            {/* AI debrief */}
            <div>
              <p className="flex items-center gap-2 font-data text-[10px] uppercase tracking-[0.3em] text-[#ff9d0a]">
                <BrainCircuit className="h-4 w-4" /> Debrief IA
              </p>
              <div className="mt-4 space-y-4">
                {race.aiDebrief.map((p, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="font-data mt-0.5 shrink-0 text-xs text-[#ff9d0a]/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm font-light leading-relaxed text-white/75">{p}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Side stats */}
            <div className="space-y-4">
              <div className="border border-white/10 bg-white/[0.02] p-4">
                <p className="font-data text-[10px] uppercase tracking-[0.3em] text-white/40">Podium</p>
                <ol className="mt-3 space-y-2">
                  {race.podium.map((p, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span
                        className={`font-data flex h-6 w-6 items-center justify-center text-xs font-semibold ${
                          i === 0 ? "bg-[#ff9d0a] text-[#0b0c0d]" : "bg-white/10 text-white/70"
                        }`}
                      >
                        {i + 1}
                      </span>
                      <span className="font-display text-base font-semibold uppercase">{p}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="border border-white/10 bg-white/[0.02] p-4">
                <p className="font-data text-[10px] uppercase tracking-[0.3em] text-white/40">
                  Chiffres clés
                </p>
                <dl className="mt-3 space-y-2.5">
                  {race.keyStats.map((s) => (
                    <div key={s.label} className="flex items-baseline justify-between gap-3">
                      <dt className="font-data text-xs text-white/45">{s.label}</dt>
                      <dd className="font-data text-sm font-semibold tabular-nums text-[#ff9d0a]">
                        {s.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="border border-white/10 bg-white/[0.02] p-4 md:hidden">
                <p className="font-data mb-2 text-[10px] uppercase tracking-[0.3em] text-white/40">
                  Indice de chaos
                </p>
                <DramaMeter value={race.drama} />
              </div>
            </div>
          </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Historique() {
  const [openId, setOpenId] = useState<string | null>("hongrie-2026");
  const [decade, setDecade] = useState<Decade>("all");
  const { isPremium } = usePlan();

  const filtered = useMemo(() => {
    const f = DECADES.find((d) => d.id === decade)!;
    return [...pastRaces].filter((r) => f.match(r.year)).sort((a, b) => b.year - a.year);
  }, [decade]);

  return (
    <div className="pt-12">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="font-data text-xs uppercase tracking-[0.35em] text-[#ff9d0a]">02 — Courses passées</p>
          <h2 className="font-display mt-2 text-4xl font-bold uppercase sm:text-5xl">
            Les Grands Prix qui ont tout changé
          </h2>
        </div>
        <div className="flex flex-wrap border border-white/15">
          {DECADES.map((d) => (
            <button
              key={d.id}
              onClick={() => setDecade(d.id)}
              className={`px-4 py-2.5 font-display text-sm font-semibold uppercase tracking-wider transition-colors ${
                decade === d.id ? "bg-[#ff9d0a] text-[#0b0c0d]" : "text-white/55 hover:text-white"
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>
      </div>
      <p className="mt-3 max-w-2xl font-light text-white/50">
        De Monaco 1984 à Budapest 2026 : {filtered.length} courses décortiquées par le modèle —
        moments de bascule, debriefs chiffrés, et la vérité des données derrière les mythes.
      </p>

      <div className="mt-10 space-y-3">
        {filtered.map((r) => (
          <RaceRow
            key={r.id}
            race={r}
            open={openId === r.id}
            locked={!isPremium && !FREE_RACE_IDS.has(r.id)}
            onToggle={() => setOpenId(openId === r.id ? null : r.id)}
          />
        ))}
      </div>
    </div>
  );
}
