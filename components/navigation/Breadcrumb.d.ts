import * as React from "react";

export interface CrumbItem {
  label: React.ReactNode;
  href?: string;
}

export interface BreadcrumbProps {
  /** Trail items — strings or {label,href}. Last item renders as current. */
  items: (string | CrumbItem)[];
  style?: React.CSSProperties;
}

/** Slim chevron-separated breadcrumb trail. */
export function Breadcrumb(props: BreadcrumbProps): React.ReactElement;
