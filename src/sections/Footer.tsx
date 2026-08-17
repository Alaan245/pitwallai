import { Flag } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="kerb-stripes h-2 w-full opacity-80" />
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-8 sm:px-6">
        <div className="flex items-center gap-3">
          <Flag className="h-4 w-4 text-[#ff9d0a]" />
          <span className="font-display text-lg font-bold uppercase">
            Pitwall<span className="text-[#ff9d0a]">.AI</span>
          </span>
          <span className="font-data text-[10px] uppercase tracking-[0.3em] text-white/30">
            V1 — démo
          </span>
        </div>
        <p className="max-w-xl font-data text-[11px] leading-relaxed text-white/30">
          Analyses générées par IA à partir de données publiques de Formule 1 (historique
          1950-2026). Projet non affilié à la FIA, Formula 1 ou aux écuries. Les prédictions
          sont illustratives et ne constituent pas un conseil de pari.
        </p>
      </div>
    </footer>
  );
}
