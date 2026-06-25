import { create } from "zustand";
import type { UserState } from "./user.types";

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

  setFilters: () => {},

  fetchUsers: async () => {},
  addUser: async () => {},
  updateUser: async () => {},
  removeUser: async () => {},
}));

export default useUserStore;
