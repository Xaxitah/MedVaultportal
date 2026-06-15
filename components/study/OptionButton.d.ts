import * as React from "react";

export interface OptionButtonProps {
  /** Letter chip, e.g. "A". @default "A" */
  letter?: string;
  children?: React.ReactNode;
  /** Result coloring once answered. @default "idle" */
  status?: "idle" | "correct" | "wrong" | "dimmed";
  /** Locks the button and applies status coloring. @default false */
  answered?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

/** Quiz answer choice with a letter chip and answered states. */
export function OptionButton(props: OptionButtonProps): React.ReactElement;
