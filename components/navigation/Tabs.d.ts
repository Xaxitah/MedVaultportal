import * as React from "react";

export interface TabItem {
  id: string;
  label: React.ReactNode;
}

export interface TabsProps {
  /** Tab list — strings or {id,label} objects. */
  tabs: (string | TabItem)[];
  /** id of the active tab. */
  value: string;
  onChange?: (id: string) => void;
  style?: React.CSSProperties;
}

/** Pill-style segmented toggle (used for P1/P2 section switching). */
export function Tabs(props: TabsProps): React.ReactElement;
