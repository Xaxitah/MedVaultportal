import * as React from "react";

export interface IntroBoxProps {
  title?: string;
  /** Leading emoji/icon for the heading. */
  icon?: React.ReactNode;
  /** Left-border accent color. @default indigo accent */
  accent?: string;
  children?: React.ReactNode;
  /** Source chips row — typically <FonteTag> elements. */
  sources?: React.ReactNode;
}

/** White panel with a left accent border that opens a section. */
export function IntroBox(props: IntroBoxProps): React.ReactElement;
