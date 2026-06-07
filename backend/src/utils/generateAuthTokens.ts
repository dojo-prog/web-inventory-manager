import { UserRole } from "@web-inventory-manager/shared";
import jwt from "jsonwebtoken";
import ENV from "../lib/env";
import AppError from "./AppError";

export const generateAccessToken = (userId: string, role: UserRole) => {
  if (!ENV.ACCESS_TOKEN_SECRET) {
    throw new AppError("Missing access token secret env", 500);
  }

  const accessToken = jwt.sign({ id: userId, role }, ENV.ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });

  return accessToken;
};

export const generateRefreshToken = (userId: string) => {
  if (!ENV.REFRESH_TOKEN_SECRET) {
    throw new AppError("Missing refresh token secret env", 500);
  }

  const refreshToken = jwt.sign({ id: userId }, ENV.REFRESH_TOKEN_SECRET, {
    expiresIn: "1d",
  });

  return refreshToken;
};
