import type {
  User,
  UserFilter,
  UserFilterResult,
} from "@web-inventory-manager/shared";
import axios from "../../lib/axios";

export const fetchUsers = async (
  filters: UserFilter,
): Promise<UserFilterResult> => {
  const res = await axios.get("/users", { params: filters });
  return res.data;
};

export const addUser = async (inputs: FormData): Promise<User> => {
  const res = await axios.post("/users", inputs);
  return res.data.newUser;
};

export const updateUser = async (
  userId: string,
  inputs: FormData,
): Promise<User> => {
  const res = await axios.put(`/users/${userId}`, inputs);
  return res.data.updatedUser;
};

export const removeUser = async (userId: string): Promise<void> => {
  await axios.delete(`/users/${userId}`);
};
