import { Link } from "react-router-dom";
import { Crown, Lock } from "lucide-react";

type Intensity = "default" | "strong";

const intensityStyles: Record<Intensity, string> = {
  default: "bg-[#0b0c0d]/90 backdrop-blur-[100px]",
  strong: "bg-[#0b0c0d]/95 backdrop-blur-[140px]",
};

// Voile posé sur les analyses réservées au plan Premium.
export function PaywallOverlay({
  label = "Analyse Premium",
  intensity = "default",
}: {
  label?: string;
  intensity?: Intensity;
}) {
  return (
    <div className={`absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 ${intensityStyles[intensity]}`}>
      <span className="flex h-12 w-12 items-center justify-center border border-[#ff9d0a]/50 bg-[#ff9d0a]/10">
        <Lock className="h-5 w-5 text-[#ff9d0a]" />
      </span>
      <p className="font-data text-[10px] uppercase tracking-[0.3em] text-[#ff9d0a]">{label}</p>
      <p className="max-w-xs text-center text-sm font-light text-white/55">
        Réservé aux membres Premium — 80 % des analyses du modèle sont ici.
      </p>
      <Link
        to="/tarifs"
        className="font-display mt-1 flex items-center gap-2 bg-[#ff9d0a] px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-[#0b0c0d] transition-opacity hover:opacity-85"
      >
        <Crown className="h-4 w-4" /> Débloquer
      </Link>
    </div>
  );
}

// Badge posé sur les cartes verrouillées dans les listes.
export function LockBadge() {
  return (
    <span className="flex items-center gap-1.5 border border-[#ff9d0a]/40 bg-[#0b0c0d] px-2 py-1 font-data text-[9px] uppercase tracking-[0.2em] text-[#ff9d0a]">
      <Lock className="h-3 w-3" /> Premium
    </span>
  );
}
