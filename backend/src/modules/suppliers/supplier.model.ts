import {
  AddSupplierInput,
  Supplier,
  SupplierFilters,
} from "@web-inventory-manager/shared";

export const findAll = async (filters: SupplierFilters) => {};
export const findById = async (supplierId: string) => {};
export const create = async (inputs: AddSupplierInput) => {};
export const update = async (
  supplierId: string,
  changes: Partial<Supplier>,
) => {};
export const toggleStatus = async (supplierId: string) => {};
