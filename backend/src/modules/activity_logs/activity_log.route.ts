import express from "express";
import {
  authorizeRoles,
  protectRoute,
} from "../../middlewares/auth.middleware";
import { validate } from "../../middlewares/validation.middleware";
import {
  ActivityLogFilterSchema,
  ActivityLogParamsSchema,
} from "@web-inventory-manager/shared/dist";
import { getAllActivityLogs, getLogById } from "./activity_log.controller";

const router = express.Router();

router.use(protectRoute, authorizeRoles("admin"));

router.get(
  "/",
  validate({ query: ActivityLogFilterSchema }),
  getAllActivityLogs,
);
router.get(
  "/:logId",
  validate({ params: ActivityLogParamsSchema }),
  getLogById,
);

export default router;
