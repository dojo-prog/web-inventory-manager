import type {
  AddUserInput,
  UpdateUserInput,
  User,
  UserFilter,
} from "@web-inventory-manager/shared";

export interface UserState {
  users: User[];
  total_count: number;

  fetchingUsers: boolean;
  loading: boolean;

  filters: UserFilter;
  setFilters: (newFilters: Partial<UserFilter>) => void;

  fetchUsers: (filters: UserFilter) => Promise<void>;
  addUser: (inputs: AddUserInput) => Promise<void>;
  updateUser: (userId: string, inputs: UpdateUserInput) => Promise<void>;
  removeUser: (userId: string) => Promise<void>;
}
