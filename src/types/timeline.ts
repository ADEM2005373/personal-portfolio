export interface VideoCursor {
  id: number;
  color: string;
  x: number; // percentage (0-100) of viewport
  y: number; // percentage (0-100) of viewport
  scale?: number;
  opacity?: number;
  targetId?: string;
}

export type TimelinePhase =
  | "p1_initial_sections" // 00:00 - 00:03: 03 DIZY WEB & 04 ENACTUS + tech pills
  | "p2_built_fast"       // 00:03 - 00:10: BUILT FAST. SHIPPED REAL., 40., timeline, NOT JUST CODE
  | "p3_principles"       // 00:10 - 00:17: Body text, Education, Orange principle box
  | "p4_contact"          // 00:17 - 00:21: LET'S WORK TOGETHER., contact links, Orange SHIP IT FOR REAL
  | "p5_hero_profile"     // 00:21 - 00:30: Red PORTFOLIO, Photo in suit, Hello I'm Adem, Stats
  | "p6_work_that_ships"  // 00:30 - 00:38: WORK THAT SHIPS., 01 PASSI, 02 HYDROOBLOOM
  | "finished";           // Cursors disappear, page fully built & interactive
