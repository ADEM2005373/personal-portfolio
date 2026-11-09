import React, { useState, useEffect } from "react";
import { toggleSound, isSoundEnabled, playPopSound, playClickSound } from "../utils/audio";
import { Volume2, VolumeX, Clock, ChevronUp, Download } from "lucide-react";

interface BottomDockProps {
  lang: "fr" | "en";
}

export const BottomDock: React.FC<BottomDockProps> = ({ lang }) => {
  const [soundOn, setSoundOn] = useState(true);
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Africa/Tunis",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setTimeStr(new Intl.DateTimeFormat("en-GB", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSoundToggle = () => {
    const newState = toggleSound();
    setSoundOn(newState);
  };

  const scrollToTop = () => {
    playClickSound(480);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <aside
      aria-label="Floating Controls Dock"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 max-w-xl w-[94%] sm:w-auto pointer-events-auto select-none"
    >
      <div className="bg-zinc-950/90 backdrop-blur-md border border-zinc-800/90 rounded-full px-4 py-2 shadow-[0_10px_40px_rgba(0,0,0,0.85)] flex items-center justify-between sm:justify-center gap-3 sm:gap-4 text-xs font-mono">
        
        {/* Availability Badge */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-white font-bold text-[11px] tracking-wider whitespace-nowrap">
            {lang === "fr" ? "DISPONIBLE PFE 2026" : "AVAILABLE PFE 2026"}
          </span>
        </div>

        <span className="text-zinc-800 hidden sm:inline">|</span>

        {/* Djerba Local Time */}
        <div className="flex items-center gap-1.5 text-zinc-400 text-[11px]">
          <Clock className="w-3.5 h-3.5 text-zinc-500" />
          <span className="text-zinc-300 font-mono">{timeStr}</span>
          <span className="text-zinc-600 hidden sm:inline">DJERBA</span>
        </div>

        <span className="text-zinc-800">|</span>

        {/* CV Direct Download button */}
        <a
          href="/CV_Adem_Ouerhani.pdf"
          download="CV_Adem_Ouerhani.pdf"
          onClick={() => playPopSound()}
          className="flex items-center gap-1 text-[11px] font-mono text-zinc-300 hover:text-white transition-colors"
          title="Télécharger mon CV (PDF)"
        >
          <Download className="w-3 h-3 text-[#FF3E24]" />
          <span>CV</span>
        </a>

        <span className="text-zinc-800">|</span>

        {/* Sound toggle */}
        <button
          onClick={handleSoundToggle}
          className="p-1 rounded-full text-zinc-400 hover:text-white transition-colors"
          title={soundOn ? "Désactiver le son" : "Activer le son"}
        >
          {soundOn ? <Volume2 className="w-3.5 h-3.5 text-zinc-300" /> : <VolumeX className="w-3.5 h-3.5 text-zinc-600" />}
        </button>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="p-1 rounded-full text-zinc-400 hover:text-white transition-colors"
          title="Retour en haut"
        >
          <ChevronUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </aside>
  );
};
