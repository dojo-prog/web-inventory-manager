import {
  AddSupplierInput,
  Supplier,
  SupplierFilters,
  UpdateSupplierInput,
} from "@web-inventory-manager/shared";
import * as supplierModel from "./supplier.model";
import AppError from "../../utils/AppError";

export const getAllSuppliers = async (
  filters: SupplierFilters,
): Promise<Supplier[]> => {
  return await supplierModel.findAll(filters);
};

export const getSupplierById = async (
  supplierId: string,
): Promise<Supplier> => {
  const supplier = await supplierModel.findById(supplierId);

  if (!supplier) {
    throw new AppError("Supplier not found", 404);
  }

  return supplier;
};

export const addSupplier = async (
  inputs: AddSupplierInput,
): Promise<Supplier> => {
  return await supplierModel.create(inputs);
};

export const updateSupplier = async (
  supplierId: string,
  inputs: UpdateSupplierInput,
): Promise<Supplier> => {
  const supplier = await supplierModel.findById(supplierId);

  if (!supplier) {
    throw new AppError("Supplier not found", 404);
  }

  // Changes check
  let changes: Partial<Supplier> = {};

  const compareKeys = Object.keys(inputs) as (keyof UpdateSupplierInput)[];

  compareKeys.forEach((k) => {
    if (supplier[k] !== inputs[k]) {
      changes[k] = inputs[k] as any;
    }
  });

  if (Object.keys(changes).length === 0) {
    throw new AppError("No changes has been made");
  }

  return await supplierModel.update(supplierId, changes);
};

export const toggleActiveStatus = async (
  supplierId: string,
): Promise<Supplier> => {
  const supplier = await supplierModel.findById(supplierId);

  if (!supplier) {
    throw new AppError("Supplier not found", 404);
  }

  return await supplierModel.toggleStatus(supplierId);
};
