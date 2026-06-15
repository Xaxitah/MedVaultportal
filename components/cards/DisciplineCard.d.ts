import * as React from "react";

/**
 * Large discipline entry tile for the portal home grid.
 * @startingPoint section="Cards" subtitle="Discipline entry tile" viewport="700x320"
 */
export interface DisciplineCardProps {
  /** Accent key (farm/semi/urol/etica/semiq) or any CSS color. @default "farm" */
  discipline?: "farm" | "semi" | "urol" | "etica" | "semiq" | string;
  /** Cover emoji. @default "💊" */
  emoji?: string;
  title?: string;
  description?: string;
  /** Footer content — typically <Pill> exam tags. */
  footer?: React.ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export function DisciplineCard(props: DisciplineCardProps): React.ReactElement;
