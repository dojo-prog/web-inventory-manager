import { create } from "zustand";
import type { SupplierState } from "./supplier.types";
import * as supplierService from "./supplier.service";
import errorHandler from "../../utils/errorHandler";
import { toast } from "react-toastify";
import useModalStore from "../ui/modals/modal.store";

const useSupplierStore = create<SupplierState>((set) => ({
  suppliers: [],
  selectedSupplier: null,

  fetchingSuppliers: false,
  loading: false,

  total_count: 0,

  filters: {
    q: "",
    page: 1,
    limit: 20,
  },

  setFilters: (newFilters) =>
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    })),

  setSelectedSupplier: (value) => set({ selectedSupplier: value }),

  fetchSuppliers: async (filters) => {
    set({ fetchingSuppliers: true });
    try {
      const { suppliers, total_count } =
        await supplierService.fetchSuppliers(filters);

      set({ suppliers, total_count });
    } catch (error) {
      errorHandler(error, "fetchSuppliers", true);
    } finally {
      set({ fetchingSuppliers: false });
    }
  },

  addSupplier: async (inputs) => {
    set({ loading: true });
    try {
      const newSupplier = await supplierService.addSupplier(inputs);

      set((state) => ({
        suppliers: [newSupplier, ...state.suppliers],
      }));
      toast.success("New supplier added");
      useModalStore.getState().closeSupplierModal();
    } catch (error) {
      errorHandler(error, "addSupplier", true);
    } finally {
      set({ loading: false });
    }
  },

  updateSupplier: async (supplierId, inputs) => {
    set({ loading: false });
    try {
      const updatedSupplier = await supplierService.updateSupplier(
        supplierId,
        inputs,
      );

      set((state) => ({
        suppliers: state.suppliers.map((s) =>
          s.id === supplierId ? updatedSupplier : s,
        ),
      }));
      toast.success("Supplier updated");
      useModalStore.getState().closeSupplierModal();
    } catch (error) {
      errorHandler(error, "updateSupplier", true);
    } finally {
      set({ loading: false });
    }
  },
}));

export default useSupplierStore;
