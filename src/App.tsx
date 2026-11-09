import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsAndCertifications } from "./components/SkillsAndCertifications";
import { ExperienceSection } from "./components/ExperienceSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { BottomDock } from "./components/BottomDock";

export const App: React.FC = () => {
  const [lang, setLang] = useState<"fr" | "en">("fr");

  return (
    <div className="relative min-h-screen bg-[#070709] text-zinc-100 overflow-x-hidden selection:bg-[#FF3E24] selection:text-white antialiased">
      {/* Top Floating Navigation */}
      <Navbar lang={lang} setLang={setLang} />

      {/* Main Content Sections */}
      <main className="space-y-4">
        {/* 1. Hero: Bio, Portrait with Red Neon Backlight, Key Impact Stats */}
        <Hero lang={lang} />

        {/* 2. Flagship Projects: PASSI, HYDROOBLOOM, DIZY WEB, ENACTUS, ECOTRACK + Modal Architecture */}
        <ProjectsSection lang={lang} />

        {/* 3. Skills & Official NVIDIA CUDA DLI Certification Card + Orange Principle Box */}
        <SkillsAndCertifications lang={lang} />

        {/* 4. Experience Timeline & Higher Education (Licence DSI ISET Djerba) */}
        <ExperienceSection lang={lang} />

        {/* 5. Contact Direct, PFE 2026, Fast Messaging & Orange Callout */}
        <ContactSection lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Floating Bottom Status Dock with Djerba Time, Audio Toggle & Back to Top */}
      <BottomDock lang={lang} />
    </div>
  );
};

export default App;
