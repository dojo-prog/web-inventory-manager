import express from "express";
import {
  authorizeRoles,
  protectRoute,
} from "../../middlewares/auth.middleware";

const router = express.Router();

router.get("/me", protectRoute, getCurrentUser);
router.post("/login", login);
router.post("logout", logout);

export default router;
