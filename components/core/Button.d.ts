import * as React from "react";

/**
 * Primary action button in the MedVault palette.
 * @startingPoint section="Core" subtitle="Navy / outline / slides actions" viewport="700x150"
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** Visual style. @default "primary" */
  variant?: "primary" | "secondary" | "slides";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  /** Leading icon node — usually an emoji string in MedVault. */
  icon?: React.ReactNode;
  /** Render as a link instead of a button. @default "button" */
  as?: "button" | "a";
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

export function Button(props: ButtonProps): React.ReactElement;
