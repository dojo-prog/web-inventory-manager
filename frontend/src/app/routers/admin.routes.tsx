import {
  BoxIcon,
  ContainerIcon,
  HistoryIcon,
  LayoutDashboardIcon,
  ShapesIcon,
  TagIcon,
  Users,
  UsersRound,
} from "lucide-react";
import Dashboard from "../../pages/admin/Dashboard/Dashboard";
import Products from "../../pages/admin/Products/Products";
import Suppliers from "../../pages/admin/Suppliers/Suppliers";
import Brands from "../../pages/admin/Brands/Brands";
import Categories from "../../pages/admin/Categories/Categories";
import ActivityLogs from "../../pages/admin/ActivityLogs/ActivityLogs";

export const adminRoutes = [
  {
    index: true,
    path: "/admin",
    element: <Dashboard />,
    title: "Dashboard",
    Icon: LayoutDashboardIcon,
  },
  {
    path: "/admin/products",
    element: <Products />,
    title: "Products",
    Icon: BoxIcon,
  },
  {
    path: "/admin/suppliers",
    element: <Suppliers />,
    title: "Suppliers",
    Icon: ContainerIcon,
  },
  {
    path: "/admin/brands",
    element: <Brands />,
    title: "Brands",
    Icon: TagIcon,
  },
  {
    path: "/admin/categories",
    element: <Categories />,
    title: "Categories",
    Icon: ShapesIcon,
  },
  {
    path: "/admin/users",
    element: <Users />,
    title: "Users",
    Icon: UsersRound,
  },
  {
    path: "/admin/activity-logs",
    element: <ActivityLogs />,
    title: "Activity Logs",
    Icon: HistoryIcon,
  },
];
