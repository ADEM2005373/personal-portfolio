import React from "react";
import { useVideoBuild } from "../context/VideoBuildEngine";

export const CursorChoreography: React.FC = () => {
  const { cursors, isBuilding } = useVideoBuild();

  if (!isBuilding || cursors.length === 0) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {cursors.map((c) => (
        <div
          key={c.id}
          className="absolute pointer-events-none transition-transform duration-75 ease-out flex flex-col items-start gap-1"
          style={{
            transform: `translate3d(${c.x}px, ${c.y}px, 0) scale(${c.scale ?? 1})`,
            opacity: c.opacity ?? 1,
          }}
        >
          {/* Glowing Halo around cursor */}
          <div
            className="absolute -top-2 -left-2 w-8 h-8 rounded-full blur-[8px] opacity-75 pointer-events-none"
            style={{ backgroundColor: c.color }}
          />

          <div className="flex items-center gap-1">
            {/* Crisp SVG Figma-style Arrow Pointer */}
            <svg
              className="w-5 h-5 drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] relative z-10 shrink-0"
              viewBox="0 0 24 24"
              fill={c.color}
              stroke="#000000"
              strokeWidth="1.8"
              strokeLinejoin="round"
            >
              <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
            </svg>

            {/* Role tag badge */}
            {c.role && (
              <span
                className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded shadow-md text-black uppercase tracking-wider relative z-10 border border-black/20 select-none whitespace-nowrap"
                style={{ backgroundColor: c.color }}
              >
                {c.role}
              </span>
            )}
          </div>

          {/* Physically CARRIED ITEM (e.g. tag, photo, card, or principle being placed!) */}
          {c.carryingItem && (
            <div className="ml-3 -mt-0.5 relative z-20 flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-zinc-950/95 text-white border border-[#38bdf8] shadow-[0_4px_15px_rgba(56,189,248,0.4)] whitespace-nowrap animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
              <span>{c.carryingItem}</span>
            </div>
          )}

          {/* Click spark when placing */}
          {c.isClicking && (
            <div
              className="absolute -top-3 -left-3 w-10 h-10 rounded-full border-2 border-white animate-ping pointer-events-none"
              style={{ animationDuration: "0.5s" }}
            />
          )}
        </div>
      ))}
    </div>
  );
};
