import express from "express";
import {
  authorizeRoles,
  protectRoute,
} from "../../middlewares/auth.middleware";
import { validate } from "../../middlewares/validation.middleware";
import {
  AddSupplierInputSchema,
  SupplierFiltersSchema,
  SupplierParamsSchema,
  UpdateSupplierInputSchema,
  UserFilterSchema,
} from "@web-inventory-manager/shared/dist";
import {
  addSupplier,
  getSuppliers,
  getSupplierById,
  toggleActiveStatus,
  updateSupplier,
} from "./supplier.controller";

const router = express.Router();

router.use(protectRoute);
router.use(authorizeRoles("admin", "manager"));

router.get("/", validate({ query: SupplierFiltersSchema }), getSuppliers);

router.post("/", validate({ body: AddSupplierInputSchema }), addSupplier);

router.post(
  "/:supplierId",
  validate({ params: SupplierParamsSchema, body: UpdateSupplierInputSchema }),
  updateSupplier,
);

router.patch(
  "/:supplierId",
  validate({ params: SupplierParamsSchema }),
  toggleActiveStatus,
);

router.get(
  "/:supplierId",
  validate({ params: SupplierParamsSchema }),
  getSupplierById,
);

export default router;
