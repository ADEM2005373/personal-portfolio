import React from "react";
import { PERSONAL_INFO } from "../data/portfolioData";
import { useVideoBuild } from "../context/VideoBuildEngine";
import { Heart, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

interface FooterProps {
  lang: "fr" | "en";
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const { isRevealed } = useVideoBuild();

  return (
    <footer
      className={`pb-28 pt-12 border-t border-zinc-900 bg-zinc-950/80 text-zinc-500 font-mono text-xs transition-opacity duration-700 ${
        isRevealed("contact_items") ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#FF3E24]" />
          <span className="text-zinc-300 font-bold">ADEM OUERHANI</span>
          <span className="text-zinc-600">·</span>
          <span>Djerba, Tunisie</span>
        </div>

        <div className="text-center text-zinc-500 text-[11px]">
          {lang === "fr"
            ? "Conçu avec React, TypeScript & Tailwind CSS. Inspiré du design canvas Figma."
            : "Engineered with React, TypeScript & Tailwind CSS. Inspired by Figma canvas aesthetics."}
        </div>

        <div className="flex items-center gap-4 text-zinc-400">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-white transition-colors"
          >
            Email
          </a>
        </div>

      </div>
    </footer>
  );
};
