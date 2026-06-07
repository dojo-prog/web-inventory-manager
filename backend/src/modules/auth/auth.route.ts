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

const router = express.Router();

router.get("/me", protectRoute, getCurrentUser);
router.post("/login", login);
router.post("/logout", logout);
router.post("/refresh", refreshAccessToken);

export default router;
