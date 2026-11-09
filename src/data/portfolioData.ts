export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  descriptionFr: string;
  stack: string[];
  metrics: string;
  role: string;
  year: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  highlights: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string[];
  skills: string[];
  badge?: string;
}

export const PERSONAL_INFO = {
  name: "Adem Ouerhani",
  roleEn: "Full-Stack Developer & Software Systems Engineer",
  roleFr: "Développeur Full-Stack & Systèmes d'Information",
  status: "Available for PFE / Full-Time (2026)",
  statusFr: "À la recherche d'un stage de fin d'études (PFE) ou opportunité en ingénierie logicielle",
  location: "Midoun, Djerba, Tunisia",
  email: "ouerhaniadem0805@gmail.com",
  phone: "+216 29 763 603",
  github: "https://github.com/ADEM2005373",
  githubUser: "ADEM2005373",
  linkedin: "https://linkedin.com/in/adem-ouerhani-724743349",
  school: "ISET Djerba",
  degree: "Licence en Développement des Systèmes d'Information (DSI) — 3ᵉ Année",
  taglineBold: "NOT JUST CODE.",
  taglineAccent: "CODE THAT SHIPS.",
  heroPunchline: "Building high-performance web applications, scalable MEVN backends, and accelerated computing solutions that deliver real-world impact.",
  heroPunchlineFr: "Conception d'applications web scalables avec la stack MEVN, APIs RESTful robustes et calcul accéléré GPU certifié NVIDIA.",
  stats: [
    { label: "GITHUB REPOS", value: "22+" },
    { label: "FEATURED PROJECTS", value: "08+" },
    { label: "YEARS CODING", value: "03" },
    { label: "NVIDIA CERTIFIED", value: "CUDA" },
  ],
};

export const TECH_STACK = [
  { name: "Vue.js", category: "Frontend", color: "#42b883" },
  { name: "Node.js", category: "Backend", color: "#68a063" },
  { name: "Express.js", category: "Backend", color: "#ffffff" },
  { name: "MongoDB", category: "Database", color: "#47A248" },
  { name: "TypeScript", category: "Language", color: "#3178c6" },
  { name: "JavaScript ES6+", category: "Language", color: "#f7df1e" },
  { name: "Python", category: "Language", color: "#3776ab" },
  { name: "CUDA Python", category: "GPU AI", color: "#76b900" },
  { name: "Tailwind CSS", category: "Styling", color: "#38bdf8" },
  { name: "SQL (MySQL / Postgres)", category: "Database", color: "#336791" },
  { name: "REST APIs", category: "Architecture", color: "#FF3E24" },
  { name: "Git & GitHub", category: "DevOps", color: "#f05032" },
  { name: "Docker", category: "DevOps", color: "#2496ed" },
  { name: "Postman", category: "Testing", color: "#FF6C37" },
  { name: "Figma", category: "Design", color: "#f24e1e" },
  { name: "Agile / Scrum", category: "Methodology", color: "#10b981" },
];

