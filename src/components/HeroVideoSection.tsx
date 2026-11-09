import React from "react";
import { useVideoBuild } from "../context/VideoBuildEngine";
import { FigmaInspectorTag } from "./FigmaInspectorTag";
import { ArrowRight, MapPin, Award } from "lucide-react";

export const HeroVideoSection: React.FC = () => {
  const { isRevealed } = useVideoBuild();

  const backdropReady = isRevealed("portfolio_backdrop");
  const photoReady = isRevealed("hero_photo");
  const introReady = isRevealed("hero_intro_text");
  const statsReady = isRevealed("hero_stats");

  return (
    <section id="sec-hero" className="relative min-h-screen py-24 px-4 sm:px-6 max-w-7xl mx-auto border-t border-zinc-900 flex flex-col justify-center overflow-hidden">
      
      {/* 1. Large Faint Red "PORTFOLIO" Text in Background */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none transition-all duration-1000 ${
          backdropReady ? "opacity-35 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <span className="font-heading font-black text-[15vw] leading-none uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#FF3E24] via-[#991b1b] to-black drop-shadow-[0_15px_30px_rgba(255,62,36,0.25)]">
          PORTFOLIO
        </span>
      </div>

      {/* Background Radial Red Studio Glow */}
      <div
        className={`absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[500px] neon-glow-red pointer-events-none transition-opacity duration-1000 ${
          photoReady ? "opacity-40" : "opacity-0"
        }`}
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Side: "Hello, I'm ADEM OUERHANI." + Title + Bio */}
        <div
          className={`lg:col-span-5 space-y-5 transition-all duration-700 ${
            introReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
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
            <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tight text-white leading-none">
              ADEM <br />
              <span className="text-white">OUERHANI.</span>
            </h1>
            <div className="mt-2 text-xl sm:text-2xl font-black uppercase tracking-tight text-[#FF3E24] flex items-center gap-2">
              <span>SOFTWARE ENGINEER</span>
              <span className="text-zinc-600 font-light">&</span>
              <span>AI BUILDER</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-lg">
            I build scalable web apps, robust backends, and AI-accelerated workflows that actually ship. Full-stack developer at Dizy Web and an Information Systems student in Djerba, Tunisia.
          </p>

          <div className="flex items-center gap-3 pt-2">
            <a
              href="#sec-projects"
              className="inline-flex items-center gap-2 bg-[#FF3E24] hover:bg-[#ff553e] text-white px-5 py-3 rounded-md text-xs font-mono uppercase tracking-wider font-bold transition-all shadow-[0_0_20px_rgba(255,62,36,0.35)] hover:-translate-y-0.5"
            >
              <span>VIEW WORK</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#sec-contact"
              className="inline-flex items-center gap-2 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 px-5 py-3 rounded-md text-xs font-mono uppercase tracking-wider font-semibold transition-all hover:-translate-y-0.5"
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

        {/* Center: Photograph of man wearing a suit (Adem) */}
        <div
          className={`lg:col-span-4 flex justify-center items-center relative py-6 transition-all duration-1000 ${
            photoReady ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          {/* Vertical Studio Neon Red Slit Backdrop */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 h-[440px] neon-slit-red rounded-full opacity-60 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-80 h-[380px] bg-[#FF3E24]/20 rounded-full blur-3xl pointer-events-none" />

          <FigmaInspectorTag label="PortraitFrame" dimension="440x440" className="relative z-10">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-[#FF3E24] via-zinc-800 to-transparent opacity-60 group-hover:opacity-100 transition-opacity blur-sm" />

              <div className="relative w-64 sm:w-72 md:w-80 h-80 sm:h-96 rounded-2xl overflow-hidden border border-zinc-800/80 bg-zinc-950 shadow-2xl flex items-center justify-center">
                <img
                  src="/adem.jpg"
                  alt="Adem Ouerhani"
                  className="w-full h-full object-cover object-top filter grayscale contrast-125 brightness-95 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-zinc-950/80 backdrop-blur-md border border-zinc-800/80 flex items-center justify-between text-[11px] font-mono">
                  <div className="flex items-center gap-1.5 text-zinc-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Adem Ouerhani</span>
                  </div>
                  <span className="text-[#FF3E24] font-semibold">MEVN / DSI</span>
                </div>
              </div>

              {/* Floating badges on portrait */}
              <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-1.5 bg-[#76b900] text-black text-[10px] font-mono font-bold px-2.5 py-1 rounded-md shadow-lg rotate-3">
                <Award className="w-3 h-3 text-black" />
                <span>NVIDIA CUDA</span>
              </div>
            </div>
          </FigmaInspectorTag>
        </div>

        {/* Right Side: Numerical Statistics ("40", "82", "02", "26") */}
        <div
          className={`lg:col-span-3 flex flex-col justify-center space-y-4 transition-all duration-700 ${
            statsReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Stat 1: 40 */}
          <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80 hover:border-[#FF3E24]/50 transition-all">
            <div className="flex items-baseline justify-between">
              <span className="text-4xl font-black font-heading text-white">40</span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-900">
                UNIT TESTS
              </span>
            </div>
            <p className="text-xs text-zinc-400 mt-1 font-mono uppercase">Backend tests & coverage</p>
          </div>

          {/* Stat 2: 22 */}
          <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80 hover:border-[#FF3E24]/50 transition-all">
            <div className="flex items-baseline justify-between">
              <span className="text-4xl font-black font-heading text-white">22+</span>
              <span className="text-[10px] font-mono text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                REPOSITORIES
              </span>
            </div>
            <p className="text-xs text-zinc-400 mt-1 font-mono uppercase">Public GitHub codebases</p>
          </div>

          {/* Stat 3: 02 */}
          <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80 hover:border-[#FF3E24]/50 transition-all">
            <div className="flex items-baseline justify-between">
              <span className="text-4xl font-black font-heading text-white">02</span>
              <span className="text-[10px] font-mono text-[#FF3E24] bg-[#FF3E24]/10 px-2 py-0.5 rounded">
                LIVE PRODUCTION
              </span>
            </div>
            <p className="text-xs text-zinc-400 mt-1 font-mono uppercase">Sites in live deployment</p>
          </div>

          {/* Stat 4: 26 */}
          <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80 hover:border-[#FF3E24]/50 transition-all">
            <div className="flex items-baseline justify-between">
              <span className="text-4xl font-black font-heading text-white">'26</span>
              <span className="text-[10px] font-mono text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                CLASS
              </span>
            </div>
            <p className="text-xs text-zinc-400 mt-1 font-mono uppercase">DSI Graduation Year</p>
          </div>
        </div>

      </div>

    </section>
  );
};
