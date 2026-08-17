import { Link } from "react-router-dom";
import { ArrowLeft, Flag } from "lucide-react";

export default function CGU() {
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
            to="/"
            className="font-display flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white/55 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Retour
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p className="font-data text-xs uppercase tracking-[0.35em] text-[#ff9d0a]">
          Conditions d'utilisation
        </p>
        <h1 className="font-display mt-3 text-5xl font-bold uppercase leading-tight sm:text-6xl">
          CGU
        </h1>

        <div className="mt-12 space-y-10">
          <section>
            <h2 className="font-display text-2xl font-bold uppercase text-[#ff9d0a]">
              Objet
            </h2>
            <p className="mt-3 font-light leading-relaxed text-white/60">
              Les présentes conditions générales d'utilisation régissent l'accès et l'utilisation
              du site et des services proposés par Pitwall.AI. En accédant au site, l'utilisateur
              accepte sans réserve les présentes CGU.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold uppercase text-[#ff9d0a]">
              Accès au service
            </h2>
            <p className="mt-3 font-light leading-relaxed text-white/60">
              [À compléter : description des fonctionnalités gratuites et Premium, modalités de
              création de compte, suspension ou suppression de compte.]
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold uppercase text-[#ff9d0a]">
              Contenu généré par intelligence artificielle
            </h2>
            <p className="mt-3 font-light leading-relaxed text-white/60">
              Les analyses, profils, débriefs et prédictions disponibles sur Pitwall.AI sont
              produits à partir de modèles statistiques et d'outils d'intelligence artificielle.
              Ils sont fournis à titre informatif et illustratif. Ils ne constituent pas des
              pronostics de paris ni des conseils financiers.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold uppercase text-[#ff9d0a]">
              Propriété intellectuelle
            </h2>
            <p className="mt-3 font-light leading-relaxed text-white/60">
              [À compléter : conditions d'utilisation du contenu, interdictions de reproduction,
              licence accordée à l'utilisateur.]
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold uppercase text-[#ff9d0a]">
              Responsabilité
            </h2>
            <p className="mt-3 font-light leading-relaxed text-white/60">
              [À compléter : limites de responsabilité de l'éditeur, obligations de l'utilisateur,
              signalement de contenu illicite.]
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold uppercase text-[#ff9d0a]">
              Modification des CGU
            </h2>
            <p className="mt-3 font-light leading-relaxed text-white/60">
              [À compléter : procédure de modification, date de dernière mise à jour, notification
              aux utilisateurs.]
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