export const PROJECTS: Project[] = [
  {
    id: "passi",
    number: "01",
    title: "PASSI",
    tagline: "Plateforme Web de Réservation d'Événements en Temps Réel",
    category: "Full-Stack MEVN",
    year: "2025 – 2026",
    role: "Lead Full-Stack Developer",
    metrics: "Real-time Booking & E-Tickets",
    description: "Conception et développement complet d'une plateforme web permettant la découverte d'événements et la réservation de billets en temps réel. Mise en œuvre d'une architecture backend robuste avec authentification sécurisée, gestion dynamique des stocks et génération automatisée d'e-tickets avec QR codes.",
    descriptionFr: "Conception et développement complet d'une plateforme web permettant la découverte d'événements et la réservation de billets en temps réel. Mise en œuvre d'une architecture backend robuste avec authentification sécurisée, gestion dynamique des stocks et génération automatisée d'e-tickets avec QR codes.",
    stack: ["Vue.js", "Node.js", "Express.js", "MongoDB", "REST API", "Tailwind CSS"],
    highlights: [
      "Système de réservation en temps réel avec verrouillage temporaire des places",
      "Authentification JWT sécurisée et rôles organisateurs / participants",
      "Génération dynamique d'e-tickets téléchargeables",
      "Interface responsive haute performance avec filtres multicritères"
    ],
    githubUrl: "https://github.com/ADEM2005373/PASSI",
    featured: true
  },
  {
    id: "hydroobloom",
    number: "02",
    title: "HYDROOBLOOM",
    tagline: "Système de Filtration Biodégradable & Monitoring IoT",
    category: "IoT & Hardware Tech",
    year: "2024 – 2025",
    role: "Fondateur & Chef de Projet — Enactus",
    metrics: "Enactus National Qualifier",
    description: "Direction d'un projet technologique et écologique intégrant un système de filtration d'eau innovant avec capteurs intelligents pour le contrôle qualité de l'eau en continu. Pilotage d'une équipe pluridisciplinaire jusqu'à la compétition nationale Enactus.",
    descriptionFr: "Direction d'un projet technologique et écologique intégrant un système de filtration d'eau innovant avec capteurs intelligents pour le contrôle qualité de l'eau en continu. Pilotage d'une équipe pluridisciplinaire jusqu'à la compétition nationale Enactus.",
    stack: ["IoT Sensors", "Node.js", "Python", "Telemetry", "Enactus ISET Djerba"],
    highlights: [
      "Mesure continue des paramètres physico-chimiques via capteurs IoT",
      "Filtration éco-conçue biodégradable",
      "Management de projet Agile et négociations de partenariats stratégiques",
      "Projet qualifié pour la prestigieuse Compétition Nationale Enactus"
    ],
    featured: true
  },
  {
    id: "dizyweb",
    number: "03",
    title: "DIZY WEB",
    tagline: "Digital Marketing Agency Client & Operations Portal",
    category: "Full-Stack MEVN",
    year: "2026",
    role: "Stagiaire Développeur Full-Stack",
    metrics: "Agile / Scrum Production App",
    description: "Développement de la solution digitale Dizy Web pour la centralisation du parcours client, le suivi des prestations marketing et la collaboration interne. Optimisation continue des requêtes et flux de données applicatifs.",
    descriptionFr: "Développement de la solution digitale Dizy Web pour la centralisation du parcours client, le suivi des prestations marketing et la collaboration interne. Optimisation continue des requêtes et flux de données applicatifs.",
    stack: ["Vue.js", "Express.js", "Node.js", "MongoDB", "Agile / Scrum"],
    highlights: [
      "Centralisation du parcours client et tableaux de bord d'activités",
      "Optimisation des requêtes NoSQL MongoDB et des temps de réponse",
      "Conception UI/UX orientée productivité",
      "Travail en sprints itératifs avec revues de code régulières"
    ],
    githubUrl: "https://github.com/ADEM2005373/dizyweb",
    featured: true
  },
  {
    id: "enactusweb",
    number: "04",
    title: "ENACTUS ISET DJERBA",
    tagline: "Future Makers — Interactive 3D Web Showcase",
    category: "Creative Frontend",
    year: "2024 – 2025",
    role: "Frontend Architect & UI Designer",
    metrics: "Three.js 3D & 2000+ Particles",
    description: "Site web vitrine premium pour Enactus ISET Djerba intégrant un globe 3D interactif wireframe avec Three.js, un système de plus de 2000 particules dorées fluide à 60fps, du design glassmorphism givré et un curseur magnétique.",
    descriptionFr: "Site web vitrine premium pour Enactus ISET Djerba intégrant un globe 3D interactif wireframe avec Three.js, un système de plus de 2000 particules dorées fluide à 60fps, du design glassmorphism givré et un curseur magnétique.",
    stack: ["Three.js", "JavaScript (ES6+)", "Glassmorphism CSS", "Interactive Canvas"],
    highlights: [
      "Globe 3D interactif animé avec shader personnalisé",
      "Système de particules dorées ultra-optimisé pour mobile",
      "Effets de verre givré glassmorphism de haute fidélité",
      "Navigation dynamique et micro-interactions immersives"
    ],
    githubUrl: "https://github.com/ADEM2005373/enactusweb",
    featured: true
  },
  {
    id: "ecotrack",
    number: "05",
    title: "ECOTRACK",
    tagline: "Jira Supervision & Executive Power BI Dashboard",
    category: "Data & Project Analytics",
    year: "2025",
    role: "Data & Scrum Dashboard Developer",
    metrics: "Direct Jira TWG Integration",
    description: "Tableau de bord exécutif inspiré de Power BI pour la supervision et le suivi en temps réel du projet ECOTRACK, connecté directement à Atlassian Jira via TWG. Métriques de vélocité, KPIs et graphiques SVG dynamiques.",
    descriptionFr: "Tableau de bord exécutif inspiré de Power BI pour la supervision et le suivi en temps réel du projet ECOTRACK, connecté directement à Atlassian Jira via TWG. Métriques de vélocité, KPIs et graphiques SVG dynamiques.",
    stack: ["TypeScript", "SVG DataViz", "Jira API", "Scrum Metrics"],
    highlights: [
      "Donut charts SVG interactifs ventilés par type de tâche",
      "Suivi de progression en temps réel (taux de complétion global)",
      "Métriques de cycle time et lead time pour les sprints",
      "Architecture de données modulaire et exportable"
    ],
    githubUrl: "https://github.com/ADEM2005373/ECOTRACK",
    featured: false
  },
  {
    id: "techbattle",
    number: "06",
    title: "TECH BATTLE",
    tagline: "Hackathon Registration Platform & Dynamic Theming",
    category: "Web Application",
    year: "2024",
    role: "Frontend Engineer",
    metrics: "Multi-Team Realtime Registration",
    description: "Plateforme d'événement multi-hackathons avec animation d'ouverture cyber, basculement dynamique de thèmes et formulaire d'enregistrement sans friction synchronisé avec Google Sheets via Google Apps Script.",
    descriptionFr: "Plateforme d'événement multi-hackathons avec animation d'ouverture cyber, basculement dynamique de thèmes et formulaire d'enregistrement sans friction synchronisé avec Google Sheets via Google Apps Script.",
    stack: ["JavaScript", "Google Apps Script", "CSS Animations", "REST API"],
    highlights: [
      "Formulaire d'inscription instantané sans serveur intermédiaire",
      "Écran de démarrage animé dynamique",
      "Thématisation sombre et claire à haute lisibilité",
      "Déployé et utilisé lors de l'événement universitaire"
    ],
    githubUrl: "https://github.com/ADEM2005373/nextdjerba",
    featured: false
  },
  {
    id: "widelle",
    number: "07",
    title: "WID-ELLE",
    tagline: "Luxury Handbag E-Commerce Storefront",
    category: "E-Commerce",
    year: "2025",
    role: "Full-Stack Developer",
    metrics: "Tunisian Luxury Fashion Brand",
    description: "Boutique en ligne moderne pour une marque tunisienne de maroquinerie de luxe. Architecture réactive construite avec Vite et TypeScript, gestion d'inventaire dynamique et panier d'achat fluide.",
    descriptionFr: "Boutique en ligne moderne pour une marque tunisienne de maroquinerie de luxe. Architecture réactive construite avec Vite et TypeScript, gestion d'inventaire dynamique et panier d'achat fluide.",
    stack: ["Vite", "TypeScript", "Tailwind CSS", "Reactive State"],
    highlights: [
      "Interface épurée axée sur la mise en valeur des produits de luxe",
      "Gestion d'état panier fluide et instantanée",
      "Optimisation SEO et temps de chargement ultra-rapides"
    ],
    githubUrl: "https://github.com/ADEM2005373/WID_ELLE",
    featured: false
  },
  {
    id: "android-suite",
    number: "08",
    title: "ANDROID MOBILE SUITE",
    tagline: "Applications Mobiles Natives Kotlin & Material Design 3",
    category: "Mobile Android",
    year: "2024 – 2025",
    role: "Mobile Developer",
    metrics: "6 Native Kotlin Apps",
    description: "Suite d'applications Android natives développées en Kotlin : Calculateur IMC, Convertisseur de devises en direct, Gestionnaire de contacts dynamique, Compteur intelligent et Quiz interactif avec images.",
    descriptionFr: "Suite d'applications Android natives développées en Kotlin : Calculateur IMC, Convertisseur de devises en direct, Gestionnaire de contacts dynamique, Compteur intelligent et Quiz interactif avec images.",
    stack: ["Kotlin", "Android Studio", "Material Design 3", "Gradle"],
    highlights: [
      "Maîtrise du cycle de vie des activités et fragments Android",
      "Adapters personnalisés pour listes dynamiques fluides",
      "Design respectant scrupuleusement les directives Material 3",
      "Architecture propre et code testable"
    ],
    githubUrl: "https://github.com/ADEM2005373?tab=repositories",
    featured: false
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Stagiaire Développeur Full-Stack (MEVN)",
    company: "Dizy Web",
    period: "Janvier 2026",
    location: "Djerba, Tunisie",
    type: "Stage en Entreprise",
    badge: "MEVN Stack",
    description: [
      "Participation active au développement de la solution digitale Dizy Web pour la centralisation du parcours client et la communication interne.",
      "Conception et intégration de fonctionnalités applicatives complètes en utilisant la stack MEVN (MongoDB, Express.js, Vue.js, Node.js).",
      "Amélioration continue de l'expérience utilisateur (UI/UX) et optimisation des requêtes et flux de données applicatifs en méthodologie Agile / Scrum."
    ],
    skills: ["Vue.js", "Node.js", "Express.js", "MongoDB", "Agile / Scrum", "UI/UX"]
  },
  {
    role: "Développeur Web & Designer Graphique",
    company: "Freelance",
    period: "2024 – Présent",
    location: "Djerba, Tunisie",
    type: "Indépendant",
    badge: "Web & Design",
    description: [
      "Développement de 2 sites web vitrines interactifs pour Enactus ISET Djerba et conception d'une application web de gestion d'événements universitaires.",
      "Création de chartes graphiques complètes, de maquettes d'interfaces (Figma) et de supports visuels de marque sur Adobe Photoshop et Illustrator.",
      "Accompagnement de projets associatifs et étudiants dans leur transition digitale."
    ],
    skills: ["Vue.js", "JavaScript", "HTML5/CSS3", "Adobe Photoshop", "Illustrator", "Figma"]
  },
  {
    role: "Stagiaire en Systèmes d'Information",
    company: "Zitouna Banque",
    period: "Janvier 2025",
    location: "Djerba, Tunisie",
    type: "Stage d'Observation",
    badge: "Banque & Sécurité",
    description: [
      "Observation approfondie des systèmes d'information bancaires, des processus de gestion de comptes et de support aux opérations critiques.",
      "Application stricte des directives relatives à la sécurité informatique, à la confidentialité et à la protection des données clients conformément aux normes bancaires."
    ],
    skills: ["Systèmes d'Information", "Sécurité Informatique", "Audit SI", "Confidentialité"]
  },
  {
    role: "Responsable Pôle Projet",
    company: "Club 3 Zero Campus | ISET Djerba",
    period: "2024 – 2025",
    location: "ISET Djerba, Tunisie",
    type: "Engagement Associatif",
    badge: "Leadership",
    description: [
      "Supervision et encadrement technique des projets étudiants du club axés sur l'innovation sociale et le développement durable.",
      "Définition des plannings prévisionnels, suivi régulier des livrables et animation des sessions de travail collaboratives."
    ],
    skills: ["Leadership d'équipe", "Gestion de projet", "Planification", "Communication"]
  }
];

