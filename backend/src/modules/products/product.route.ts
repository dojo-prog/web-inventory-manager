import express from "express";
import {
  authorizeRoles,
  protectRoute,
} from "../../middlewares/auth.middleware";
import { validate } from "../../middlewares/validation.middleware";
import {
  AddProductInputSchema,
  UpdateProductInputSchema,
} from "@web-inventory-manager/shared";
import multerUpload from "../../lib/multer";
import {
  addProduct,
  getAllProducts,
  getProductById,
  removeProduct,
  updateProduct,
} from "./product.controller";

const router = express.Router();

router.use(protectRoute, authorizeRoles("admin", "manager"));

router.get("/", getAllProducts);
router.post(
  "/",
  multerUpload.single("thumbnail"),
  validate(AddProductInputSchema),
  addProduct,
);
router.put(
  "/:productId",
  multerUpload.single("thumbnail"),
  validate(UpdateProductInputSchema),
  updateProduct,
);
router.delete("/:productId", removeProduct);
router.get("/:productId", getProductById);

export default router;
