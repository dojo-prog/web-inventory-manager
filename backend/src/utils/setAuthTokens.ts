import { Response } from "express";
import { cookieOptions } from "../constants/auth.constants";

export const setAuthTokens = (
  res: Response,
  accessToken: string,
  refreshToken?: string,
) => {
  res.cookie("accessToken", accessToken, {
    ...cookieOptions,
    maxAge: 15 * 60 * 1000,
  });

  if (refreshToken) {
    res.cookie("refreshToken", refreshToken, {
      ...cookieOptions,
      maxAge: 3 * 24 * 60 * 60 * 1000,
    });
  }
};
