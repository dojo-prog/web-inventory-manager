import express from "express";
import {
  authorizeRoles,
  protectRoute,
} from "../../middlewares/auth.middleware";
import { validate } from "../../middlewares/validation.middleware";
import {
  AddBrandInputSchema,
  UpdateBrandInputSchema,
} from "@web-inventory-manager/shared/dist";
import {
  addBrand,
  getAllBrands,
  getBrandById,
  removeBrand,
  updateBrand,
} from "./brand.controller";

const router = express.Router();

router.use(protectRoute);
router.use(authorizeRoles("admin", "manager"));

router.get("/", getAllBrands);
router.get("/", validate(AddBrandInputSchema), addBrand);
router.get("/:brandId", validate(UpdateBrandInputSchema), updateBrand);
router.get("/:brandId", removeBrand);
router.get("/:brandId", getBrandById);

export default router;
