import React, { useState, useEffect } from "react";
import { playClickSound } from "../utils/audio";
import { Sparkles } from "lucide-react";

interface NavbarProps {
  lang: "fr" | "en";
  setLang: (lang: "fr" | "en") => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  const [activeSection, setActiveSection] = useState("sec-hero");

  const scrollTo = (id: string) => {
    playClickSound(520);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "sec-hero", labelEn: "Profile", labelFr: "Profil" },
    { id: "sec-initial", labelEn: "Clients", labelFr: "Clients" },
    { id: "sec-trackrecord", labelEn: "Experience", labelFr: "Parcours" },
    { id: "sec-projects", labelEn: "Projects", labelFr: "Projets" },
    { id: "sec-contact", labelEn: "Contact", labelFr: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 py-4 flex items-center justify-between pointer-events-none">
      {/* Brand logo tag */}
      <div className="pointer-events-auto flex items-center gap-2">
        <a
          href="#sec-hero"
          onClick={() => scrollTo("sec-hero")}
          className="flex items-center gap-2 bg-zinc-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-zinc-800/80 hover:border-zinc-700 transition-all text-xs font-mono font-medium text-zinc-300 hover:text-white group"
        >
          <div className="w-2 h-2 rounded-full bg-[#FF3E24] animate-pulse" />
          <span className="font-bold tracking-tight text-white group-hover:text-[#FF3E24] transition-colors">
            ADEM.O
          </span>
          <span className="text-[10px] text-zinc-500 font-mono">DSI · '26</span>
        </a>
      </div>

      {/* Center Floating Pill Navigation */}
      <nav className="pointer-events-auto bg-zinc-950/80 backdrop-blur-md border border-zinc-800/80 rounded-full px-2 py-1.5 shadow-[0_8px_30px_rgb(0,0,0,0.5)] flex items-center gap-1">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id);
                scrollTo(item.id);
              }}
              className={`relative px-3.5 py-1 text-xs font-medium transition-all rounded-full flex items-center gap-1.5 ${
                isActive
                  ? "text-white bg-zinc-800/90 shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60"
              }`}
            >
              {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#FF3E24]" />}
              <span>{lang === "fr" ? item.labelFr : item.labelEn}</span>
            </button>
          );
        })}
      </nav>

      {/* Right Actions: Lang Switcher & CTA */}
      <div className="pointer-events-auto flex items-center gap-2">
        <button
          onClick={() => {
            playClickSound(640);
            setLang(lang === "fr" ? "en" : "fr");
          }}
          className="bg-zinc-950/80 backdrop-blur-md border border-zinc-800/80 hover:border-zinc-700 px-2.5 py-1.5 rounded-full text-[11px] font-mono text-zinc-300 hover:text-white transition-all flex items-center gap-1"
          title="Switch language"
        >
          <span className={lang === "fr" ? "text-[#FF3E24] font-bold" : "text-zinc-500"}>FR</span>
          <span className="text-zinc-600">/</span>
          <span className={lang === "en" ? "text-[#FF3E24] font-bold" : "text-zinc-500"}>EN</span>
        </button>

        <a
          href="#sec-contact"
          onClick={() => scrollTo("sec-contact")}
          className="hidden md:flex items-center gap-1.5 bg-[#FF3E24] hover:bg-[#ff553e] text-white text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all shadow-[0_0_20px_rgba(255,62,36,0.35)]"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>{lang === "fr" ? "Discuter PFE" : "Hire Me"}</span>
        </a>
      </div>
    </header>
  );
};
