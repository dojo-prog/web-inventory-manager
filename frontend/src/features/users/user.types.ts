import type { User, UserFilter } from "@web-inventory-manager/shared";
import type { AddUserForm, UpdateUserForm } from "../../schemas/user";

export interface UserState {
  users: User[];
  total_count: number;

  fetchingUsers: boolean;
  loading: boolean;

  filters: UserFilter;
  setFilters: (newFilters: Partial<UserFilter>) => void;

  fetchUsers: (filters: UserFilter) => Promise<void>;
  addUser: (inputs: AddUserForm) => Promise<void>;
  updateUser: (userId: string, inputs: UpdateUserForm) => Promise<void>;
  removeUser: (userId: string) => Promise<void>;
}
