import type { LoginInput, User } from "@web-inventory-manager/shared";
import type { Tab } from "../../types/shared.types";

export interface AuthState {
  user: User | null;
  allowedTabs: Record<Tab, boolean> | null;

  checkingAuth: boolean;
  loading: boolean;

  checkAuth: () => Promise<void>;
  login: (inputs: LoginInput) => Promise<void>;
  logout: () => Promise<void>;
  refresh: () => Promise<void>;
}
