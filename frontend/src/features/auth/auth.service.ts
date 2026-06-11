import type { LoginInput, User } from "@web-inventory-manager/shared";
import axios from "../../lib/axios";

export const checkAuth = async (): Promise<User> => {
  const res = await axios.post("/auth/me");

  return res.data.user;
};

export const login = async (inputs: LoginInput): Promise<User> => {
  const res = await axios.post("/auth/login", inputs);

  return res.data.user;
};

export const logout = async (): Promise<void> => {
  await axios.post("/auth/logout");
};

export const refresh = async (): Promise<void> => {
  await axios.post("/auth/refresh");
};
