import express from "express";
import {
  authorizeRoles,
  protectRoute,
} from "../../middlewares/auth.middleware";
import { validate } from "../../middlewares/validation.middleware";
import {
  AddProductInputSchema,
  ProductFilterSchema,
  ProductParamsSchema,
  UpdateProductInputSchema,
} from "@web-inventory-manager/shared";
import multerUpload from "../../lib/multer";
import {
  addProduct,
  getProducts,
  getProductById,
  removeProduct,
  updateProduct,
} from "./product.controller";

const router = express.Router();

router.use(protectRoute, authorizeRoles("admin", "manager"));

router.get("/", validate({ query: ProductFilterSchema }), getProducts);

router.post(
  "/",
  multerUpload.single("thumbnail"),
  validate({ body: AddProductInputSchema }),
  addProduct,
);

router.put(
  "/:productId",
  multerUpload.single("thumbnail"),
  validate({ params: ProductParamsSchema, body: UpdateProductInputSchema }),
  updateProduct,
);

router.delete(
  "/:productId",
  validate({ params: ProductParamsSchema }),
  removeProduct,
);

router.get(
  "/:productId",
  validate({ params: ProductParamsSchema }),
  getProductById,
);

export default router;
