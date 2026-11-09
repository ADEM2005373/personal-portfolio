import React from "react";
import { useVideoBuild } from "../context/VideoBuildEngine";
import { FigmaInspectorTag } from "./FigmaInspectorTag";
import { ExternalLink, Terminal } from "lucide-react";
import { GithubIcon } from "./Icons";

export const TeaserProjectsSection: React.FC = () => {
  const { isRevealed } = useVideoBuild();

  const sec03Ready = isRevealed("sec03_title");
  const sec04Ready = isRevealed("sec04_title");
  const sec03PillsReady = isRevealed("sec03_pills");
  const sec04PillsReady = isRevealed("sec04_pills");

  return (
    <section id="sec-initial" className="min-h-[85vh] pt-24 pb-16 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col justify-center">
      <div className="mb-6 font-mono text-xs uppercase tracking-widest text-zinc-500 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#FF3E24]" />
        <span>00:00 — RECENTLY DEPLOYED PRODUCTION CLIENTS</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
        {/* 03 DIZY WEB. (corresponds to 03 DUM.) */}
        <FigmaInspectorTag label="Section:03" dimension="580x320">
          <div
            className={`p-7 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 transition-all duration-700 ${
              sec03Ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl font-black font-heading text-[#FF3E24]">03</span>
              <span className="text-xs font-mono text-zinc-500 uppercase">DIGITAL MARKETING PORTAL</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-black uppercase text-white tracking-tight mb-2">
              DIZY WEB.
            </h2>
            <p className="text-xs text-zinc-400 leading-relaxed mb-6">
              A high-performance digital marketing agency platform with centralized client workflows, real-time campaign tracking, and agile operational delivery.
            </p>

            {/* Dropped Pill-shaped Tags (Next.js, React, Tailwind, etc.) */}
            <div
              className={`flex flex-wrap gap-2 transition-all duration-700 ${
                sec03PillsReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {["Vue.js", "Express.js", "Node.js", "MongoDB", "Tailwind CSS", "REST API"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-mono bg-zinc-900 text-zinc-300 border border-zinc-800 hover:border-[#FF3E24] transition-all hover:scale-105"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-900 flex items-center justify-between text-xs font-mono text-zinc-400">
              <a
                href="https://github.com/ADEM2005373/dizyweb"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Code Repo</span>
              </a>
              <span className="text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded text-[10px] border border-emerald-900">
                LIVE PRODUCTION
              </span>
            </div>
          </div>
        </FigmaInspectorTag>

        {/* 04 ENACTUS PORTAL. (corresponds to 04 CUBAN CLUB) */}
        <FigmaInspectorTag label="Section:04" dimension="580x320">
          <div
            className={`p-7 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 transition-all duration-700 ${
              sec04Ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl font-black font-heading text-[#FF3E24]">04</span>
              <span className="text-xs font-mono text-zinc-500 uppercase">3D INTERACTIVE SHOWCASE</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-black uppercase text-white tracking-tight mb-2">
              ENACTUS CLUB.
            </h2>
            <p className="text-xs text-zinc-400 leading-relaxed mb-6">
              A premium, visually stunning website for Enactus ISET Djerba featuring advanced Three.js 3D wireframe globe, 2000+ floating golden particles, and glassmorphism.
            </p>

            {/* Dropped Pill-shaped Tags */}
            <div
              className={`flex flex-wrap gap-2 transition-all duration-700 ${
                sec04PillsReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {["Three.js", "JavaScript ES6+", "WebGL Canvas", "CSS Glassmorphism", "Agile"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-mono bg-zinc-900 text-zinc-300 border border-zinc-800 hover:border-[#FF3E24] transition-all hover:scale-105"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-900 flex items-center justify-between text-xs font-mono text-zinc-400">
              <a
                href="https://github.com/ADEM2005373/enactusweb"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Code Repo</span>
              </a>
              <span className="text-[#FF3E24] bg-[#FF3E24]/10 px-2 py-0.5 rounded text-[10px] border border-[#FF3E24]/30">
                AWARD WINNING UI
              </span>
            </div>
          </div>
        </FigmaInspectorTag>

      </div>
    </section>
  );
};
