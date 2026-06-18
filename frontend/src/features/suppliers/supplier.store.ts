import { create } from "zustand";
import type { SupplierState } from "./supplier.types";

const useSupplierStore = create<SupplierState>((set) => ({
  suppliers: [],
  selectedSupplier: null,

  fetchingSuppliers: false,
  loading: false,

  filters: {
    q: "",
    page: 1,
    limit: 20,
  },

  setFilters: (newFilters) => {},

  fetchSuppliers: async () => {},
  addSupplier: async (inputs) => {},
  updateSupplier: async (supplierId, inputs) => {},
}));

export default useSupplierStore;
