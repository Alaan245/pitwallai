import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Flag, Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("[login] submit started", { isSignUp, email });
    setLoading(true);
    setError(null);

    const result = isSignUp
      ? await supabase.auth.signUp({ email, password })
      : await supabase.auth.signInWithPassword({ email, password });

    console.log("[login] supabase result:", result);
    setLoading(false);

    if (result.error) {
      console.error("[login] auth error:", result.error);
      setError(result.error.message);
      return;
    }

    console.log("[login] navigating to /app");
    navigate("/app");
  };

  return (
    <div className="min-h-screen bg-[#0b0c0d] carbon-texture text-[#ece9e2]">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:px-6">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center bg-[#ff9d0a]">
              <Flag className="h-5 w-5 text-[#0b0c0d]" strokeWidth={2.5} />
            </div>
            <span className="font-display text-2xl font-bold uppercase tracking-wide">
              Pitwall<span className="text-[#ff9d0a]">.AI</span>
            </span>
          </Link>
        </div>
      </header>

      <main className="mx-auto flex max-w-sm flex-col justify-center px-4 py-16 sm:px-6">
        <p className="font-data text-xs uppercase tracking-[0.35em] text-[#ff9d0a]">
          {isSignUp ? "Créer un compte" : "Se connecter"}
        </p>
        <h1 className="font-display mt-3 text-4xl font-bold uppercase">
          Accès <span className="text-[#ff9d0a]">Pitwall</span>
        </h1>
        <p className="mt-2 text-sm font-light text-white/50">
          {isSignUp
            ? "Crée ton profil pour sauvegarder ton plan et tes préférences."
            : "Connecte-toi pour retrouver tes analyses et ton plan Premium."}
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label className="font-data text-[10px] uppercase tracking-[0.2em] text-white/40">
              Email
            </label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="pilot@pitwall.ai"
              className="mt-1.5 border-white/15 bg-white/[0.03] text-white placeholder:text-white/25 focus-visible:ring-[#ff9d0a]"
            />
          </div>
          <div>
            <label className="font-data text-[10px] uppercase tracking-[0.2em] text-white/40">
              Mot de passe
            </label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              className="mt-1.5 border-white/15 bg-white/[0.03] text-white placeholder:text-white/25 focus-visible:ring-[#ff9d0a]"
            />
          </div>

          {error && (
            <p className="text-sm font-light text-red-400">{error}</p>
          )}

          <Button
            type="submit"
            disabled={loading || !email || !password}
            className="w-full bg-[#ff9d0a] py-5 text-base font-bold uppercase tracking-wider text-[#0b0c0d] hover:opacity-85 disabled:opacity-50"
          >
            {loading ? (
              <Loader2 className="mx-auto h-5 w-5 animate-spin" />
            ) : isSignUp ? (
              "Créer mon profil"
            ) : (
              "Se connecter"
            )}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-white/50">
          {isSignUp ? "Déjà un compte ?" : "Pas encore de compte ?"}{" "}
          <button
            type="button"
            onClick={() => setIsSignUp((v) => !v)}
            className="font-semibold text-[#ff9d0a] hover:underline"
          >
            {isSignUp ? "Se connecter" : "Créer un compte"}
          </button>
        </p>
      </main>
    </div>
  );
}
