import express from "express";
import {
  authorizeRoles,
  protectRoute,
} from "../../middlewares/auth.middleware";
import { validate } from "../../middlewares/validation.middleware";
import {
  AddProductVariantInputSchema,
  ProductAndVariantParamsSchema,
  ProductParamsSchema,
  ProductVariantFiltersSchema,
  UpdateProductVariantInputSchema,
} from "@web-inventory-manager/shared/dist";
import {
  addProductVariant,
  getAllProductVariants,
  getProductVariantById,
  removeProductVariant,
  updateProductVariant,
} from "./product_variant.controller";

const router = express.Router();

router.use(protectRoute, authorizeRoles("admin", "manager"));

router.get("/", getAllProductVariants);

router.post(
  "/:productId",
  validate({ params: ProductParamsSchema, body: AddProductVariantInputSchema }),
  addProductVariant,
);

router.put(
  "/:productId/variants/:variantId",
  validate({
    params: ProductAndVariantParamsSchema,
    body: UpdateProductVariantInputSchema,
  }),
  updateProductVariant,
);

router.delete(
  "/:productId/variants/:variantId",
  validate({ params: ProductAndVariantParamsSchema }),
  removeProductVariant,
);

router.get("/:productId/variants/:variantId", getProductVariantById);

export default router;
