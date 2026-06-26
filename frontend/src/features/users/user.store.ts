import { create } from "zustand";
import type { UserState } from "./user.types";
import * as userService from "./user.service";
import errorHandler from "../../utils/errorHandler";
import { toast } from "react-toastify";
import useModalStore from "../ui/modals/modal.store";

const useUserStore = create<UserState>((set) => ({
  users: [],
  total_count: 0,

  fetchingUsers: false,
  loading: false,

  filters: {
    q: "",
    role: undefined,
    page: 1,
    limit: 20,
  },

  setFilters: (newFilters) =>
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    })),

  fetchUsers: async (filters) => {
    set({ fetchingUsers: true });
    try {
      const { users, total_count } = await userService.fetchUsers(filters);

      set({ users, total_count });
    } catch (error) {
      errorHandler(error, "fetchUsers", true);
    } finally {
      set({ fetchingUsers: false });
    }
  },

  addUser: async (inputs) => {
    set({ loading: true });
    try {
      const formData = new FormData();

      Object.keys(inputs).map((k) => {
        const value = inputs[k as keyof typeof inputs];

        if (value !== undefined && value !== null) {
          formData.append(k, value as any);
        }
      });

      const newUser = await userService.addUser(formData);

      set((state) => ({
        users: [newUser, ...state.users],
      }));
      toast.success("New user added");
      useModalStore.getState().closeUserModal();
    } catch (error) {
      errorHandler(error, "fetchUsers", true);
    } finally {
      set({ loading: false });
    }
  },

  updateUser: async (userId, inputs) => {
    set({ loading: true });
    try {
      const formData = new FormData();

      Object.keys(inputs).map((k) => {
        const value = inputs[k as keyof typeof inputs];

        if (value !== undefined && value !== null) {
          formData.append(k, value as any);
        }
      });

      const updatedUser = await userService.updateUser(userId, formData);

      set((state) => ({
        users: state.users.map((u) => (u.id === userId ? updatedUser : u)),
      }));
      toast.success("User information updated");
      useModalStore.getState().closeUserModal();
    } catch (error) {
      errorHandler(error, "fetchUsers", true);
    } finally {
      set({ loading: false });
    }
  },

  removeUser: async (userId) => {
    set({ loading: true });
    try {
      await userService.removeUser(userId);

      set((state) => ({
        users: state.users.filter((u) => u.id !== userId),
      }));
      toast.success("User removed");
      useModalStore.getState().closeDeleteConfirmModal();
    } catch (error) {
      errorHandler(error, "fetchUsers", true);
    } finally {
      set({ loading: false });
    }
  },
}));

export default useUserStore;
