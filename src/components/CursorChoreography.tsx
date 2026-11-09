import React from "react";
import { useVideoBuild } from "../context/VideoBuildEngine";
import { Play, Pause, FastForward, RotateCcw } from "lucide-react";

export const CursorChoreography: React.FC = () => {
  const { currentTime, phase, isPlaying, isFinished, togglePlay, skip, cursors } = useVideoBuild();

  if (isFinished) return null;

  // Format mm:ss
  const formatTime = (secs: number) => {
    const s = Math.min(38, Math.floor(secs));
    const ms = Math.floor((secs % 1) * 10);
    return `00:${s.toString().padStart(2, "0")}.${ms}`;
  };

  const getPhaseTitle = () => {
    switch (phase) {
      case "p1_initial_sections":
        return "INITIAL NUMBERED SECTIONS";
      case "p2_built_fast":
        return "'BUILT FAST' & TIMELINE";
      case "p3_principles":
        return "DETAILED EXPERIENCE & PRINCIPLES";
      case "p4_contact":
        return "CONTACT SECTION & SOCIALS";
      case "p5_hero_profile":
        return "HERO PROFILE & PORTFOLIO 3D";
      case "p6_work_that_ships":
        return "WORK THAT SHIPS — PROJECTS";
      default:
        return "CONSTRUCTION COMPLETE";
    }
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      
      {/* Top HUD: Timeline Player Header */}
      <aside aria-label="Timeline Player" className="fixed top-4 left-1/2 -translate-x-1/2 pointer-events-auto z-50 bg-zinc-950/90 backdrop-blur-md border border-[#FF3E24]/40 rounded-full px-4 py-1.5 shadow-[0_0_30px_rgba(255,62,36,0.35)] flex items-center gap-3 text-xs font-mono">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#FF3E24] animate-ping" />
          <span className="text-[#FF3E24] font-bold">
            {formatTime(currentTime)}
          </span>
          <span className="text-zinc-600">/</span>
          <span className="text-zinc-400">00:38</span>
        </div>

        <span className="text-zinc-800">|</span>

        <span className="text-zinc-300 font-bold hidden sm:inline text-[11px] tracking-wide">
          {getPhaseTitle()}
        </span>

        {/* Mini Timeline Progress Bar */}
        <div className="w-20 sm:w-28 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#FF3E24] to-[#ff7e6e] transition-all duration-100"
            style={{ width: `${Math.min(100, (currentTime / 38) * 100)}%` }}
          />
        </div>

        {/* Play/Pause */}
        <button
          onClick={togglePlay}
          className="p-1 rounded-full text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 transition-colors"
          title={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 text-[#FF3E24]" />}
        </button>

        {/* Skip button */}
        <button
          onClick={skip}
          className="flex items-center gap-1 text-[10px] font-mono text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 px-2 py-0.5 rounded-full transition-colors border border-zinc-800"
        >
          <FastForward className="w-3 h-3 text-[#FF3E24]" />
          <span>SKIP</span>
        </button>
      </aside>

      {/* The Sleek Cursors (NO names, pure SVG pointers with glowing trails) */}
      {cursors.map((c) => (
        <div
          key={c.id}
          className="absolute pointer-events-none transition-all duration-300 ease-out z-50 flex items-center justify-center"
          style={{
            left: `${c.x}%`,
            top: `${c.y}%`,
            transform: "translate(-4px, -4px)",
            opacity: c.opacity ?? 1,
          }}
        >
          {/* Subtle glowing halo */}
          <div
            className="absolute w-6 h-6 rounded-full blur-[5px] opacity-75 -translate-x-1 -translate-y-1"
            style={{ backgroundColor: c.color }}
          />

          {/* Clean SVG pointer */}
          <svg
            className="w-5 h-5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] relative z-10"
            viewBox="0 0 24 24"
            fill={c.color}
            stroke="#000000"
            strokeWidth="1.8"
            strokeLinejoin="round"
          >
            <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
          </svg>

          {/* Spark at cursor tip */}
          <div
            className="absolute top-0 left-0 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#ffffff] animate-ping"
            style={{ animationDuration: "0.8s" }}
          />
        </div>
      ))}

    </div>
  );
};
