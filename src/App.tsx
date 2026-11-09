import React, { useState } from "react";
import { VideoBuildProvider } from "./context/VideoBuildEngine";
import { CursorChoreography } from "./components/CursorChoreography";
import { Navbar } from "./components/Navbar";
import { TeaserProjectsSection } from "./components/TeaserProjectsSection";
import { TrackRecordSection } from "./components/TrackRecordSection";
import { ContactVideoSection } from "./components/ContactVideoSection";
import { HeroVideoSection } from "./components/HeroVideoSection";
import { WorkThatShipsSection } from "./components/WorkThatShipsSection";
import { Footer } from "./components/Footer";
import { BottomDock } from "./components/BottomDock";

export const AppContent: React.FC = () => {
  const [lang, setLang] = useState<"fr" | "en">("fr");

  return (
    <div className="relative min-h-screen bg-[#070709] text-zinc-100 overflow-x-hidden selection:bg-[#FF3E24] selection:text-white">
      {/* Exact 00:00 - 00:38 Chronological Cursor Overlay & HUD */}
      <CursorChoreography />

      {/* Floating Header */}
      <Navbar lang={lang} setLang={setLang} />

      {/* Main Content Sections in Exact Chronological Video Order */}
      <main className="space-y-4">
        {/* 1. Initial Numbered Sections (00:00 - 00:03) */}
        <TeaserProjectsSection />

        {/* 2 & 3. "Built Fast" & Timeline & Principles (00:03 - 00:17) */}
        <TrackRecordSection />

        {/* 4. Contact Section & Orange "SHIP IT FOR REAL" (00:17 - 00:21) */}
        <ContactVideoSection />

        {/* 5. Hero Profile Section & Red "PORTFOLIO" 3D (00:21 - 00:30) */}
        <HeroVideoSection />

        {/* 6. Projects Section: "WORK THAT SHIPS." (00:30 - 00:38) */}
        <WorkThatShipsSection />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Floating Bottom Dock with Timeline Status & Replay Button */}
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
