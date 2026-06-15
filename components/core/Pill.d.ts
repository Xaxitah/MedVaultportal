import * as React from "react";

export interface PillProps {
  children?: React.ReactNode;
  /** Color tone. @default "p1" */
  tone?: "p1" | "p2" | "ok" | "neutral";
  style?: React.CSSProperties;
}

/** Small rounded label for exam tags, counts and artifact chips. */
export function Pill(props: PillProps): React.ReactElement;
