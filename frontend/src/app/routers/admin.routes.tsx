import {
  BoxIcon,
  ContainerIcon,
  HistoryIcon,
  LayoutDashboardIcon,
  ShapesIcon,
  TagIcon,
  UsersRound,
} from "lucide-react";
import Dashboard from "../../pages/admin/Dashboard/Dashboard";
import Products from "../../pages/admin/Products/Products";
import Suppliers from "../../pages/admin/Suppliers/Suppliers";
import Brands from "../../pages/admin/Brands/Brands";
import Categories from "../../pages/admin/Categories/Categories";
import ActivityLogs from "../../pages/admin/ActivityLogs/ActivityLogs";
import type { Route } from "../../types/shared.types";
import ProductDetails from "../../pages/admin/Products/subpage/ProductDetails";
import Users from "../../pages/admin/Users/Users";

export const adminRoutes: Route[] = [
  {
    index: true,
    path: "/admin",
    element: <Dashboard />,
    title: "Dashboard",
    Icon: LayoutDashboardIcon,
    permissionKey: "dashboard",
  },
  {
    path: "/admin/products",
    element: <Products />,
    title: "Products",
    Icon: BoxIcon,
    permissionKey: "products",
  },
  {
    path: "/admin/products/:productId",
    element: <ProductDetails />,
    hideFromSidebar: true,
    permissionKey: "products",
  },
  {
    path: "/admin/suppliers",
    element: <Suppliers />,
    title: "Suppliers",
    Icon: ContainerIcon,
    permissionKey: "suppliers",
  },
  {
    path: "/admin/brands",
    element: <Brands />,
    title: "Brands",
    Icon: TagIcon,
    permissionKey: "brands",
  },
  {
    path: "/admin/categories",
    element: <Categories />,
    title: "Categories",
    Icon: ShapesIcon,
    permissionKey: "categories",
  },
  {
    path: "/admin/users",
    element: <Users />,
    title: "Users",
    Icon: UsersRound,
    permissionKey: "users",
  },
  {
    path: "/admin/activity-logs",
    element: <ActivityLogs />,
    title: "Activity Logs",
    Icon: HistoryIcon,
    permissionKey: "activity logs",
  },
];
