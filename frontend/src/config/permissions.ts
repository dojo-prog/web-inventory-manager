import type { Role, Tab } from "../types/shared.types";

const ALL_TABS: Tab[] = [
  "dashboard",
  "products",
  "suppliers",
  "brands",
  "categories",
  "users",
  "activity logs",
];

const ROLE_PERMISSIONS: Record<Role, Tab[]> = {
  admin: [
    "dashboard",
    "products",
    "suppliers",
    "brands",
    "categories",
    "users",
    "activity logs",
  ],
  manager: [
    "dashboard",
    "products",
    "suppliers",
    "brands",
    "categories",
    "activity logs",
  ],
};

export const getAllowedTabs = (role: Role): Record<Tab, boolean> => {
  const allowedList = ROLE_PERMISSIONS[role];

  if (!allowedList) {
    console.warn("Invalid or unauthorized role:", role);

    return ALL_TABS.reduce(
      (acc, tab) => {
        acc[tab] = false;
        return acc;
      },
      {} as Record<Tab, boolean>,
    );
  }

  return ALL_TABS.reduce(
    (acc, tab) => {
      acc[tab] = allowedList.includes(tab);
      return acc;
    },
    {} as Record<Tab, boolean>,
  );
};
