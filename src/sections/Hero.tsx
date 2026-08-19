import { useEffect, useState } from "react";
import { Radio, TrendingUp } from "lucide-react";

const TICKER = [
  "ANT 219 pts — leader après Budapest",
  "Norris renoue avec la victoire (+15,0 s)",
  "Prochain GP : Zandvoort — 23 août",
  "Hadjar blessé : Probablement remplacé par Lawson !",
  "Gasly : 1er podium en 2026 à Monaco !",
  "Verstappen invaincu à Zandvoort de 2021 à 2023",
  "Bakou : 100 % d'éditions avec safety car (2016-2021)",
];

function useCountdown() {
  const [left, setLeft] = useState("");
  useEffect(() => {
    const target = new Date("2026-08-23T15:00:00+02:00").getTime();
    const tick = () => {
      const d = target - Date.now();
      if (d <= 0) return setLeft("Course en cours");
      const days = Math.floor(d / 86400000);
      const h = Math.floor((d % 86400000) / 3600000);
      const m = Math.floor((d % 3600000) / 60000);
      const s = Math.floor((d % 60000) / 1000);
      setLeft(`${days}j ${String(h).padStart(2, "0")}h ${String(m).padStart(2, "0")}m ${String(s).padStart(2, "0")}s`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return left;
}

export default function Hero() {
  const countdown = useCountdown();
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => (t + 1) % TICKER.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="font-data text-xs uppercase tracking-[0.35em] text-[#ff9d0a]">
          Saison 2026 · Trêve estivale
        </p>
        <h1 className="font-display mt-4 max-w-4xl text-5xl font-bold uppercase leading-[0.95] tracking-tight sm:text-7xl">
          La F1 décryptée
          <br />
          par l'<span className="text-[#ff9d0a]">IA</span>, du passé
          <br />
          aux prochains drapeaux.
        </h1>
        <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-white/60">
          Profils de pilotes légendaires et actuels, debriefs algorithmiques des courses
          qui ont fait l'histoire, et modèles prédictifs pour chaque Grand Prix à venir.
        </p>

        {/* Next race countdown */}
        <div className="mt-10 inline-flex flex-wrap items-center gap-x-8 gap-y-4 border border-white/15 bg-white/[0.03] px-6 py-5">
          <div>
            <p className="font-data text-[10px] uppercase tracking-[0.3em] text-white/40">
              Prochaine course · R14
            </p>
            <p className="font-display mt-1 text-2xl font-bold uppercase">
              GP des Pays-Bas <span className="text-white/40">· Zandvoort</span>
            </p>
          </div>
          <div className="h-10 w-px bg-white/15" />
          <div>
            <p className="font-data text-[10px] uppercase tracking-[0.3em] text-white/40">
              Départ dans
            </p>
            <p className="font-data mt-1 text-2xl font-semibold tabular-nums text-[#ff9d0a]">
              {countdown}
            </p>
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div className="border-t border-white/10 bg-[#101112]">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6">
          <span className="flex shrink-0 items-center gap-2 font-data text-[10px] uppercase tracking-[0.3em] text-[#ff9d0a]">
            <Radio className="h-3.5 w-3.5 animate-pulse" /> Flux paddock
          </span>
          <div key={tick} className="flex items-center gap-2 overflow-hidden">
            <TrendingUp className="h-3.5 w-3.5 shrink-0 text-white/30" />
            <p className="truncate font-data text-sm text-white/70 [animation:tickin_.5s_ease-out]">
              {TICKER[tick]}
            </p>
          </div>
        </div>
      </div>
      <style>{`@keyframes tickin { from { opacity: 0; transform: translateY(8px);} to { opacity: 1; transform: none; } }`}</style>
    </section>
  );
}
