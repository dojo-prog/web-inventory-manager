import type { LucideIcon } from "lucide-react";
import type { JSX } from "react/jsx-runtime";

export type Tab =
  | "dashboard"
  | "products"
  | "suppliers"
  | "brands"
  | "categories"
  | "users"
  | "activity logs";

export type Role = "admin" | "manager";

export interface Route {
  index?: boolean;
  title?: string;
  path: string;
  element: JSX.Element;
  Icon?: LucideIcon;
  hideFromSidebar?: boolean;
  permissionKey?: Tab;
}

export interface Pagination {
  page: number;
  limit: number;
  total_count: number;

  setPage: (page: number) => void;
  setLimit: (limit: number) => void;
}
