import React, { useState, useEffect } from "react";
import { toggleSound, isSoundEnabled, playPopSound, playClickSound } from "../utils/audio";
import { useVideoBuild } from "../context/VideoBuildEngine";
import { Volume2, VolumeX, Clock, RotateCcw, ChevronUp, Square, Play } from "lucide-react";

interface BottomDockProps {
  lang: "fr" | "en";
}

export const BottomDock: React.FC<BottomDockProps> = ({ lang }) => {
  const { isBuilding, isFinished, stopBuild, replayBuild } = useVideoBuild();
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
      aria-label="Agent Build Controls"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 max-w-2xl w-[96%] sm:w-auto pointer-events-auto select-none"
    >
      <div className="bg-zinc-950/90 backdrop-blur-md border border-zinc-800/90 rounded-full px-4 py-2 shadow-[0_10px_40px_rgba(0,0,0,0.85)] flex items-center justify-between sm:justify-center gap-3 sm:gap-4 text-xs font-mono">
        
        {/* Authentic Status Indicator matching the video: "12 AGENTS LIVE" */}
        <div className="flex items-center gap-2">
          <div
            className={`w-2 h-2 rounded-full ${
              isBuilding ? "bg-[#FF3E24] animate-ping" : "bg-emerald-400"
            }`}
          />
          <span className="text-white font-bold text-[11px] tracking-wider whitespace-nowrap">
            {isBuilding ? "12 AGENTS LIVE" : "AGENTS IDLE"}
          </span>
          <span className="text-zinc-500 hidden sm:inline">•</span>
          <span className="text-zinc-400 text-[11px] hidden sm:inline">
            {isBuilding ? "AGENTS ON" : "READY"}
          </span>
        </div>

        <span className="text-zinc-800">|</span>

        {/* Action Button: [STOP] when building, [REBUILD] when completed */}
        {isBuilding ? (
          <button
            onClick={stopBuild}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-white bg-zinc-800 hover:bg-zinc-700 font-bold transition-all text-[11px] border border-zinc-700"
            title="Stop building agents and view page immediately"
          >
            <Square className="w-3 h-3 text-[#FF3E24] fill-[#FF3E24]" />
            <span>STOP</span>
          </button>
        ) : (
          <button
            onClick={() => {
              playPopSound();
              replayBuild();
            }}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-white bg-[#FF3E24] hover:bg-[#ff553e] font-bold shadow-[0_0_15px_rgba(255,62,36,0.35)] transition-all text-[11px] group"
            title="Re-run dynamic agent cursor build animation"
          >
            <RotateCcw className="w-3 h-3 group-hover:-rotate-90 transition-transform" />
            <span>REBUILD PAGE</span>
          </button>
        )}

        <span className="text-zinc-800 hidden sm:inline">|</span>

        {/* Djerba Local Time */}
        <div className="hidden md:flex items-center gap-1.5 text-zinc-400 text-[11px]">
          <Clock className="w-3.5 h-3.5 text-zinc-500" />
          <span className="text-zinc-300 font-mono">{timeStr}</span>
          <span className="text-zinc-600">DJERBA</span>
        </div>

        <span className="text-zinc-800 hidden sm:inline">|</span>

        {/* Sound toggle */}
        <button
          onClick={handleSoundToggle}
          className="p-1 rounded-full text-zinc-400 hover:text-white transition-colors"
          title={soundOn ? "Mute audio" : "Enable audio"}
        >
          {soundOn ? <Volume2 className="w-3.5 h-3.5 text-zinc-300" /> : <VolumeX className="w-3.5 h-3.5 text-zinc-600" />}
        </button>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="p-1 rounded-full text-zinc-400 hover:text-white transition-colors"
          title="Scroll to top"
        >
          <ChevronUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </aside>
  );
};
