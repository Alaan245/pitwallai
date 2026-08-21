export interface Contender {
  driver: string;
  code: string;
  team: string;
  teamColor: string;
  probability: number; // %
  rationale: string;
}

export interface UpcomingRace {
  id: string;
  round: number;
  gp: string;
  circuit: string;
  date: string;
  days: string;
  sprint: boolean;
  laps: number;
  circuitLength: string;
  drsZones: number;
  traits: string[];
  weather: { temp: string; rainRisk: number; wind: string };
  confidence: "Élevée" | "Moyenne" | "Faible";
  contenders: Contender[];
  scenario: string;
  xFactor: string;
}

export const upcomingRaces: UpcomingRace[] = [
  {
    id: "zandvoort-2026",
    round: 14,
    gp: "Grand Prix des Pays-Bas",
    circuit: "Circuit Zandvoort",
    date: "23 août 2026",
    days: "21–23 août",
    sprint: true,
    laps: 72,
    circuitLength: "4,259 km",
    drsZones: 3,
    traits: [
      "Virages relevés (banking à 18°)",
      "Dépassements très difficiles",
      "Abrasif — dégradation élevée",
      "Effet foule orange pour Verstappen",
    ],
    weather: { temp: "21–26 °C", rainRisk: 45, wind: "Fort (mer du Nord)" },
    confidence: "Moyenne",
    contenders: [
      {
        driver: "Kimi Antonelli",
        code: "ANT",
        team: "Mercedes",
        teamColor: "#27f4d2",
        probability: 31,
        rationale:
          "Leader avec le meilleur package 2026. Sa gestion des pneus est l'atout n°1 sur ce tracé abrasif. Mais attention aux erreurs sur ce tracé, pouvant causé des dommages à sa monoplace et perdre du temps.",
      },
      {
        driver: "George Russell",
        code: "RUS",
        team: "Mercedes",
        teamColor: "#27f4d2",
        probability: 27,
        rationale:
          "Sa force en qualif est décisive sur un circuit où la position de piste est reine. Mais le format sprint réduit ses options stratégiques — le modèle préfère son coéquipier.",
      },
      {
        driver: "Max Verstappen",
        code: "VER",
        team: "Red Bull",
        teamColor: "#3671c6",
        probability: 22,
        rationale:
          "Invaincu ici de 2021 à 2023, +7 % de prime « domicile » calculée par le modèle. La RB22 manque de rythme, mais Zandvoort neutralise les déficits moteur — et la pluie possible le rapproche des Mercedes.",
      },
      {
        driver: "Lando Norris",
        code: "NOR",
        team: "McLaren",
        teamColor: "#ff8000",
        probability: 16,
        rationale:
          "Vainqueur ici en 2024 et 2025, et boosté par son succès à Budapest. S'il part devant, sa défense (78 % d'attaques repoussées) fait des ravages sur un circuit où dépasser est un calvaire.",
      },
      {
        driver: "Charles Leclerc",
        code: "LEC",
        team: "Ferrari",
        teamColor: "#e8002d",
        probability: 9,
        rationale:
          "Pénalisé par la dégradation arrière de la SF-26 sur ce type d'asphalte. Sa carte à jouer : une météo capricieuse qui ferait monter la variance — son terrain de jeu.",
      },
    ],
    scenario:
      "Le modèle trace deux scénarios dominants. Scénario sec (55 %) : pole et victoire contrôlée par une Mercedes, Antonelli devançant Russell via un undercut au 2e relais. Scénario pluie (45 %) : la hiérarchie se dissout, Verstappen passe favori en puissance avec un départ des 5 premières lignes suffisant — sa fenêtre d'attaque : les 10 premiers tours, seuls exploitables avant le train de DRS.",
    xFactor:
      "Le vent de mer du Nord : des rafales latérales de 40 km/h déstabilisent l'arrière dans le banking du virage 3. Historiquement, 3 safety cars en 5 éditions — le sprint ajoute une course au chaos.",
  },
  {
    id: "monza-2026",
    round: 15,
    gp: "Grand Prix d'Italie",
    circuit: "Autodromo Nazionale Monza",
    date: "6 septembre 2026",
    days: "4–6 sept.",
    sprint: false,
    laps: 53,
    circuitLength: "5,793 km",
    drsZones: 4,
    traits: [
      "Temple de la vitesse — 350 km/h",
      "Appuis minimum",
      "Freinages extrêmes",
      "Passion tifosi pour Ferrari",
    ],
    weather: { temp: "24–29 °C", rainRisk: 15, wind: "Faible" },
    confidence: "Élevée",
    contenders: [
      {
        driver: "Kimi Antonelli",
        code: "ANT",
        team: "Mercedes",
        teamColor: "#27f4d2",
        probability: 21,
        rationale:
          "Bien que l'italien part dernier à cause des pénalités moteur, le moteur Mercedes de la W17 est la référence en vitesse de pointe — et Monza, c'est 75 % de pleine charge. Grace à un rythme solide et une stratégie efficace, le modèle estime qu'il peut tout de même remporter cette course",
      },
      {
        driver: "Lewis Hamilton",
        code: "HAM",
        team: "Ferrari",
        teamColor: "#e8002d",
        probability: 18,
        rationale:
          "5 victoires à Monza, record partagé. Sa lecture des freinages (Variante della Roggia) et l'énergie des tifosi : le modèle lui donne sa meilleure chance de victoire Ferrari de la saison.",
      },
      {
        driver: "Charles Leclerc",
        code: "LEC",
        team: "Ferrari",
        teamColor: "#e8002d",
        probability: 16,
        rationale:
          "Vainqueur ici en 2019 et 2024 — il connaît la trajectoire pour gagner avec une voiture pas la plus rapide. En qualif, sa spéciale : le tour parfait sous pression tifosi.",
      },
      {
        driver: "Lando Norris",
        code: "NOR",
        team: "McLaren",
        teamColor: "#ff8000",
        probability: 13,
        rationale:
          "La MCL40 à moteur Mercedes souffre moins que Ferrari en ligne droite. Le modèle le voit capitaliser sur une bataille Mercedes-Ferrari, comme à Monza 2021 (P2 derrière Ricciardo).",
      },
      {
        driver: "George Russell",
        code: "RUS",
        team: "Mercedes",
        teamColor: "#27f4d2",
        probability: 11,
        rationale:
          "Même package qu'Antonelli mais une conversion course inférieure cette saison. Son scénario : pole samedi, puis résistance — Monza pardonne rarement les défenses passives.",
      },
    ],
    scenario:
      "Le scénario central (68 %) : Les Ferrari contrôlent depuis la première ligne, la question étant de savoir si Russell passe les Ferrari au départ, et si Antonelli est capable d'une remonté impressionnante — les départs sont LE moment clé de Monza, avec 420 m avant la première chicane. Hamilton est le meilleur starter du plateau 2026 : s'il mène au virage 1, les tifosi font le reste.",
    xFactor:
      "Le « slipstream warfare » : avec les monoplaces 2026 à aéro active, l'aspiration vaut 0,5 s. Un pilote 3e à 2 tours de l'arrivée n'est pas battu — il est exactement où il veut être.",
  },
  {
    id: "madrid-2026",
    round: 16,
    gp: "Grand Prix d'Espagne",
    circuit: "Madring, Madrid (nouveau)",
    date: "13 septembre 2026",
    days: "11–13 sept.",
    sprint: false,
    laps: 57,
    circuitLength: "5,474 km",
    drsZones: 2,
    traits: [
      "Circuit urbain inédit — zéro donnée",
      "Mélange ville / permanent",
      "Banking de 24° (virage 10)",
      "Sous réserve d'homologation FIA",
    ],
    weather: { temp: "26–32 °C", rainRisk: 10, wind: "Faible" },
    confidence: "Faible",
    contenders: [
      {
        driver: "Kimi Antonelli",
        code: "ANT",
        team: "Mercedes",
        teamColor: "#27f4d2",
        probability: 26,
        rationale:
          "Sur un circuit vierge, la machine compte moins et l'apprentissage du vendredi devient roi. Son adaptation record (3 tours pour trouver la limite en moyenne) joue pour lui.",
      },
      {
        driver: "Max Verstappen",
        code: "VER",
        team: "Red Bull",
        teamColor: "#3671c6",
        probability: 20,
        rationale:
          "Le meilleur « premier instinct » du plateau sur piste inconnue : le modèle lui donne le plus haut taux de performance au 1er tour d'essais libres. À égalité de données, son talent brut parle.",
      },
      {
        driver: "Lando Norris",
        code: "NOR",
        team: "McLaren",
        teamColor: "#ff8000",
        probability: 15,
        rationale:
          "McLaren excelle dans la corrélation simulateur-piste. Si le Madring ressemble à sa modélisation, Norris part avec un avantage de préparation mesurable.",
      },
      {
        driver: "George Russell",
        code: "RUS",
        team: "Mercedes",
        teamColor: "#27f4d2",
        probability: 12,
        rationale:
          "Pilote le plus méthodique du plateau dans la découverte de piste. Son plan de roulage structuré sur les nouveaux tracés (Las Vegas 2023 : P4) est une référence.",
      },
      {
        driver: "Lewis Hamilton",
        code: "HAM",
        team: "Ferrari",
        teamColor: "#e8002d",
        probability: 10,
        rationale:
          "382 départs = la plus grande bibliothèque de circuits de l'histoire. Sur l'inconnu, l'expérience compense la vitesse brute — le modèle lui donne un bonus « adaptabilité ».",
      },
    ],
    scenario:
      "Incertitude maximale : aucune donnée réelle sur le Madring, l'homologation FIA n'est même pas finalisée. Le modèle s'appuie sur les analogues (Djeddah, Las Vegas) : les circuits semi-urbains rapides récompensent la confiance au freinage et punissent l'hésitation. Attendez-vous à une hiérarchie brouillée en EL1, un poleman surprise, et un taux d'erreurs de 30 % supérieur à la moyenne.",
    xFactor:
      "Le banking de 24° du virage 10 : jamais vu sur un circuit urbain. Si la dégradation y est asymétrique (pneu avant-gauche), la stratégie à deux arrêts devient obligatoire et bouleverse toutes les projections.",
  },
  {
    id: "baku-2026",
    round: 17,
    gp: "Grand Prix d'Azerbaïdjan",
    circuit: "Bakou City Circuit",
    date: "26 septembre 2026",
    days: "24–26 sept.",
    sprint: false,
    laps: 51,
    circuitLength: "6,003 km",
    drsZones: 2,
    traits: [
      "La loterie du calendrier",
      "Ligne droite de 2,2 km",
      "Section château ultra-étroite",
      "100 % d'éditions avec safety car (2016-2021)",
    ],
    weather: { temp: "22–27 °C", rainRisk: 20, wind: "Fort et variable" },
    confidence: "Faible",
    contenders: [
      {
        driver: "Kimi Antonelli",
        code: "ANT",
        team: "Mercedes",
        teamColor: "#27f4d2",
        probability: 24,
        rationale:
          "Sur le papier, favori — mais Bakou est le pire circuit pour son profil : sa dispersion sur les tracés urbains à haute variance est de +40 %. Le modèle plafonne sa cote malgré la machine.",
      },
      {
        driver: "Charles Leclerc",
        code: "LEC",
        team: "Ferrari",
        teamColor: "#e8002d",
        probability: 19,
        rationale:
          "Quatre poles consécutives à Bakou (2021-2024) : c'est SON circuit en qualif. La victoire lui a toujours échappé par le chaos — le modèle lui donne enfin sa chance si la course reste propre 20 tours de plus.",
      },
      {
        driver: "Max Verstappen",
        code: "VER",
        team: "Red Bull",
        teamColor: "#3671c6",
        probability: 17,
        rationale:
          "Le pilote qui profite statistiquement le plus du chaos : son gain moyen sur courses à safety car multiple est de +2,4 positions. À Bakou, c'est la norme, pas l'exception.",
      },
      {
        driver: "Lando Norris",
        code: "NOR",
        team: "McLaren",
        teamColor: "#ff8000",
        probability: 13,
        rationale:
          "La McLaren glisse bien dans la longue ligne droite. Son risque : Bakou pardonne peu — sa seule victoire urbaine reste à prouver face à des spécialistes du genre.",
      },
      {
        driver: "Isack Hadjar",
        code: "HAD",
        team: "Red Bull",
        teamColor: "#3671c6",
        probability: 7,
        rationale:
          "Le pari du modèle : sa constance chirurgicale (0 accident en 2026) est LA qualité que Bakou récompense. Quand 40 % du plateau visite les murs, finir propre vaut un podium.",
      },
    ],
    scenario:
      "Bakou se joue d'abord en qualif (Leclerc territoire) puis se décide au chaos : le modèle projette 1,8 safety car en moyenne et une probabilité de 35 % qu'un pilote hors top 5 de la grille monte sur le podium. Le scénario Leclerc : pole, course propre jusqu'au tour 40, puis survie. Le scénario chaos : Verstappen ou Hadjar ramassent les morceaux.",
    xFactor:
      "Le vent variable entre les immeubles : des rafales qui changent entre deux tours dans la section château (7,6 m de large). C'est là que Stroll, Ricciardo et tant d'autres ont perdu leur course — sans jamais l'avoir vu venir.",
  },
];
