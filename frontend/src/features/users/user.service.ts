import type { User, UserFilter } from "@web-inventory-manager/shared";
import type { AddUserForm, UpdateUserForm } from "../../schemas/user";

export const fetchUsers = async (filters: UserFilter): Promise<User[]> => {};
export const addUser = async (inputs: AddUserForm): Promise<User> => {};
export const updateUser = async (
  userId: string,
  inputs: UpdateUserForm,
): Promise<User> => {};
export const removeUser = async (userId: string): Promise<User> => {};
