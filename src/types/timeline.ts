export interface AgentCursor {
  id: number;
  color: string;
  x: number; // pixels relative to viewport
  y: number; // pixels relative to viewport
  scale?: number;
  opacity?: number;
  role?: string; // e.g. "Text", "Card", "Photo", "Pill", "DB", "Style"
  isClicking?: boolean;
  carryingItem?: string; // item being physically carried & placed by the cursor
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
