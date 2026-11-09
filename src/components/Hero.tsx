import React from "react";
import { ArrowRight, Download, Mail, MapPin, Award, ExternalLink, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { playClickSound } from "../utils/audio";

interface HeroProps {
  lang: "fr" | "en";
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] pt-28 pb-16 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col justify-center overflow-hidden">
      
      {/* Subtle Studio Red Backdrop Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#FF3E24]/15 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Large Dim Typographic Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none opacity-20">
        <span className="font-heading font-black text-[15vw] leading-none uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#FF3E24] via-zinc-800 to-transparent">
          PORTFOLIO
        </span>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        
        {/* Left Column: Introductions & Bio */}
        <div className="lg:col-span-5 space-y-5">
          
          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[#FF3E24] font-bold">
              {lang === "fr" ? "DISPONIBLE PFE 2026" : "AVAILABLE FOR PFE 2026"}
            </span>
            <span className="text-zinc-600">|</span>
            <span className="text-zinc-400">ISET Djerba (DSI)</span>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-1">
              {lang === "fr" ? "Bonjour, je suis" : "Hello, I'm"}
            </p>
            <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tight text-white leading-none font-heading">
              ADEM <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                OUERHANI.
              </span>
            </h1>
            <div className="mt-2 text-xl sm:text-2xl font-black uppercase tracking-tight text-[#FF3E24] flex items-center gap-2">
              <span>SOFTWARE ENGINEER</span>
              <span className="text-zinc-600 font-light">&</span>
              <span>AI BUILDER</span>
            </div>
          </div>

          <p className="text-sm text-zinc-300 leading-relaxed max-w-lg">
            {lang === "fr"
              ? "Développeur Full-Stack MEVN (MongoDB, Express, Vue.js, Node.js) et certifié NVIDIA Deep Learning Institute en accélération Python CUDA. Je conçois des plateformes web scalables, des backends haute performance et des solutions prêtes pour la production."
              : "Full-Stack MEVN (MongoDB, Express, Vue.js, Node.js) developer certified by NVIDIA Deep Learning Institute in CUDA Python acceleration. I architect scalable web platforms, resilient APIs, and production software that actually ships."}
          </p>

          {/* Quick CTA Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href="#projects"
              onClick={() => playClickSound(520)}
              className="inline-flex items-center gap-2 bg-[#FF3E24] hover:bg-[#ff553e] text-white px-5 py-3 rounded-lg text-xs font-mono uppercase tracking-wider font-bold transition-all shadow-[0_0_20px_rgba(255,62,36,0.35)] hover:-translate-y-0.5"
            >
              <span>{lang === "fr" ? "Voir mes projets" : "View Work"}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="/CV_Adem_Ouerhani.pdf"
              download="CV_Adem_Ouerhani.pdf"
              onClick={() => playClickSound(600)}
              className="inline-flex items-center gap-2 bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 hover:border-zinc-700 px-5 py-3 rounded-lg text-xs font-mono uppercase tracking-wider font-semibold transition-all hover:-translate-y-0.5 group"
            >
              <Download className="w-4 h-4 text-[#FF3E24] group-hover:translate-y-0.5 transition-transform" />
              <span>{lang === "fr" ? "Télécharger CV" : "Download CV"}</span>
            </a>
          </div>

          {/* Socials & Credentials Row */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400 pt-3 border-t border-zinc-900">
            <div className="flex items-center gap-1.5 text-zinc-300">
              <MapPin className="w-3.5 h-3.5 text-[#FF3E24]" />
              <span>Djerba, Tunisie</span>
            </div>
            <span>•</span>
            <a
              href="https://github.com/ADEM2005373"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5 text-zinc-400" />
              <span>ADEM2005373</span>
            </a>
            <span>•</span>
            <a
              href="https://linkedin.com/in/adem-ouerhani-724743349"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-[#0077b5]" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Center Column: Cutout Portrait with Neon Studio Backlight */}
        <div className="lg:col-span-4 flex justify-center items-center relative py-4">
          {/* Vertical Studio Neon Red Slit Backdrop */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-60 h-[400px] neon-slit-red rounded-full opacity-60 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-72 h-[340px] bg-[#FF3E24]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative group z-10">
            {/* Subtle glow border */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-[#FF3E24] via-zinc-800 to-zinc-950 opacity-60 group-hover:opacity-100 transition-opacity blur-sm" />

            <div className="relative w-64 sm:w-72 md:w-80 h-80 sm:h-96 rounded-2xl overflow-hidden border border-zinc-800/80 bg-zinc-950 shadow-2xl flex items-center justify-center">
              <img
                src="/adem.jpg"
                alt="Adem Ouerhani — Développeur Full-Stack"
                className="w-full h-full object-cover object-top filter grayscale-[20%] contrast-110 brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-transparent opacity-80" />

              {/* Status pill on bottom of portrait */}
              <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-zinc-950/85 backdrop-blur-md border border-zinc-800/80 flex items-center justify-between text-[11px] font-mono">
                <div className="flex items-center gap-1.5 text-zinc-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-semibold">Adem Ouerhani</span>
                </div>
                <span className="text-[#FF3E24] font-bold">MEVN / DSI</span>
              </div>
            </div>

            {/* NVIDIA CUDA Badge on top of portrait */}
            <div className="absolute -top-3 -right-3 flex items-center gap-1.5 bg-[#76b900] text-black text-[10px] font-mono font-black px-2.5 py-1 rounded-md shadow-xl rotate-2 hover:rotate-0 transition-transform">
              <Award className="w-3.5 h-3.5 text-black" />
              <span>NVIDIA CUDA</span>
            </div>
          </div>
        </div>

        {/* Right Column: Key Impact Metrics & Stats */}
        <div className="lg:col-span-3 flex flex-col justify-center space-y-3.5">
          
          {/* Stat 1: 40 */}
          <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800/80 hover:border-[#FF3E24]/50 transition-all hover:-translate-y-0.5 group">
            <div className="flex items-baseline justify-between">
              <span className="text-4xl font-black font-heading text-white group-hover:text-[#FF3E24] transition-colors">
                40+
              </span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-900">
                UNIT TESTS
              </span>
            </div>
            <p className="text-xs text-zinc-400 mt-1 font-mono uppercase">
              {lang === "fr" ? "Tests unitaires & intégration" : "Backend tests & state machines"}
            </p>
          </div>

          {/* Stat 2: 22+ */}
          <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800/80 hover:border-[#FF3E24]/50 transition-all hover:-translate-y-0.5 group">
            <div className="flex items-baseline justify-between">
              <span className="text-4xl font-black font-heading text-white group-hover:text-[#FF3E24] transition-colors">
                22+
              </span>
              <span className="text-[10px] font-mono text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                REPOSITORIES
              </span>
            </div>
            <p className="text-xs text-zinc-400 mt-1 font-mono uppercase">
              {lang === "fr" ? "Dépôts publics sur GitHub" : "Public GitHub codebases"}
            </p>
          </div>

          {/* Stat 3: 02 */}
          <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800/80 hover:border-[#FF3E24]/50 transition-all hover:-translate-y-0.5 group">
            <div className="flex items-baseline justify-between">
              <span className="text-4xl font-black font-heading text-white group-hover:text-[#FF3E24] transition-colors">
                02
              </span>
              <span className="text-[10px] font-mono text-[#FF3E24] bg-[#FF3E24]/10 px-2 py-0.5 rounded border border-[#FF3E24]/20">
                LIVE SITES
              </span>
            </div>
            <p className="text-xs text-zinc-400 mt-1 font-mono uppercase">
              {lang === "fr" ? "Applications en production réelle" : "Live client deployments"}
            </p>
          </div>

          {/* Stat 4: '26 */}
          <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800/80 hover:border-[#FF3E24]/50 transition-all hover:-translate-y-0.5 group">
            <div className="flex items-baseline justify-between">
              <span className="text-4xl font-black font-heading text-white group-hover:text-[#FF3E24] transition-colors">
                '26
              </span>
              <span className="text-[10px] font-mono text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                PROMOTION
              </span>
            </div>
            <p className="text-xs text-zinc-400 mt-1 font-mono uppercase">
              {lang === "fr" ? "Promotion Licence DSI ISET" : "Graduation Class Year"}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
