import React from "react";

interface FigmaInspectorTagProps {
  label: string;
  dimension?: string;
  children: React.ReactNode;
  className?: string;
  isBuilding?: boolean;
}

export const FigmaInspectorTag: React.FC<FigmaInspectorTagProps> = ({
  label,
  dimension,
  children,
  className = "",
  isBuilding = false,
}) => {
  return (
    <div className={`group relative transition-all duration-300 ${className}`}>
      {/* Active Figma Wireframe & Selection Box during build or hover */}
      <div
        className={`absolute -inset-1.5 rounded-lg pointer-events-none transition-all duration-300 z-20 ${
          isBuilding
            ? "border-2 border-[#38bdf8] border-dashed bg-[#38bdf8]/[0.05] shadow-[0_0_15px_rgba(56,189,248,0.3)] opacity-100"
            : "border border-transparent group-hover:border-[#38bdf8]/50 group-hover:bg-[#38bdf8]/[0.02] opacity-0 group-hover:opacity-100"
        }`}
      >
        {/* Top-left coordinate badge */}
        <div
          className={`absolute -top-3.5 left-2 bg-[#38bdf8] text-black font-mono text-[9px] font-bold px-1.5 py-0.5 rounded-sm shadow-md flex items-center gap-1 select-none whitespace-nowrap transition-opacity ${
            isBuilding ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
        >
          <span>{label}</span>
          {dimension && <span className="opacity-75">[{dimension}]</span>}
        </div>

        {/* 4 corner handles (squares) */}
        <div
          className={`absolute -top-1 -left-1 w-2 h-2 bg-white border border-[#38bdf8] shadow-sm transition-opacity ${
            isBuilding ? "opacity-100 animate-pulse" : "opacity-0 group-hover:opacity-100"
          }`}
        />
        <div
          className={`absolute -top-1 -right-1 w-2 h-2 bg-white border border-[#38bdf8] shadow-sm transition-opacity ${
            isBuilding ? "opacity-100 animate-pulse" : "opacity-0 group-hover:opacity-100"
          }`}
        />
        <div
          className={`absolute -bottom-1 -left-1 w-2 h-2 bg-white border border-[#38bdf8] shadow-sm transition-opacity ${
            isBuilding ? "opacity-100 animate-pulse" : "opacity-0 group-hover:opacity-100"
          }`}
        />
        <div
          className={`absolute -bottom-1 -right-1 w-2 h-2 bg-white border border-[#38bdf8] shadow-sm transition-opacity ${
            isBuilding ? "opacity-100 animate-pulse" : "opacity-0 group-hover:opacity-100"
          }`}
        />
      </div>

      {children}
    </div>
  );
};
