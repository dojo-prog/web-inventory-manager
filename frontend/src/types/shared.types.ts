import type { LucideIcon } from "lucide-react";
import type { JSX } from "react/jsx-runtime";

export interface Route {
  index?: boolean;
  title: string;
  path: string;
  element: JSX.Element;
  Icon: LucideIcon;
}
