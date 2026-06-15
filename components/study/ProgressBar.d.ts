import * as React from "react";

export interface ProgressBarProps {
  /** Current value. @default 0 */
  value?: number;
  /** Maximum value. @default 100 */
  max?: number;
  /** Caption under the bar, e.g. "Questão 3 de 10". */
  label?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Thin navy progress bar with optional caption. */
export function ProgressBar(props: ProgressBarProps): React.ReactElement;
