import express from "express";
import {
  authorizeRoles,
  protectRoute,
} from "../../middlewares/auth.middleware";
import { validate } from "../../middlewares/validation.middleware";
import {
  AddBrandInputSchema,
  BrandFilterSchema,
  BrandParamsShcema,
  UpdateBrandInputSchema,
} from "@web-inventory-manager/shared/dist";
import {
  addBrand,
  getBrands,
  getBrandById,
  removeBrand,
  updateBrand,
} from "./brand.controller";
import multerUpload from "../../lib/multer";

const router = express.Router();

router.use(protectRoute);
router.use(authorizeRoles("admin", "manager"));

router.get("/", validate({ query: BrandFilterSchema }), getBrands);

router.post(
  "/",
  multerUpload.single("logo"),
  validate({ body: AddBrandInputSchema }),
  addBrand,
);

router.put(
  "/:brandId",
  multerUpload.single("logo"),
  validate({ body: UpdateBrandInputSchema, params: BrandParamsShcema }),
  updateBrand,
);

router.delete("/:brandId", removeBrand);

router.get("/:brandId", getBrandById);

export default router;
