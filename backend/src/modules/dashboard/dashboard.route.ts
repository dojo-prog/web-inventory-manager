import express from "express";
import {
  authorizeRoles,
  protectRoute,
} from "../../middlewares/auth.middleware";
import {
  getLowStockProducts,
  getRecentActivitie,
  getSummary,
} from "./dashboard.controller";

const router = express.Router();

router.use(protectRoute, authorizeRoles("admin", "manager"));

router.get("/summary", getSummary);
router.get("/low-stock", getLowStockProducts);
router.get("/recent-activities", getRecentActivitie);

export default router;
