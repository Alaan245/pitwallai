export interface RaceMoment {
  ref: string;
  text: string;
}

export interface PastRace {
  id: string;
  year: number;
  gp: string;
  circuit: string;
  winner: string;
  winnerTeam: string;
  conditions: "Sec" | "Pluie" | "Mixte";
  drama: number; // 0-100 indice de chaos
  podium: [string, string, string];
  summary: string;
  moments: RaceMoment[];
  aiDebrief: string[];
  keyStats: { label: string; value: string }[];
}

export const pastRaces: PastRace[] = [
  // ── 2026 ─────────────────────────────────────────────────────
  {
    id: "hongrie-2026",
    year: 2026,
    gp: "Grand Prix de Hongrie",
    circuit: "Hungaroring, Budapest",
    winner: "Lando Norris",
    winnerTeam: "McLaren",
    conditions: "Sec",
    drama: 72,
    podium: ["Lando Norris", "Max Verstappen", "Kimi Antonelli"],
    summary:
      "Le champion 2025 renoue enfin avec la victoire : pole arrachée pour 12 millièmes devant Hamilton (plus tard pénalisé - P5 sur la grille), course maîtrisée, 15 secondes d'avance. Piastri abandonne sur panne, les Ferrari échouent au pied du podium.",
    moments: [
      { ref: "Q3", text: "Norris signe la pole pour 0,012 s malgré une glissade dans le dernier secteur — le déclic mental de sa saison." },
      { ref: "T56", text: "Piastri abandonne (panne) : Virtual Safety Car. Norris, Hamilton et Leclerc chaussent des pneus frais gratuitement." },
      { ref: "T60", text: "Hamilton écope 5 s de pénalité pour excès de vitesse dans la pit lane — le podium Ferrari s'envole." },
      { ref: "Arrivée", text: "Norris +14,0 s sur Verstappen. Antonelli P3 conserve 50 pts d'avance au championnat." },
    ],
    aiDebrief: [
      "Cette course illustre la loi du « momentum retrouvé » : Norris n'avait pas gagné depuis son titre, et sa pole à 0,012 s montre que la performance était là — seul le déclic mental manquait. Le modèle relève que sa Q3 a été construite malgré « une grosse glissade dans le dernier secteur » : signe d'un pilote qui attaque à nouveau.",
      "Le tournant stratégique : l'abandon de Piastri au 56e tour (Virtual Safety Car). Norris, Hamilton et Leclerc passent aux stands gratuitement — mais Hamilton écope 5 secondes de pénalité pour excès de vitesse dans la pit lane. Sans cette pénalité, le modèle donne Ferrari un podium quasi certain.",
      "Conséquence championnat : Antonelli (3e) limite parfaitement les dégâts et conserve 50 points d'avance sur Hamilton. Verstappen, 2e sans jamais pouvoir attaquer, confirme que la RB22 manque de rythme pur — sa remontée tient à sa gestion, pas à la machine.",
    ],
    keyStats: [
      { label: "Marge de victoire", value: "+15,0 s" },
      { label: "Écart de pole", value: "0,012 s" },
      { label: "Moment clé", value: "Tour 56 — VSC" },
      { label: "Pénalité décisive", value: "HAM +5 s" },
    ],
  },

  {
    id: "spa-2026",
    year: 2026,
    gp: "Grand Prix de Belgique",
    circuit: "Spa-Francorchamps",
    winner: "Kimi Antonelli",
    winnerTeam: "Mercedes",
    conditions: "Sec",
    drama: 70,
    podium: ["Kimi Antonelli", "Charles Leclerc", "Max Verstappen"],
    summary:
      "Ecrasante pole avec 0,317 s d'avance, course contrôlée de bout en bout malgré une VSC forcant l'italien au pousser pour gagner : Antonelli signe sa 6e victoire de la saison et la plus aboutie — la course signature qui lui donne 52 points d'avance avant la trêve... presque.",
    moments: [
      { ref: "Q3", text: "Antonelli arrache la pole à Verstappen pour 0,317 s, bien que ce dernier avait été aidé par une forte aspiration de Hadjar." },
      { ref: "T1", text: "Antonelli garde la tête de la course, Derrière, virage 6, Russell doit abandonner suite à un contacte avec Hamilton. Russell perd 25 points sur cette action." },
      { ref: "T20", text: "Une VSC avantage les deux ferrari, notamlent Leclerc qui effectue son arrêt au stand et ressort devant Antonelli, rentré au stand quelque tours avant." },
      { ref: "T34", text: "Antonelli remonte sur Norris et Leclerc. Il les dépassent et franc" },
    ],
    aiDebrief: [
      "La course la plus complète d'Antonelli en 2026 selon le modèle : pole avec avec 0,317 s d'avance, deux transitions pneus gérées sans erreur, et zéro tour plus lent que son rythme cible de plus de 0,3 s. C'est sa première victoire « totale » — acquise sur tous les tableaux, pas sur un seul pic de performance.",
      "Le pari de rentrer au stand lors de la VSC pour Leclerc au tour 20 illustre la stratégie ferrari : contrairement à Melbourne, cette fois l'équipe à appliqué cette stratégie pour gagner du temps. Le modèle estime qu'a 74% Leclerc ressortait devant Antonelli en cas d'arrêt propre des mécaniciens.",
      "Le modèle souligne également la bonne performance de Bortoletto P8 avec sa Audi, profitant égaleemnt de VSC pour gagner du temps sur ses adversaires.",
    ],
    keyStats: [
      { label: "Victoire ANT", value: "n°6" },
      { label: "Erreur HAM", value: "+ 5 s" },
      { label: "Remonté HAD", value: "P21 → P6" },
      { label: "DNF RUS", value: "-25 Pts" },
    ],
  },
  {
    id: "silverstone-2026",
    year: 2026,
    gp: "Grand Prix de Grande-Bretagne",
    circuit: "Silverstone",
    winner: "Charles Leclerc",
    winnerTeam: "Ferrari",
    conditions: "Sec",
    drama: 88,
    podium: ["Charles Leclerc", "George Russell", "Lewis Hamilton"],
    summary:
      "Une fin de course rocambolesque : Safety Car à 4 tours de l'arrivée, fin de course sous Safety Car, Leclerc en pneus usés contre Russell en softs neufs. Le Monégasque passe la ligne et gagne pour la première fois à Silverstone.",
    moments: [
      { ref: "SQ3", text: "Hamilton décroche la pôle en Qualification Sprint, 0,011 s devant Antonelli." },
      { ref: "Sprint", text: "Antonelli passe Hamilton grace à sa supériorité moteur : il remporte la course sprint du samedi." },
      { ref: "T1", text: "Au départ, les deux ferrari débordent Antonelli, pourtant parti en pôle. Derrière, accident entre Sainz et Ocon." },
      { ref: "T41", text: "Antonelli, sur une stratégie différente, chasse Leclerc. Il sera stoppé et contraint d'abandonné suite à un aileron cassé, engendrant des dégâts importants." },
    ],
    aiDebrief: [
      "Lors du Sprint, antonelli s'empare de la tête, face à Hamilton incapable de défendre sa position en ligne droite. L'italient creuse son écart au championnat et prendre les 12 points de la victoire.",
      "Beaucoup d'incident notable durant la course, un accrochage dans le premier tour, l'aileron d'Antonelli qui cuasa de nombreux dégâts, le nouveau crash de Verstappen causé par son aileron macarena.",
      "La Q3 de Lindblad (P9, 18 ans) est le signal statistique du week-end : premier rookie en Q3 à Silverstone depuis 2019. Le modèle relève que sa progression suit exactement la courbe projetée (+0,4 position de résultat moyen par GP) — le duel Lawson-Lindblad chez Racing Bulls bascule.",
    ],
    keyStats: [
      { label: "Marge finale", value: "+0,214 s sous SC" },
      { label: "Proba LEC win", value: "42 %" },
      { label: "Crash VER", value: "Tour 48" },
      { label: "Q3 rookie", value: "Lindblad P9" },
    ],
  },
  {
    id: "autriche-2026",
    year: 2026,
    gp: "Grand Prix d'Autriche",
    circuit: "Red Bull Ring, Spielberg",
    winner: "George Russell",
    winnerTeam: "Mercedes",
    conditions: "Sec",
    drama: 55,
    podium: ["George Russell", "Max Verstappen", "Kimi Antonelli"],
    summary:
      "Verstappen crashé en qualif sur son circuit fétiche, Russell prend une pole quelque peu contreversé : la course devient une démonstration de contrôle. Russel renue avec la victoire depuis Melbourne, Verstappen décroche la P2 après une course à chasser Russell coute que coute.",
    moments: [
      { ref: "Q2", text: "Verstappen part en tête-à-queue au virage 9 et tape les protections : P5 sur la grille à domicile. Deuxième crash qualif de sa saison." },
      { ref: "Départ", text: "Russell (pole) conserve la tête devant Leclerc, Antonelli sort large à plusieurs reprises : La Mercedes du n°63 s'envole." },
      { ref: "T1-T25", text: "Verstappen remonte P5 → P2 avec le meilleur rythme de course du plateau — puis se heurte aux drapeaux bleus alors qu'il chasse Russell pour la victoire." },
      { ref: "Arrivée", text: "Russell seulement +1,6 s sur Verstappen. Kimi finit P3. Les deux ferrari, en difficulté sous la chaleur finissent P5 et P8." },
    ],
    aiDebrief: [
      "Russell a exécuté sa course signature : pole, départ propre, gestion du rythme sans jamais laisser l'undercut ouvert. Le modèle relève qu'il n'a pas produit un seul tour dans les 10 % les plus lents de sa course — son indice de contrôle en tête à été le meilleur du plateau.",
      "Le crash de Verstappen en Q2 s'inscrit dans le pattern 2026 identifié par le modèle : problème mécanique de l'aileron arrière Macarena. Ses deux accidents de la saison (Melbourne, Spielberg) sont survenus sur les circuits où la RB22 a montré de gros souci de fiabilité.",
      "Week-end mitigé dans le camp Red Bull : troisième victoire d'un moteur Mercedes à Spielberg depuis 2024, et premier week-end de la saison ou la Red Bull pouvait prétendre gagner la course. Vertsappen échoue seulement à 1,6 s de Russell.",
    ],
    keyStats: [
      { label: "RUS P1", value: "2ème win en 2026" },
      { label: "Crash VER", value: "Q3, virage 9" },
      { label: "Remontée VER", value: "P5 → P2" },
      { label: "Chute de LEC", value: "P2 → P8 " },
    ],
  },
  {
    id: "espagne-2026",
    year: 2026,
    gp: "Grand Prix d'Espagne",
    circuit: "Circuit de Barcelona-Catalunya",
    winner: "Lewis Hamilton",
    winnerTeam: "Ferrari",
    conditions: "Sec",
    drama: 69,
    podium: ["Lewis Hamilton", "George Russell", "Lando Norris"],
    summary:
      "Sur le circuit le plus révélateur de performance pure, Hamilton déroule : P2, stratégie parfaite, gestion des gommes chirurgicale et victoire. Podium McLaren suite aux abandons d'Antonelli et de Leclerc.",
    moments: [
      { ref: "Q3", text: "Russell signe sa 3ème pole de la saison pour 0,064 s devant Hamilton : la W17 domine les secteurs 2 et 3." },
      { ref: "Départ", text: "Excellent envol de Russell, Hamilton rste P2, Antonelli et Norris derrière lui : la hiérarchie du podium semble pas forcément être figée d'emblée." },
      { ref: "T41", text: "Une VSC causé par l'abandon d'Alonso permet Hamilton, en tête à 19 s de Russell, d'avoir un arrêt gratuit. Il ressort devant le britannique et peut mener sa Ferra vers sa première victoire avec les rouges." },
      { ref: "Arrivée", text: "Hamilton + 19,5 s devant Russell qui garde sa P2 graâce à l'abandon d'Antonneli sur casse mécanique. Norris P3 complète ce podium : triple podium britannique." },
    ],
    aiDebrief: [
      "Barcelone est le circuit-étalon du modèle : 70 % du rythme y est expliqué par la performance aéro pure. La victoire d'Hamilton — P2 + contrôle total après son arrêt — y vaut doublement : elle certifie que la Ferrari SF-26 reste la deuxième force du plateau, et que son pilote est intact malgré une aison passé difficile.",
      "Le dernier stint d'Hamiltons en pneu hard est la clé de voûte : la gestion pneus  et le rythme impresssionant du pilote a transformé sa course. Sans cela, le modèle donne Russell ou Antonelli vainqueur par bataille dans 54% des simulations, ou par undercut dans 68 % des simulations.",
      "Bortoletto P11 à la porte des points, alors que Hulkenberg doit abandonner suite à une panne lié à des gravillés dans la monoplace. Antonelli et Leclerc abandonne également en fin de course. Isack Hadjar continue sa progression chez Red Bull, terminant 6ème.",
    ],
    keyStats: [
      { label: "Pole RUS", value: "0,064 s" },
      { label: "Stint décisif", value: "HAM + 19,5 s" },
      { label: "Podium McLaren", value: "NOR P3" },
      { label: "DNF ANT-LEC", value: "Total = 8" },
    ],
  },
  {
    id: "monaco-2026",
    year: 2026,
    gp: "Grand Prix de Monaco",
    circuit: "Monte-Carlo",
    winner: "Kimi Antonelli",
    winnerTeam: "Mercedes",
    conditions: "Sec",
    drama: 63,
    podium: ["Kimi Antonelli", "Lewis Hamilton", "Pierre Gasly"],
    summary:
      "Pour sa deuxième saison, Antonelli gagne à Monaco : pole impériale, course de patience dans le trafic, et zéro erreur sous la pression des arrêts obligatoires. Hamilton P2, Gasly P3 — son premier de podium de l'année avec une Alpine.",
    moments: [
      { ref: "Q3", text: "Pole de Antonelli sur le circuit de Monte-Carlo : à seuelemment de 0,043 s de Max Verstappen, très rapide en qualification." },
      { ref: "T1", text: "Une panne moteur gache tout espoir de Verstappen d'une possible victoire, il abandonne. Hamilton hérite de la P2 suivie par son coéquipier P3." },
      { ref: "T60", text: "La course bascule au tour 60 lorsque Stroll se crash dans le dernier virage, due à une condition de piste qui s'est dégradé au fil de la course. Une safety car permet aux pilote sde s'arrêter au stand. Mais à la relance, Charles Leclerc crash égaleemnt dans le dernier virage, terminant sa course." },
      { ref: "Arrivée", text: "Antonelli, impérial franchi la ligne devant Hamilton. Gasly P3 qui sera par la suite pénalise, mais qui réhéritera de son podium quelque semaine plus tard." },
    ],
    aiDebrief: [
      "La 5ème victoire d'affilé confirme le profil d'Antonelli dans son expression maximale : quand la pole et la position de piste priment sur tout, il est quasi imbattable. Le modèle mesure son tour de Q3 comme le meilleur tour unique de la saison — 2 dixièmes trouvés dans le seul secteur 3.",
      "La P3 de Gasly valide la force détectée par le modèle : Après être parti 9ème sur la grille, il a bénéficier d'incident de course pour s'octroyer la 3ème place du podium.",
      "Le discret Fernando Alonso qui hérite de la P10 après les pénalités, marquant le premier d'Aston Martin cette saison, bien qu'étant bien en dessous des espérances.",
    ],
    keyStats: [
      { label: "Top 2 Qualif", value: "Kimi P1 - Max P2" },
      { label: "HAD hors podium", value: "Perd son podium face à Gasly" },
      { label: "Racings bulls dans les points", value: "LAW P6 - LIN P7" },
      { label: "DNF", value: "7" },
    ],
  },
  {
    id: "canada-2026",
    year: 2026,
    gp: "Grand Prix du Canada",
    circuit: "Circuit Gilles Villeneuve, Montréal",
    winner: "Kimi Antonelli",
    winnerTeam: "Mercedes",
    conditions: "Mixte",
    drama: 78,
    podium: ["Kimi Antonelli", "Lewis Hamilton", "Max Verstappen"],
    summary:
      "Week-end fou : Antonelli gagne la course principale après une bataille sublime avec son coéquipier, Bearman finit dans les points — et Lawson résiste à Gasly pour une P7 bine mérité.",
    moments: [
      { ref: "Départ", text: "Sous une piste humide, Norris prend un départ canon pour prendre la tête au premier virage, derrière Antonelli." },
      { ref: "Grille", text: "Embrayage bloqué pour Lindblad sur la grille : départ des stands, dimanche gâché avant le premier tour." },
      { ref: "T30-T45", text: "Antonelli et Russel s'échangent la tête virtuelle via une bataille féroce en piste : Malheurseuement Russel devra abandonner pour panne mécanique." },
      { ref: "T60-T70", text: "Lawson, P7, résiste 10 tours à Gasly dans les derniers virages : meilleur résultat de sa saison, arraché au corps-à-corps." },
    ],
    aiDebrief: [
      "La victoire d'Antonelli s'est jouée sur une bataille féroce et une seconde partie de course brillament maitrisé, qui franchi la ligne avec +10,7 s d'écart sur Lewis Hamilton P2.",
      "Une bataille interresante pour la P2 a également animé une bonne partie de la course entre Hamilton et Verstappen. LE britanniue s'imposant dans ce duel.",
      "Alpine qui continue sur leurs bonne lancé avec un rythme de course supérieur aux Racing Bulls et aux Williams, Gasly P8 et Colapinto P6.",
    ],
    keyStats: [
      { label: "Qalification", value: "0,068 entre P1 et P2" },
      { label: "Stratégie Ferrari", value: "HAM P5 -> P2" },
      { label: "DNF", value: "1er DNF pour RUS" },
      { label: "Victoire ANT saison", value: "n°4" },
    ],
  },
  {
    id: "miami-2026",
    year: 2026,
    gp: "Grand Prix de Miami",
    circuit: "Miami International Autodrome",
    winner: "Kimi Antonelli",
    winnerTeam: "Mercedes",
    conditions: "Sec",
    drama: 60,
    podium: ["Kimi Antonelli", "Lando Norris", "Oscar Piastri"],
    summary:
      "Sous la chaleur de Floride, Antonelli joue la gestion thermique mieux que personne : départ correct depuis la première ligne, stint d'ouverture allongé, victoire sans trembler. Sa troisième de la saison — et continue son écarte au championnat.",
    moments: [
      { ref: "Départ", text: "Antonelli (P1) se fait déborder par Verstappen et Leclerc au freinage du virage 1. Leclerc passe en tête, alors que derrière, Verstappen spin, provoquant un chaos derrière. Antonelli s'en sort indemne." },
      { ref: "T15-T30", text: "Gestion thermique de référence : Antonelli maintient ses gommes dans la fenêtre malgré 34°C d'asphalte, Norris passe Piastri qui surchauffe de l'arrière." },
      { ref: "T38", text: "Après les arrets, Piastri fond sur Russell dans le dernier relais : le duel pour P3 s'anime, Piastri sera classé à plus de 10 s de Russell. Hamilton, P6 discret, prend 8 points." },
      { ref: "Arrivée", text: "Antonelli +3,2 s sur Norris. Piastri P3. Solide P7 pour Colapinto. les deux Williams dans les points." },
    ],
    aiDebrief: [
      "Antonelli continue sur sa bonne lancé en singant sa 3ème victoire consécutive de sa carrière. Une course parfaitement géré, bien qu'animé au début, lui permet de creurser son écart au championnat.",
      "Le terrible accident entre Lawson et Gasly au tour 1 a été le seul incident de la course. Il montre néanmoins que ces nouvelles monoplaces montre beaucoup de problèmes de fiabilité, Lawson envoyant Gasly en l'air.",
      "Très bon résultat des deux McLaren, Norris ayant déjà ganger la course Sprint la veille. Les deux pilotes confirme la bonne forme en prenant les points de la P2 et P3.",
    ],
    keyStats: [
      { label: "Win NOR en Sprint", value: "Miami" },
      { label: "DNF", value: "4" },
      { label: "2 Williams dans le TOP10", value: "P9 et P10" },
      { label: "Alpine prend des points", value: "COL P7" },
    ],
  },
  {
    id: "suzuka-2026",
    year: 2026,
    gp: "Grand Prix du Japon",
    circuit: "Suzuka",
    winner: "Kimi Antonelli",
    winnerTeam: "Mercedes",
    conditions: "Sec",
    drama: 55,
    podium: ["Kimi Antonelli", "Oscar Piastri", "Charles Leclerc"],
    summary:
      "Sur le circuit des pilotes, Antonelli impressionne : 2nd victoire devant un Piasrti qui place sa McLaren sur le podium à Suzuka, et un Leclerc constant durant toute la course, bien supérieur à son coéquipier.",
    moments: [
      { ref: "Q3", text: "Antonelli en pole, Russell P2 à 0,298 s : le public japonais rugit." },
      { ref: "Départ", text: "Antonelli perd la tête, doublé par Piastri qui passe de P3 à P1 avant le 1er virage grace à un exceptionnel départ." },
      { ref: "T28", text: "Hamilton, P7, en manque de ryhtme ce week-end, ne peut pas viser le podium." },
      { ref: "Arrivée", text: "Antonelli +13,7 s sur Piasrti, qui signe son meilleur résultat de la saison." },
    ],
    aiDebrief: [
      "Suzuka est le test ultime de l'indice « pilote pur » du modèle : le premier secteur y neutralise 80 % des avantages moteur. Antonelli y a signé le meilleur secteur 1 du week-end — la preuve que sa domination 2026 n'est pas qu'une histoire de moteur Mercedes.",
      "Le podium de Piastri est sa performance brute de la saison : la McLaren, 4e force du plateau au Japon, termine P2. Son avantage dans les virages rapides (+0,3 s sur les Ferrari dans le secteur 1) a littéralement compensé son déficit en ligne droite. Le meilleur tour au dernier passage est une signature, pas une statistique.",
      "Le tragique accident d'Oliver Bearman (P15) au tour 22 a été le seul incident de la course. En suivant Colapinto, il a dérivé sur la gauche suite au défirenciel de vitesse avant le virage 13. Cette accident souligne la dangerosité de cette nouvelle règlementation.",
    ],
    keyStats: [
      { label: "Marge finale", value: "+13,7 s" },
      { label: "PIA : course", value: "P2 avec la 4e voiture" },
      { label: "Accident BER", value: "0 points" },
      { label: "Points importants pour Alpine", value: "Gasly P7" },
    ],
  },
  {
    id: "chine-2026",
    year: 2026,
    gp: "Grand Prix de Chine",
    circuit: "Shanghai International Circuit",
    winner: "Kimi Antonelli",
    winnerTeam: "Mercedes",
    conditions: "Sec",
    drama: 62,
    podium: ["Kimi Antonelli", "George Russell", "Lewis Hamilton"],
    summary:
      "La première victoire en carrière d'Antonelli : à 19 ans, après la leçon de Melbourne, il bat son coéquipier Russell en piste et en stratégie, et lance sa saison. Le paddock comprend ce jour-là que la succession est déjà là.",
    moments: [
      { ref: "Q3", text: "Russell en pole, Antonelli P2 à 0,07 s : première ligne Mercedes, annoncée favorite." },
      { ref: "Départ", text: "Antonelli prend l'intérieur au virage 1 et l'avantage sur son coéquipier : le dépassement qui change une carrière." },
      { ref: "T20-T30", text: "Russell attaque par l'undercut, Antonelli répond avec 2 tours lancés de référence avant son arrêt : +1,8 s conservés." },
      { ref: "Arrivée", text: "Antonelli +2,9 s sur Russell, Hamilton P3. La première d'une série : le modèle en projetait 5 autres avant la trêve — elles se sont toutes réalisées." },
    ],
    aiDebrief: [
      "Statistiquement, c'est le basculement de la saison : avant Shanghai, Antonelli était « le rookie prometteur de Mercedes » ; après, il est réel candidat au championnat — position qu'il ne quittera plus. Le modèle a relevé ce jour-là sa gestion de la pression d'un premier duel interne gagnant : zéro erreur dans les 10 tours post-undercut.",
      "Le dépassement du virage 1 mérite l'analyse : Russell avait couvert l'intérieur de façon conventionnelle, Antonelli a freiné 12 m plus tard que sa propre référence du vendredi. C'est exactement le geste que le modèle associe aux futurs champions — la capacité à trouver la marge au moment où elle compte.",
      "Hamilton P3 sauve un week-end Ferrari terne : Il réalise son tout premier podium pour la Scéderia. Toutefois, la SF-26, déjà pénalisée par sa dégradation arrière, ne pouvait viser que le podium. Le modèle note que dès la 2e manche, le pattern de la saison est lisible : Mercedes devant, Ferrari limitée par ses pneus, Red Bull par sa machine.",
    ],
    keyStats: [
      { label: "1re victoire ANT", value: "19 ans, Shanghai" },
      { label: "Dépassement clé", value: "V1, +12 m au freinage" },
      { label: "Réponse undercut", value: "+1,8 s en 2 tours" },
      { label: "1re ligne", value: "Mercedes 1-2" },
    ],
  },
  {
    id: "australie-2026",
    year: 2026,
    gp: "Grand Prix d'Australie",
    circuit: "Albert Park, Melbourne",
    winner: "George Russell",
    winnerTeam: "Mercedes",
    conditions: "Sec",
    drama: 66,
    podium: ["George Russell", "Kimi Antonelli", "Charles Leclerc"],
    summary:
      "L'ère nouvelle s'ouvre à Melbourne : première course du règlement 2026, première victoire de la W17 avec Russell, et un double choc — le crash de Verstappen en qualif et la Q3 sensation du français Hadjar, 8 dixièmes des Mercedes.",
    moments: [
      { ref: "Q1", text: "Verstappen perd l'arrière au virage 11 et percute les protections : P18 sur la grille. L'ère 2026 commence par un tremblement de terre." },
      { ref: "Q3", text: "Hadjar place sa Red Bull en Q3 dès sa première course pour l'équipe mère, à 8 dixièmes des Mercedes : la surprise de l'ouverture." },
      { ref: "Départ", text: "Russell (pole) mène devant Antonelli : doublé Mercedes virtuel dès le premier freinage. Verstappen remonte P18 → P9 au tour 1." },
      { ref: "Arrivée", text: "Russell +4,7 s sur Antonelli, Leclerc P3 lance sa saison Ferrari par un podium. Verstappen P5 : la remontée qui sauve son week-end." },
    ],
    aiDebrief: [
      "Le modèle retient d'abord le hiérarchie neuve : la Mercedes W17 et son moteur M17 dominent l'ouverture avec 0,6 s/tour d'avance en rythme de course — un gap de niveau 2014. Russell a converti proprement, mais la donnée marquante est la P2 d'Antonelli : à 19 ans, il a signé le meilleur tour de course, pas son coéquipier.",
      "Le crash de Verstappen en Q1 est le premier signal du pattern qui définira sa saison : surpilotage compensatoire. Sa remontée P18 → P5 (dont P18 → P9 au premier tour) est la meilleure performance brute du week-end selon le modèle — 0,9 s/tour au-dessus de tout le plateau en air libre.",
      "La Q3 d'Hadjar dès sa première course pour l'équipe mère (à 8 dixièmes des Mercedes) est l'anomalie statistique du week-end : probabilité pré-saison estimée à 6 %. Le modèle l'a immédiatement signalé comme « confirmation de promotion » — trois podiums avant la trêve ont transformé le signal en certitude.",
    ],
    keyStats: [
      { label: "Avance W17", value: "0,6 s/tour" },
      { label: "Crash VER", value: "Q1, virage 11" },
      { label: "Remontée VER", value: "P18 → P5" },
      { label: "Surprise", value: "Q3 Hadjar, 1re course Red Bull" },
    ],
  },

  // ── 2024 ─────────────────────────────────────────────────────
  {
    id: "bresil-2024",
    year: 2024,
    gp: "Grand Prix de São Paulo",
    circuit: "Interlagos, São Paulo",
    winner: "Max Verstappen",
    winnerTeam: "Red Bull",
    conditions: "Pluie",
    drama: 96,
    podium: ["Max Verstappen", "Esteban Ocon", "Pierre Gasly"],
    summary:
      "17e sur la grille après une pénalité moteur, Verstappen remonte tout le plateau sous le déluge, survit au drapeau rouge et s'impose avec 19,5 secondes d'avance. Double podium Alpine, Norris 6e : le titre 2024 est scellé ce jour-là.",
    moments: [
      { ref: "Grille", text: "Verstappen P17 (pénalité moteur). Norris en pole : le scénario rêvé pour relancer le championnat." },
      { ref: "T1-T9", text: "Verstappen gagne 11 positions en 9 tours dans le spray — le modèle mesure +0,9 s/tour sur le plateau." },
      { ref: "T30", text: "Drapeau rouge (crash Colapinto). Ocon, Verstappen et Gasly, non arrêtés, héritent d'un changement de pneus gratuit." },
      { ref: "Restart", text: "Verstappen dépasse Ocon au freinage du virage 1 et s'envole : +19,5 s à l'arrivée." },
    ],
    aiDebrief: [
      "La performance de référence absolue de l'indice pluie moderne : de P17 à P1 avec un rythme supérieur de près d'une seconde au reste du champ dans les pires conditions de l'année. Le modèle compare : c'est le Donington 1993 de Verstappen.",
      "La bascule du championnat se lit dans le contraste : même piste, même pluie, Norris termine 6e après avoir mené. L'écart n'était pas la machine (McLaren meilleure au sec toute l'année) — c'était la lecture de la pluie. Le modèle y voit le moment où le titre 2024 a été « mérité » autant que gagné.",
      "Le double podium Alpine (Ocon P2, Gasly P3) est le plus improbable depuis 2013 : l'équipe était 9e du championnat constructeurs. Sans drapeau rouge, le modèle estime leur probabilité de double podium à moins de 0,5 % — le chaos récompense qui survit proprement.",
    ],
    keyStats: [
      { label: "Remontée", value: "P17 → P1" },
      { label: "Marge de victoire", value: "+19,5 s" },
      { label: "Positions gagnées T1-T9", value: "11" },
      { label: "Norris", value: "Pole → P6" },
    ],
  },
  {
    id: "silverstone-2024",
    year: 2024,
    gp: "Grand Prix de Grande-Bretagne",
    circuit: "Silverstone",
    winner: "Lewis Hamilton",
    winnerTeam: "Mercedes",
    conditions: "Mixte",
    drama: 84,
    podium: ["Lewis Hamilton", "Max Verstappen", "Lando Norris"],
    summary:
      "945 jours sans victoire. Puis à domicile, sous la pluie intermittente, Hamilton résiste à Verstappen et signe sa 104e victoire — la 9e à Silverstone, un record absolu sur un même circuit. Les larmes à la radio ont fait le tour du monde.",
    moments: [
      { ref: "Départ", text: "Russell (pole) mène devant Hamilton : doublé Mercedes à domicile avant l'arrivée de la pluie." },
      { ref: "T15-T20", text: "La pluie redistribue : Norris et Verstappen reviennent, Russell abandonne (mécanique)." },
      { ref: "T40", text: "Arrêts slicks synchronisés. Le sur-rythme de McLaren avorte : Norris repart derrière Verstappen et Hamilton." },
      { ref: "T52", text: "Hamilton tient +1,4 s sur Verstappen au drapeau : 104e victoire, 9e à Silverstone (record)." },
    ],
    aiDebrief: [
      "945 jours entre deux victoires : la plus longue disette de la carrière de Hamilton, brisée exactement là où sa légende pluie a commencé (2008). Le modèle note la symétrie statistique : ses 2 victoires record à Silverstone se partagent 16 ans, 2 équipes et 2 règlements différents.",
      "La course s'est jouée au timing des arrêts slicks : McLaren arrête Norris un tour trop tard et le fait repartir derrière — une erreur de fenêtre de 40 secondes qui a coûté la victoire à domicile au favori du public. Le modèle classe ce call dans les 5 erreurs stratégiques majeures de la saison 2024.",
      "Le 9e succès sur un même circuit dépasse le record de Schumacher à Magny-Cours (8). Métrique cachée : Hamilton détient désormais les records de victoires sur un circuit ET de podiums sur un circuit — sa longévité à Silverstone (2007-2024) est sans équivalent dans l'histoire du sport.",
    ],
    keyStats: [
      { label: "Disette brisée", value: "945 jours" },
      { label: "Victoires à Silverstone", value: "9 (record)" },
      { label: "Marge finale", value: "+1,4 s" },
      { label: "Erreur McLaren", value: "1 tour trop tard" },
    ],
  },

  // ── 2021 ─────────────────────────────────────────────────────
  {
    id: "abudhabi-2021",
    year: 2021,
    gp: "Grand Prix d'Abu Dhabi",
    circuit: "Yas Marina",
    winner: "Max Verstappen",
    winnerTeam: "Red Bull",
    conditions: "Sec",
    drama: 100,
    podium: ["Max Verstappen", "Lewis Hamilton", "Carlos Sainz"],
    summary:
      "À égalité de points avant la finale. Hamilton domine 52 tours. Puis Latifi accroche le mur, la safety car entre en piste, la direction de course ne laisse se dédoubler que les 5 voitures entre les deux rivaux — et Verstappen, en pneus frais, dépasse Hamilton dans le dernier tour. Champion du monde.",
    moments: [
      { ref: "Départ", text: "Hamilton brûle la politesse à Verstappen (pole) et s'envole : +12 s au 20e tour. Course pliée ?" },
      { ref: "T53", text: "Latifi dans le mur après un duel avec Schumacher : safety car. Verstappen chausse des softs neufs, Hamilton reste en piste en durs usés." },
      { ref: "T57", text: "La direction de course autorise uniquement les 5 voitures intercalées à se dédoubler — restart à 1 tour de la fin." },
      { ref: "T58", text: "Dernier tour : Verstappen plonge au virage 5, résiste au contre au virage 9. Champion du monde au dernier tour possible." },
    ],
    aiDebrief: [
      "Le modèle de probabilités en temps réel montre le basculement le plus violent jamais mesuré : Hamilton à 97 % de chances de titre au tour 52, Verstappen champion 6 tours plus tard. Aucune autre finale de l'histoire n'a concentré autant de variance sur une seule décision de procédure.",
      "L'analyse froide distingue deux vérités : la gestion de la safety car (dédoubler seulement 5 voitures) était hors procédure standard — la FIA l'a reconnu — ET Hamilton a perdu aussi par la stratégie Mercedes : rester en piste sur des durs de 40 tours contre des softs neufs était perdu d'avance (espérance de défense < 10 %).",
      "Conséquence historique : cette course a changé la gouvernance de la F1 (Masi remplacé, procédures réécrites, retour du dédoublement systématique). Le modèle la classe n°1 des courses les plus influentes de l'histoire — pas pour le spectacle, mais pour ce qu'elle a transformé institutionnellement.",
    ],
    keyStats: [
      { label: "Proba titre HAM (T52)", value: "97 %" },
      { label: "Voitures dédoublées", value: "5 sur 8" },
      { label: "Pneus au restart", value: "Softs neufs vs durs 40 tours" },
      { label: "Dépassement du titre", value: "Dernier tour, V5" },
    ],
  },
  {
    id: "silverstone-2021",
    year: 2021,
    gp: "Grand Prix de Grande-Bretagne",
    circuit: "Silverstone",
    winner: "Lewis Hamilton",
    winnerTeam: "Mercedes",
    conditions: "Sec",
    drama: 92,
    podium: ["Lewis Hamilton", "Charles Leclerc", "Valtteri Bottas"],
    summary:
      "Premier tour, Copse, 290 km/h : Hamilton touche Verstappen, qui termine dans les protections à 51 G. Pénalité de 10 secondes pour le Britannique... qui remonte quand même et double Leclerc à 2 tours de l'arrivée. La rivalité du siècle bascule dans l'affrontement direct.",
    moments: [
      { ref: "T1", text: "Le sprint du samedi avait donné la pole à Verstappen. Hamilton attaque partout au premier tour." },
      { ref: "Copse", text: "Contact à 290 km/h : Verstappen percute les protections à 51 G. Hamilton écope 10 s de pénalité." },
      { ref: "T28", text: "Hamilton purge sa pénalité et repart 4e : chasse de 25 tours sur Leclerc, impeccable en tête." },
      { ref: "T50", text: "Leclerc déborde... Hamilton le dépasse à Copse — le même virage — à 2 tours de la fin." },
    ],
    aiDebrief: [
      "51 G : le crash le plus violent mesuré de l'ère hybride, et le point de non-retour de la rivalité Hamilton-Verstappen. Le modèle d'attribution de responsabilité (ligne, vitesse, historique des duels) donne un partage 65/35 — proche du verdict des commissaires.",
      "La suite est sous-analysée : gagner avec 10 secondes de pénalité à Silverstone, où les marges sont de l'ordre du dixième, exigeait un rythme de +0,4 s/tour sur tout le plateau après l'arrêt. Hamilton l'a produit — sa meilleure deuxième moitié de course de la saison.",
      "Le modèle relit l'incident comme un calcul rationnel des deux camps : Verstappen menait de 33 points et pouvait se permettre le risque ; Hamilton, dos au mur à domicile, ne pouvait plus céder un duel. La collision était statistiquement programmée — Monza, 8 semaines plus tard, l'a confirmé.",
    ],
    keyStats: [
      { label: "Décélération", value: "51 G" },
      { label: "Pénalité HAM", value: "+10 s" },
      { label: "Rythme chasse", value: "+0,4 s/tour" },
      { label: "Dépassement gagnant", value: "T50, Copse" },
    ],
  },

  // ── 2020 ─────────────────────────────────────────────────────
  {
    id: "sakhir-2020",
    year: 2020,
    gp: "Grand Prix de Sakhir",
    circuit: "Bahrain International Circuit (ovale)",
    winner: "Sergio Pérez",
    winnerTeam: "Racing Point",
    conditions: "Sec",
    drama: 94,
    podium: ["Sergio Pérez", "Esteban Ocon", "Lance Stroll"],
    summary:
      "Dernier au premier tour après un contact, Pérez remonte tout le plateau et gagne à son 190e départ — record d'attente pour une première victoire. Pendant ce temps, Russell remplaçant Hamilton domine... jusqu'à une erreur de stands Mercedes puis une crevaison. Le scénario le plus cruel de la décennie.",
    moments: [
      { ref: "T1", text: "Contact Leclerc-Pérez-Verstappen : Leclerc et Verstappen out, Pérez repart bon dernier." },
      { ref: "T1-T63", text: "Russell (Mercedes, remplaçant Hamilton COVID+) mène sa première course pour l'écurie, autoritaire." },
      { ref: "T63", text: "Safety car : Mercedes monte les pneus de Bottas sur la voiture de Russell. Erreur monumentale, il repart 5e." },
      { ref: "T78", text: "Crevaison pour Russell alors qu'il revenait sur Pérez. Le Mexicain gagne, en larmes : 190e départ." },
    ],
    aiDebrief: [
      "Le modèle d'espérance de victoire donne la trajectoire la plus improbable de la base moderne : Pérez à moins de 1 % après le premier tour, Russell à 92 % avant la safety car du tour 63. La victoire a changé de propriétaire deux fois en 15 tours sans qu'un dépassement en piste soit impliqué.",
      "L'erreur des stands Mercedes (pneus de Bottas montés sur la W11 de Russell) est le cas d'école de défaillance opérationnelle sous pression : une équipe 7 fois championne du monde, déstabilisée par la gestion de deux voitures dans la même fenêtre. Probabilité estimée de l'enchaînement erreur + crevaison : ~0,1 %.",
      "Conséquence carrière majeure : cette victoire a sauvé la carrière de Pérez (sans baquet pour 2021 à ce moment-là — Red Bull le signe 6 semaines plus tard) et, ironie, a convaincu Mercedes que Russell était prêt pour Hamilton... qu'il remplacera en 2025. Une course, deux destins.",
    ],
    keyStats: [
      { label: "Attente 1re victoire", value: "190 départs" },
      { label: "Départ → arrivée", value: "P20 → P1" },
      { label: "Erreur Mercedes", value: "Pneus intervertis" },
      { label: "Effet domino", value: "Pérez → Red Bull" },
    ],
  },
  {
    id: "turquie-2020",
    year: 2020,
    gp: "Grand Prix de Turquie",
    circuit: "Istanbul Park",
    winner: "Lewis Hamilton",
    winnerTeam: "Mercedes",
    conditions: "Pluie",
    drama: 82,
    podium: ["Lewis Hamilton", "Sergio Pérez", "Sebastian Vettel"],
    summary:
      "Sur un asphalte resurfaçé devenu patinoire sous la pluie, Hamilton part 6e, passe tout le monde et gagne avec 31 secondes d'avance pour égaler les 7 titres de Schumacher. La masterclass pluie ultime de l'ère hybride — et le dernier podium de Vettel pour Ferrari.",
    moments: [
      { ref: "Q3", text: "Stroll en pole surprise sous le déluge. Hamilton, en difficulté, ne part que 6e." },
      { ref: "T1-T10", text: "Hamilton remonte méthodiquement pendant que les leaders patinent : la piste « n'a jamais été aussi mauvaise »." },
      { ref: "T37", text: "Hamilton prend la tête à Stroll et ne la rend plus : ses intermédiaires usés jusqu'à la corde deviennent des slicks." },
      { ref: "Arrivée", text: "+31,6 s sur Pérez. 7e titre mondial, égalant Schumacher. Larmes à la radio : « encore du travail à faire »." },
    ],
    aiDebrief: [
      "La référence absolue de l'indice pluie de l'ère hybride avec Silverstone 2008 : Hamilton a terminé la course sur des intermédiaires transformés en slicks après 50 tours, trouvant du grip là où tout le plateau en cherchait. Écart de rythme mesuré sur la deuxième moitié de course : +0,8 s/tour.",
      "Le modèle souligne le contexte machine : la Mercedes W11 était la meilleure voiture, mais ses coéquipiers et rivaux à machines égales ou proches (Bottas, parti 9e, 6 toupies, P14) montrent que l'écart du jour était 100 % pilote. Bottas vs Hamilton ce jour-là est le plus grand écart entre coéquipiers champions de la décennie.",
      "Historiquement : 7e titre, record égalé, dans une saison COVID tronquée où Hamilton n'a jamais eu à défendre. Le modèle note que ce titre, statistiquement son plus facile (124 pts d'avance), contient paradoxalement sa plus belle victoire en carrière.",
    ],
    keyStats: [
      { label: "Départ", value: "P6 → P1" },
      { label: "Marge de victoire", value: "+31,6 s" },
      { label: "Stint intermédiaires", value: "50 tours" },
      { label: "Titre", value: "7e — record égalé" },
    ],
  },

  // ── 2019 / 2018 ──────────────────────────────────────────────
  {
    id: "allemagne-2019",
    year: 2019,
    gp: "Grand Prix d'Allemagne",
    circuit: "Hockenheimring",
    winner: "Max Verstappen",
    winnerTeam: "Red Bull",
    conditions: "Pluie",
    drama: 98,
    podium: ["Max Verstappen", "Sebastian Vettel", "Daniil Kvyat"],
    summary:
      "Le chaos absolu : pluie, 5 safety cars, Hamilton crashé et pénalisé, Bottas dans le mur, Leclerc piégé par le gravier... Verstappen gagne malgré un tête-à-queue, Vettel remonte de dernier à 2e, et Kvyat offre à Toro Rosso un podium irréel.",
    moments: [
      { ref: "T1-T20", text: "Verstappen mal parti remonte, Hamilton mène. La pluie transforme le stade en patinoire : le gravier du dernier secteur devient un piège." },
      { ref: "T27-T29", text: "Leclerc dans le gravier (slicks sous la pluie) puis Hamilton au même endroit : nez cassé, arrêt de 50 s, pénalité." },
      { ref: "T46-T56", text: "Bottas dans le mur sous pression, Hülkenberg piégé alors qu'il visait le podium. Safety cars en chaîne." },
      { ref: "T60", text: "Vettel, parti 20e et dernier, dépasse Sainz, Stroll puis Kvyat : P2 à domicile. Kvyat P3 pour Toro Rosso." },
    ],
    aiDebrief: [
      "Le modèle la classe course la plus chaotique de l'ère hybride : 4 leaders différents, 78 dépassements en tête de course, 6 abandons, et un podium (Verstappen-Vettel-Kvyat) à 1,2 % de probabilité en simulation pré-course.",
      "Leclerc et Hamilton au même endroit, à un tour d'écart : le virage 16-17, resurfaçé et poli comme de la glace, a piégé la moitié du plateau. Leçon du modèle : sous pluie variable, la décision pneus prime sur le pilotage — ceux qui ont gagné (Verstappen malgré son 360°) sont ceux qui ont accepté de perdre du temps pour être sur les bonnes gommes.",
      "La remontée de Vettel (P20 → P2) est statistiquement aussi forte que la victoire : +0,6 s/tour sur le plateau dans les 20 derniers tours, 18 dépassements. Un an jour pour jour après son crash de 2018 ici-même, la rédemption a failli être parfaite.",
    ],
    keyStats: [
      { label: "Safety cars", value: "5" },
      { label: "Leaders différents", value: "4" },
      { label: "Proba du podium", value: "1,2 %" },
      { label: "Vettel", value: "P20 → P2" },
    ],
  },
  {
    id: "allemagne-2018",
    year: 2018,
    gp: "Grand Prix d'Allemagne",
    circuit: "Hockenheimring",
    winner: "Lewis Hamilton",
    winnerTeam: "Mercedes",
    conditions: "Mixte",
    drama: 90,
    podium: ["Lewis Hamilton", "Valtteri Bottas", "Kimi Räikkönen"],
    summary:
      "Vettel mène chez lui, le titre en main. Une averse de 10 minutes, une sortie de piste au tour 52 dans le stadium — et Hamilton, parti 14e après une panne en qualif, gagne devant Bottas. Le championnat 2018 bascule en une averse : de +8 pour Vettel à +17 pour Hamilton.",
    moments: [
      { ref: "Q1", text: "Hamilton en panne hydraulique en qualif : P14 sur la grille. Vettel en pole, à domicile, favori du titre." },
      { ref: "T1-T42", text: "Vettel contrôle. Hamilton remonte proprement : P5 après les arrêts, sans forcer." },
      { ref: "T52", text: "L'averse arrive. Vettel glisse dans le stadium et finit dans le gravier. Cris de détresse à la radio." },
      { ref: "Arrivée", text: "Doublé Mercedes. Vettel passe de +8 pts à -17 : un swing de 25 points en 10 minutes de pluie." },
    ],
    aiDebrief: [
      "Le swing de championnat le plus violent de la décennie : 25 points en une course, sur une erreur de pilotage à faible vitesse. Le modèle de probabilité de titre donne : Vettel 58 % avant Hockenheim, 29 % après. Il ne reverra plus jamais la tête du championnat.",
      "L'analyse du crash est impitoyable : vitesse d'impact faible, freinage 15 m plus tard que son tour précédent, dans le seul secteur humide. Sous pression maximale (domicile, rival en embuscade, averse), le pilote le plus rapide de sa génération a commis l'erreur d'un rookie — le modèle y voit le symptôme, pas la cause : Ferrari 2018 perdait déjà la bataille opérationnelle.",
      "Côté Hamilton : remontée de P14 sans accroc, gestion parfaite de la fin de course en slick sous l'averse. C'est sa 4e victoire après avoir été privé de pole — le modèle note que ses plus grandes victoires viennent presque toujours d'une adversité du samedi.",
    ],
    keyStats: [
      { label: "Swing championnat", value: "25 points" },
      { label: "Hamilton", value: "P14 → P1" },
      { label: "Crash Vettel", value: "Tour 52" },
      { label: "Proba titre VET", value: "58 % → 29 %" },
    ],
  },

  // ── 2016 ─────────────────────────────────────────────────────
  {
    id: "abudhabi-2016",
    year: 2016,
    gp: "Grand Prix d'Abu Dhabi",
    circuit: "Yas Marina",
    winner: "Lewis Hamilton",
    winnerTeam: "Mercedes",
    conditions: "Sec",
    drama: 86,
    podium: ["Lewis Hamilton", "Nico Rosberg", "Sebastian Vettel"],
    summary:
      "Rosberg n'a besoin que d'un podium pour le titre. Hamilton mène et ralentit délibérément pour tasser le peloton sur son coéquipier, ignorant les ordres de l'équipe. Vettel et Verstappen fondent... Rosberg tient 0,4 seconde devant Vettel et devient champion du monde. Il annonce sa retraite 5 jours plus tard.",
    moments: [
      { ref: "Départ", text: "Hamilton (pole) mène, Rosberg 2e : à ce stade, le titre est plié. Sauf que Hamilton a un plan." },
      { ref: "T40-T55", text: "Hamilton ralentit volontairement : le quatuor de tête se tasse à 3 secondes. « Perdez le championnat » répond le muret. « Laissez-nous courir » répond Hamilton." },
      { ref: "T55-T58", text: "Vettel (super-softs) dépasse Verstappen et fond sur Rosberg : écart final 0,439 s." },
      { ref: "+5 jours", text: "Rosberg champion avec 5 pts d'avance... puis annonce sa retraite : « j'ai escaladé ma montagne »." },
    ],
    aiDebrief: [
      "Le duel de game theory le plus riche de l'ère hybride : Hamilton, dos au mur, choisit la seule stratégie qui maximise ses chances (le « back-up »), au prix d'un conflit ouvert avec son équipe. Le modèle valide le calcul : sans ralentissement, ses chances de titre étaient de 0 % ; avec, ~15 %.",
      "Rosberg a gagné ce titre dans les 20 courses précédentes, pas celle-ci : constance de 16 podiums en 21 courses, gestion parfaite de son avance, zéro abandon. Le modèle note son dernier quart d'heure de course comme le plus grand test de pression jamais mesuré : un titre mondial dépendant de 0,4 s à tenir contre Vettel.",
      "La retraite surprise 5 jours plus tard reste unique dans l'histoire du sport : le modèle y lit la preuve du coût mental de la saison (Rosberg a parlé de 25 kg de pression par course). Le premier — et seul — champion à avoir battu Hamilton à armes égales a décidé que ça ne se reproduirait pas : statistiquement, il avait raison.",
    ],
    keyStats: [
      { label: "Écart final ROS-VET", value: "0,439 s" },
      { label: "Marge titre", value: "5 points" },
      { label: "Podiums ROS saison", value: "16/21" },
      { label: "Retraite", value: "+5 jours" },
    ],
  },
  {
    id: "espagne-2016",
    year: 2016,
    gp: "Grand Prix d'Espagne",
    circuit: "Circuit de Barcelona-Catalunya",
    winner: "Max Verstappen",
    winnerTeam: "Red Bull",
    conditions: "Sec",
    drama: 88,
    podium: ["Max Verstappen", "Kimi Räikkönen", "Sebastian Vettel"],
    summary:
      "Premier tour : Hamilton et Rosberg s'accrochent et finissent dans le gravier — double zéro Mercedes. Au même moment, un certain Max Verstappen, 18 ans, débute chez Red Bull... et gagne sa première course avec l'équipe, résistant 32 tours à Räikkönen. Le plus jeune vainqueur de l'histoire.",
    moments: [
      { ref: "T1 V3", text: "Rosberg déborde Hamilton au départ ; Hamilton attaque au virage 4, part sur l'herbe, harponne son coéquipier : les deux Mercedes dans le gravier." },
      { ref: "T2", text: "Ricciardo mène devant Verstappen et les Ferrari : la course est grande ouverte pour la première fois depuis 2 ans." },
      { ref: "T34", text: "Stratégies divergentes : Verstappen en 2 arrêts, Ricciardo en 3. Le choix Red Bull fera la différence." },
      { ref: "T39-71", text: "Räikkönen colle à Verstappen pendant 32 tours sans trouver l'ouverture : 18 ans et 228 jours, plus jeune vainqueur de l'histoire." },
    ],
    aiDebrief: [
      "L'accrochage Hamilton-Rosberg au tour 1 est la conséquence statistique d'une rivalité sans garde-fou : 4e accrochage entre eux en 3 saisons. Le modèle note que ce crash, en éliminant les deux Mercedes, a littéralement lancé l'ère Verstappen — sans lui, le Néerlandais attendait probablement 2017.",
      "La victoire elle-même est un cas d'école de gestion : 32 tours avec Räikkönen à moins d'une seconde, zéro erreur au freinage, dégradation maîtrisée sur des pneus médiums de 34 tours. Le modèle classe cette défense dans le top 3 des courses sous pression pour un teenager — tout sport confondu, c'est dire.",
      "Le perdant caché : Ricciardo. Stratégie à 3 arrêts (inspirée de sa victoire de 2014) contre 2 pour Verstappen — Red Bull a couvert les deux options et le sort a choisi Max. Le modèle date de ce jour le début du glissement de la hiérarchie interne Red Bull : Ricciardo ne sera plus jamais le leader de l'équipe.",
    ],
    keyStats: [
      { label: "Âge du vainqueur", value: "18 ans 228 j" },
      { label: "Tours sous pression RAI", value: "32" },
      { label: "Crash Mercedes", value: "Tour 1, V4" },
      { label: "Premier GP Red Bull", value: "Victoire" },
    ],
  },

  // ── 2014 / 2012 / 2011 / 2010 ───────────────────────────────
  {
    id: "bahrein-2014",
    year: 2014,
    gp: "Grand Prix de Bahreïn",
    circuit: "Bahrain International Circuit",
    winner: "Lewis Hamilton",
    winnerTeam: "Mercedes",
    conditions: "Sec",
    drama: 80,
    podium: ["Lewis Hamilton", "Nico Rosberg", "Sergio Pérez"],
    summary:
      "Le « duel du désert » : la safety car du tour 41 (Gutiérrez catapultée par Maldonado) efface l'avance de Hamilton et offre 10 tours de duel à couteaux tirés entre les deux Mercedes, en roue libre totale. Hamilton tient 1,085 seconde. La course qui a annoncé 8 ans de rivalité.",
    moments: [
      { ref: "T1-T18", text: "Hamilton (P2) double Rosberg (pole) au départ ; les deux Mercedes s'échangent la tête au premier relais — l'équipe les laisse faire." },
      { ref: "T41", text: "Maldonado percute Gutiérrez : la Sauber fait un tonneau. Safety car, l'écart de 10 secondes s'efface." },
      { ref: "T50-T57", text: "Restart : Rosberg en softs neufs attaque Hamilton en mediums. 8 tours de duel, 4 changements de tête, zéro contact." },
      { ref: "Arrivée", text: "Hamilton +1,085 s. Paddy Lowe à la radio : « 10 tours pareils et c'était parfait ». Pérez P3 pour Force India." },
    ],
    aiDebrief: [
      "Le modèle classe ce duel comme la référence du wheel-to-wheel propre à haute intensité : 8 tours, ~15 manœuvres offensives, 0 contact, 0 avertissement. Le départage s'est joué sur un détail : Hamilton avait conservé un train de mediums neufs, Rosberg des softs — et le britannique a survécu à l'avantage pneus adverse.",
      "La contre-performance cachée : les Mercedes tournaient 2 secondes plus vite que le reste du plateau. Cette course a officialisé la domination hybride qui allait durer 8 ans — Pérez, 3e à 24 secondes, illustre le gouffre.",
      "Historiquement, c'est la première bataille franche de la rivalité Hamilton-Rosberg post-enfance : le modèle y voit le moment où Mercedes a perdu le contrôle de sa propre dynamique interne. Les consignes arriveront à Monaco — et la guerre froide durera jusqu'à Abu Dhabi 2016.",
    ],
    keyStats: [
      { label: "Marge finale", value: "+1,085 s" },
      { label: "Tours de duel final", value: "8" },
      { label: "Écart effacé (SC)", value: "10 s" },
      { label: "Avance Mercedes/champ", value: "+2 s/tour" },
    ],
  },
  {
    id: "bresil-2012",
    year: 2012,
    gp: "Grand Prix du Brésil",
    circuit: "Interlagos, São Paulo",
    winner: "Jenson Button",
    winnerTeam: "McLaren",
    conditions: "Mixte",
    drama: 97,
    podium: ["Jenson Button", "Fernando Alonso", "Felipe Massa"],
    summary:
      "La finale la plus folle de la décennie : Vettel, leader du championnat, percuté au 4e virage, repart 22e et dernier avec un échappement endommagé. Sous la pluie intermittente, il remonte jusqu'à la 6e place — 3 points d'avance sur Alonso, 2e derrière Button. Triple champion à 25 ans.",
    moments: [
      { ref: "T1 V4", text: "Senna percute Vettel : l'Allemand repart 22e, radiateur percé, direction faussée. Alonso 5e : le titre bascule virtuellement." },
      { ref: "T10-T20", text: "Vettel remonte 10 places en 10 tours sous la pluie naissante, avec une voiture blessée." },
      { ref: "T52", text: "Hülkenberg et Hamilton, leaders, s'accrochent : Hamilton out. La safety car fige la course, la pluie revient." },
      { ref: "T70", text: "Vettel P6 — exactement ce qu'il faut. Alonso P2 derrière Button : insuffisant pour 3 points." },
    ],
    aiDebrief: [
      "Le modèle d'espérance de titre montre trois basculements en 71 tours : Alonso champion virtuel au tour 4, Vettel à nouveau favori au tour 20, puis tout suspendu à la pluie finale. Probabilité mesurée de la remontée P22 → P6 avec voiture endommagée : ~4 %.",
      "La course d'Alonso est le pendant tragique : P11 sur la grille, P2 à l'arrivée — la limite maximale de ce que la F2012 permettait. Le modèle estime que 2012 est la saison où l'écart pilote/machine a été le plus grand de la décennie : Alonso a perdu le titre avec la 3e voiture du plateau, à 3 points.",
      "Statistique d'ambiance : le tour 1 de Vettel (percuté, 22e) et son tour 71 (champion) résument pourquoi le modèle lui donne un indice mental supérieur à la moyenne de ses détracteurs — sa réputation de « pilote qui ne sait pas se battre » meurt statistiquement ce jour-là.",
    ],
    keyStats: [
      { label: "Vettel après T1", value: "P22, voiture blessée" },
      { label: "Marge du titre", value: "3 points" },
      { label: "Âge du triple champion", value: "25 ans" },
      { label: "Alonso", value: "P11 → P2" },
    ],
  },
  {
    id: "canada-2011",
    year: 2011,
    gp: "Grand Prix du Canada",
    circuit: "Circuit Gilles Villeneuve, Montréal",
    winner: "Jenson Button",
    winnerTeam: "McLaren",
    conditions: "Pluie",
    drama: 100,
    podium: ["Jenson Button", "Sebastian Vettel", "Mark Webber"],
    summary:
      "4 heures 4 minutes : la course la plus longue de l'histoire. Button accroche son coéquipier Hamilton, écope une pénalité, crève, repart dernier... puis remonte les 30 derniers tours comme une flèche et force l'erreur de Vettel dans le dernier tour. La victoire impossible.",
    moments: [
      { ref: "T8", text: "Button accroche Hamilton contre le muret des stands : son coéquipier abandonne, lui écope un drive-through." },
      { ref: "T20", text: "Le déluge force le drapeau rouge : interruption de 2 heures. Button est 10e, pénalisé, avec une crevaison en prime." },
      { ref: "T40-T65", text: "Dernier au restart, Button enchaîne : 6 arrêts au total, mais un rythme de +1,5 s/tour sur tout le monde en fin de course." },
      { ref: "T70", text: "Dernier tour : Vettel, sous pression, part à moitié sur l'humide au virage 6. Button passe : vainqueur au bout de l'impossible." },
    ],
    aiDebrief: [
      "Le modèle classe cette course n°1 des remontées de l'histoire moderne, tous critères confondus : dernier à 30 tours de l'arrivée, 6 passages aux stands, une pénalité, un contact avec son coéquipier — et une victoire arrachée dans le dernier tour. Espérance de victoire au tour 40 : 0,3 %.",
      "La fin de course de Button est le meilleur exemple mesuré de sa signature : sur piste séchante en intermédiaires, son rythme des 15 derniers tours était supérieur de 1,5 s à Vettel et Webber. C'est cette course qui a calibré son indice « conditions mixtes » à 95 — le plus haut de sa génération avec Hamilton.",
      "L'erreur de Vettel au dernier tour valide la thèse du modèle sur la pression : le champion 2011, qui dominait la saison (6 victoires en 7 courses), craque sur la seule course où il était menacé à la fin. La pression n'a pas de grade : même les dominateurs y répondent.",
    ],
    keyStats: [
      { label: "Durée totale", value: "4 h 04 min (record)" },
      { label: "Arrêts Button", value: "6" },
      { label: "Rythme fin de course", value: "+1,5 s/tour" },
      { label: "Dépassement gagnant", value: "Dernier tour" },
    ],
  },
  {
    id: "abudhabi-2010",
    year: 2010,
    gp: "Grand Prix d'Abu Dhabi",
    circuit: "Yas Marina",
    winner: "Sebastian Vettel",
    winnerTeam: "Red Bull",
    conditions: "Sec",
    drama: 85,
    podium: ["Sebastian Vettel", "Lewis Hamilton", "Jenson Button"],
    summary:
      "Quatre pilotes peuvent être champions : Alonso (246 pts), Webber (238), Vettel (231), Hamilton (222). Vettel s'envole en tête pendant que Ferrari panique : Alonso est appelé aux stands pour couvrir Webber... et ressort derrière Petrov, qu'il ne dépassera jamais. Vettel, 23 ans, plus jeune champion de l'histoire — sans avoir mené le championnat une seule fois de la saison.",
    moments: [
      { ref: "T1", text: "Vettel (pole) conserve la tête, Alonso perd une place, Webber touche le mur : la finale s'emballe d'emblée." },
      { ref: "T11-T15", text: "Webber s'arrête tôt. Ferrari couvre « la menace Webber » et arrête Alonso : il ressort P12, derrière Petrov." },
      { ref: "T16-T55", text: "40 tours d'attaque d'Alonso sur la Renault de Petrov : jamais à portée de dépassement sur ce tracé sans zones propices." },
      { ref: "Arrivée", text: "Vettel gagne et est champion pour 4 points. Il l'apprend à la radio : il ne menait le championnat à aucun moment de la saison." },
    ],
    aiDebrief: [
      "La plus grande erreur stratégique de l'histoire moderne de Ferrari, mesurée : en couvrant Webber (qui n'était plus la vraie menace), le muret a sacrifié Alonso. Le modèle recalcule : en restant en piste, Alonso finissait P4 et champion avec 94 % de probabilité.",
      "Le cas Petrov est un classique du modèle « circuit-dépendance » : Yas Marina 2010 offrait quasi zéro zone de dépassement ; la Renault, 1,5 s plus lente au tour, a tenu 40 tours grâce à sa vitesse de pointe. Alonso a perdu le titre non pas contre Vettel, mais contre un tracé.",
      "Statistique unique : Vettel devient champion en menant le championnat pour la première fois... après le dernier tour de la saison. Le modèle classe 2010 comme la saison la plus disputée de l'ère moderne : 4 prétendants à la finale, 5 leaders différents au fil de l'année.",
    ],
    keyStats: [
      { label: "Prétendants au titre", value: "4" },
      { label: "Tours derrière Petrov", value: "40" },
      { label: "Marge du titre", value: "4 points" },
      { label: "Âge du champion", value: "23 ans" },
    ],
  },

  // ── Classiques (avant 2010) ──────────────────────────────────
  {
    id: "interlagos-2008",
    year: 2008,
    gp: "Grand Prix du Brésil",
    circuit: "Interlagos, São Paulo",
    winner: "Felipe Massa",
    winnerTeam: "Ferrari",
    conditions: "Mixte",
    drama: 100,
    podium: ["Felipe Massa", "Fernando Alonso", "Kimi Räikkönen"],
    summary:
      "Massa gagne et est champion du monde pendant 38,9 secondes. Puis la pluie revient, Glock reste en slicks, et Hamilton — 6e, le titre envolé — dépasse la Toyota dans le dernier virage du dernier tour. P5 : le point du titre, pour 1 point.",
    moments: [
      { ref: "Départ", text: "Massa (pole) s'envole, Hamilton gère prudemment sa P4 — il lui faut un top 5 pour le titre." },
      { ref: "T65", text: "La pluie revient : tout le monde chausse des intermédiaires... sauf Glock, qui reste en slicks et grimpe P4." },
      { ref: "T70", text: "Vettel dépasse Hamilton pour P5 : Massa, qui franchit la ligne vainqueur, est champion virtuel." },
      { ref: "Dernier virage", text: "Glock, impuissant sur ses slicks, est débordé par Vettel ET Hamilton à 240 m de la ligne : Hamilton P5, champion d'un point." },
    ],
    aiDebrief: [
      "Le modèle de probabilités en temps réel donne un basculement unique dans l'histoire : à 3 virages de l'arrivée, Massa a 94 % de chances d'être champion. La pluie sur Glock (pneus secs, -38 s dans le dernier tour) fait chuter sa vitesse de 15 % — Hamilton passe à 240 m de la ligne.",
      "La décision de Glock/Toyota de rester en slicks était rationnelle en espérance de points pour Toyota — elle a décidé d'un titre mondial. Leçon du modèle : les courses se gagnent aussi dans les décisions des acteurs qui ne jouent rien.",
      "Statistique finale : Hamilton champion avec 98 points contre 97. Un seul point — exactement la valeur du dépassement dans le dernier virage. Aucun autre titre de l'histoire n'a basculé aussi littéralement sur la dernière action possible de la saison.",
    ],
    keyStats: [
      { label: "Durée du « titre » Massa", value: "38,9 s" },
      { label: "Dépassement décisif", value: "Dernier virage" },
      { label: "Écart final au titre", value: "1 point" },
      { label: "Perte Glock (dernier tour)", value: "-38 s" },
    ],
  },
  {
    id: "silverstone-2008",
    year: 2008,
    gp: "Grand Prix de Grande-Bretagne",
    circuit: "Silverstone",
    winner: "Lewis Hamilton",
    winnerTeam: "McLaren",
    conditions: "Pluie",
    drama: 85,
    podium: ["Lewis Hamilton", "Nick Heidfeld", "Rubens Barrichello"],
    summary:
      "À domicile, sous la pluie, parti 4e : Hamilton double Räikkönen et Webber dès le premier tour, puis s'envole. 68 secondes d'avance à l'arrivée — la plus large marge de sa carrière — pendant que les deux Ferrari partent en toupie. Le pilotage pluie redéfini.",
    moments: [
      { ref: "T1", text: "Hamilton, P4, double Räikkönen et Webber d'emblée : le ton est donné devant 90 000 Britanniques." },
      { ref: "T5", text: "Hamilton déborde Kovalainen pour la tête : il ne la rendra plus, 58 tours en tête sur 60." },
      { ref: "T20-T30", text: "Ferrari se désintègre : Massa 5 toupies, Räikkönen trahi par un choix pneus conservateur." },
      { ref: "Arrivée", text: "+68,5 s sur Heidfeld : la plus large marge de victoire de la saison, sous la pluie." },
    ],
    aiDebrief: [
      "68,5 secondes d'avance en 60 tours : le modèle calcule un avantage moyen de +1,1 s/tour sur le reste du plateau — la performance pluie la plus dominante de l'ère des données (2004-présent). Référence de notre indice pluie moderne (98/100).",
      "La clé : la température des pneus intermédiaires. Là où Ferrari et Räikkönen glissaient (5 toupies au total entre Massa et Räikkönen), Hamilton générait de la température par l'attaque permanente. Ses vitesses en virages rapides (Copse, Maggotts) dépassaient celles du sec de certains fonds de grille.",
      "Contexte championnat : cette victoire le replace à égalité de points avec Massa et Räikkönen. Sans elle, le modèle estime sa probabilité de titre 2008 à moins de 20 %. C'est la course qui a rendu le scénario d'Interlagos possible.",
    ],
    keyStats: [
      { label: "Marge de victoire", value: "+68,5 s" },
      { label: "Toupies Ferrari", value: "5" },
      { label: "Départ", value: "P4 → P1 (tour 2)" },
      { label: "Tours menés", value: "58/60" },
    ],
  },
  {
    id: "spa-1998",
    year: 1998,
    gp: "Grand Prix de Belgique",
    circuit: "Spa-Francorchamps",
    winner: "Damon Hill",
    winnerTeam: "Jordan",
    conditions: "Pluie",
    drama: 100,
    podium: ["Damon Hill", "Ralf Schumacher", "Jean Alesi"],
    summary:
      "Le carambolage du siècle : 13 voitures détruites au premier tour sous un mur de pluie. Redémarrage, nouveau chaos, Schumacher percutant Coulthard en le doublant... et Jordan, en crise, signe le premier doublé de son histoire avec consigne d'équipe à la clé.",
    moments: [
      { ref: "T1", text: "Coulthard glisse, et c'est l'effet domino : 13 voitures impliquées, le plus grand carambolage de l'histoire. Drapeau rouge." },
      { ref: "Restart", text: "Hill (Jordan) mène, les favoris survivants s'éliminent un à un : Hakkinen out, Irvine out." },
      { ref: "T25", text: "Schumacher, en tête avec 40 s d'avance, percute Coulthard qu'il double : 3 roues, abandon. Il descend furieux au stand McLaren." },
      { ref: "T44", text: "Consigne Jordan : Hill conserve la tête devant R. Schumacher. Premier doublé de l'histoire de l'équipe." },
    ],
    aiDebrief: [
      "13 voitures impliquées dans l'accident du premier tour — le record absolu. Le modèle « conditions » le classe comme le scénario le plus extrême de la base : visibilité nulle, aquaplaning à 250 km/h, effet domino sur 600 mètres.",
      "Le tournant du titre 1998 est là : Schumacher, alors en tête et en route vers une victoire facile, percute Coulthard qu'il double — 3 roues, abandon, et 10 points envolés qui coûteront le championnat à Ferrari. Sa descente furieuse vers le stand McLaren reste l'image de la saison.",
      "La consigne Jordan (Hill conserve la tête devant R. Schumacher) est un cas d'école de théorie des jeux : sans consigne, le modèle donne 35 % de chances d'un accrochage fratricide. Eddie Jordan a transformé un jour de chaos en actif stratégique — premier doublé de l'écurie.",
    ],
    keyStats: [
      { label: "Voitures au carambolage", value: "13" },
      { label: "Favoris à l'arrivée", value: "0 sur 4" },
      { label: "Enjeu titre", value: "-10 pts pour MSC" },
      { label: "Doublé Jordan", value: "1er de l'histoire" },
    ],
  },
  {
    id: "donington-1993",
    year: 1993,
    gp: "Grand Prix d'Europe",
    circuit: "Donington Park",
    winner: "Ayrton Senna",
    winnerTeam: "McLaren",
    conditions: "Mixte",
    drama: 88,
    podium: ["Ayrton Senna", "Damon Hill", "Alain Prost"],
    summary:
      "Quatrième sur la grille, Senna passe cinquième... puis dépasse Wendlinger, Schumacher, Hill et Prost en un seul tour d'ouverture sous la pluie. 4 arrêts, des changements de pneus permanents, et une victoire avec 1 min 23 s d'avance — il a mis un tour à tout le plateau sauf au 2e.",
    moments: [
      { ref: "Départ", text: "Senna, P4, perd une place : P5 au premier freinage. Le pire départ possible... en apparence." },
      { ref: "Tour 1", text: "Le « tour des dieux » : Wendlinger, Schumacher, Hill et Prost dépassés en un seul tour, au freinage, sous la pluie." },
      { ref: "T20-T70", text: "La pluie va et vient : 4 arrêts, 4 bons choix pneus de Senna, contre 2 sur 4 pour Prost." },
      { ref: "Arrivée", text: "+1 min 23 s sur Hill, un tour d'avance sur tout le reste du plateau. L'écart le plus humiliant de l'ère moderne." },
    ],
    aiDebrief: [
      "Le « tour des dieux » se décompose en 5 dépassements à des points différents du circuit, chacun au freinage — la signature de Senna : une confiance au freinage sur piste humide que la télémétrie de l'époque mesurait à 15-20 m plus tard que ses rivaux.",
      "La gestion des conditions mixtes (4 arrêts, slicks/pluie à répétition) est le vrai chef-d'œuvre : le modèle calcule que Senna a pris la bonne décision pneumatique 4 fois sur 4, contre 2 sur 4 pour Prost. C'est là que la course s'est gagnée, plus que dans le premier tour.",
      "Avantage machine annulé : la Williams FW15C de Prost/Hill était supérieure de ~1 s/tour au sec. Sous la pluie, Senna renverse la hiérarchie avec +1,8 s/tour en sa faveur. Cette course est l'étalon de notre indice « pluie » : 100/100.",
    ],
    keyStats: [
      { label: "Tour 1", value: "P5 → P1" },
      { label: "Marge finale", value: "+1 min 23 s" },
      { label: "Arrêts au stand", value: "4" },
      { label: "Tours dans le même tour", value: "1 seul (Hill)" },
    ],
  },
  {
    id: "suzuka-1988",
    year: 1988,
    gp: "Grand Prix du Japon",
    circuit: "Suzuka",
    winner: "Ayrton Senna",
    winnerTeam: "McLaren",
    conditions: "Mixte",
    drama: 78,
    podium: ["Ayrton Senna", "Alain Prost", "Thierry Boutsen"],
    summary:
      "Senna cale au départ, repart 14e, remonte tout le plateau sous la pluie naissante et dépasse Prost pour le titre mondial. La saison parfaite des McLaren MP4/4 (15 victoires sur 16) se conclut par le premier sacre du Brésilien.",
    moments: [
      { ref: "Départ", text: "Senna cale au départ : P14. Prost s'envole en tête. Le titre semble basculer avant le premier virage." },
      { ref: "T1-T20", text: "Remontée méthodique de Senna : 8 voitures dépassées, puis la pluie arrive — son terrain." },
      { ref: "T27", text: "Sous l'averse, Senna colle à Prost : +0,9 s/tour mesuré sur le leader." },
      { ref: "T28", text: "Dépassement au bout de la ligne droite des stands : Senna mène, gagne, et devient champion du monde." },
    ],
    aiDebrief: [
      "La statistique folle : 15 victoires sur 16 courses pour la MP4/4 — le taux de domination le plus élevé de l'histoire (93,8 %). Le modèle peine à départager les deux pilotes : 8 victoires Senna, 7 Prost, et Prost marque plus de points... mais seuls les 11 meilleurs résultats comptaient, règle qui donne le titre à Senna.",
      "Le départ raté de Senna (calage, reparti 14e) puis sa remontée illustrent sa capacité à inverser la pression : chaque tour le rapprochait de Prost, et l'arrivée de la pluie au tour 27 a joué pour lui — son avantage pluie mesuré ce jour-là : +0,9 s/tour.",
      "Enseignement stratégique du modèle : sur une saison, la régularité (Prost, 7 deuxièmes places) perd contre les pics de victoire (Senna) quand le système de points tronque les résultats. Le barème actuel, sans discard, récompenserait davantage le profil Prost.",
    ],
    keyStats: [
      { label: "Départ Senna", value: "P1 → P14 (calage)" },
      { label: "Domination MP4/4", value: "15/16 victoires" },
      { label: "Victoires saison", value: "SEN 8 — PRO 7" },
      { label: "Titre décidé", value: "Tour 28" },
    ],
  },
  {
    id: "monaco-1984",
    year: 1984,
    gp: "Grand Prix de Monaco",
    circuit: "Monte-Carlo",
    winner: "Alain Prost",
    winnerTeam: "McLaren",
    conditions: "Pluie",
    drama: 95,
    podium: ["Alain Prost", "Ayrton Senna", "Stefan Bellof"],
    summary:
      "Sous un déluge, un rookie de 24 ans au volant d'une modeste Toleman remonte 2,5 secondes par tour sur Prost... avant que la course ne soit arrêtée au 31e tour. La naissance d'une légende, et une controverse qui dure depuis 40 ans.",
    moments: [
      { ref: "Départ", text: "Prost mène sous la pluie battante. Senna, P13 sur la grille avec la Toleman, commence sa remontée." },
      { ref: "T19-T31", text: "Senna reprend 2,5 s/tour à Prost ; derrière, Bellof (Tyrrell) reprend 2 s/tour à Senna. Le peloton des miracles." },
      { ref: "T31", text: "Jacky Ickx, directeur de course, arrête l'épreuve — au moment précis où Senna colle à Prost." },
      { ref: "Bilan", text: "Demi-points attribués (course < 75 %) : Prost perdra le titre 1984 pour un demi-point face à Lauda." },
    ],
    aiDebrief: [
      "Les données de rythme sont sans appel : entre les tours 19 et 31, Senna reprend en moyenne 2,5 s/tour à Prost, et Bellof (Tyrrell atmosphérique) reprenait lui-même 2 s/tour à Senna. Sans arrêt de course, le modèle projette un doublé Senna-Bellof au tour 35.",
      "L'arrêt par Jacky Ickx (directeur de course, pilote d'usine Porsche — moteur de la McLaren de Prost) reste le cas d'école du conflit d'intérêts en F1. La demi-attribution des points (course < 75 %) a coûté le titre à Prost... pour un demi-point face à Lauda en fin de saison.",
      "Leçon du modèle : la performance sous pluie de Senna ce jour-là (indice exceptionnel sur Toleman, 4e voiture du plateau au mieux) est la première preuve statistique de ce qui deviendra sa signature — l'annulation de l'avantage machine par le pilotage sous l'eau.",
    ],
    keyStats: [
      { label: "Remontée Senna", value: "2,5 s/tour" },
      { label: "Arrêt de course", value: "Tour 31/76" },
      { label: "Points attribués", value: "50 %" },
      { label: "Conséquence", value: "Titre perdu de 0,5 pt" },
    ],
  },
];
