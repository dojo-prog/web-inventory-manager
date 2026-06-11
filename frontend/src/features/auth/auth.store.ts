import { create } from "zustand";
import type { AuthState } from "./auth.types";

const useAuthStore = create<AuthState>((set) => ({
  user: null,

  checkingAuth: false,
  loading: false,

  checkAuth: async () => {},
  login: async (loginInputs) => {},
  logout: async () => {},
  refresh: async () => {},
}));

export default useAuthStore;
