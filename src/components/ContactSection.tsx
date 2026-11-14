import React, { useState } from "react";
import { Mail, Phone, Copy, Check, Send, Sparkles, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { playClickSound, playPopSound } from "../utils/audio";

interface ContactProps {
  lang: "fr" | "en";
}

export const ContactSection: React.FC<ContactProps> = ({ lang }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formSent, setFormSent] = useState(false);

  const copyEmail = () => {
    playPopSound();
    navigator.clipboard.writeText("ouerhaniadem0805@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    playPopSound();
    navigator.clipboard.writeText("+216 29 763 603");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playPopSound();
    // Simulate instant form dispatch or open mailto
    const mailtoUrl = `mailto:ouerhaniadem0805@gmail.com?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0A%0AEmail: ${encodeURIComponent(formData.email)}`;
    window.location.href = mailtoUrl;
    setFormSent(true);
    setTimeout(() => setFormSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto border-t border-zinc-900">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Heading & Contact Channels */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <div className="font-mono text-xs text-[#FF3E24] uppercase tracking-widest font-bold mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF3E24]" />
              <span>{lang === "fr" ? "CONTACT DIRECT & PFE 2026" : "GET IN TOUCH"}</span>
            </div>
            <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tight text-white leading-none font-heading">
              LET'S WORK <br />
              <span className="text-[#FF3E24]">TOGETHER.</span>
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 mt-4 max-w-md leading-relaxed">
              {lang === "fr"
                ? "Disponible pour un stage de fin d'études (PFE 2026), une opportunité de Développeur Full-Stack (MEVN / MERN) ou des projets clients ambitieux."
                : "Open to 2026 Graduation Internships (PFE), full-time Full-Stack Developer roles (MEVN / MERN), or ambitious client collaborations."}
            </p>
          </div>

          <div className="space-y-3 pt-2">
            
            {/* Email Card */}
            <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800/80 hover:border-[#FF3E24]/60 transition-colors flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-zinc-900 text-[#FF3E24]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block font-bold">EMAIL</span>
                  <a
                    href="mailto:ouerhaniadem0805@gmail.com"
                    className="text-xs sm:text-sm font-bold text-white hover:text-[#FF3E24] font-mono"
                  >
                    ouerhaniadem0805@gmail.com
                  </a>
                </div>
              </div>
              <button
                onClick={copyEmail}
                className="p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white transition-colors"
                title="Copier l'email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800/80 hover:border-emerald-500/60 transition-colors flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-zinc-900 text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block font-bold">PHONE / WHATSAPP</span>
                  <a
                    href="https://wa.me/21629763603"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs sm:text-sm font-bold text-white hover:text-emerald-400 font-mono"
                  >
                    +216 29 763 603
                  </a>
                </div>
              </div>
              <button
                onClick={copyPhone}
                className="p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white transition-colors"
                title="Copier le numéro"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Socials Row */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <a
                href="https://linkedin.com/in/adem-ouerhani-724743349"
                target="_blank"
                rel="noreferrer"
                onClick={() => playClickSound(550)}
                className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800/80 hover:border-[#0077b5]/60 transition-all flex items-center gap-3 group"
              >
                <div className="p-2 rounded-lg bg-zinc-900 text-[#0077b5]">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block font-bold">LINKEDIN</span>
                  <span className="text-xs font-mono font-bold text-white group-hover:text-[#0077b5] transition-colors truncate">
                    adem-ouerhani
                  </span>
                </div>
              </a>

              <a
                href="https://github.com/ADEM2005373"
                target="_blank"
                rel="noreferrer"
                onClick={() => playClickSound(550)}
                className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800/80 hover:border-zinc-700 transition-all flex items-center gap-3 group"
              >
                <div className="p-2 rounded-lg bg-zinc-900 text-zinc-400">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block font-bold">GITHUB</span>
                  <span className="text-xs font-mono font-bold text-white group-hover:text-[#FF3E24] transition-colors">
                    ADEM2005373
                  </span>
                </div>
              </a>
            </div>

            {/* Distinct Orange Block: SHIP IT FOR REAL */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#FF4500] to-[#FF2E00] text-black shadow-[0_10px_35px_rgba(255,69,0,0.35)] flex items-center justify-between hover:scale-[1.01] transition-transform">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-black/75 font-black block">
                  ACTION ORIENTED
                </span>
                <span className="text-xl sm:text-2xl font-black font-heading uppercase text-white tracking-tight drop-shadow-sm">
                  SHIP IT FOR REAL.
                </span>
              </div>
              <Sparkles className="w-6 h-6 text-white animate-pulse" />
            </div>

          </div>
        </div>

        {/* Right Column: Fast Contact Form */}
        <div className="lg:col-span-6 p-7 sm:p-8 rounded-3xl bg-zinc-950/85 border border-zinc-800/90 shadow-2xl relative">
          <h3 className="text-2xl font-black uppercase text-white font-heading mb-2">
            {lang === "fr" ? "Envoyer un Message" : "Send a Message"}
          </h3>
          <p className="text-xs text-zinc-400 mb-6">
            {lang === "fr"
              ? "Laissez-moi un mot pour un stage PFE, une opportunité ou un projet."
              : "Drop me a message regarding an internship, job opportunity, or client project."}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-[11px] font-mono text-zinc-400 uppercase block mb-1 font-bold">
                {lang === "fr" ? "Votre Nom" : "Your Name"}
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ex. Sarah Ben Salem"
                className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs font-mono focus:outline-none focus:border-[#FF3E24] transition-colors"
              />
            </div>

            <div>
              <label className="text-[11px] font-mono text-zinc-400 uppercase block mb-1 font-bold">
                {lang === "fr" ? "Votre Adresse Email" : "Your Email Address"}
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="sarah@entreprise.com"
                className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs font-mono focus:outline-none focus:border-[#FF3E24] transition-colors"
              />
            </div>

            <div>
              <label className="text-[11px] font-mono text-zinc-400 uppercase block mb-1 font-bold">
                {lang === "fr" ? "Message / Sujet du PFE" : "Message / Project Details"}
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={lang === "fr" ? "Bonjour Adem, nous avons une opportunité de stage PFE..." : "Hi Adem, we have an exciting internship opportunity..."}
                className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs font-mono focus:outline-none focus:border-[#FF3E24] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#FF3E24] hover:bg-[#ff553e] text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,62,36,0.35)] transition-all hover:-translate-y-0.5"
            >
              <Send className="w-4 h-4" />
              <span>{formSent ? (lang === "fr" ? "Message Envoyé !" : "Message Sent!") : (lang === "fr" ? "Envoyer le Message" : "Send Message")}</span>
            </button>
          </form>
        </div>

      </div>

    </section>
  );
};
