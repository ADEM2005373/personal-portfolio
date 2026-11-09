import React from "react";
import { useVideoBuild } from "../context/VideoBuildEngine";

export const CursorChoreography: React.FC = () => {
  const { cursors, isBuilding } = useVideoBuild();

  if (!isBuilding || cursors.length === 0) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* 12 Live Autonomous Agent Cursors */}
      {cursors.map((c) => (
        <div
          key={c.id}
          className="absolute pointer-events-none transition-all duration-300 ease-out z-50 flex items-start gap-1"
          style={{
            left: `${c.x}%`,
            top: `${c.y}%`,
            transform: `translate(-2px, -2px) scale(${c.scale ?? 1})`,
            opacity: c.opacity ?? 1,
          }}
        >
          {/* Glowing Halo around cursor */}
          <div
            className="absolute -top-1 -left-1 w-6 h-6 rounded-full blur-[6px] opacity-70 pointer-events-none"
            style={{ backgroundColor: c.color }}
          />

          {/* Crisp Figma-style Arrow Pointer */}
          <svg
            className="w-5 h-5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] relative z-10 shrink-0"
            viewBox="0 0 24 24"
            fill={c.color}
            stroke="#000000"
            strokeWidth="1.8"
            strokeLinejoin="round"
          >
            <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
          </svg>

          {/* Small Technical Role Tag (like video: [Text], [Card], [Layout], etc.) */}
          {c.role && (
            <span
              className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded shadow-sm text-black uppercase tracking-wider relative z-10 border border-black/20"
              style={{ backgroundColor: c.color }}
            >
              {c.role}
            </span>
          )}

          {/* Click spark when placing */}
          {c.isClicking && (
            <div
              className="absolute -top-2 -left-2 w-7 h-7 rounded-full border border-white animate-ping pointer-events-none"
              style={{ animationDuration: "0.6s" }}
            />
          )}
        </div>
      ))}
    </div>
  );
};
