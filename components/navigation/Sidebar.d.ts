import * as React from "react";

/**
 * Dark navy navigation rail with logo, sections and emoji links.
 * @startingPoint section="Navigation" subtitle="Dark navy nav rail" viewport="300x600"
 */
export interface SidebarProps {
  /** Brand name in the logo block. @default "MedVault" */
  brand?: string;
  /** Sub-label under the brand. @default "Segundo Cérebro · Medicina" */
  tagline?: string;
  /** Logo emoji. @default "🧠" */
  logoEmoji?: string;
  /** Sidebar.Section / Sidebar.Link children. */
  children?: React.ReactNode;
  width?: string;
  style?: React.CSSProperties;
}

export interface SidebarSectionProps {
  children?: React.ReactNode;
}

export interface SidebarLinkProps {
  icon?: React.ReactNode;
  children?: React.ReactNode;
  /** Right-aligned badge (e.g. "P1+P2"). */
  badge?: React.ReactNode;
  active?: boolean;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export function Sidebar(props: SidebarProps): React.ReactElement;
