export interface AgentCursor {
  id: number;
  color: string;
  x: number; // percentage (0-100) of viewport width
  y: number; // percentage (0-100) of viewport height
  scale?: number;
  opacity?: number;
  role?: string; // e.g. "Text", "Card", "Photo", "Pill", "DB", "Style"
  isClicking?: boolean;
}

export type BuildState =
  | "initial_black"
  | "circle_entrance"
  | "build_hero"
  | "build_work"
  | "build_trackrecord"
  | "build_contact"
  | "dynamic_disappear"
  | "completed";
