import React from "react";
import { useVideoBuild } from "../context/VideoBuildEngine";
import { FigmaInspectorTag } from "./FigmaInspectorTag";
import { Briefcase, GraduationCap } from "lucide-react";

export const TrackRecordSection: React.FC = () => {
  const { isRevealed, isElementBuilding } = useVideoBuild();

  const techBarReady = isRevealed("tech_bar");
  const builtFastReady = isRevealed("built_fast_title");
  const stat40Ready = isRevealed("stat_40");
  const timelineReady = isRevealed("timeline_items");
  const notJustCodeReady = isRevealed("not_just_code");
  const bodyBioReady = isRevealed("body_bio");
  const educationReady = isRevealed("education_card");
  const orangePrincipleReady = isRevealed("orange_principle_box");

  const isBuiltFastBuilding = isElementBuilding("built_fast_title");
  const isTimelineBuilding = isElementBuilding("timeline_items");
  const isOrangeBuilding = isElementBuilding("orange_principle_box");

  const horizontalTech = [
    "Python", "NVIDIA CUDA", "Vue.js", "Node.js", "Express.js", 
    "MongoDB", "SQL (Postgres)", "Docker", "Git", "GitHub", "Figma"
  ];

  return (
    <section id="sec-about" className="min-h-screen py-24 px-4 sm:px-6 max-w-7xl mx-auto border-t border-zinc-900">
      
      {/* 1. Horizontal List of Technology Names (Dropped above heading) */}
      <div
        id="track-stack-bar"
        className={`w-full py-3 mb-10 overflow-x-auto no-scrollbar border-b border-zinc-800/80 transition-all duration-700 ${
          techBarReady ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        <div className="flex items-center gap-4 text-xs font-mono text-zinc-400 whitespace-nowrap">
          <span className="text-[#FF3E24] font-bold">STACK:</span>
          {horizontalTech.map((t, idx) => (
            <React.Fragment key={t}>
              <span className="hover:text-white transition-colors cursor-default select-none">
                {t}
              </span>
              {idx < horizontalTech.length - 1 && <span className="text-zinc-700">•</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: BUILT FAST. SHIPPED REAL. & 40. & NOT JUST CODE */}
        <div className="lg:col-span-7 space-y-8">
          
          <FigmaInspectorTag label="Heading:TrackRecord" dimension="520x220" isBuilding={isBuiltFastBuilding}>
            <div className="space-y-6">
              {/* Large Bold Heading: BUILT FAST. SHIPPED REAL. */}
              <div
                id="track-built-fast"
                className={`transition-all duration-700 ${
                  builtFastReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <span className="font-mono text-xs text-[#FF3E24] uppercase tracking-widest font-bold">
                  TRACK RECORD
                </span>
                <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none mt-1">
                  BUILT FAST. <br />
                  <span className="text-[#FF3E24]">SHIPPED REAL.</span>
                </h2>
              </div>

              {/* Prominent Number "40." */}
              <div
                id="track-stat-40"
                className={`flex items-baseline gap-4 transition-all duration-700 ${
                  stat40Ready ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
              >
                <span className="text-7xl sm:text-8xl font-black font-heading text-white">
                  40.
                </span>
                <p className="text-xs sm:text-sm font-mono text-zinc-400 max-w-xs leading-relaxed uppercase">
                  Unit tests & validated production flows across full-stack architectures that had none.
                </p>
              </div>
            </div>
          </FigmaInspectorTag>

          {/* Below 40: "NOT JUST CODE. CODE THAT SHIPS." (Words dropped by cursors) */}
          <div
            id="track-not-just-code"
            className={`pt-6 border-t border-zinc-900 transition-all duration-700 ${
              notJustCodeReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none">
              NOT JUST CODE. <br />
              <span className="text-[#FF3E24]">CODE THAT SHIPS.</span>
            </h3>
          </div>

          {/* Detailed Experience Body Text: "I'm a Computer Science Engineering student..." */}
          <div
            className={`text-xs sm:text-sm text-zinc-300 leading-relaxed space-y-3 max-w-xl transition-all duration-700 ${
              bodyBioReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <p>
              I'm a 3rd-year Information Systems & Software Engineering student at ISET Djerba, with proven expertise in building production-ready MEVN (MongoDB, Express, Vue.js, Node.js) web applications and GPU-accelerated computing.
            </p>
            <p className="text-zinc-400">
              Most days that means Vue.js and TypeScript on the front, Node.js and Express on the back, and testing wherever logic could silently break. Certified by NVIDIA Deep Learning Institute in CUDA Python high-performance acceleration.
            </p>
          </div>

        </div>

        {/* Right Column: Timeline, Education & Orange Principle Box */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Timeline / Experience List */}
          <FigmaInspectorTag label="Timeline:Career" dimension="480x260" isBuilding={isTimelineBuilding}>
            <div
              id="track-timeline"
              className={`p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 space-y-4 transition-all duration-700 ${
                timelineReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-zinc-400 font-bold mb-1">
                <Briefcase className="w-3.5 h-3.5 text-[#FF3E24]" />
                <span>EXPERIENCE TIMELINE</span>
              </div>

              <div className="space-y-3.5 text-xs font-mono">
                <div className="flex items-center justify-between pb-2.5 border-b border-zinc-900">
                  <div>
                    <span className="text-white font-bold block">Software Engineer (MEVN)</span>
                    <span className="text-zinc-500 text-[11px]">Dizy Web Marketing Agency</span>
                  </div>
                  <span className="text-[#FF3E24] font-bold">2026</span>
                </div>

                <div className="flex items-center justify-between pb-2.5 border-b border-zinc-900">
                  <div>
                    <span className="text-white font-bold block">Web & Graphic Freelance</span>
                    <span className="text-zinc-500 text-[11px]">Enactus Showcase & Event Platforms</span>
                  </div>
                  <span className="text-zinc-400">2024–NOW</span>
                </div>

                <div className="flex items-center justify-between pb-2.5 border-b border-zinc-900">
                  <div>
                    <span className="text-white font-bold block">Information Systems Intern</span>
                    <span className="text-zinc-500 text-[11px]">Zitouna Banque (Banking Systems)</span>
                  </div>
                  <span className="text-zinc-400">2025</span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-white font-bold block">Lead Project Manager</span>
                    <span className="text-zinc-500 text-[11px]">Club 3 Zero Campus ISET Djerba</span>
                  </div>
                  <span className="text-zinc-400">2024–2025</span>
                </div>
              </div>
            </div>
          </FigmaInspectorTag>

          {/* Education Section: Licence DSI */}
          <div
            id="track-education"
            className={`p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 space-y-2 transition-all duration-700 ${
              educationReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-zinc-400 font-bold">
              <GraduationCap className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>EDUCATION</span>
            </div>
            <h4 className="text-base font-bold text-white">
              Licence DSI — Information Systems Engineering
            </h4>
            <p className="text-xs font-mono text-[#FF3E24]">
              ISET Djerba (2024 – 2027) • 3rd Year Ongoing
            </p>
            <p className="text-xs text-zinc-400">
              Distributed architectures, NoSQL & relational modeling, RESTful microservices, and Agile methodologies.
            </p>
          </div>

          {/* THE FAMOUS DISTINCT ORANGE RECTANGULAR PRINCIPLE BOX! */}
          <div id="orange-principle-container">
            <FigmaInspectorTag label="Principle:OrangeBox" dimension="480x120" isBuilding={isOrangeBuilding}>
              <div
                className={`p-6 rounded-2xl bg-gradient-to-r from-[#FF4500] to-[#FF2E00] text-black shadow-[0_10px_35px_rgba(255,69,0,0.4)] transition-all duration-700 hover:scale-[1.02] ${
                  orangePrincipleReady ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
              >
                <div className="font-mono text-[10px] uppercase font-black tracking-widest text-black/75 mb-1.5 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
                  <span>CORE ENGINEERING PRINCIPLE</span>
                </div>
                <blockquote className="font-heading font-black text-base sm:text-lg uppercase leading-tight tracking-tight text-white drop-shadow-sm">
                  “SHIP THE FEATURE, THEN WRITE THE TEST THAT PROVES IT CAN'T SILENTLY BREAK.”
                </blockquote>
              </div>
            </FigmaInspectorTag>
          </div>

        </div>

      </div>
    </section>
  );
};
