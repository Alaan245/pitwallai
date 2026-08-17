import { Link } from "react-router-dom";
import { ArrowLeft, Flag } from "lucide-react";

export default function MentionsLegales() {
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
          Informations légales
        </p>
        <h1 className="font-display mt-3 text-5xl font-bold uppercase leading-tight sm:text-6xl">
          Mentions légales
        </h1>

        <div className="mt-12 space-y-10">
          <section>
            <h2 className="font-display text-2xl font-bold uppercase text-[#ff9d0a]">
              Éditeur du site
            </h2>
            <p className="mt-3 font-light leading-relaxed text-white/60">
              [Nom complet / Raison sociale]<br />
              [Adresse du siège social]<br />
              [Numéro SIRET / SIREN]<br />
              [Email de contact]
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold uppercase text-[#ff9d0a]">
              Hébergement
            </h2>
            <p className="mt-3 font-light leading-relaxed text-white/60">
              [Nom de l'hébergeur]<br />
              [Adresse de l'hébergeur]<br />
              [Contact]
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold uppercase text-[#ff9d0a]">
              Propriété intellectuelle
            </h2>
            <p className="mt-3 font-light leading-relaxed text-white/60">
              L'ensemble des éléments constituant le site Pitwall.AI (textes, graphismes, logo,
              icônes, sons, logiciels, etc.) est la propriété exclusive de l'éditeur ou de ses
              partenaires. Toute reproduction, représentation, modification, publication,
              adaptation de tout ou partie des éléments du site est interdite sans l'autorisation
              écrite préalable.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold uppercase text-[#ff9d0a]">
              Limitation de responsabilité
            </h2>
            <p className="mt-3 font-light leading-relaxed text-white/60">
              [À compléter : préciser la nature des contenus générés par IA, le caractère
              illustratif des prédictions, et la non-affiliation avec la FIA, Formula 1 ou les
              écuries.]
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold uppercase text-[#ff9d0a]">
              Données personnelles
            </h2>
            <p className="mt-3 font-light leading-relaxed text-white/60">
              [À compléter : finalités de collecte, base légale, droits des utilisateurs,
              coordonnées du DPO si applicable, politique de conservation.]
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
