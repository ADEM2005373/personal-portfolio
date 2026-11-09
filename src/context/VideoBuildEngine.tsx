import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { BuildState, AgentCursor } from "../types/timeline";
import { playClickSound, playPopSound } from "../utils/audio";

interface BuildContextType {
  buildState: BuildState;
  isBuilding: boolean;
  isFinished: boolean;
  cursors: AgentCursor[];
  isRevealed: (id: string) => boolean;
  stopBuild: () => void;
  replayBuild: () => void;
  toggleBuild: () => void;
}

const BuildContext = createContext<BuildContextType | null>(null);

const AGENT_COLORS = [
  "#FF3E24", // Red
  "#38bdf8", // Sky blue
  "#10b981", // Emerald
  "#a855f7", // Violet
  "#f59e0b", // Amber
  "#ec4899", // Pink
  "#06b6d4", // Cyan
  "#f43f5e", // Rose
  "#84cc16", // Lime
  "#6366f1", // Indigo
  "#14b8a6", // Teal
  "#eab308", // Yellow
];

// Technical roles (not personal names!)
const AGENT_ROLES = [
  "Text", "Card", "Photo", "Pill", "DB", "Layout",
  "Style", "Vector", "Code", "Grid", "Motion", "Render"
];

const ALL_ELEMENTS = [
  // Hero
  "hero_backdrop", "hero_photo", "hero_intro", "hero_stats", "hero_actions",
  // Work / Projects
  "work_title", "card_01_passi", "card_02_hydroobloom", "card_03_dizy", "card_04_enactus",
  "pills_01", "pills_02", "pills_03", "pills_04",
  // Track record & principles
  "tech_bar", "built_fast_title", "stat_40", "timeline_items", "not_just_code",
  "body_bio", "education_card", "orange_principle_box",
  // Contact
  "contact_title", "contact_items", "orange_ship_it"
];

