import React, { useState } from "react";
import { VideoBuildProvider } from "./context/VideoBuildEngine";
import { CursorChoreography } from "./components/CursorChoreography";
import { Navbar } from "./components/Navbar";
import { HeroVideoSection } from "./components/HeroVideoSection";
import { WorkThatShipsSection } from "./components/WorkThatShipsSection";
import { TrackRecordSection } from "./components/TrackRecordSection";
import { ContactVideoSection } from "./components/ContactVideoSection";
import { Footer } from "./components/Footer";
import { BottomDock } from "./components/BottomDock";

export const AppContent: React.FC = () => {
  const [lang, setLang] = useState<"fr" | "en">("fr");

  return (
    <div className="relative min-h-screen bg-[#070709] text-zinc-100 overflow-x-hidden selection:bg-[#FF3E24] selection:text-white">
      {/* 12 Live Autonomous Agent Cursors (Building animation trick) */}
      <CursorChoreography />

      {/* Floating Header Navbar */}
      <Navbar lang={lang} setLang={setLang} />

      {/* Main Content in Natural Portfolio Order */}
      <main className="space-y-4">
        {/* 1. Hero Section (Home) - Red PORTFOLIO, Portrait, Hello Adem Ouerhani, Stats */}
        <HeroVideoSection />

        {/* 2. Projects Section (Work) - "WORK THAT SHIPS.", 01 PASSI, 02 HYDROOBLOOM, 03 DIZY WEB, 04 ENACTUS */}
        <WorkThatShipsSection />

        {/* 3. Track Record & Principles (About) - "BUILT FAST. SHIPPED REAL.", 40., Orange Principle Box */}
        <TrackRecordSection />

        {/* 4. Contact Section (Contact) - "LET'S WORK TOGETHER.", Orange "SHIP IT FOR REAL." */}
        <ContactVideoSection />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Floating Bottom Dock with "12 AGENTS LIVE" and controls */}
      <BottomDock lang={lang} />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <VideoBuildProvider>
      <AppContent />
    </VideoBuildProvider>
  );
};

export default App;
