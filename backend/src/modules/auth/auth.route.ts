import express from "express";
import {
  authorizeRoles,
  protectRoute,
} from "../../middlewares/auth.middleware";
import {
  getCurrentUser,
  login,
  logout,
  refreshAccessToken,
} from "./auth.controller";
import { validate } from "../../middlewares/validation.middleware";
import { LoginInputSchema } from "@web-inventory-manager/shared";

const router = express.Router();

router.get("/me", protectRoute, getCurrentUser);
router.post("/login", validate(LoginInputSchema), login);
router.post("/logout", logout);
router.post("/refresh", refreshAccessToken);

export default router;
