import { LoginInput, User } from "@web-inventory-manager/shared";
import * as authModel from "./auth.model";
import AppError from "../../utils/AppError";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../../utils/generateAuthTokens";
import ENV from "../../lib/env";
import { RefreshTokenPayload } from "../../types/auth.types";

export const login = async (
  inputs: LoginInput,
): Promise<{ user: User; accessToken: string; refreshToken: string }> => {
  const { email, password } = inputs;

  const user = await authModel.findByEmail(email);

  if (!user) {
    throw new AppError("Invalid email or password", 400);
  }

  const correctPassword = await bcrypt.compare(password, user.hash_password);
  if (!correctPassword) {
    throw new AppError("Invalid email or password", 400);
  }

  const { hash_password, ...safe } = user;

  const accessToken = generateAccessToken(safe.id, safe.role);
  const refreshToken = generateRefreshToken(safe.id);

  return {
    user: safe,
    accessToken,
    refreshToken,
  };
};

export const refreshAccessToken = async (
  refreshToken: string,
): Promise<string> => {
  if (!ENV.REFRESH_TOKEN_SECRET) {
    throw new AppError("Missing refresh token env", 500);
  }

  const decoded = jwt.verify(
    refreshToken,
    ENV.REFRESH_TOKEN_SECRET,
  ) as RefreshTokenPayload;

  if (!decoded || !decoded.id) {
    throw new AppError("Unauthorized: Invalid token", 400);
  }

  const user = await authModel.findById(decoded.id);

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const accessToken = generateAccessToken(user.id, user.role);

  return accessToken;
};
