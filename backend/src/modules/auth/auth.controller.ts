import { Controller } from "../../types/handlers";
import AppError from "../../utils/AppError";
import { setAuthTokens } from "../../utils/setAuthTokens";
import * as authService from "./auth.service";

export const getCurrentUser: Controller = async (req, res, next) => {
  try {
    const user = req.user;

    res.status(200).json({ success: true, user });
  } catch (error) {
    next(error);
  }
};

export const login: Controller = async (req, res, next) => {
  try {
    const { user, accessToken, refreshToken } = await authService.login(
      req.body,
    );

    setAuthTokens(res, accessToken, refreshToken);

    res.status(200).json({ success: true, message: "Login successful", user });
  } catch (error) {
    next(error);
  }
};

export const logout: Controller = async (req, res, next) => {
  try {
    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");

    res.status(200).json({ success: true, message: "Logout successful" });
  } catch (error) {
    next(error);
  }
};

export const refreshAccessToken: Controller = async (req, res, next) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    const accessToken = await authService.refreshAccessToken(refreshToken);

    setAuthTokens(res, accessToken);

    res.status(200).json({ success: true });
  } catch (error) {
    next(error);
  }
};
