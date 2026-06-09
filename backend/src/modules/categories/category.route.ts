import express from "express";
import {
  authorizeRoles,
  protectRoute,
} from "../../middlewares/auth.middleware";
import {
  addCategory,
  getAllCategories,
  getCategoryById,
  removeCategory,
  updateCategory,
} from "./category.controller";

const router = express.Router();

router.use(protectRoute, authorizeRoles("admin", "manager"));

router.get("/", getAllCategories);
router.post("/", addCategory);
router.get("/:categoryId", updateCategory);
router.get("/:categoryId", removeCategory);
router.get("/:categoryId", getCategoryById);

export default router;
