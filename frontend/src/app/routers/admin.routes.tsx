import {
  BoxIcon,
  ContainerIcon,
  HistoryIcon,
  LayoutDashboardIcon,
  ShapesIcon,
  TagIcon,
  UsersRound,
} from "lucide-react";

export const adminRoutes = [
  {
    index: true,
    path: "/admin",
    element: <></>,
    title: "Dashboard",
    Icon: LayoutDashboardIcon,
  },
  {
    path: "/admin/products",
    element: <></>,
    title: "Products",
    Icon: BoxIcon,
  },
  {
    path: "/admin/suppliers",
    element: <></>,
    title: "Suppliers",
    Icon: ContainerIcon,
  },
  {
    path: "/admin/brands",
    element: <></>,
    title: "Brands",
    Icon: TagIcon,
  },
  {
    path: "/admin/categories",
    element: <></>,
    title: "Categories",
    Icon: ShapesIcon,
  },
  {
    path: "/admin/users",
    element: <></>,
    title: "Users",
    Icon: UsersRound,
  },
  {
    path: "/admin/activity-logs",
    element: <></>,
    title: "Activity Logs",
    Icon: HistoryIcon,
  },
];
