import * as React from "react";

/**
 * 3D flip flashcard — prompt on the front, answer on the navy back.
 * @startingPoint section="Study" subtitle="Flip flashcard" viewport="700x280"
 */
export interface FlashcardProps {
  /** Prompt shown on the front. */
  front?: React.ReactNode;
  /** Answer shown on the navy back. */
  back?: React.ReactNode;
  /** Card height in px. @default 220 */
  height?: number;
  /** Controlled flip state. Omit for uncontrolled (click to flip). */
  flipped?: boolean;
  onFlip?: (next: boolean) => void;
  frontHint?: string;
  backHint?: string;
}

export function Flashcard(props: FlashcardProps): React.ReactElement;
