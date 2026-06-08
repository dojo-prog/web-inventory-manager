import express from "express";
import {
  authorizeRoles,
  protectRoute,
} from "../../middlewares/auth.middleware";
import { validate } from "../../middlewares/validation.middleware";
import {
  AddSupplierInputSchema,
  UpdateSupplierInputSchema,
} from "@web-inventory-manager/shared/dist";
import {
  addSupplier,
  getAllSuppliers,
  getSupplierById,
  toggleActiveStatus,
  updateSupplier,
} from "./supplier.controller";

const router = express.Router();

router.use(protectRoute);
router.use(authorizeRoles("admin", "manager"));

router.get("/", getAllSuppliers);
router.post("/", validate(AddSupplierInputSchema), addSupplier);
router.post(
  "/:supplierId",
  validate(UpdateSupplierInputSchema),
  updateSupplier,
);
router.patch("/:supplierId", toggleActiveStatus);
router.get("/:supplierId", getSupplierById);

export default router;
