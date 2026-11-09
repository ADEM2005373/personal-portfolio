import React from "react";
import { TECH_STACK } from "../data/portfolioData";
import { Award, Cpu, ShieldCheck, Terminal, Layers, Database, Sparkles, CheckCircle2 } from "lucide-react";

interface SkillsProps {
  lang: "fr" | "en";
}

export const SkillsAndCertifications: React.FC<SkillsProps> = ({ lang }) => {
  const categories = [
    {
      titleFr: "Frontend & UI Architecture",
      titleEn: "Frontend & UI Architecture",
      icon: Layers,
      color: "#38bdf8",
      items: ["Vue.js (Pinia, Router)", "React.js", "Tailwind CSS", "TypeScript", "JavaScript (ES6+)", "Three.js (WebGL)", "HTML5 / Modern CSS"],
    },
    {
      titleFr: "Backend & Microservices",
      titleEn: "Backend & Microservices",
      icon: Terminal,
      color: "#68a063",
      items: ["Node.js", "Express.js", "RESTful APIs", "JWT Security", "Middleware Architecture", "State Machines", "40+ Unit Tests Pattern"],
    },
    {
      titleFr: "Bases de Données & Modélisation",
      titleEn: "Databases & Data Modeling",
      icon: Database,
      color: "#47A248",
      items: ["MongoDB (Mongoose)", "PostgreSQL", "MySQL", "NoSQL Aggregations", "Data Normalization", "Indexing & Query Optimization"],
    },
    {
      titleFr: "Intelligence Artificielle & GPU",
      titleEn: "AI & GPU Accelerated Compute",
      icon: Cpu,
      color: "#76b900",
      items: ["Python", "NVIDIA CUDA Python", "GPU Memory Management", "Kernel Acceleration", "Parallel Algorithms", "Data Pipelines"],
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto border-t border-zinc-900">
      
      {/* Section Header */}
      <div className="mb-14">
        <div className="font-mono text-xs text-[#FF3E24] uppercase tracking-widest font-bold mb-2 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FF3E24]" />
          <span>{lang === "fr" ? "COMPÉTENCES & ACCRÉDITATIONS" : "STACK & CERTIFICATIONS"}</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none font-heading">
          ENGINEERED FOR <span className="text-[#FF3E24]">PERFORMANCE.</span>
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-xl">
          {lang === "fr"
            ? "Maîtrise de bout en bout : du composant Vue.js réactif jusqu'à l'API Node.js résiliente, la modélisation NoSQL et l'accélération matérielle NVIDIA CUDA."
            : "End-to-end engineering: from responsive Vue.js interfaces to resilient Node.js backends, NoSQL architectures, and NVIDIA CUDA GPU acceleration."}
        </p>
      </div>

      {/* Primary Highlight: Official NVIDIA Deep Learning Institute Certification Card */}
      <div className="mb-12 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-zinc-950 via-[#0a1205] to-zinc-950 border border-[#76b900]/40 shadow-[0_15px_40px_rgba(118,185,0,0.12)] relative overflow-hidden group">
        
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#76b900]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2">
              <span className="bg-[#76b900] text-black text-xs font-mono font-black px-3 py-1 rounded-md uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                <Award className="w-4 h-4 text-black" />
                <span>OFFICIAL CERTIFICATION</span>
              </span>
              <span className="text-xs font-mono text-[#76b900] bg-[#76b900]/10 border border-[#76b900]/30 px-3 py-1 rounded-md">
                NVIDIA Deep Learning Institute
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white font-heading">
              Accelerating Python with CUDA
            </h3>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-2xl">
              {lang === "fr"
                ? "Formation certifiante avancée par NVIDIA sur la programmation massivement parallèle sur GPU : compilation et exécution de kernels CUDA personnalisés avec Numba en Python, gestion fine de la mémoire GPU (Unified Memory), et accélération d'algorithmes intensifs en calcul."
                : "Advanced certified mastery in GPU-accelerated computing: writing, compiling, and dispatching custom CUDA kernels via Numba in Python, GPU memory hierarchy optimization, and computational pipeline acceleration."}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
                <ShieldCheck className="w-4 h-4 text-[#76b900]" />
                <span className="text-zinc-500 font-bold">Credential ID:</span>
                <span className="text-white font-mono font-bold select-all">_13hVUfdQ2-cFF1h-8lXzg</span>
              </div>
              <span className="text-xs font-mono text-zinc-500">Issued by NVIDIA DLI • Verified</span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-center items-center p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-center space-y-3">
            <Cpu className="w-12 h-12 text-[#76b900] animate-pulse" />
            <h4 className="text-base font-bold text-white uppercase font-heading">
              Parallel GPU Acceleration
            </h4>
            <p className="text-xs text-zinc-400">
              {lang === "fr"
                ? "Capacité à concevoir des pipelines de calculs à haute performance et à exploiter le parallélisme matériel pour l'IA."
                : "Equipped to design high-throughput computational backends and leverage hardware parallelism for AI workflows."}
            </p>
          </div>

        </div>
      </div>

      {/* Grid of 4 Competency Domains */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {categories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 hover:border-zinc-700 transition-all hover:-translate-y-1 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="p-2.5 rounded-xl border border-zinc-800 bg-zinc-900 group-hover:scale-110 transition-transform"
                  style={{ color: cat.color }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white uppercase font-heading leading-tight">
                  {lang === "fr" ? cat.titleFr : cat.titleEn}
                </h4>
              </div>

              <ul className="space-y-2 text-xs font-mono text-zinc-400">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 group-hover:text-zinc-200 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: cat.color }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* The Famous Iconic Orange Rectangular Principle Box */}
      <div className="p-7 sm:p-9 rounded-3xl bg-gradient-to-r from-[#FF4500] via-[#FF3E24] to-[#FF2E00] text-black shadow-[0_15px_45px_rgba(255,69,0,0.35)] transition-all hover:scale-[1.01] relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <div className="font-mono text-[10px] uppercase font-black tracking-widest text-black/80 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-black animate-pulse" />
              <span>CORE ENGINEERING PRINCIPLE</span>
            </div>
            <blockquote className="font-heading font-black text-xl sm:text-2xl md:text-3xl uppercase leading-tight tracking-tight text-white drop-shadow-sm">
              “SHIP THE FEATURE, THEN WRITE THE TEST THAT PROVES IT CAN'T SILENTLY BREAK.”
            </blockquote>
          </div>
          <div className="shrink-0">
            <span className="px-4 py-2 rounded-xl bg-black text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg">
              Adem Ouerhani
            </span>
          </div>
        </div>
      </div>

    </section>
  );
};
