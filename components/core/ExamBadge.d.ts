import * as React from "react";

export interface ExamBadgeProps {
  children?: React.ReactNode;
  /** Gradient family. @default "p1" */
  exam?: "p1" | "p2";
  /** Diameter in px. @default 26 */
  size?: number;
  style?: React.CSSProperties;
}

/** Circular gradient badge for exam (P1/P2) or topic numbers (T01…). */
export function ExamBadge(props: ExamBadgeProps): React.ReactElement;
