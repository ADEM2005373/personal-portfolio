import React, { useState } from "react";
import { useVideoBuild } from "../context/VideoBuildEngine";
import { FigmaInspectorTag } from "./FigmaInspectorTag";
import { CheckCircle2, ExternalLink, ChevronRight, X } from "lucide-react";
import { GithubIcon } from "./Icons";

export const WorkThatShipsSection: React.FC = () => {
  const { isRevealed } = useVideoBuild();
  const [modalProject, setModalProject] = useState<any | null>(null);

  const titleReady = isRevealed("work_that_ships_title");
  const card01Ready = isRevealed("card_01_passi");
  const card02Ready = isRevealed("card_02_hydroobloom");

  const project01 = {
    number: "01",
    title: "PASSI",
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
  };

  const project02 = {
    number: "02",
    title: "HYDROOBLOOM",
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
  };

  return (
    <section id="sec-projects" className="min-h-screen py-24 px-4 sm:px-6 max-w-7xl mx-auto border-t border-zinc-900">
      
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
          Production apps at a startup, an IoT ecological platform, and freelance client platforms. Every project went from a brief to something real people open and use.
        </p>
      </div>

      {/* Two Detailed Columns: 01 PASSI & 02 HYDROOBLOOM */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
        {/* Project 01 Column */}
        <FigmaInspectorTag label="Project:01_PASSI" dimension="600x480">
          <div
            className={`p-7 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 flex flex-col justify-between transition-all duration-700 hover:border-zinc-700 ${
              card01Ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl font-black font-heading text-[#FF3E24]">01</span>
                <span className="text-[10px] font-mono text-zinc-400 uppercase bg-zinc-900 px-2.5 py-0.5 rounded border border-zinc-800">
                  FULL-STACK MEVN
                </span>
              </div>

              <h3 className="text-3xl font-black uppercase text-white tracking-tight mb-1">
                {project01.title}
              </h3>
              <p className="text-xs font-semibold text-[#FF3E24] mb-3">
                {project01.tagline}
              </p>

              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                {project01.desc}
              </p>

              {/* Bulleted list outlining features */}
              <div className="space-y-2 mb-6 pt-3 border-t border-zinc-900">
                {project01.bullets.map((b, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                    <span className="text-[#FF3E24] font-bold mt-0.5">›</span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {/* Technology Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-zinc-900">
                {project01.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-zinc-800"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-zinc-900">
                <a
                  href={project01.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>View Code</span>
                </a>

                <button
                  onClick={() => setModalProject(project01)}
                  className="flex items-center gap-1 text-xs font-mono font-bold text-[#FF3E24] hover:text-white transition-colors"
                >
                  <span>Inspect Architecture</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </FigmaInspectorTag>

        {/* Project 02 Column */}
        <FigmaInspectorTag label="Project:02_HYDROOBLOOM" dimension="600x480">
          <div
            className={`p-7 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 flex flex-col justify-between transition-all duration-700 hover:border-zinc-700 ${
              card02Ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl font-black font-heading text-[#FF3E24]">02</span>
                <span className="text-[10px] font-mono text-emerald-400 uppercase bg-emerald-950/60 px-2.5 py-0.5 rounded border border-emerald-800">
                  IOT & HARDWARE
                </span>
              </div>

              <h3 className="text-3xl font-black uppercase text-white tracking-tight mb-1">
                {project02.title}
              </h3>
              <p className="text-xs font-semibold text-emerald-400 mb-3">
                {project02.tagline}
              </p>

              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                {project02.desc}
              </p>

              {/* Bulleted list outlining features */}
              <div className="space-y-2 mb-6 pt-3 border-t border-zinc-900">
                {project02.bullets.map((b, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                    <span className="text-emerald-400 font-bold mt-0.5">›</span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {/* Technology Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-zinc-900">
                {project02.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-zinc-800"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-zinc-900">
                <span className="text-xs font-mono text-zinc-500">
                  National Enactus Qualifier
                </span>

                <button
                  onClick={() => setModalProject(project02)}
                  className="flex items-center gap-1 text-xs font-mono font-bold text-emerald-400 hover:text-white transition-colors"
                >
                  <span>Inspect Architecture</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </FigmaInspectorTag>

      </div>

      {/* Modal View if clicked */}
      {modalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setModalProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            <span className="text-3xl font-black text-[#FF3E24]">{modalProject.number}</span>
            <h3 className="text-2xl font-black uppercase text-white mt-1">{modalProject.title}</h3>
            <p className="text-xs text-[#FF3E24] font-mono mt-1 mb-4">{modalProject.tagline}</p>
            <p className="text-xs text-zinc-300 leading-relaxed mb-6">{modalProject.desc}</p>

            <div className="space-y-2 mb-6">
              {modalProject.bullets.map((b: string, i: number) => (
                <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-900">
              {modalProject.tags.map((t: string) => (
                <span key={t} className="text-xs font-mono px-2.5 py-1 rounded bg-zinc-900 text-zinc-200 border border-zinc-800">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
