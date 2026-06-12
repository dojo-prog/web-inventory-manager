import { create } from "zustand";
import type { AuthState } from "./auth.types";
import errorHandler from "../../utils/errorHandler";
import * as authService from "./auth.service";
import { toast } from "react-toastify";

const useAuthStore = create<AuthState>((set) => ({
  user: null,

  checkingAuth: true,
  loading: false,

  checkAuth: async () => {
    set({ checkingAuth: true });
    try {
      const user = await authService.checkAuth();

      set({ user });
    } catch (error) {
      errorHandler(error, "checkAuth");
    } finally {
      set({ checkingAuth: false });
    }
  },

  login: async (loginInputs) => {
    set({ loading: true });
    try {
      const user = await authService.login(loginInputs);

      set({ user });
      toast.success("Login successful");
    } catch (error) {
      errorHandler(error, "login", true);
    } finally {
      set({ loading: false });
    }
  },

  logout: async () => {
    try {
      await authService.logout();

      set({ user: null });
      // TODO add resets
      toast.success("Logout successful");
    } catch (error) {
      errorHandler(error, "logout", true);
    }
  },

  refresh: async () => {
    try {
      await authService.refresh();
    } catch (error) {
      set({ user: null });
      errorHandler(error, "refresh", true);
    }
  },
}));

export default useAuthStore;
