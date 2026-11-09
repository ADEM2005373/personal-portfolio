import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { BuildState, AgentCursor } from "../types/timeline";
import { playClickSound, playPopSound } from "../utils/audio";

interface BuildContextType {
  buildState: BuildState;
  isBuilding: boolean;
  isFinished: boolean;
  cursors: AgentCursor[];
  isRevealed: (id: string) => boolean;
  isElementBuilding: (id: string) => boolean;
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

const AGENT_ROLES = [
  "Text", "Card", "Photo", "Pill", "DB", "Layout",
  "Style", "Vector", "Code", "Grid", "Motion", "Render"
];

const ALL_ELEMENTS = [
  "hero_backdrop", "hero_photo", "hero_name", "hero_title", "hero_bio", "hero_stats", "hero_cta",
  "work_title", "card_01_passi", "card_02_hydroobloom", "card_03_dizy", "card_04_enactus",
  "pills_01", "pills_02", "pills_03", "pills_04",
  "tech_bar", "built_fast_title", "stat_40", "timeline_items", "not_just_code",
  "body_bio", "education_card", "orange_principle_box",
  "contact_title", "contact_items", "orange_ship_it"
];

export const VideoBuildProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [buildState, setBuildState] = useState<BuildState>("initial_black");
  const [cursors, setCursors] = useState<AgentCursor[]>([]);
  const [revealedSet, setRevealedSet] = useState<Set<string>>(new Set());
  const [activeBuildingIds, setActiveBuildingIds] = useState<Set<string>>(new Set());

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

  const getTargetPos = (id: string, relX = 0.5, relY = 0.5): { x: number; y: number } => {
    const el = document.getElementById(id);
    if (el) {
      const rect = el.getBoundingClientRect();
      return {
        x: rect.left + rect.width * relX,
        y: rect.top + rect.height * relY,
      };
    }
    // Fallback to center-ish if element not found yet
    return {
      x: window.innerWidth * relX,
      y: window.innerHeight * relY,
    };
  };

  const stopBuild = () => {
    isRunningRef.current = false;
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    setBuildState("completed");
    setCursors([]);
    setActiveBuildingIds(new Set());
    setRevealedSet(new Set(ALL_ELEMENTS));
    playPopSound();
  };

