import React, { useState } from "react";
import { useVideoBuild } from "../context/VideoBuildEngine";
import { FigmaInspectorTag } from "./FigmaInspectorTag";
import { CheckCircle2, ChevronRight, X, ExternalLink } from "lucide-react";
import { GithubIcon } from "./Icons";

interface ProjectItem {
  number: string;
  title: string;
  category: string;
  tagline: string;
  desc: string;
  bullets: string[];
  tags: string[];
  github: string;
  live?: string;
  revealKey: string;
  pillsKey: string;
  color: string;
}

export const WorkThatShipsSection: React.FC = () => {
  const { isRevealed } = useVideoBuild();
  const [modalProject, setModalProject] = useState<ProjectItem | null>(null);

  const titleReady = isRevealed("work_title") || isRevealed("work_that_ships_title");

  const projects: ProjectItem[] = [
    {
      number: "01",
      title: "PASSI",
      category: "FULL-STACK MEVN",
      tagline: "Real-time Event Discovery & Ticket Reservation Platform",
      desc: "A full-scale event marketplace matching attendees with venue hosts and live experiences, featuring automated stock locking and dynamic QR e-ticket delivery.",
      bullets: [
        "Built attendee and organizer portals with Vue.js, Node.js, Express and MongoDB.",
        "Shipped dynamic e-tickets with real-time QR validation and automated email dispatch.",
        "Added 40+ unit and integration tests across auth, booking state machines and checkout.",
        "JWT secured sessions with role-based permissions and high-throughput REST APIs."
      ],
      tags: ["Vue.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS", "REST API"],
      github: "https://github.com/ADEM2005373/PASSI",
      revealKey: "card_01_passi",
      pillsKey: "pills_01",
      color: "#FF3E24"
    },
    {
      number: "02",
      title: "HYDROOBLOOM",
      category: "IOT & HARDWARE",
      tagline: "Biodegradable Water Filtration & Real-Time IoT Quality Monitoring",
      desc: "A clean-tech initiative integrating custom eco-designed biodegradable filter cartridges with multi-sensor telemetry for continuous municipal and agricultural water quality auditing.",
      bullets: [
        "Engineered real-time telemetry pipelines connecting physical IoT sensors to cloud backend.",
        "Continuous tracking of pH, turbidity, TDS, and dissolved contaminants at 60Hz intervals.",
        "Led multidisciplinary engineering team through prototyping, lab testing, and field trials.",
        "Qualified and represented ISET Djerba at the National Enactus Innovation Competition."
      ],
      tags: ["IoT Sensors", "Node.js", "Python", "Telemetry", "Enactus", "CleanTech"],
      github: "https://github.com/ADEM2005373",
      revealKey: "card_02_hydroobloom",
      pillsKey: "pills_02",
      color: "#10b981"
    },
    {
      number: "03",
      title: "DIZY WEB",
      category: "PRODUCTION AGENCY PLATFORM",
      tagline: "Digital Marketing Portal & Client Operations System",
      desc: "A high-performance digital marketing agency platform with centralized client workflows, real-time campaign tracking, and agile operational delivery.",
      bullets: [
        "Architected scalable Vue.js and Node.js platform deployed in live commercial production.",
        "Centralized lead pipeline and project management dashboards for marketing clients.",
        "Optimized responsive UI with sub-second page loads and Tailwind CSS micro-interactions.",
        "Integrated secure API endpoints with rigorous form validation and client data pipelines."
      ],
      tags: ["Vue.js", "Express.js", "Node.js", "MongoDB", "Tailwind CSS", "REST API"],
      github: "https://github.com/ADEM2005373/dizyweb",
      revealKey: "card_03_dizy",
      pillsKey: "pills_03",
      color: "#38bdf8"
    },
    {
      number: "04",
      title: "ENACTUS CLUB",
      category: "3D WEBGL SHOWCASE",
      tagline: "Interactive 3D Experience with Three.js & Particle Engines",
      desc: "A premium website for Enactus ISET Djerba featuring advanced Three.js 3D wireframe globe, 2000+ floating golden particles, and modern glassmorphism aesthetic.",
      bullets: [
        "Built custom WebGL render loop with interactive camera controls and lighting shaders.",
        "Optimized 2000+ particle geometry running smoothly at 60 FPS on mobile and desktop.",
        "Designed award-winning dark aesthetic with frosted glass UI and dynamic typography.",
        "Represented university club projects across national entrepreneurship forums."
      ],
      tags: ["Three.js", "JavaScript ES6+", "WebGL Canvas", "CSS Glassmorphism", "Agile"],
      github: "https://github.com/ADEM2005373/enactusweb",
      revealKey: "card_04_enactus",
      pillsKey: "pills_04",
      color: "#a855f7"
    }
  ];

  return (
    <section id="sec-work" className="min-h-screen py-24 px-4 sm:px-6 max-w-7xl mx-auto border-t border-zinc-900">
      
      {/* Heading: WORK THAT SHIPS. */}
      <div
        className={`mb-12 transition-all duration-700 ${
          titleReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="font-mono text-xs text-[#FF3E24] uppercase tracking-widest font-bold mb-1 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FF3E24]" />
          <span>FLAGSHIP PRODUCTION BUILDS</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none">
          WORK THAT <span className="text-[#FF3E24]">SHIPS.</span>
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-lg">
          Production apps at a startup, an IoT ecological platform, and client platforms. Every project went from a brief to something real people open and use.
        </p>
      </div>

      {/* Grid of Projects (01, 02, 03, 04) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {projects.map((proj) => {
          const cardReady = isRevealed(proj.revealKey);
          const pillsReady = isRevealed(proj.pillsKey);

          return (
            <FigmaInspectorTag key={proj.number} label={`Project:${proj.number}_${proj.title}`} dimension="600x480">
              <div
                className={`p-7 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 flex flex-col justify-between transition-all duration-700 hover:border-zinc-700 h-full ${
                  cardReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl font-black font-heading" style={{ color: proj.color }}>
                      {proj.number}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase bg-zinc-900 px-2.5 py-0.5 rounded border border-zinc-800">
                      {proj.category}
                    </span>
                  </div>

                  <h3 className="text-3xl font-black uppercase text-white tracking-tight mb-1">
                    {proj.title}
                  </h3>
                  <p className="text-xs font-semibold mb-3" style={{ color: proj.color }}>
                    {proj.tagline}
                  </p>

                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    {proj.desc}
                  </p>

                  {/* Bulleted list outlining features */}
                  <div className="space-y-2 mb-6 pt-3 border-t border-zinc-900">
                    {proj.bullets.map((b, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                        <span className="font-bold mt-0.5" style={{ color: proj.color }}>›</span>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Dropped Pill-shaped Tags */}
                  <div
                    className={`flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-zinc-900 transition-all duration-700 ${
                      pillsReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                  >
                    {proj.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-zinc-800 hover:border-[#FF3E24] transition-all hover:scale-105"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-zinc-900">
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>View Code</span>
                    </a>

                    <button
                      onClick={() => setModalProject(proj)}
                      className="flex items-center gap-1 text-xs font-mono font-bold hover:text-white transition-colors"
                      style={{ color: proj.color }}
                    >
                      <span>Inspect Architecture</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </FigmaInspectorTag>
          );
        })}
      </div>

      {/* Architecture Modal */}
      {modalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setModalProject(null)}
              className="absolute top-4 right-4 p-1 rounded-full text-zinc-400 hover:text-white bg-zinc-900"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono text-[#FF3E24] font-bold">PROJECT ARCHITECTURE</span>
              <span className="text-zinc-600">•</span>
              <span className="text-xs font-mono text-zinc-400">{modalProject.number}</span>
            </div>

            <h3 className="text-2xl font-black uppercase text-white mb-1">
              {modalProject.title}
            </h3>
            <p className="text-xs text-zinc-400 mb-6">
              {modalProject.tagline}
            </p>

            <div className="space-y-4 mb-6">
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">ARCHITECTURE HIGHLIGHTS</span>
                <ul className="space-y-2 text-xs text-zinc-300">
                  {modalProject.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-2">INTEGRATED TECH STACK</span>
                <div className="flex flex-wrap gap-1.5">
                  {modalProject.tags.map((t) => (
                    <span key={t} className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-200 border border-zinc-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-zinc-900">
              <button
                onClick={() => setModalProject(null)}
                className="px-4 py-2 rounded text-xs font-mono text-zinc-400 hover:text-white"
              >
                Close
              </button>
              <a
                href={modalProject.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[#FF3E24] hover:bg-[#ff553e] text-white text-xs font-mono font-bold shadow-lg"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Open GitHub Repository</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
