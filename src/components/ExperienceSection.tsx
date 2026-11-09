import React from "react";
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from "lucide-react";

interface ExperienceProps {
  lang: "fr" | "en";
}

export const ExperienceSection: React.FC<ExperienceProps> = ({ lang }) => {
  const experiences = [
    {
      period: "2026",
      roleFr: "Développeur Full-Stack (MEVN)",
      roleEn: "Full-Stack Software Engineer (MEVN)",
      company: "Dizy Web Marketing Agency",
      location: "Djerba, Tunisie",
      type: "Production Web Platform",
      badge: "LIVE PRODUCTION",
      badgeColor: "text-emerald-400 bg-emerald-950/60 border-emerald-800",
      pointsFr: [
        "Conception de la plateforme web complète avec Vue.js et Node.js/Express.",
        "Mise en place de dashboards clients interactifs et de pipelines de données sécurisés.",
        "Optimisation des temps de chargement et intégration de requêtes MongoDB NoSQL performantes.",
        "Développement en méthodologie Agile / Scrum avec déploiement continu."
      ],
      pointsEn: [
        "Architected full-stack commercial web platform using Vue.js and Node.js/Express.",
        "Built centralized client dashboards, campaign trackers, and automated workflows.",
        "Optimized MongoDB NoSQL queries and indexing for high-concurrency response times.",
        "Applied Agile / Scrum sprints with regular code reviews and continuous delivery."
      ]
    },
    {
      period: "2024 – PRÉSENT",
      roleFr: "Chef de Projet & Développeur Web",
      roleEn: "Project Lead & Creative Developer",
      company: "Enactus ISET Djerba",
      location: "Djerba, Tunisie",
      type: "CleanTech & 3D Interactive",
      badge: "NATIONAL QUALIFIER",
      badgeColor: "text-[#FF3E24] bg-[#FF3E24]/10 border-[#FF3E24]/30",
      pointsFr: [
        "Fondateur et chef de projet sur HYDROOBLOOM : filtration d'eau et télémétrie IoT.",
        "Qualification et représentation de l'ISET Djerba à la Compétition Nationale Enactus.",
        "Conception du site vitrine 3D immersif pour Enactus avec Three.js (globe WebGL interactif et 2000+ particules dorées)."
      ],
      pointsEn: [
        "Founded and led engineering on HYDROOBLOOM: biodegradable filtration & IoT telemetry.",
        "Qualified and represented ISET Djerba at the National Enactus Innovation Competition.",
        "Designed award-winning 3D showcase site with Three.js (interactive WebGL globe and 2000+ particles)."
      ]
    },
    {
      period: "2025",
      roleFr: "Stagiaire en Systèmes d'Information",
      roleEn: "Information Systems Intern",
      company: "Banque Zitouna",
      location: "Djerba, Tunisie",
      type: "Banking & Core IT",
      badge: "BANKING SYSTEMS",
      badgeColor: "text-[#38bdf8] bg-[#38bdf8]/10 border-[#38bdf8]/30",
      pointsFr: [
        "Immersion au cœur des processus métiers et de l'architecture d'un système bancaire d'envergure.",
        "Étude des protocoles de sécurité, de la traçabilité des flux et des bases de données relationnelles.",
        "Contribution à la formalisation des procédures techniques et au support applicatif."
      ],
      pointsEn: [
        "Immersed in enterprise banking systems architecture, core workflows, and compliance.",
        "Studied transaction security protocols, audit trails, and relational database integrity.",
        "Assisted in technical procedure documentation and operational application support."
      ]
    },
    {
      period: "2024 – 2025",
      roleFr: "Lead Développeur & Chef de Projet",
      roleEn: "Lead Developer & Project Manager",
      company: "Club 3 Zero Campus ISET Djerba",
      location: "Djerba, Tunisie",
      type: "Campus Tech Leadership",
      badge: "CAMPUS LEAD",
      badgeColor: "text-amber-400 bg-amber-950/60 border-amber-800",
      pointsFr: [
        "Supervision technique de projets étudiants et organisation de sessions de partage de compétences.",
        "Planification agile des livrables et coordination entre équipes créatives et de développement.",
        "Organisation d'ateliers sur le développement web moderne et Git."
      ],
      pointsEn: [
        "Led technical student initiatives and structured collaborative knowledge sharing.",
        "Coordinated project sprints between design and development teams.",
        "Hosted workshops on modern full-stack web development and Git best practices."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto border-t border-zinc-900">
      
      {/* Header */}
      <div className="mb-14">
        <div className="font-mono text-xs text-[#FF3E24] uppercase tracking-widest font-bold mb-2 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FF3E24]" />
          <span>{lang === "fr" ? "PARCOURS & EXPÉRIENCES" : "CAREER & EXPERIENCE"}</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none font-heading">
          TRACK RECORD OF <span className="text-[#FF3E24]">IMPACT.</span>
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-xl">
          {lang === "fr"
            ? "Expériences en agence, pilotage de projets technologiques innovants et leadership étudiant."
            : "Production agency platforms, award-winning innovative ventures, and engineering leadership."}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Timeline list */}
        <div className="lg:col-span-8 space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 hover:border-zinc-700 transition-all hover:-translate-y-0.5 group relative"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[#FF3E24] bg-[#FF3E24]/10 px-2.5 py-1 rounded-md">
                    {exp.period}
                  </span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border uppercase font-bold ${exp.badgeColor}`}>
                    {exp.badge}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500">
                  <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{exp.location}</span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-black uppercase text-white font-heading group-hover:text-[#FF3E24] transition-colors">
                {lang === "fr" ? exp.roleFr : exp.roleEn}
              </h3>
              <div className="text-xs font-mono font-semibold text-zinc-400 mb-4">
                {exp.company} • <span className="text-zinc-500">{exp.type}</span>
              </div>

              <ul className="space-y-2 pt-2 border-t border-zinc-900 text-xs text-zinc-300">
                {(lang === "fr" ? exp.pointsFr : exp.pointsEn).map((pt, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#FF3E24] font-bold mt-0.5">›</span>
                    <span className="leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Right Column: Education & Academic Credentials */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Education Card */}
          <div className="p-7 rounded-2xl bg-gradient-to-br from-zinc-950 to-zinc-900 border border-zinc-800/80 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#38bdf8] font-bold">
              <GraduationCap className="w-4 h-4 text-[#38bdf8]" />
              <span>{lang === "fr" ? "FORMATION SUPÉRIEURE" : "HIGHER EDUCATION"}</span>
            </div>

            <div>
              <h4 className="text-lg font-black uppercase text-white font-heading">
                Licence en Développement des Systèmes d'Information (DSI)
              </h4>
              <p className="text-xs font-mono text-[#FF3E24] mt-1 font-semibold">
                ISET Djerba • Institut Supérieur des Études Technologiques
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mt-2">
                <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                <span>2024 – 2027 (3ᵉ Année en cours)</span>
              </div>
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed pt-2 border-t border-zinc-800">
              {lang === "fr"
                ? "Formation intensive d'ingénierie logicielle : architectures distribuées, bases de données avancées, conception orientée objet, sécurité informatique et gestion agile de projets."
                : "Rigorous software engineering curriculum: distributed architectures, advanced database modeling, secure web systems, and agile delivery."}
            </p>

            <div className="pt-3 border-t border-zinc-800">
              <span className="text-[10px] font-mono uppercase text-zinc-500 block mb-1.5 font-bold">
                {lang === "fr" ? "COMPÉTENCES CLÉS DSI" : "CORE ACADEMIC HIGHLIGHTS"}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {["Génie Logiciel", "UML / Merise", "NoSQL & SQL", "Réseaux & Sécurité", "Agile Scrum"].map((k) => (
                  <span key={k} className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-zinc-800">
                    {k}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Availability Card */}
          <div className="p-6 rounded-2xl bg-zinc-950/80 border border-emerald-900/40 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono uppercase text-emerald-400 font-bold">
                {lang === "fr" ? "STATUT PFE 2026" : "PFE 2026 STATUS"}
              </span>
            </div>
            <h4 className="text-sm font-bold text-white uppercase font-heading">
              {lang === "fr" ? "Stage de Fin d'Études (PFE)" : "Graduation Internship (PFE)"}
            </h4>
            <p className="text-xs text-zinc-300 leading-relaxed">
              {lang === "fr"
                ? "Recherche active d'un stage PFE début 2026 en développement Full-Stack (Vue.js, Node.js, React) ou ingénierie de données / IA."
                : "Actively seeking a 2026 Graduation Internship (PFE) in Full-Stack Engineering (Vue.js, Node.js, React) or AI/Data applications."}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 font-bold hover:underline pt-1"
            >
              <span>{lang === "fr" ? "Discuter d'une opportunité →" : "Discuss opportunities →"}</span>
            </a>
          </div>

        </div>

      </div>

    </section>
  );
};
