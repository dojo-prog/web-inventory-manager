import { SupplierFiltersSchema } from "@web-inventory-manager/shared/dist";
import { Controller } from "../../types/handlers";
import AppError from "../../utils/AppError";
import * as supplierService from "./supplier.service";

export const getAllSuppliers: Controller = async (req, res, next) => {
  try {
    const result = SupplierFiltersSchema.safeParse(req.query);

    if (!result.success) {
      throw new AppError("Validation Error: Invalid query passed", 400, {
        errors: result.error.flatten().fieldErrors,
      });
    }

    const suppliers = await supplierService.getAllSuppliers(result.data);

    res.status(200).json({ success: true, suppliers });
  } catch (error) {
    next(error);
  }
};

export const getSupplierById: Controller = async (req, res, next) => {
  try {
    const supplierId = req.params.supplierId as string;

    const supplier = await supplierService.getSupplierById(supplierId);

    res.status(200).json({ success: true, supplier });
  } catch (error) {
    next(error);
  }
};

export const addSupplier: Controller = async (req, res, next) => {
  try {
    const newSupplier = await supplierService.addSupplier(req.body);

    res.status(201).json({ success: true, newSupplier });
  } catch (error) {
    next(error);
  }
};

export const updateSupplier: Controller = async (req, res, next) => {
  try {
    const supplierId = req.params.supplierId as string;

    const updatedSupplier = await supplierService.updateSupplier(
      supplierId,
      req.body,
    );

    res.status(200).json({ success: true, updatedSupplier });
  } catch (error) {
    next(error);
  }
};

export const toggleActiveStatus: Controller = async (req, res, next) => {
  try {
    const supplierId = req.params.supplierId as string;

    const updatedSupplier =
      await supplierService.toggleActiveStatus(supplierId);

    res.status(200).json({ success: true, updatedSupplier });
  } catch (error) {
    next(error);
  }
};
