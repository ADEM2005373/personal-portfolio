import React, { useState } from "react";
import { useVideoBuild } from "../context/VideoBuildEngine";
import { FigmaInspectorTag } from "./FigmaInspectorTag";
import { playPopSound } from "../utils/audio";
import { Mail, Phone, Copy, Check, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export const ContactVideoSection: React.FC = () => {
  const { isRevealed, isElementBuilding } = useVideoBuild();
  const [copied, setCopied] = useState(false);

  const contactTitleReady = isRevealed("contact_title");
  const contactItemsReady = isRevealed("contact_items");
  const orangeShipItReady = isRevealed("orange_ship_it");

  const isContactBuilding = isElementBuilding("contact_items");
  const isOrangeShipBuilding = isElementBuilding("orange_ship_it");

  const copyEmail = () => {
    playPopSound();
    navigator.clipboard.writeText("ouerhaniadem0805@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="sec-contact" className="min-h-[85vh] py-24 px-4 sm:px-6 max-w-7xl mx-auto border-t border-zinc-900 flex flex-col justify-center">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Side: "LET'S WORK TOGETHER." */}
        <div className="lg:col-span-6 space-y-4">
          <div
            id="contact-title"
            className={`transition-all duration-700 ${
              contactTitleReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="font-mono text-xs text-[#FF3E24] uppercase tracking-widest font-bold block mb-1">
              OPPORTUNITIES & PFE 2026
            </span>
            <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tight text-white leading-none">
              LET'S WORK <br />
              <span className="text-[#FF3E24]">TOGETHER.</span>
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-4 max-w-md leading-relaxed">
              Available for a Final-Year Engineering Internship (PFE 2026), full-time software developer positions, or ambitious full-stack client platforms.
            </p>
          </div>
        </div>

        {/* Right Side: Contact Labels & Info + Orange SHIP IT FOR REAL */}
        <div className="lg:col-span-6 space-y-5">
          
          <FigmaInspectorTag label="Contact:Channels" dimension="520x240" isBuilding={isContactBuilding}>
            <div
              className={`space-y-3 transition-all duration-700 ${
                contactItemsReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {/* Email item */}
              <div id="contact-email" className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800/80 flex items-center justify-between group hover:border-[#FF3E24]/50 transition-colors">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#FF3E24]" />
                  <div>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase block">EMAIL</span>
                    <a href="mailto:ouerhaniadem0805@gmail.com" className="text-xs sm:text-sm font-bold text-white hover:text-[#FF3E24] font-mono">
                      ouerhaniadem0805@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className="p-1.5 rounded bg-zinc-900 text-zinc-400 hover:text-white"
                  title="Copy email"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Phone / WhatsApp item */}
              <div id="contact-phone" className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800/80 flex items-center gap-3 hover:border-emerald-500/50 transition-colors">
                <Phone className="w-4 h-4 text-emerald-400" />
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">PHONE / WHATSAPP</span>
                  <a href="tel:+21629763603" className="text-xs sm:text-sm font-bold text-white hover:text-emerald-400 font-mono">
                    +216 29 763 603
                  </a>
                </div>
              </div>

              {/* Socials Row: LinkedIn & GitHub */}
              <div id="contact-socials" className="grid grid-cols-2 gap-3">
                <a
                  href="https://linkedin.com/in/adem-ouerhani-724743349"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800/80 flex items-center gap-2.5 text-zinc-300 hover:text-white hover:border-[#0077b5]/60 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#0077b5]" />
                  <div>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase block">LINKEDIN</span>
                    <span className="text-xs font-mono font-bold truncate">adem-ouerhani</span>
                  </div>
                </a>

                <a
                  href="https://github.com/ADEM2005373"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800/80 flex items-center gap-2.5 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-zinc-400" />
                  <div>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase block">GITHUB</span>
                    <span className="text-xs font-mono font-bold">ADEM2005373</span>
                  </div>
                </a>
              </div>
            </div>
          </FigmaInspectorTag>

          {/* DISTINCT ORANGE BLOCK: "SHIP IT FOR REAL." */}
          <div id="contact-orange-box">
            <FigmaInspectorTag label="Callout:OrangeShipIt" dimension="380x80" isBuilding={isOrangeShipBuilding}>
              <div
                className={`p-5 rounded-2xl bg-gradient-to-r from-[#FF4500] to-[#FF2E00] text-black shadow-[0_10px_35px_rgba(255,69,0,0.4)] flex items-center justify-between transition-all duration-700 hover:scale-[1.02] ${
                  orangeShipItReady ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
              >
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-black/70 font-black block">
                    ACTION ORIENTED
                  </span>
                  <span className="text-xl sm:text-2xl font-black font-heading uppercase text-white tracking-tight drop-shadow-sm">
                    SHIP IT FOR REAL.
                  </span>
                </div>
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </FigmaInspectorTag>
          </div>

        </div>

      </div>

    </section>
  );
};
