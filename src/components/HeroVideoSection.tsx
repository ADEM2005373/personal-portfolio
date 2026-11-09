import React from "react";
import { useVideoBuild } from "../context/VideoBuildEngine";
import { FigmaInspectorTag } from "./FigmaInspectorTag";
import { ArrowRight, MapPin, Award } from "lucide-react";

export const HeroVideoSection: React.FC = () => {
  const { isRevealed, isElementBuilding } = useVideoBuild();

  const backdropReady = isRevealed("hero_backdrop");
  const photoReady = isRevealed("hero_photo");
  const introReady = isRevealed("hero_intro");
  const statsReady = isRevealed("hero_stats");

  const isPhotoBuilding = isElementBuilding("hero_photo");
  const isIntroBuilding = isElementBuilding("hero_intro");
  const isStatsBuilding = isElementBuilding("hero_stats");

  return (
    <section
      id="sec-hero"
      className="relative min-h-[92vh] pt-24 pb-16 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col justify-center overflow-hidden"
    >
      {/* 1. Large Faint Red "PORTFOLIO" Text in Background */}
      <div
        id="hero-backdrop"
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none transition-all duration-1000 ${
          backdropReady ? "opacity-35 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <span className="font-heading font-black text-[14vw] leading-none uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#FF3E24] via-[#991b1b] to-black drop-shadow-[0_15px_30px_rgba(255,62,36,0.25)]">
          PORTFOLIO
        </span>
      </div>

      {/* Background Radial Red Studio Glow */}
      <div
        className={`absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[450px] neon-glow-red pointer-events-none transition-opacity duration-1000 ${
          photoReady ? "opacity-40" : "opacity-0"
        }`}
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        
        {/* Left Side: "Hello, I'm ADEM OUERHANI." + Title + Bio */}
        <div
          className={`lg:col-span-5 space-y-4 transition-all duration-700 ${
            introReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <FigmaInspectorTag label="Hero:Intro" dimension="480x280" isBuilding={isIntroBuilding}>
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-[#FF3E24] font-bold">PFE 2026</span>
                <span className="text-zinc-600">|</span>
                <span>ISET DJERBA</span>
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-1">
                  <span className="italic font-serif text-sm text-zinc-300">Hello, I'm</span>
                </p>
                <h1 id="hero-name" className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none">
                  ADEM <br />
                  <span className="text-white">OUERHANI.</span>
                </h1>
                <div id="hero-title" className="mt-2 text-lg sm:text-xl font-black uppercase tracking-tight text-[#FF3E24] flex items-center gap-2">
                  <span>SOFTWARE ENGINEER</span>
                  <span className="text-zinc-600 font-light">&</span>
                  <span>AI BUILDER</span>
                </div>
              </div>

              <p id="hero-bio" className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-lg">
                I build scalable web apps, robust backends, and AI-accelerated workflows that actually ship. Full-stack developer at Dizy Web and an Information Systems student in Djerba, Tunisia.
              </p>

              <div id="hero-cta" className="flex items-center gap-3 pt-1">
                <a
                  href="#sec-work"
                  className="inline-flex items-center gap-2 bg-[#FF3E24] hover:bg-[#ff553e] text-white px-5 py-2.5 rounded-md text-xs font-mono uppercase tracking-wider font-bold transition-all shadow-[0_0_20px_rgba(255,62,36,0.35)] hover:-translate-y-0.5"
                >
                  <span>VIEW WORK</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#sec-contact"
                  className="inline-flex items-center gap-2 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 px-5 py-2.5 rounded-md text-xs font-mono uppercase tracking-wider font-semibold transition-all hover:-translate-y-0.5"
                >
                  <span>GET IN TOUCH</span>
                </a>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 pt-2 border-t border-zinc-900">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#FF3E24]" />
                  <span>Djerba, Tunisia</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-emerald-400" />
                  <span>NVIDIA CUDA Python</span>
                </div>
              </div>
            </div>
          </FigmaInspectorTag>
        </div>

        {/* Center: Photograph of man wearing a suit (Adem) */}
        <div
          id="hero-photo-frame"
          className={`lg:col-span-4 flex justify-center items-center relative py-4 transition-all duration-1000 ${
            photoReady ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          {/* Vertical Studio Neon Red Slit Backdrop */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 sm:w-56 h-[400px] neon-slit-red rounded-full opacity-60 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-72 h-[340px] bg-[#FF3E24]/20 rounded-full blur-3xl pointer-events-none" />

          <FigmaInspectorTag label="Photo:Adem_Suit" dimension="320x380" className="relative z-10" isBuilding={isPhotoBuilding}>
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-[#FF3E24] via-zinc-800 to-transparent opacity-60 group-hover:opacity-100 transition-opacity blur-sm" />

              <div className="relative w-60 sm:w-64 md:w-72 h-76 sm:h-88 md:h-92 rounded-2xl overflow-hidden border border-zinc-800/80 bg-zinc-950 shadow-2xl flex items-center justify-center">
                <img
                  src="/adem.jpg"
                  alt="Adem Ouerhani"
                  className="w-full h-full object-cover object-top filter grayscale contrast-125 brightness-95 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-3 left-3 right-3 p-2 rounded-lg bg-zinc-950/80 backdrop-blur-md border border-zinc-800/80 flex items-center justify-between text-[11px] font-mono">
                  <div className="flex items-center gap-1.5 text-zinc-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Adem Ouerhani</span>
                  </div>
                  <span className="text-[#FF3E24] font-semibold">MEVN / DSI</span>
                </div>
              </div>

              {/* Floating badge on portrait */}
              <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-1.5 bg-[#76b900] text-black text-[10px] font-mono font-bold px-2.5 py-1 rounded-md shadow-lg rotate-3">
                <Award className="w-3 h-3 text-black" />
                <span>NVIDIA CUDA</span>
              </div>
            </div>
          </FigmaInspectorTag>
        </div>

        {/* Right Side: Numerical Statistics ("40", "82", "02", "26") */}
        <div
          className={`lg:col-span-3 flex flex-col justify-center space-y-3.5 transition-all duration-700 ${
            statsReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <FigmaInspectorTag label="Stats:Grid" dimension="240x360" isBuilding={isStatsBuilding}>
            <div className="space-y-3">
              {/* Stat 1: 40 */}
              <div id="hero-stat-0" className="p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800/80 hover:border-[#FF3E24]/50 transition-all">
                <div className="flex items-baseline justify-between">
                  <span className="text-3xl font-black font-heading text-white">40</span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-900">
                    UNIT TESTS
                  </span>
                </div>
                <p className="text-[11px] text-zinc-400 mt-0.5 font-mono uppercase">Backend tests & coverage</p>
              </div>

              {/* Stat 2: 22 */}
              <div id="hero-stat-1" className="p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800/80 hover:border-[#FF3E24]/50 transition-all">
                <div className="flex items-baseline justify-between">
                  <span className="text-3xl font-black font-heading text-white">22+</span>
                  <span className="text-[10px] font-mono text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                    REPOSITORIES
                  </span>
                </div>
                <p className="text-[11px] text-zinc-400 mt-0.5 font-mono uppercase">Public GitHub codebases</p>
              </div>

              {/* Stat 3: 02 */}
              <div id="hero-stat-2" className="p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800/80 hover:border-[#FF3E24]/50 transition-all">
                <div className="flex items-baseline justify-between">
                  <span className="text-3xl font-black font-heading text-white">02</span>
                  <span className="text-[10px] font-mono text-[#FF3E24] bg-[#FF3E24]/10 px-2 py-0.5 rounded">
                    LIVE SITES
                  </span>
                </div>
                <p className="text-[11px] text-zinc-400 mt-0.5 font-mono uppercase">Sites in live deployment</p>
              </div>

              {/* Stat 4: 26 */}
              <div id="hero-stat-3" className="p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800/80 hover:border-[#FF3E24]/50 transition-all">
                <div className="flex items-baseline justify-between">
                  <span className="text-3xl font-black font-heading text-white">'26</span>
                  <span className="text-[10px] font-mono text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                    CLASS
                  </span>
                </div>
                <p className="text-[11px] text-zinc-400 mt-0.5 font-mono uppercase">DSI Graduation Year</p>
              </div>
            </div>
          </FigmaInspectorTag>
        </div>

      </div>
    </section>
  );
};
