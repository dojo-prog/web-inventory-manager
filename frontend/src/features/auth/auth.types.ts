import type { LoginInput, User } from "@web-inventory-manager/shared";

export interface AuthState {
  user: User | null;

  checkingAuth: boolean;
  loading: boolean;

  checkAuth: () => Promise<void>;
  login: (inputs: LoginInput) => Promise<void>;
  logout: () => Promise<void>;
  refresh: () => Promise<void>;
}
