import { UserRole } from "@web-inventory-manager/shared";
import { Middleware } from "../types/handlers";
import AppError from "../utils/AppError";
import jwt from "jsonwebtoken";
import ENV from "../lib/env";
import { AccessTokenPayload } from "../types/auth.types";
import db from "../database/db";

export const protectRoute: Middleware = async (req, res, next) => {
  try {
    const accessToken = req.cookies.accessToken;

    if (!accessToken) {
      return next(new AppError("Unauthorized: No token provided", 401));
    }

    if (!ENV.ACCESS_TOKEN_SECRET) {
      return next(new AppError("Missing access token secret env", 500));
    }

    const decoded = jwt.verify(
      accessToken,
      ENV.ACCESS_TOKEN_SECRET,
    ) as AccessTokenPayload;

    if (!decoded || !decoded.id || !decoded.role) {
      return next(new AppError("Unauthorized: Invalid token", 401));
    }

    const result = await db.query(
      `
      SELECT 
        id, 
        fname, 
        lname, 
        email, 
        role, 
        avatar_url, 
        avatar_path
      FROM users
      WHERE id = $1
        AND role = $2;
      `,
      [decoded.id, decoded.role],
    );

    const user = result.rows[0];

    if (!user) {
      return next(new AppError("User not found", 404));
    }

    req.user = user;

    next();
  } catch (error) {
    next(error);
  }
};

export const authorizeRoles = (...userRoles: UserRole[]): Middleware => {
  return (req, res, next) => {
    try {
      const user = req.user;

      if (!user) {
        return next(new AppError("User unauthenticated", 401));
      }

      const isAuthorized = userRoles.includes(user.role as UserRole);

      if (!isAuthorized) {
        return next(
          new AppError(
            "Forbidden: You are not authorized to access this resource",
            403,
          ),
        );
      }

      next();
    } catch (error) {
      next(error);
    }
  };
};
