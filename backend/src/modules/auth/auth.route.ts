import express from "express";
import {
  authorizeRoles,
  protectRoute,
} from "../../middlewares/auth.middleware";
import { getCurrentUser, login, logout } from "./auth.controller";

const router = express.Router();

router.get("/me", protectRoute, getCurrentUser);
router.post("/login", login);
router.post("/logout", logout);

export default router;
