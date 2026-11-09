import React, { useState, useEffect } from "react";
import { toggleSound, isSoundEnabled, playPopSound, playClickSound } from "../utils/audio";
import { useVideoBuild } from "../context/VideoBuildEngine";
import { Volume2, VolumeX, Clock, RotateCcw, ChevronUp, Play, Pause } from "lucide-react";

interface BottomDockProps {
  lang: "fr" | "en";
}

export const BottomDock: React.FC<BottomDockProps> = ({ lang }) => {
  const { currentTime, isPlaying, isFinished, togglePlay, replay } = useVideoBuild();
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

  const formatTimer = (s: number) => {
    const clamped = Math.min(38, Math.floor(s));
    return `00:${clamped.toString().padStart(2, "0")}`;
  };

  return (
    <aside
      aria-label="Bottom Status Dock"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 max-w-2xl w-[96%] sm:w-auto pointer-events-auto"
    >
      <div className="bg-zinc-950/90 backdrop-blur-md border border-zinc-800/90 rounded-full px-3.5 sm:px-5 py-2 shadow-[0_10px_40px_rgba(0,0,0,0.85)] flex items-center justify-between sm:justify-center gap-3 sm:gap-4 text-xs font-mono">
        
        {/* Status / Timer Indicator */}
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${isFinished ? "bg-emerald-400" : "bg-[#FF3E24] animate-ping"}`} />
          <span className="text-white font-bold text-[11px] tracking-wider whitespace-nowrap">
            {isFinished ? "PORTFOLIO READY" : `BUILDING ${formatTimer(currentTime)} / 00:38`}
          </span>
        </div>

        <span className="text-zinc-800 hidden sm:inline">|</span>

        {/* Play/Pause Timeline */}
        {!isFinished && (
          <button
            onClick={togglePlay}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 text-[11px]"
            title={isPlaying ? "Pause timeline" : "Play timeline"}
          >
            {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 text-[#FF3E24]" />}
            <span>{isPlaying ? "PAUSE" : "RESUME"}</span>
          </button>
        )}

        {/* Replay 00:38 Build Button */}
        <button
          onClick={() => {
            playPopSound();
            replay();
          }}
          className="flex items-center gap-1.5 px-3 py-1 rounded-full text-white bg-[#FF3E24] hover:bg-[#ff553e] font-bold shadow-[0_0_15px_rgba(255,62,36,0.4)] transition-all text-[11px] group"
          title="Replay full 38-second build animation"
        >
          <RotateCcw className="w-3 h-3 group-hover:-rotate-90 transition-transform" />
          <span className="font-mono">REPLAY (00:38)</span>
        </button>

        <span className="text-zinc-800 hidden sm:inline">|</span>

        {/* Djerba Local Time */}
        <div className="hidden md:flex items-center gap-1.5 text-zinc-400 text-[11px]">
          <Clock className="w-3.5 h-3.5 text-zinc-500" />
          <span className="text-zinc-300 font-mono">{timeStr}</span>
          <span className="text-zinc-600">DJERBA</span>
        </div>

        <span className="text-zinc-800 hidden sm:inline">|</span>

        {/* Sound FX Toggle */}
        <button
          onClick={handleSoundToggle}
          className={`flex items-center gap-1.5 px-2 py-1 rounded-full transition-all text-[11px] ${
            soundOn ? "text-[#FF3E24] hover:text-[#ff6b57]" : "text-zinc-500 hover:text-zinc-300"
          }`}
          title={soundOn ? "Mute audio" : "Unmute audio"}
        >
          {soundOn ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
        </button>

        {/* Scroll to Top */}
        <button
          onClick={scrollToTop}
          className="p-1 rounded-full text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 transition-colors"
          title="Top of page"
        >
          <ChevronUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </aside>
  );
};