export const VideoBuildProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [buildState, setBuildState] = useState<BuildState>("initial_black");
  const [cursors, setCursors] = useState<AgentCursor[]>([]);
  const [revealedSet, setRevealedSet] = useState<Set<string>>(new Set());

  const animFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const isRunningRef = useRef<boolean>(true);
  const lastScrolledRef = useRef<string>("");

  const scrollToEl = (id: string, block: ScrollLogicalPosition = "start") => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block });
    }
  };

  const stopBuild = () => {
    isRunningRef.current = false;
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    setBuildState("completed");
    setCursors([]);
    setRevealedSet(new Set(ALL_ELEMENTS));
    playPopSound();
  };

  const replayBuild = () => {
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    isRunningRef.current = true;
    startTimeRef.current = null;
    lastScrolledRef.current = "";
    setRevealedSet(new Set());
    setCursors([]);
    setBuildState("initial_black");
    window.scrollTo({ top: 0, behavior: "smooth" });
    playPopSound();
  };

  const toggleBuild = () => {
    if (buildState === "completed") {
      replayBuild();
    } else {
      stopBuild();
    }
  };

  useEffect(() => {
    if (!isRunningRef.current) return;

    const loop = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = (timestamp - startTimeRef.current) / 1000;

      // PHASE TRANSITIONS & SCROLLING:
      // 0.0 - 0.6s: initial_black
      // 0.6 - 2.8s: circle_entrance
      // 2.8 - 8.0s: build_hero (at top)
      // 8.0 - 13.5s: build_work (scroll to #sec-work)
      // 13.5 - 19.0s: build_trackrecord (scroll to #sec-about)
      // 19.0 - 23.5s: build_contact (scroll to #sec-contact)
      // 23.5 - 25.0s: dynamic_disappear
      // 25.0s+: completed

      if (elapsed < 0.6) {
        setBuildState("initial_black");
        setCursors([]);
      } else if (elapsed < 2.8) {
        setBuildState("circle_entrance");
        const t = (elapsed - 0.6) / 2.2; // 0 to 1
        // 12 cursors converge from outside into a rotating circle in center
        const newCursors: AgentCursor[] = [];
        for (let i = 0; i < 12; i++) {
          const angle = (i / 12) * Math.PI * 2 + t * 4;
          const radius = 55 * (1 - t * 0.72); // shrinks to ~15%
          newCursors.push({
            id: i,
            color: AGENT_COLORS[i],
            role: AGENT_ROLES[i],
            x: 50 + radius * Math.cos(angle),
            y: 50 + (radius * 0.7) * Math.sin(angle), // slightly oval
            scale: 1 + Math.sin(t * 6 + i) * 0.15,
            opacity: Math.min(1, t * 2),
            isClicking: t > 0.8,
          });
        }
        setCursors(newCursors);
      } else if (elapsed < 8.0) {
        setBuildState("build_hero");
        if (lastScrolledRef.current !== "hero") {
          lastScrolledRef.current = "hero";
          scrollToEl("sec-hero", "start");
        }

        const t = (elapsed - 2.8) / 5.2; // 0 to 1
        // Cursors scatter across Hero to construct it
        setCursors([
          // Giant Red PORTFOLIO backdrop (0 & 1)
          { id: 0, color: AGENT_COLORS[0], role: "Vector", x: 40 + Math.sin(t * 8) * 8, y: 30, opacity: 1 },
          { id: 1, color: AGENT_COLORS[1], role: "Style", x: 60 + Math.cos(t * 7) * 8, y: 32, opacity: 1 },
          // Center Portrait (2 & 3)
          { id: 2, color: AGENT_COLORS[2], role: "Photo", x: 48 + Math.sin(t * 6) * 4, y: 50, opacity: 1, isClicking: true },
          { id: 3, color: AGENT_COLORS[3], role: "Motion", x: 53 + Math.cos(t * 6) * 4, y: 55, opacity: 1 },
          // Left Intro Text & Title (4 & 5)
          { id: 4, color: AGENT_COLORS[4], role: "Text", x: 26 + Math.sin(t * 7) * 4, y: 44, opacity: 1 },
          { id: 5, color: AGENT_COLORS[5], role: "Text", x: 28 + Math.cos(t * 5) * 4, y: 52, opacity: 1 },
          // Bio & Actions (6 & 7)
          { id: 6, color: AGENT_COLORS[6], role: "Card", x: 24 + Math.sin(t * 6) * 3, y: 64, opacity: 1 },
          { id: 7, color: AGENT_COLORS[7], role: "Layout", x: 30 + Math.cos(t * 7) * 3, y: 72, opacity: 1 },
          // Right Stats (8, 9, 10, 11)
          { id: 8, color: AGENT_COLORS[8], role: "DB", x: 74 + Math.sin(t * 6) * 3, y: 38, opacity: 1 },
          { id: 9, color: AGENT_COLORS[9], role: "Code", x: 76 + Math.cos(t * 5) * 3, y: 50, opacity: 1 },
          { id: 10, color: AGENT_COLORS[10], role: "Pill", x: 73 + Math.sin(t * 7) * 3, y: 62, opacity: 1 },
          { id: 11, color: AGENT_COLORS[11], role: "Render", x: 77 + Math.cos(t * 6) * 3, y: 74, opacity: 1 },
        ]);

        // Element reveals
        revealItem("hero_backdrop", elapsed >= 3.0, 480);
        revealItem("hero_photo", elapsed >= 3.8, 620);
        revealItem("hero_intro", elapsed >= 4.6, 560);
        revealItem("hero_actions", elapsed >= 5.8, 520);
        revealItem("hero_stats", elapsed >= 6.6, 680);
      } else if (elapsed < 13.5) {
        setBuildState("build_work");
        if (lastScrolledRef.current !== "work") {
          lastScrolledRef.current = "work";
          scrollToEl("sec-work", "start");
        }

        const t = (elapsed - 8.0) / 5.5; // 0 to 1
        setCursors([
          { id: 0, color: AGENT_COLORS[0], role: "Text", x: 30 + Math.sin(t * 7) * 5, y: 22, opacity: 1 },
          { id: 1, color: AGENT_COLORS[1], role: "Layout", x: 50 + Math.cos(t * 6) * 6, y: 24, opacity: 1 },
          // Card 01 PASSI
          { id: 2, color: AGENT_COLORS[2], role: "Card", x: 26 + Math.sin(t * 6) * 4, y: 44, opacity: 1 },
          { id: 3, color: AGENT_COLORS[3], role: "Pill", x: 32 + Math.cos(t * 7) * 5, y: 56, opacity: 1 },
          // Card 02 HYDROOBLOOM
          { id: 4, color: AGENT_COLORS[4], role: "Card", x: 72 + Math.sin(t * 6) * 4, y: 44, opacity: 1 },
          { id: 5, color: AGENT_COLORS[5], role: "Pill", x: 78 + Math.cos(t * 7) * 5, y: 56, opacity: 1 },
          // Card 03 DIZY WEB
          { id: 6, color: AGENT_COLORS[6], role: "Card", x: 28 + Math.sin(t * 5) * 4, y: 74, opacity: 1 },
          { id: 7, color: AGENT_COLORS[7], role: "Pill", x: 34 + Math.cos(t * 6) * 4, y: 84, opacity: 1 },
          // Card 04 ENACTUS
          { id: 8, color: AGENT_COLORS[8], role: "Card", x: 74 + Math.sin(t * 5) * 4, y: 74, opacity: 1 },
          { id: 9, color: AGENT_COLORS[9], role: "Pill", x: 78 + Math.cos(t * 6) * 4, y: 84, opacity: 1 },
          { id: 10, color: AGENT_COLORS[10], role: "Code", x: 45 + Math.sin(t * 7) * 4, y: 65, opacity: 1 },
          { id: 11, color: AGENT_COLORS[11], role: "Render", x: 55 + Math.cos(t * 7) * 4, y: 65, opacity: 1 },
        ]);

        revealItem("work_title", elapsed >= 8.4, 520);
        revealItem("card_01_passi", elapsed >= 9.2, 580);
        revealItem("pills_01", elapsed >= 9.8, 620);
        revealItem("card_02_hydroobloom", elapsed >= 10.4, 600);
        revealItem("pills_02", elapsed >= 11.0, 640);
        revealItem("card_03_dizy", elapsed >= 11.6, 590);
        revealItem("pills_03", elapsed >= 12.2, 630);
        revealItem("card_04_enactus", elapsed >= 12.8, 610);
        revealItem("pills_04", elapsed >= 13.2, 650);
      } else if (elapsed < 19.0) {
        setBuildState("build_trackrecord");
        if (lastScrolledRef.current !== "about") {
          lastScrolledRef.current = "about";
          scrollToEl("sec-about", "start");
        }

        const t = (elapsed - 13.5) / 5.5; // 0 to 1
        setCursors([
          // Horizontal tech stack bar
          { id: 0, color: AGENT_COLORS[0], role: "Style", x: 45 + Math.sin(t * 8) * 15, y: 18, opacity: 1 },
          // BUILT FAST. SHIPPED REAL.
          { id: 1, color: AGENT_COLORS[1], role: "Text", x: 28 + Math.cos(t * 6) * 4, y: 34, opacity: 1 },
          // 40.
          { id: 2, color: AGENT_COLORS[2], role: "DB", x: 24 + Math.sin(t * 6) * 3, y: 46, opacity: 1 },
          // NOT JUST CODE. CODE THAT SHIPS.
          { id: 3, color: AGENT_COLORS[3], role: "Text", x: 30 + Math.cos(t * 7) * 4, y: 62, opacity: 1 },
          // Bio body text
          { id: 4, color: AGENT_COLORS[4], role: "Text", x: 26 + Math.sin(t * 5) * 4, y: 76, opacity: 1 },
          // Timeline on right
          { id: 5, color: AGENT_COLORS[5], role: "Card", x: 74 + Math.sin(t * 6) * 4, y: 34, opacity: 1 },
          { id: 6, color: AGENT_COLORS[6], role: "Layout", x: 76 + Math.cos(t * 6) * 4, y: 45, opacity: 1 },
          // Education
          { id: 7, color: AGENT_COLORS[7], role: "Card", x: 73 + Math.sin(t * 7) * 3, y: 58, opacity: 1 },
          // THE ORANGE PRINCIPLE BOX (Agents 8, 9, 10, 11 positioning it!)
          { id: 8, color: AGENT_COLORS[8], role: "Card", x: 70 + Math.sin(t * 8) * 4, y: 78, opacity: 1, isClicking: true },
          { id: 9, color: AGENT_COLORS[9], role: "Style", x: 78 + Math.cos(t * 7) * 4, y: 80, opacity: 1 },
          { id: 10, color: AGENT_COLORS[10], role: "Motion", x: 68 + Math.cos(t * 8) * 3, y: 84, opacity: 1 },
          { id: 11, color: AGENT_COLORS[11], role: "Render", x: 80 + Math.sin(t * 6) * 3, y: 84, opacity: 1 },
        ]);

        revealItem("tech_bar", elapsed >= 13.9, 520);
        revealItem("built_fast_title", elapsed >= 14.5, 560);
        revealItem("stat_40", elapsed >= 15.2, 600);
        revealItem("timeline_items", elapsed >= 16.0, 640);
        revealItem("not_just_code", elapsed >= 16.8, 680);
        revealItem("body_bio", elapsed >= 17.4, 540);
        revealItem("education_card", elapsed >= 18.0, 580);
        revealItem("orange_principle_box", elapsed >= 18.5, 750);
      } else if (elapsed < 23.5) {
        setBuildState("build_contact");
        if (lastScrolledRef.current !== "contact") {
          lastScrolledRef.current = "contact";
          scrollToEl("sec-contact", "start");
        }

        const t = (elapsed - 19.0) / 4.5; // 0 to 1
        setCursors([
          // LET'S WORK TOGETHER.
          { id: 0, color: AGENT_COLORS[0], role: "Text", x: 28 + Math.sin(t * 7) * 4, y: 40, opacity: 1 },
          { id: 1, color: AGENT_COLORS[1], role: "Style", x: 30 + Math.cos(t * 6) * 4, y: 52, opacity: 1 },
          // Right labels (Email, Phone, Socials)
          { id: 2, color: AGENT_COLORS[2], role: "Card", x: 72 + Math.sin(t * 6) * 4, y: 38, opacity: 1 },
          { id: 3, color: AGENT_COLORS[3], role: "Card", x: 74 + Math.cos(t * 7) * 4, y: 48, opacity: 1 },
          { id: 4, color: AGENT_COLORS[4], role: "Pill", x: 68 + Math.sin(t * 6) * 3, y: 58, opacity: 1 },
          { id: 5, color: AGENT_COLORS[5], role: "Pill", x: 78 + Math.cos(t * 6) * 3, y: 58, opacity: 1 },
          // Orange SHIP IT FOR REAL box
          { id: 6, color: AGENT_COLORS[6], role: "Card", x: 72 + Math.sin(t * 8) * 3, y: 72, opacity: 1, isClicking: true },
          { id: 7, color: AGENT_COLORS[7], role: "Style", x: 76 + Math.cos(t * 8) * 3, y: 74, opacity: 1 },
          // Gathering in cluster like video at 20s
          { id: 8, color: AGENT_COLORS[8], role: "Render", x: 75 + Math.sin(t * 9) * 2, y: 76, opacity: 1 },
          { id: 9, color: AGENT_COLORS[9], role: "Motion", x: 70 + Math.cos(t * 9) * 2, y: 76, opacity: 1 },
          { id: 10, color: AGENT_COLORS[10], role: "Code", x: 73 + Math.sin(t * 8) * 2, y: 78, opacity: 1 },
          { id: 11, color: AGENT_COLORS[11], role: "Layout", x: 77 + Math.cos(t * 8) * 2, y: 78, opacity: 1 },
        ]);

        revealItem("contact_title", elapsed >= 19.4, 520);
        revealItem("contact_items", elapsed >= 20.4, 580);
        revealItem("orange_ship_it", elapsed >= 21.6, 720);
      } else if (elapsed < 25.0) {
        setBuildState("dynamic_disappear");
        const t = (elapsed - 23.5) / 1.5; // 0 to 1
        // Cursors swirl together in an implosion / vortex and vanish!
        const swirling: AgentCursor[] = [];
        for (let i = 0; i < 12; i++) {
          const angle = (i / 12) * Math.PI * 2 + t * 10;
          const radius = (1 - t) * 15;
          swirling.push({
            id: i,
            color: AGENT_COLORS[i],
            role: AGENT_ROLES[i],
            x: 50 + radius * Math.cos(angle),
            y: 50 + radius * Math.sin(angle),
            scale: Math.max(0, 1 - t),
            opacity: Math.max(0, 1 - t),
          });
        }
        setCursors(swirling);
      } else {
        // Complete
        isRunningRef.current = false;
        setBuildState("completed");
        setCursors([]);
        setRevealedSet(new Set(ALL_ELEMENTS));
        // Return view smoothly to top hero so the user can freely enjoy their site
        scrollToEl("sec-hero", "start");
        return;
      }

      animFrameRef.current = requestAnimationFrame(loop);
    };

    const revealItem = (id: string, condition: boolean, pitch?: number) => {
      if (condition) {
        setRevealedSet((prev) => {
          if (!prev.has(id)) {
            const next = new Set(prev);
            next.add(id);
            if (pitch) playClickSound(pitch);
            return next;
          }
          return prev;
        });
      }
    };

    animFrameRef.current = requestAnimationFrame(loop);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [buildState]);

  const isRevealed = (id: string) => {
    if (buildState === "completed") return true;
    return revealedSet.has(id);
  };

  return (
    <BuildContext.Provider
      value={{
        buildState,
        isBuilding: buildState !== "completed",
        isFinished: buildState === "completed",
        cursors,
        isRevealed,
        stopBuild,
        replayBuild,
        toggleBuild,
      }}
    >
      {children}
    </BuildContext.Provider>
  );
};

export const useVideoBuild = () => {
  const context = useContext(BuildContext);
  if (!context) {
    throw new Error("useVideoBuild must be used within VideoBuildProvider");
  }
  return context;
};
