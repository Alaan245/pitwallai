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
    id: "monza-2026",
    round: 13,
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
        driver: "Lando Norris",
        code: "NOR",
        team: "McLaren",
        teamColor: "#ff8000",
        probability: 17,
        rationale:
          "La MCL40 à moteur Mercedes souffre moins que Ferrari en ligne droite. Le modèle le voit capitaliser sur une bataille Mercedes-Ferrari, comme à Monza 2021 (P2 derrière Ricciardo).",
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
        driver: "George Russell",
        code: "RUS",
        team: "Mercedes",
        teamColor: "#27f4d2",
        probability: 11,
        rationale:
          "Même package qu'Antonelli mais une conversion course inférieure cette saison. Le modèle estime que Zandvoort n'a pas été un week-end concluant, demandant même à son équipe de ne pas laisser passer Antonelli. Il ne pourra probablement pas jouer la victoire, voir le podium.",
      },
    ],
    scenario:
      "Le scénario central (68 %) : Les Ferrari contrôlent depuis la première ligne, la question étant de savoir si Russell passe les Ferrari au départ, et si Antonelli est capable d'une remonté impressionnante — les départs sont LE moment clé de Monza, avec 420 m avant la première chicane. Hamilton est le meilleur starter du plateau 2026 : s'il mène au virage 1, les tifosi font le reste.",
    xFactor:
      "Le « slipstream warfare » : avec les monoplaces 2026 à aéro active, l'aspiration vaut 0,5 s. Un pilote 3e à 2 tours de l'arrivée n'est pas battu — il est exactement où il veut être.",
  },
  {
    id: "madrid-2026",
    round: 14,
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
          "383 départs = la plus grande bibliothèque de circuits de l'histoire. Sur l'inconnu, l'expérience compense la vitesse brute — le modèle lui donne un bonus « adaptabilité », ayant déjà essayé le circuit lors d'une journée de promotion.",
      },
    ],
    scenario:
      "Incertitude maximale : aucune donnée réelle sur le Madring, l'homologation FIA n'est même pas finalisée. Le modèle s'appuie sur les analogues (Djeddah, Las Vegas) : les circuits semi-urbains rapides récompensent la confiance au freinage et punissent l'hésitation. Attendez-vous à une hiérarchie brouillée en EL1, un poleman surprise, et un taux d'erreurs de 30 % supérieur à la moyenne.",
    xFactor:
      "Le banking de 24° du virage 10 : jamais vu sur un circuit urbain. Si la dégradation y est asymétrique (pneu avant-gauche), la stratégie à deux arrêts devient obligatoire et bouleverse toutes les projections.",
  },
  {
    id: "baku-2026",
    round: 15,
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
  {
    id: "bahrain-2026",
    round: 16,
    gp: "Grand Prix de Bahreïn",
    circuit: "Circuit international de Sepang",
    date: "02 Octobre 2026",
    days: "02-04 oct.",
    sprint: false,
    laps: 56,
    circuitLength: "5,543 km",
    drsZones: 4,
    traits: [
      "Retour au calendrier après 2017",
      "Deux longues lignes droites",
      "Tracé très abrasif — dégradation élevée",
      "Pneus medium et hard à privilégier",
    ],
    weather: { temp: "22–27 °C", rainRisk: 35, wind: "Fort et variable" },
    confidence: "Faible",
    contenders: [
      {
        driver: "Kimi Antonelli",
        code: "ANT",
        team: "Mercedes",
        teamColor: "#27f4d2",
        probability: 34,
        rationale:
          "Nouveau circuit, mais reste favori sur le papier : la Mercedes W17 est la référence en vitesse de pointe et en gestion des gommes. Le modèle estime qu'il peut remporter cette course si la stratégie est optimale.",
      },
      {
        driver: "Charles Leclerc",
        code: "LEC",
        team: "Ferrari",
        teamColor: "#e8002d",
        probability: 21,
        rationale:
          "Leclerc s'adapte vite aux nouveaux tracés, mais Sepang n'est plus au calendrier depuis 2017 : aucune donnée fiable avec la génération actuelle. Le modèle le place haut grâce à sa gestion des pneus en chaleur, avec une marge d'erreur importante.",
      },
      {
        driver: "Max Verstappen",
        code: "VER",
        team: "Red Bull",
        teamColor: "#3671c6",
        probability: 19,
        rationale:
          "Verstappen n'a couru à Sepang qu'en junior et en 2017 avec une F1 très différente. Son instinct en course reste le meilleur du plateau, mais le modèle baisse sa probabilité face à l'inconnue du comportement de la RB26 sous 60 °C d'asphalte.",
      },
      {
        driver: "Lando Norris",
        code: "NOR",
        team: "McLaren",
        teamColor: "#ff8000",
        probability: 15,
        rationale:
          "Norris découvrirait virtuellement Sepang en F1. La McLaren a montré une bonne polyvalence en 2026, et les longues lignes droites malaises lui conviennent — à condition de maîtriser la dégradation tropicalisée des gommes.",
      },
      {
        driver: "Isack Hadjar",
        code: "HAD",
        team: "Red Bull",
        teamColor: "#3671c6",
        probability: 5,
        rationale:
          "Rookie en 2026 et jamais piloté à Sepang en catégorie reine. Le modèle voit un potentiel de surprise si la séance est chaotique, mais l'absence de référence rend toute projection très fragile.",
      },
    ],
    scenario:
      "Premier GP à Sepang depuis 2017 : le modèle manque de données fiables et projette une variance très élevée. La chaleur et l'humidité feront probablement le tri entre ceux qui gèrent les pneus et ceux qui subissent. 2 à 3 arrêts attendus, avec un risque de pluie orageuse qui pourrait tout changer.",
    xFactor:
      "Les orages tropicaux soudains : Sepang est célèbre pour ses averses imprévisibles en fin d'après-midi. Aucun pilote du plateau n'a géré ce circuit sous la pluie avec une F1 moderne — cela pourrait créer un énorme reset de grille à 15 tours de l'arrivée.",
  },
];