export const EDUCATION = [
  {
    degree: "Licence en Développement des Systèmes d'Information (DSI)",
    school: "Institut Supérieur des Études Technologiques de Djerba (ISET Djerba)",
    period: "2024 – 2027",
    status: "3ᵉ Année en cours",
    description: "Formation d'excellence axée sur le génie logiciel, la conception de bases de données relationnelles et NoSQL, l'architecture d'applications distribuées et la gestion de projets informatiques."
  }
];

export const CERTIFICATIONS = [
  {
    title: "CUDA Python – Accelerated Computing",
    issuer: "NVIDIA Deep Learning Institute",
    date: "Octobre 2025",
    id: "_13hVUfdQ2-cFF1h-8lXzg",
    icon: "nvidia",
    description: "Certification de calcul haute performance sur GPU avec NVIDIA CUDA Python : parallélisation de boucles, optimisation mémoire et accélération d'algorithmes intensifs."
  }
];

export const MULTIPLAYER_CURSORS = [
  { id: "1", name: "Vue.js", color: "#42b883", x: 18, y: 32, vx: 0.12, vy: 0.08, role: "Frontend" },
  { id: "2", name: "Node.js", color: "#68a063", x: 74, y: 22, vx: -0.09, vy: 0.11, role: "Backend" },
  { id: "3", name: "CUDA Python", color: "#76b900", x: 82, y: 65, vx: -0.11, vy: -0.07, role: "NVIDIA AI" },
  { id: "4", name: "MongoDB", color: "#47A248", x: 28, y: 78, vx: 0.1, vy: -0.09, role: "Database" },
  { id: "5", name: "Tailwind", color: "#38bdf8", x: 62, y: 84, vx: 0.08, vy: 0.06, role: "Styling" },
  { id: "6", name: "Agile Scrum", color: "#f59e0b", x: 12, y: 55, vx: 0.07, vy: -0.1, role: "Methodology" },
  { id: "7", name: "Passi Live", color: "#FF3E24", x: 45, y: 40, vx: -0.06, vy: 0.08, role: "Production" },
];
