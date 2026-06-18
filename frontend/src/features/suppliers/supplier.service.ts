import type {
  AddSupplierInput,
  Supplier,
  SupplierFilters,
  UpdateSupplierInput,
} from "@web-inventory-manager/shared";

export const fetchSuppliers = async (
  filters: SupplierFilters,
): Promise<Supplier[]> => {};
export const addSupplier = async (
  inputs: AddSupplierInput,
): Promise<Supplier> => {};
export const updateSupplier = async (
  supplierId: string,
  inputs: UpdateSupplierInput,
): Promise<Supplier> => {};
