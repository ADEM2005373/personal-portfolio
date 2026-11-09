import React, { useState, useEffect } from "react";
import { playClickSound } from "../utils/audio";
import { Sparkles, Download, Menu, X } from "lucide-react";

interface NavbarProps {
  lang: "fr" | "en";
  setLang: (lang: "fr" | "en") => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    playClickSound(520);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "hero", labelEn: "Home", labelFr: "Accueil" },
    { id: "projects", labelEn: "Projects", labelFr: "Projets" },
    { id: "skills", labelEn: "Stack & AI", labelFr: "Compétences" },
    { id: "experience", labelEn: "Experience", labelFr: "Parcours" },
    { id: "contact", labelEn: "Contact", labelFr: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3.5 flex items-center justify-between pointer-events-none">
      
      {/* Brand: Circular Red Avatar Tag */}
      <div className="pointer-events-auto flex items-center gap-2">
        <a
          href="#hero"
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2.5 bg-zinc-950/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-zinc-800 hover:border-zinc-700 transition-all text-xs font-mono font-medium text-zinc-300 hover:text-white group shadow-lg"
        >
          <div className="w-6 h-6 rounded-full overflow-hidden border border-[#FF3E24] shadow-[0_0_10px_rgba(255,62,36,0.5)]">
            <img src="/adem.jpg" alt="Adem Ouerhani" className="w-full h-full object-cover object-top" />
          </div>
          <span className="font-bold tracking-tight text-white group-hover:text-[#FF3E24] transition-colors">
            Adem Ouerhani
          </span>
          <span className="text-[10px] text-zinc-500 font-mono hidden sm:inline">DSI · '26</span>
        </a>
      </div>

      {/* Center Floating Pill Navigation for Desktop */}
      <nav className="hidden md:flex pointer-events-auto bg-zinc-950/85 backdrop-blur-md border border-zinc-800 rounded-full px-2 py-1.5 shadow-[0_8px_30px_rgb(0,0,0,0.6)] items-center gap-1">
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
                  ? "text-white bg-zinc-800 shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60"
              }`}
            >
              {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#FF3E24]" />}
              <span>{lang === "fr" ? item.labelFr : item.labelEn}</span>
            </button>
          );
        })}
      </nav>

      {/* Right Actions: Lang Switcher, CV Download & Contact PFE */}
      <div className="pointer-events-auto flex items-center gap-2">
        
        {/* Language switch */}
        <button
          onClick={() => {
            playClickSound(640);
            setLang(lang === "fr" ? "en" : "fr");
          }}
          className="bg-zinc-950/85 backdrop-blur-md border border-zinc-800 hover:border-zinc-700 px-2.5 py-1.5 rounded-full text-[11px] font-mono text-zinc-300 hover:text-white transition-all flex items-center gap-1 shadow-sm"
          title="Changer de langue / Switch language"
        >
          <span className={lang === "fr" ? "text-[#FF3E24] font-bold" : "text-zinc-500"}>FR</span>
          <span className="text-zinc-600">/</span>
          <span className={lang === "en" ? "text-[#FF3E24] font-bold" : "text-zinc-500"}>EN</span>
        </button>

        {/* CV Direct Download button */}
        <a
          href="/CV_Adem_Ouerhani.pdf"
          download="CV_Adem_Ouerhani.pdf"
          onClick={() => playClickSound(600)}
          className="hidden sm:flex items-center gap-1.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 px-3 py-1.5 rounded-full text-xs font-mono font-medium transition-all hover:text-white shadow-sm"
          title="Télécharger mon CV en format PDF"
        >
          <Download className="w-3.5 h-3.5 text-[#FF3E24]" />
          <span>CV</span>
        </a>

        {/* Contact CTA */}
        <a
          href="#contact"
          onClick={() => scrollTo("contact")}
          className="hidden lg:flex items-center gap-1.5 bg-[#FF3E24] hover:bg-[#ff553e] text-white text-xs font-semibold px-4 py-1.5 rounded-full transition-all shadow-[0_0_20px_rgba(255,62,36,0.35)] hover:scale-105"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>{lang === "fr" ? "Contact PFE" : "Hire Me"}</span>
        </a>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-full bg-zinc-950/85 border border-zinc-800 text-zinc-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden fixed top-16 left-4 right-4 bg-zinc-950/95 border border-zinc-800 p-4 rounded-2xl shadow-2xl flex flex-col gap-2 z-50">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-left px-3 py-2 text-xs font-mono text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-lg flex items-center justify-between"
            >
              <span>{lang === "fr" ? item.labelFr : item.labelEn}</span>
              <span className="text-zinc-600">›</span>
            </button>
          ))}
          <a
            href="/CV_Adem_Ouerhani.pdf"
            download="CV_Adem_Ouerhani.pdf"
            className="flex items-center justify-center gap-2 bg-zinc-900 text-white text-xs font-mono py-2.5 rounded-lg border border-zinc-800"
          >
            <Download className="w-3.5 h-3.5 text-[#FF3E24]" />
            <span>{lang === "fr" ? "Télécharger CV (PDF)" : "Download Resume (PDF)"}</span>
          </a>
        </div>
      )}

    </header>
  );
};
