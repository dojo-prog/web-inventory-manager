import express from "express";
import {
  authorizeRoles,
  protectRoute,
} from "../../middlewares/auth.middleware";
import multerUpload from "../../lib/multer";
import { validate } from "../../middlewares/validation.middleware";
import {
  AddProductImageInputSchema,
  ProductImageParamsSchema,
  ProductParamsSchema,
} from "@web-inventory-manager/shared/dist";
import {
  addProductImage,
  getAllProductImages,
  removeProductImage,
} from "./product_image.controller";

const router = express.Router();

router.use(protectRoute, authorizeRoles("admin", "manager"));

router.get(
  "/:productId",
  validate({
    params: ProductParamsSchema,
  }),
  getAllProductImages,
);

router.post(
  "/:productId",
  multerUpload.single("image"),
  validate({
    body: AddProductImageInputSchema,
    params: ProductParamsSchema,
  }),
  addProductImage,
);

router.delete(
  "/:productImageId",
  validate({ params: ProductImageParamsSchema }),
  removeProductImage,
);

export default router;
