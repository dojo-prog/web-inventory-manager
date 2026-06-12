import type { LucideIcon } from "lucide-react";
import type { JSX } from "react/jsx-runtime";

export interface Route {
  index?: boolean;
  title: string;
  path: string;
  element: JSX.Element;
  Icon: LucideIcon;
}

export interface Pagination {
  page: number;
  limit: number;
  total_count: number;

  setPage: (page: number) => void;
  setLimit: (limit: number) => void;
}