  const replayBuild = () => {
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    isRunningRef.current = true;
    startTimeRef.current = null;
    lastScrolledRef.current = "";
    setRevealedSet(new Set());
    setActiveBuildingIds(new Set());
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

      const w = window.innerWidth;
      const h = window.innerHeight;

      // ==========================================
      // PHASE 1: INITIAL BLACK (0.0s - 0.6s)
      // ==========================================
      if (elapsed < 0.6) {
        setBuildState("initial_black");
        setCursors([]);
      } 
      // ==========================================
      // PHASE 2: DYNAMIC CIRCLE ENTRANCE (0.6s - 2.8s)
      // ==========================================
      else if (elapsed < 2.8) {
        setBuildState("circle_entrance");
        const t = (elapsed - 0.6) / 2.2;
        const cx = w / 2;
        const cy = h / 2;

        const newCursors: AgentCursor[] = [];
        for (let i = 0; i < 12; i++) {
          const angle = (i / 12) * Math.PI * 2 + t * 4;
          const radius = (Math.max(w, h) * 0.45) * (1 - t * 0.75); // shrinks inwards
          newCursors.push({
            id: i,
            color: AGENT_COLORS[i],
            role: AGENT_ROLES[i],
            x: cx + radius * Math.cos(angle),
            y: cy + (radius * 0.7) * Math.sin(angle),
            scale: 1 + Math.sin(t * 6 + i) * 0.15,
            opacity: Math.min(1, t * 2.5),
            isClicking: t > 0.85,
          });
        }
        setCursors(newCursors);
      } 
      // ==========================================
      // PHASE 3: HERO PROFILE SECTION (2.8s - 8.0s)
      // ==========================================
      else if (elapsed < 8.0) {
        setBuildState("build_hero");
        if (lastScrolledRef.current !== "hero") {
          lastScrolledRef.current = "hero";
          scrollToEl("sec-hero", "start");
        }

        const t = (elapsed - 2.8) / 5.2;

        // Actual element target coordinates from DOM!
        const pBackdrop = getTargetPos("hero-backdrop", 0.5, 0.5);
        const pPhoto = getTargetPos("hero-photo-frame", 0.5, 0.5);
        const pName = getTargetPos("hero-name", 0.3, 0.5);
        const pTitle = getTargetPos("hero-title", 0.5, 0.5);
        const pBio = getTargetPos("hero-bio", 0.5, 0.5);
        const pCta = getTargetPos("hero-cta", 0.5, 0.5);
        const pStat0 = getTargetPos("hero-stat-0", 0.8, 0.2);
        const pStat1 = getTargetPos("hero-stat-1", 0.8, 0.2);
        const pStat2 = getTargetPos("hero-stat-2", 0.8, 0.2);
        const pStat3 = getTargetPos("hero-stat-3", 0.8, 0.2);

        // Mark elements as actively building
        setActiveBuildingIds(new Set([
          ...(elapsed < 4.2 ? ["hero_backdrop"] : []),
          ...(elapsed >= 3.4 && elapsed < 5.2 ? ["hero_photo"] : []),
          ...(elapsed >= 4.0 && elapsed < 6.2 ? ["hero_intro"] : []),
          ...(elapsed >= 5.6 && elapsed < 7.6 ? ["hero_stats"] : []),
        ]));

        setCursors([
          // 0 & 1: Drawing the faint red PORTFOLIO backdrop
          {
            id: 0,
            color: AGENT_COLORS[0],
            role: "Vector",
            x: pBackdrop.x - 120 + Math.sin(t * 8) * 80,
            y: pBackdrop.y + Math.cos(t * 6) * 20,
            carryingItem: elapsed < 3.8 ? "PORTFOLIO" : undefined,
            opacity: 1,
          },
          {
            id: 1,
            color: AGENT_COLORS[1],
            role: "Style",
            x: pBackdrop.x + 120 + Math.cos(t * 7) * 80,
            y: pBackdrop.y - Math.sin(t * 5) * 20,
            opacity: 1,
          },
          // 2 & 3: Carrying & positioning the suit photo frame
          {
            id: 2,
            color: AGENT_COLORS[2],
            role: "Photo",
            x: pPhoto.x - 20 + Math.sin(t * 5) * 15,
            y: pPhoto.y - 20 + Math.cos(t * 5) * 15,
            carryingItem: elapsed < 4.8 ? "Photo: Adem" : undefined,
            isClicking: elapsed >= 4.6 && elapsed <= 5.0,
            opacity: 1,
          },
          {
            id: 3,
            color: AGENT_COLORS[3],
            role: "Motion",
            x: pPhoto.x + 30 + Math.cos(t * 6) * 12,
            y: pPhoto.y + 30 + Math.sin(t * 6) * 12,
            opacity: 1,
          },
          // 4: Typing name
          {
            id: 4,
            color: AGENT_COLORS[4],
            role: "Text",
            x: pName.x + Math.sin(t * 8) * 25,
            y: pName.y,
            opacity: 1,
          },
          // 5: Constructing title & bio
          {
            id: 5,
            color: AGENT_COLORS[5],
            role: "Text",
            x: pTitle.x + Math.cos(t * 7) * 20,
            y: pTitle.y,
            opacity: 1,
          },
          // 6 & 7: Placing CTA button
          {
            id: 6,
            color: AGENT_COLORS[6],
            role: "Card",
            x: pBio.x + Math.sin(t * 6) * 20,
            y: pBio.y,
            opacity: 1,
          },
          {
            id: 7,
            color: AGENT_COLORS[7],
            role: "Layout",
            x: pCta.x + Math.cos(t * 8) * 15,
            y: pCta.y,
            carryingItem: elapsed >= 5.0 && elapsed < 6.0 ? "VIEW WORK >" : undefined,
            opacity: 1,
          },
          // 8, 9, 10, 11: Locking in the 4 Stats
          {
            id: 8,
            color: AGENT_COLORS[8],
            role: "DB",
            x: pStat0.x + Math.sin(t * 7) * 10,
            y: pStat0.y + Math.cos(t * 7) * 10,
            carryingItem: elapsed < 6.8 ? "40 Tests" : undefined,
            isClicking: elapsed >= 6.5 && elapsed <= 6.8,
            opacity: 1,
          },
          {
            id: 9,
            color: AGENT_COLORS[9],
            role: "Code",
            x: pStat1.x + Math.cos(t * 6) * 10,
            y: pStat1.y + Math.sin(t * 6) * 10,
            carryingItem: elapsed < 7.1 ? "22+ Repos" : undefined,
            opacity: 1,
          },
          {
            id: 10,
            color: AGENT_COLORS[10],
            role: "Pill",
            x: pStat2.x + Math.sin(t * 6) * 10,
            y: pStat2.y + Math.cos(t * 6) * 10,
            carryingItem: elapsed < 7.4 ? "02 Sites" : undefined,
            opacity: 1,
          },
          {
            id: 11,
            color: AGENT_COLORS[11],
            role: "Render",
            x: pStat3.x + Math.cos(t * 7) * 10,
            y: pStat3.y + Math.sin(t * 7) * 10,
            carryingItem: elapsed < 7.7 ? "Class '26" : undefined,
            opacity: 1,
          },
        ]);

        revealItem("hero_backdrop", elapsed >= 3.2, 480);
        revealItem("hero_photo", elapsed >= 4.4, 620);
        revealItem("hero_intro", elapsed >= 4.8, 560);
        revealItem("hero_name", elapsed >= 5.0, 540);
        revealItem("hero_title", elapsed >= 5.4, 580);
        revealItem("hero_bio", elapsed >= 5.8, 520);
        revealItem("hero_actions", elapsed >= 6.2, 530);
        revealItem("hero_stats", elapsed >= 6.8, 680);
      } 
      // ==========================================
      // PHASE 4: WORK / PROJECTS SECTION (8.0s - 13.5s)
      // ==========================================
      else if (elapsed < 13.5) {
        setBuildState("build_work");
        if (lastScrolledRef.current !== "work") {
          lastScrolledRef.current = "work";
          scrollToEl("sec-work", "start");
        }

        const t = (elapsed - 8.0) / 5.5;

        const pWorkHeading = getTargetPos("work-heading", 0.5, 0.5);
        const pCard01 = getTargetPos("card-01-passi", 0.5, 0.5);
        const pCard01Pills = getTargetPos("pills-01", 0.5, 0.5);
        const pCard02 = getTargetPos("card-02-hydroobloom", 0.5, 0.5);
        const pCard02Pills = getTargetPos("pills-02", 0.5, 0.5);
        const pCard03 = getTargetPos("card-03-dizy", 0.5, 0.5);
        const pCard03Pills = getTargetPos("pills-03", 0.5, 0.5);
        const pCard04 = getTargetPos("card-04-enactus", 0.5, 0.5);
        const pCard04Pills = getTargetPos("pills-04", 0.5, 0.5);

        setActiveBuildingIds(new Set([
          ...(elapsed >= 8.2 && elapsed < 9.6 ? ["work_title"] : []),
          ...(elapsed >= 8.8 && elapsed < 11.0 ? ["card_01_passi", "pills_01"] : []),
          ...(elapsed >= 9.8 && elapsed < 12.0 ? ["card_02_hydroobloom", "pills_02"] : []),
          ...(elapsed >= 11.0 && elapsed < 13.0 ? ["card_03_dizy", "pills_03"] : []),
          ...(elapsed >= 11.8 && elapsed < 13.4 ? ["card_04_enactus", "pills_04"] : []),
        ]));

        setCursors([
          // Title cursors
          { id: 0, color: AGENT_COLORS[0], role: "Text", x: pWorkHeading.x - 60 + Math.sin(t * 8) * 30, y: pWorkHeading.y, opacity: 1 },
          { id: 1, color: AGENT_COLORS[1], role: "Layout", x: pWorkHeading.x + 60 + Math.cos(t * 8) * 30, y: pWorkHeading.y, opacity: 1 },
          // Card 01 PASSI: Cursor 2 drags corner handle, Cursor 3 drops tech pills
          {
            id: 2,
            color: AGENT_COLORS[2],
            role: "Card",
            x: pCard01.x + Math.sin(t * 6) * 15,
            y: pCard01.y + Math.cos(t * 6) * 15,
            carryingItem: elapsed >= 8.8 && elapsed < 9.5 ? "01 PASSI" : undefined,
            opacity: 1,
          },
          {
            id: 3,
            color: AGENT_COLORS[3],
            role: "Pill",
            x: pCard01Pills.x + Math.sin(t * 8) * 20,
            y: pCard01Pills.y,
            carryingItem: elapsed < 10.2 ? "Vue.js" : "MongoDB",
            isClicking: elapsed >= 9.8 && elapsed <= 10.3,
            opacity: 1,
          },
          // Card 02 HYDROOBLOOM: Cursor 4 drags corner handle, Cursor 5 drops IoT pills
          {
            id: 4,
            color: AGENT_COLORS[4],
            role: "Card",
            x: pCard02.x + Math.sin(t * 6) * 15,
            y: pCard02.y + Math.cos(t * 6) * 15,
            carryingItem: elapsed >= 9.8 && elapsed < 10.6 ? "02 HYDROOBLOOM" : undefined,
            opacity: 1,
          },
          {
            id: 5,
            color: AGENT_COLORS[5],
            role: "Pill",
            x: pCard02Pills.x + Math.cos(t * 8) * 20,
            y: pCard02Pills.y,
            carryingItem: elapsed < 11.2 ? "IoT Sensors" : "Telemetry",
            isClicking: elapsed >= 10.8 && elapsed <= 11.3,
            opacity: 1,
          },
          // Card 03 DIZY WEB
          {
            id: 6,
            color: AGENT_COLORS[6],
            role: "Card",
            x: pCard03.x + Math.sin(t * 6) * 15,
            y: pCard03.y + Math.cos(t * 6) * 15,
            opacity: 1,
          },
          {
            id: 7,
            color: AGENT_COLORS[7],
            role: "Pill",
            x: pCard03Pills.x + Math.cos(t * 8) * 20,
            y: pCard03Pills.y,
            carryingItem: elapsed < 12.2 ? "Tailwind CSS" : undefined,
            opacity: 1,
          },
          // Card 04 ENACTUS CLUB
          {
            id: 8,
            color: AGENT_COLORS[8],
            role: "Card",
            x: pCard04.x + Math.sin(t * 6) * 15,
            y: pCard04.y + Math.cos(t * 6) * 15,
            opacity: 1,
          },
          {
            id: 9,
            color: AGENT_COLORS[9],
            role: "Pill",
            x: pCard04Pills.x + Math.sin(t * 8) * 20,
            y: pCard04Pills.y,
            carryingItem: elapsed < 12.8 ? "Three.js" : undefined,
            opacity: 1,
          },
          { id: 10, color: AGENT_COLORS[10], role: "Code", x: pCard01.x + 40, y: pCard01.y + 40, opacity: 1 },
          { id: 11, color: AGENT_COLORS[11], role: "Render", x: pCard02.x - 40, y: pCard02.y + 40, opacity: 1 },
        ]);

        revealItem("work_title", elapsed >= 8.6, 520);
        revealItem("card_01_passi", elapsed >= 9.2, 580);
        revealItem("pills_01", elapsed >= 9.8, 620);
        revealItem("card_02_hydroobloom", elapsed >= 10.4, 600);
        revealItem("pills_02", elapsed >= 11.0, 640);
        revealItem("card_03_dizy", elapsed >= 11.6, 590);
        revealItem("pills_03", elapsed >= 12.2, 630);
        revealItem("card_04_enactus", elapsed >= 12.8, 610);
        revealItem("pills_04", elapsed >= 13.2, 650);
      } 
      // ==========================================
      // PHASE 5: ABOUT & PRINCIPLES (13.5s - 19.0s)
      // ==========================================
      else if (elapsed < 19.0) {
        setBuildState("build_trackrecord");
        if (lastScrolledRef.current !== "about") {
          lastScrolledRef.current = "about";
          scrollToEl("sec-about", "start");
        }

        const t = (elapsed - 13.5) / 5.5;

        const pStack = getTargetPos("track-stack-bar", 0.5, 0.5);
        const pBuiltFast = getTargetPos("track-built-fast", 0.3, 0.5);
        const pStat40 = getTargetPos("track-stat-40", 0.3, 0.5);
        const pNotJustCode = getTargetPos("track-not-just-code", 0.3, 0.5);
        const pTimeline = getTargetPos("track-timeline", 0.5, 0.5);
        const pEdu = getTargetPos("track-education", 0.5, 0.5);
        const pOrangeBox = getTargetPos("orange-principle-container", 0.5, 0.5);

        setActiveBuildingIds(new Set([
          ...(elapsed >= 13.6 && elapsed < 15.0 ? ["tech_bar"] : []),
          ...(elapsed >= 14.4 && elapsed < 16.5 ? ["built_fast_title", "stat_40"] : []),
          ...(elapsed >= 15.8 && elapsed < 18.0 ? ["timeline_items", "education_card"] : []),
          ...(elapsed >= 17.0 && elapsed < 19.0 ? ["orange_principle_box"] : []),
        ]));

        setCursors([
          // Horizontal stack bar
          { id: 0, color: AGENT_COLORS[0], role: "Style", x: pStack.x + Math.sin(t * 9) * 120, y: pStack.y, opacity: 1 },
          // BUILT FAST. SHIPPED REAL.
          { id: 1, color: AGENT_COLORS[1], role: "Text", x: pBuiltFast.x + Math.sin(t * 7) * 20, y: pBuiltFast.y, opacity: 1 },
          // 40.
          { id: 2, color: AGENT_COLORS[2], role: "DB", x: pStat40.x + Math.cos(t * 6) * 15, y: pStat40.y, isClicking: elapsed >= 15.0 && elapsed <= 15.4, opacity: 1 },
          // NOT JUST CODE. CODE THAT SHIPS.
          { id: 3, color: AGENT_COLORS[3], role: "Text", x: pNotJustCode.x + Math.sin(t * 8) * 25, y: pNotJustCode.y, opacity: 1 },
          // Timeline on right
          { id: 4, color: AGENT_COLORS[4], role: "Card", x: pTimeline.x + Math.sin(t * 6) * 20, y: pTimeline.y, opacity: 1 },
          { id: 5, color: AGENT_COLORS[5], role: "Layout", x: pTimeline.x - 20, y: pTimeline.y + 40, opacity: 1 },
          // Education
          { id: 6, color: AGENT_COLORS[6], role: "Card", x: pEdu.x + Math.cos(t * 6) * 15, y: pEdu.y, opacity: 1 },
          { id: 7, color: AGENT_COLORS[7], role: "Pill", x: pEdu.x + 30, y: pEdu.y + 20, opacity: 1 },
          // THE ORANGE PRINCIPLE BOX (Agents 8, 9, 10, 11 literally dragging it in!)
          {
            id: 8,
            color: AGENT_COLORS[8],
            role: "Card",
            x: pOrangeBox.x - 40 + Math.sin(t * 6) * 10,
            y: pOrangeBox.y + Math.cos(t * 6) * 10,
            carryingItem: elapsed < 18.2 ? "CORE PRINCIPLE" : undefined,
            isClicking: elapsed >= 17.8 && elapsed <= 18.4,
            opacity: 1,
          },
          { id: 9, color: AGENT_COLORS[9], role: "Style", x: pOrangeBox.x + 40, y: pOrangeBox.y - 20, opacity: 1 },
          { id: 10, color: AGENT_COLORS[10], role: "Motion", x: pOrangeBox.x - 40, y: pOrangeBox.y + 20, opacity: 1 },
          { id: 11, color: AGENT_COLORS[11], role: "Render", x: pOrangeBox.x + 40, y: pOrangeBox.y + 20, opacity: 1 },
        ]);

        revealItem("tech_bar", elapsed >= 13.8, 520);
        revealItem("built_fast_title", elapsed >= 14.4, 560);
        revealItem("stat_40", elapsed >= 15.0, 600);
        revealItem("timeline_items", elapsed >= 15.8, 640);
        revealItem("not_just_code", elapsed >= 16.5, 680);
        revealItem("body_bio", elapsed >= 17.0, 540);
        revealItem("education_card", elapsed >= 17.6, 580);
        revealItem("orange_principle_box", elapsed >= 18.2, 750);
      } 
      // ==========================================
      // PHASE 6: CONTACT & ORANGE CALLOUT (19.0s - 23.5s)
      // ==========================================
      else if (elapsed < 23.5) {
        setBuildState("build_contact");
        if (lastScrolledRef.current !== "contact") {
          lastScrolledRef.current = "contact";
          scrollToEl("sec-contact", "start");
        }

        const t = (elapsed - 19.0) / 4.5;

        const pContactTitle = getTargetPos("contact-title", 0.3, 0.5);
        const pEmail = getTargetPos("contact-email", 0.5, 0.5);
        const pPhone = getTargetPos("contact-phone", 0.5, 0.5);
        const pSocials = getTargetPos("contact-socials", 0.5, 0.5);
        const pOrangeShip = getTargetPos("contact-orange-box", 0.5, 0.5);

        setActiveBuildingIds(new Set([
          ...(elapsed >= 19.2 && elapsed < 21.0 ? ["contact_title"] : []),
          ...(elapsed >= 20.0 && elapsed < 22.0 ? ["contact_items"] : []),
          ...(elapsed >= 21.2 && elapsed < 23.0 ? ["orange_ship_it"] : []),
        ]));

        setCursors([
          // LET'S WORK TOGETHER.
          { id: 0, color: AGENT_COLORS[0], role: "Text", x: pContactTitle.x + Math.sin(t * 8) * 20, y: pContactTitle.y, opacity: 1 },
          { id: 1, color: AGENT_COLORS[1], role: "Style", x: pContactTitle.x - 20, y: pContactTitle.y + 30, opacity: 1 },
          // Right Contact Items (Email, Phone, Socials)
          { id: 2, color: AGENT_COLORS[2], role: "Card", x: pEmail.x, y: pEmail.y, carryingItem: elapsed < 21.0 ? "Email" : undefined, opacity: 1 },
          { id: 3, color: AGENT_COLORS[3], role: "Card", x: pPhone.x, y: pPhone.y, carryingItem: elapsed < 21.4 ? "WhatsApp" : undefined, opacity: 1 },
          { id: 4, color: AGENT_COLORS[4], role: "Pill", x: pSocials.x - 40, y: pSocials.y, opacity: 1 },
          { id: 5, color: AGENT_COLORS[5], role: "Pill", x: pSocials.x + 40, y: pSocials.y, opacity: 1 },
          // Orange SHIP IT FOR REAL box
          {
            id: 6,
            color: AGENT_COLORS[6],
            role: "Card",
            x: pOrangeShip.x + Math.sin(t * 7) * 15,
            y: pOrangeShip.y,
            carryingItem: elapsed < 22.4 ? "SHIP IT FOR REAL" : undefined,
            isClicking: elapsed >= 22.0 && elapsed <= 22.5,
            opacity: 1,
          },
          { id: 7, color: AGENT_COLORS[7], role: "Style", x: pOrangeShip.x + 40, y: pOrangeShip.y, opacity: 1 },
          // Cursors clustering like video at 20s
          { id: 8, color: AGENT_COLORS[8], role: "Render", x: pOrangeShip.x + 60 + Math.sin(t * 9) * 10, y: pOrangeShip.y + 15, opacity: 1 },
          { id: 9, color: AGENT_COLORS[9], role: "Motion", x: pOrangeShip.x + 70 + Math.cos(t * 9) * 10, y: pOrangeShip.y - 15, opacity: 1 },
          { id: 10, color: AGENT_COLORS[10], role: "Code", x: pOrangeShip.x + 50 + Math.sin(t * 8) * 10, y: pOrangeShip.y + 25, opacity: 1 },
          { id: 11, color: AGENT_COLORS[11], role: "Layout", x: pOrangeShip.x + 80 + Math.cos(t * 8) * 10, y: pOrangeShip.y + 10, opacity: 1 },
        ]);

        revealItem("contact_title", elapsed >= 19.4, 520);
        revealItem("contact_items", elapsed >= 20.4, 580);
        revealItem("orange_ship_it", elapsed >= 21.6, 720);
      } 
      // ==========================================
      // PHASE 7: DYNAMIC DISAPPEARANCE (23.5s - 25.0s)
      // ==========================================
      else if (elapsed < 25.0) {
        setBuildState("dynamic_disappear");
        setActiveBuildingIds(new Set());
        const t = (elapsed - 23.5) / 1.5;
        const cx = w / 2;
        const cy = h / 2;

        const swirling: AgentCursor[] = [];
        for (let i = 0; i < 12; i++) {
          const angle = (i / 12) * Math.PI * 2 + t * 10;
          const radius = (1 - t) * 160;
          swirling.push({
            id: i,
            color: AGENT_COLORS[i],
            role: AGENT_ROLES[i],
            x: cx + radius * Math.cos(angle),
            y: cy + radius * Math.sin(angle),
            scale: Math.max(0, 1 - t),
            opacity: Math.max(0, 1 - t),
          });
        }
        setCursors(swirling);
      } 
      // ==========================================
      // PHASE 8: COMPLETED
      // ==========================================
      else {
        isRunningRef.current = false;
        setBuildState("completed");
        setCursors([]);
        setActiveBuildingIds(new Set());
        setRevealedSet(new Set(ALL_ELEMENTS));
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

  const isElementBuilding = (id: string) => {
    if (buildState === "completed") return false;
    return activeBuildingIds.has(id);
  };

  return (
    <BuildContext.Provider
      value={{
        buildState,
        isBuilding: buildState !== "completed",
        isFinished: buildState === "completed",
        cursors,
        isRevealed,
        isElementBuilding,
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
