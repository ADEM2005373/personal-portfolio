import React from "react";

interface FigmaInspectorTagProps {
  label: string;
  dimension?: string;
  children: React.ReactNode;
  className?: string;
}

export const FigmaInspectorTag: React.FC<FigmaInspectorTagProps> = ({
  label,
  dimension,
  children,
  className = "",
}) => {
  return (
    <div className={`group relative transition-all duration-200 ${className}`}>
      {/* Figma Selection Handles & Overlay on Hover */}
      <div className="absolute -inset-1 border border-transparent group-hover:border-[#38bdf8]/50 group-hover:bg-[#38bdf8]/[0.02] rounded pointer-events-none transition-all duration-200 z-10">
        {/* Top-left coordinate badge */}
        <div className="absolute -top-3 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[#38bdf8] text-black font-mono text-[9px] font-bold px-1.5 py-0.2 rounded-sm shadow-sm flex items-center gap-1 select-none whitespace-nowrap">
          <span>{label}</span>
          {dimension && <span className="opacity-75">[{dimension}]</span>}
        </div>

        {/* Corner handles */}
        <div className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-white border border-[#38bdf8] opacity-0 group-hover:opacity-100" />
        <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-white border border-[#38bdf8] opacity-0 group-hover:opacity-100" />
        <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-white border border-[#38bdf8] opacity-0 group-hover:opacity-100" />
        <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-white border border-[#38bdf8] opacity-0 group-hover:opacity-100" />
      </div>

      {children}
    </div>
  );
};
