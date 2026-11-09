import React, { useState } from "react";
import { PROJECTS, Project } from "../data/portfolioData";
import { GithubIcon } from "./Icons";
import { playClickSound, playPopSound } from "../utils/audio";
import { ExternalLink, CheckCircle2, ChevronRight, X, Sparkles, Filter } from "lucide-react";

interface ProjectsSectionProps {
  lang: "fr" | "en";
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ lang }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filters = [
    { id: "all", labelFr: "Tous les projets", labelEn: "All Projects" },
    { id: "Full-Stack MEVN", labelFr: "Full-Stack MEVN", labelEn: "Full-Stack MEVN" },
    { id: "IoT & Hardware Tech", labelFr: "IoT & Écologie", labelEn: "IoT & Hardware" },
    { id: "Creative Frontend", labelFr: "3D & Creative UI", labelEn: "3D & Creative" },
  ];

  const filteredProjects = selectedFilter === "all"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category.toLowerCase().includes(selectedFilter.toLowerCase()) || p.stack.some(s => s.toLowerCase().includes(selectedFilter.toLowerCase())));

  const openModal = (proj: Project) => {
    playPopSound();
    setActiveModalProject(proj);
  };

  const closeModal = () => {
    playClickSound(400);
    setActiveModalProject(null);
  };

  return (
    <section id="projects" className="min-h-screen py-24 px-4 sm:px-6 max-w-7xl mx-auto border-t border-zinc-900">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="font-mono text-xs text-[#FF3E24] uppercase tracking-widest font-bold mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF3E24]" />
            <span>{lang === "fr" ? "RÉALISATIONS MAJEURES" : "FEATURED PRODUCTIONS"}</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none font-heading">
            WORK THAT <span className="text-[#FF3E24]">SHIPS.</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-xl">
            {lang === "fr"
              ? "Applications complètes en production, plateforme IoT primée au concours Enactus et architectures modulaires MEVN avec tests automatisés."
              : "Commercial platforms in live deployment, national Enactus finalist IoT telemetry, and MEVN full-stack architectures with automated test coverage."}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 bg-zinc-950/80 p-1.5 rounded-xl border border-zinc-800">
          {filters.map((f) => {
            const isActive = selectedFilter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => {
                  playClickSound(500);
                  setSelectedFilter(f.id);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all font-semibold ${
                  isActive
                    ? "bg-[#FF3E24] text-white shadow-[0_0_15px_rgba(255,62,36,0.35)]"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                }`}
              >
                {lang === "fr" ? f.labelFr : f.labelEn}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {filteredProjects.map((proj) => {
          return (
            <div
              key={proj.id}
              className="p-7 rounded-2xl bg-zinc-950/85 border border-zinc-800/80 hover:border-zinc-700 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#FF3E24]/5 group relative"
            >
              <div>
                {/* Header row: Number + Category */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl font-black font-heading text-[#FF3E24]">
                    {proj.number}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase bg-zinc-900 px-2.5 py-0.5 rounded border border-zinc-800">
                      {proj.category}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500">
                      {proj.year}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight mb-1 group-hover:text-[#FF3E24] transition-colors">
                  {proj.title}
                </h3>
                <p className="text-xs font-semibold text-zinc-400 mb-3">
                  {proj.tagline}
                </p>

                <p className="text-xs text-zinc-300 leading-relaxed mb-5">
                  {lang === "fr" ? proj.descriptionFr : proj.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 mb-6 pt-3 border-t border-zinc-900">
                  {proj.highlights.slice(0, 3).map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                      <span className="text-[#FF3E24] font-bold mt-0.5">›</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-zinc-900">
                  {proj.stack.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-zinc-800 hover:border-[#FF3E24] transition-all"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Footer Actions */}
                <div className="flex items-center justify-between pt-3 border-t border-zinc-900">
                  {proj.githubUrl ? (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => playClickSound(580)}
                      className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>{lang === "fr" ? "Code Source" : "View Code"}</span>
                    </a>
                  ) : (
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-900">
                      {proj.metrics}
                    </span>
                  )}

                  <button
                    onClick={() => openModal(proj)}
                    className="flex items-center gap-1 text-xs font-mono font-bold text-[#FF3E24] hover:text-white transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <span>{lang === "fr" ? "Détails Architecture" : "Inspect Architecture"}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Architecture Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 p-1.5 rounded-full text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono text-[#FF3E24] font-bold">PROJECT SPECIFICATION</span>
              <span className="text-zinc-600">•</span>
              <span className="text-xs font-mono text-zinc-400">{activeModalProject.number}</span>
              <span className="text-zinc-600">•</span>
              <span className="text-xs font-mono text-emerald-400">{activeModalProject.role}</span>
            </div>

            <h3 className="text-3xl font-black uppercase text-white font-heading mb-1">
              {activeModalProject.title}
            </h3>
            <p className="text-xs text-zinc-400 mb-6">
              {activeModalProject.tagline}
            </p>

            <div className="space-y-4 mb-6">
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1.5 font-bold">
                  {lang === "fr" ? "DESCRIPTION COMPLÈTE & OBJECTIFS" : "FULL ARCHITECTURE OVERVIEW"}
                </span>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {lang === "fr" ? activeModalProject.descriptionFr : activeModalProject.description}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-2 font-bold">
                  {lang === "fr" ? "FONCTIONNALITÉS CLÉS ET ARCHITECTURE" : "KEY FEATURES & ENGINEERING HIGHLIGHTS"}
                </span>
                <ul className="space-y-2 text-xs text-zinc-300">
                  {activeModalProject.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-2 font-bold">
                  {lang === "fr" ? "STACK TECHNIQUE INTÉGRÉE" : "INTEGRATED TECH STACK"}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalProject.stack.map((t) => (
                    <span key={t} className="text-xs font-mono px-2.5 py-1 rounded bg-zinc-800 text-zinc-200 border border-zinc-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-zinc-900">
              <span className="text-xs font-mono text-zinc-500">
                {activeModalProject.year} • {activeModalProject.metrics}
              </span>

              <div className="flex items-center gap-3">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 rounded text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                >
                  {lang === "fr" ? "Fermer" : "Close"}
                </button>
                {activeModalProject.githubUrl && (
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[#FF3E24] hover:bg-[#ff553e] text-white text-xs font-mono font-bold shadow-lg shadow-[#FF3E24]/30 transition-all hover:scale-105"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>{lang === "fr" ? "Consulter sur GitHub" : "Open GitHub Repo"}</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
