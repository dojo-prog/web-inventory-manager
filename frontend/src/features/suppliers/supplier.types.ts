import type {
  AddSupplierInput,
  Supplier,
  SupplierFilters,
  UpdateSupplierInput,
} from "@web-inventory-manager/shared";

export interface SupplierState {
  suppliers: Supplier[];
  selectedSupplier: Supplier | null;

  total_count: number;

  fetchingSuppliers: boolean;
  loading: boolean;

  filters: SupplierFilters;
  setFilters: (newFilters: Partial<SupplierFilters>) => void;

  setSelectedSupplier: (value: Supplier | null) => void;

  fetchSuppliers: (filters: SupplierFilters) => Promise<void>;
  addSupplier: (inputs: AddSupplierInput) => Promise<void>;
  updateSupplier: (
    supplierId: string,
    inputs: UpdateSupplierInput,
  ) => Promise<void>;
}
