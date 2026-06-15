import * as React from "react";

export interface TopicCardProps {
  /** Topic number label, e.g. "T01". @default "T01" */
  number?: string;
  /** Exam group — sets the number-badge gradient. @default "p1" */
  exam?: "p1" | "p2";
  /** Discipline accent for the top border. @default "farm" */
  discipline?: "farm" | "semi" | "urol" | "etica" | "semiq" | string;
  title?: string;
  subtitle?: string;
  /** Artifact tags row — typically <Pill> chips. */
  tags?: React.ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
}

/** A single study topic (tema) card for the P1/P2 topic grids. */
export function TopicCard(props: TopicCardProps): React.ReactElement;
