import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { TimelinePhase, VideoCursor } from "../types/timeline";
import { playClickSound, playPopSound } from "../utils/audio";

interface VideoBuildContextType {
  currentTime: number; // 0.0 to 38.0
  phase: TimelinePhase;
  isPlaying: boolean;
  isFinished: boolean;
  togglePlay: () => void;
  replay: () => void;
  skip: () => void;
  cursors: VideoCursor[];
  isRevealed: (id: string) => boolean;
}

const VideoBuildContext = createContext<VideoBuildContextType | null>(null);

const CURSOR_COLORS = [
  "#FF3E24", // Red
  "#38bdf8", // Sky blue
  "#10b981", // Emerald
  "#a855f7", // Purple
  "#f59e0b", // Amber
  "#ec4899", // Pink
  "#06b6d4", // Cyan
  "#f43f5e", // Rose
];

export const VideoBuildProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [phase, setPhase] = useState<TimelinePhase>("p1_initial_sections");
  const [cursors, setCursors] = useState<VideoCursor[]>([]);
  const [revealedSet, setRevealedSet] = useState<Set<string>>(new Set());

  const animFrameRef = useRef<number | null>(null);
  const lastTimestampRef = useRef<number | null>(null);
  const lastScrollPhaseRef = useRef<string>("");

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const startTimeline = () => {
    setCurrentTime(0);
    setIsPlaying(true);
    setPhase("p1_initial_sections");
    setRevealedSet(new Set());
    lastTimestampRef.current = null;
    lastScrollPhaseRef.current = "";
    scrollToSection("sec-initial");
    playPopSound();
  };

  const skip = () => {
    setIsPlaying(false);
    setCurrentTime(38.5);
    setPhase("finished");
    setCursors([]);
    // Reveal all
    setRevealedSet(
      new Set([
        "sec03_title", "sec04_title", "sec03_pills", "sec04_pills",
        "tech_bar", "built_fast_title", "stat_40", "timeline_items", "not_just_code",
        "body_bio", "education_card", "orange_principle_box",
        "contact_title", "contact_items", "orange_ship_it",
        "portfolio_backdrop", "hero_photo", "hero_intro_text", "hero_stats",
        "work_that_ships_title", "card_01_passi", "card_02_hydroobloom"
      ])
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Main 00:00 - 00:38 timeline runner loop
  useEffect(() => {
    if (!isPlaying) {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      return;
    }

    const updateLoop = (timestamp: number) => {
      if (!lastTimestampRef.current) {
        lastTimestampRef.current = timestamp;
      }
      const delta = (timestamp - lastTimestampRef.current) / 1000;
      lastTimestampRef.current = timestamp;

      setCurrentTime((prev) => {
        const nextTime = prev + delta;

        // 1. Phase Detection & Auto-Scroll
        if (nextTime < 3.0) {
          setPhase("p1_initial_sections");
          if (lastScrollPhaseRef.current !== "p1") {
            lastScrollPhaseRef.current = "p1";
            scrollToSection("sec-initial");
          }
        } else if (nextTime >= 3.0 && nextTime < 10.0) {
          setPhase("p2_built_fast");
          if (lastScrollPhaseRef.current !== "p2") {
            lastScrollPhaseRef.current = "p2";
            scrollToSection("sec-trackrecord");
          }
        } else if (nextTime >= 10.0 && nextTime < 17.0) {
          setPhase("p3_principles");
          if (lastScrollPhaseRef.current !== "p3") {
            lastScrollPhaseRef.current = "p3";
            const el = document.getElementById("orange-principle-container");
            if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        } else if (nextTime >= 17.0 && nextTime < 21.0) {
          setPhase("p4_contact");
          if (lastScrollPhaseRef.current !== "p4") {
            lastScrollPhaseRef.current = "p4";
            scrollToSection("sec-contact");
          }
        } else if (nextTime >= 21.0 && nextTime < 30.0) {
          setPhase("p5_hero_profile");
          if (lastScrollPhaseRef.current !== "p5") {
            lastScrollPhaseRef.current = "p5";
            scrollToSection("sec-hero");
          }
        } else if (nextTime >= 30.0 && nextTime < 38.0) {
          setPhase("p6_work_that_ships");
          if (lastScrollPhaseRef.current !== "p6") {
            lastScrollPhaseRef.current = "p6";
            scrollToSection("sec-projects");
          }
        } else if (nextTime >= 38.0) {
          setPhase("finished");
          setIsPlaying(false);
          setCursors([]);
          return 38.5;
        }

        // 2. Incremental Element Reveal along timestamps
        setRevealedSet((prevSet) => {
          const nextSet = new Set(prevSet);
          const add = (id: string, t: number, sfxPitch?: number) => {
            if (nextTime >= t && !nextSet.has(id)) {
              nextSet.add(id);
              if (sfxPitch) playClickSound(sfxPitch);
            }
          };

          // 00:00 - 00:03
          add("sec03_title", 0.3, 500);
          add("sec04_title", 0.9, 540);
          add("sec03_pills", 1.5, 580);
          add("sec04_pills", 2.1, 620);

          // 00:03 - 00:10
          add("tech_bar", 3.2, 520);
          add("built_fast_title", 4.0, 560);
          add("stat_40", 5.2, 600);
          add("timeline_items", 6.5, 640);
          add("not_just_code", 8.2, 680);

          // 00:10 - 00:17
          add("body_bio", 10.5, 500);
          add("education_card", 12.5, 540);
          add("orange_principle_box", 14.8, 720);

          // 00:17 - 00:21
          add("contact_title", 17.5, 500);
          add("contact_items", 18.8, 560);
          add("orange_ship_it", 20.0, 680);

          // 00:21 - 00:30
          add("portfolio_backdrop", 21.5, 480);
          add("hero_photo", 23.2, 650);
          add("hero_intro_text", 25.5, 580);
          add("hero_stats", 28.0, 620);

          // 00:30 - 00:38
          add("work_that_ships_title", 30.5, 540);
          add("card_01_passi", 32.5, 600);
          add("card_02_hydroobloom", 35.2, 660);

          return nextSet;
        });

        // 3. Dynamic Cursor Coordinates matching the active section
        if (nextTime < 3.0) {
          // 00:00 - 00:03: Cursors dropping 03 DUM & 04 CUBAN CLUB and pills
          setCursors([
            { id: 0, color: "#FF3E24", x: 20 + Math.sin(nextTime * 3) * 5, y: 35, opacity: 1 },
            { id: 1, color: "#38bdf8", x: 25 + Math.cos(nextTime * 4) * 6, y: 50, opacity: 1 },
            { id: 2, color: "#10b981", x: 65 + Math.sin(nextTime * 4) * 5, y: 35, opacity: 1 },
            { id: 3, color: "#a855f7", x: 72 + Math.cos(nextTime * 3) * 6, y: 50, opacity: 1 },
            { id: 4, color: "#f59e0b", x: 45 + Math.sin(nextTime * 5) * 8, y: 40, opacity: 1 },
          ]);
        } else if (nextTime < 10.0) {
          // 00:03 - 00:10: BUILT FAST, 40., tech bar, timeline, NOT JUST CODE
          setCursors([
            { id: 0, color: "#FF3E24", x: 22 + Math.sin(nextTime * 4) * 4, y: 22, opacity: 1 }, // Tech bar
            { id: 1, color: "#38bdf8", x: 30 + Math.cos(nextTime * 3) * 5, y: 42, opacity: 1 }, // Built fast
            { id: 2, color: "#10b981", x: 35 + Math.sin(nextTime * 5) * 4, y: 62, opacity: 1 }, // 40.
            { id: 3, color: "#a855f7", x: 75 + Math.cos(nextTime * 3) * 4, y: 48, opacity: 1 }, // Timeline
            { id: 4, color: "#f59e0b", x: 32 + Math.sin(nextTime * 4) * 6, y: 78, opacity: 1 }, // Not just code
          ]);
        } else if (nextTime < 17.0) {
          // 00:10 - 00:17: Body text, Education, Orange principle box
          setCursors([
            { id: 0, color: "#FF3E24", x: 30 + Math.sin(nextTime * 4) * 6, y: 38, opacity: 1 }, // Bio
            { id: 1, color: "#38bdf8", x: 72 + Math.cos(nextTime * 3) * 5, y: 38, opacity: 1 }, // Education
            { id: 2, color: "#f59e0b", x: 50 + Math.sin(nextTime * 6) * 4, y: 62, opacity: 1 }, // Placing Orange Box!
            { id: 3, color: "#10b981", x: 45 + Math.cos(nextTime * 4) * 5, y: 65, opacity: 1 },
          ]);
        } else if (nextTime < 21.0) {
          // 00:17 - 00:21: Contact, right labels, Orange SHIP IT
          setCursors([
            { id: 0, color: "#FF3E24", x: 28 + Math.sin(nextTime * 5) * 5, y: 40, opacity: 1 }, // Title
            { id: 1, color: "#38bdf8", x: 70 + Math.cos(nextTime * 4) * 4, y: 42, opacity: 1 }, // Email/Phone
            { id: 2, color: "#10b981", x: 74 + Math.sin(nextTime * 3) * 5, y: 55, opacity: 1 }, // Socials
            { id: 3, color: "#f59e0b", x: 72 + Math.cos(nextTime * 5) * 3, y: 70, opacity: 1 }, // Orange SHIP IT
          ]);
        } else if (nextTime < 30.0) {
          // 00:21 - 00:30: Red PORTFOLIO, Photo, Hello I'm Adem, Stats
          setCursors([
            { id: 0, color: "#FF3E24", x: 50 + Math.sin(nextTime * 3) * 8, y: 25, opacity: 1 }, // PORTFOLIO text
            { id: 1, color: "#38bdf8", x: 50 + Math.cos(nextTime * 4) * 4, y: 45, opacity: 1 }, // Positioning Photo
            { id: 2, color: "#a855f7", x: 26 + Math.sin(nextTime * 4) * 5, y: 38, opacity: 1 }, // Hello I'm Adem
            { id: 3, color: "#10b981", x: 28 + Math.cos(nextTime * 3) * 4, y: 52, opacity: 1 }, // Title & bio
            { id: 4, color: "#f59e0b", x: 78 + Math.sin(nextTime * 5) * 4, y: 45, opacity: 1 }, // Stats
          ]);
        } else if (nextTime < 38.0) {
          // 00:30 - 00:38: WORK THAT SHIPS, 01 EVENEEZ, 02 JANSETU
          setCursors([
            { id: 0, color: "#FF3E24", x: 50 + Math.sin(nextTime * 3) * 6, y: 20, opacity: 1 }, // Header
            { id: 1, color: "#38bdf8", x: 26 + Math.cos(nextTime * 4) * 4, y: 42, opacity: 1 }, // Card 01
            { id: 2, color: "#10b981", x: 32 + Math.sin(nextTime * 5) * 4, y: 60, opacity: 1 }, // Card 01 pills
            { id: 3, color: "#a855f7", x: 72 + Math.cos(nextTime * 4) * 4, y: 42, opacity: 1 }, // Card 02
            { id: 4, color: "#f59e0b", x: 78 + Math.sin(nextTime * 3) * 4, y: 60, opacity: 1 }, // Card 02 pills
          ]);
        } else {
          // Disappearing
          setCursors([]);
        }

        return nextTime;
      });

      animFrameRef.current = requestAnimationFrame(updateLoop);
    };

    animFrameRef.current = requestAnimationFrame(updateLoop);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPlaying]);

  // Initial mount trigger
  useEffect(() => {
    startTimeline();
  }, []);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const isRevealed = (id: string) => {
    if (phase === "finished") return true;
    return revealedSet.has(id);
  };

  return (
    <VideoBuildContext.Provider
      value={{
        currentTime,
        phase,
        isPlaying,
        isFinished: phase === "finished",
        togglePlay,
        replay: startTimeline,
        skip,
        cursors,
        isRevealed,
      }}
    >
      {children}
    </VideoBuildContext.Provider>
  );
};

export const useVideoBuild = () => {
  const context = useContext(VideoBuildContext);
  if (!context) {
    throw new Error("useVideoBuild must be used within VideoBuildProvider");
  }
  return context;
};
