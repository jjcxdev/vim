import { ReactNode } from "react";

export interface KeyConfig {
  children?: ReactNode;
  upper: ReactNode;
  lower: ReactNode;
  actions: string[];
  mode?: "normal" | "visual" | "insert";
  isPressed?: boolean;
  className?: string;
}
