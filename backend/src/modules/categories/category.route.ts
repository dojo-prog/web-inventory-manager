import express from "express";
import {
  authorizeRoles,
  protectRoute,
} from "../../middlewares/auth.middleware";
import {
  addCategory,
  getCategories,
  getCategoryById,
  getMostUsedCategory,
  removeCategory,
  updateCategory,
} from "./category.controller";
import { validate } from "../../middlewares/validation.middleware";
import {
  AddCategoryInputSchema,
  CategoryFiltersSchema,
  CategoryParamsSchema,
  UpdateCategoryInputSchema,
} from "@web-inventory-manager/shared/dist";

const router = express.Router();

router.use(protectRoute, authorizeRoles("admin", "manager"));

router.get("/", validate({ query: CategoryFiltersSchema }), getCategories);

router.get("/most-used", getMostUsedCategory);

router.post("/", validate({ body: AddCategoryInputSchema }), addCategory);

router.put(
  "/:categoryId",
  validate({ body: UpdateCategoryInputSchema, params: CategoryParamsSchema }),
  updateCategory,
);

router.delete(
  "/:categoryId",
  validate({ params: CategoryParamsSchema }),
  removeCategory,
);

router.get(
  "/:categoryId",
  validate({ params: CategoryParamsSchema }),
  getCategoryById,
);

export default router;
