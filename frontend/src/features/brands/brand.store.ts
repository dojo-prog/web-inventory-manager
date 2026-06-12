import { create } from "zustand";
import type { BrandState } from "./brand.types";
import * as brandService from "./brand.service";
import errorHandler from "../../utils/errorHandler";
import { toast } from "react-toastify";

const useBrandStore = create<BrandState>((set) => ({
  brands: [],
  selectedBrand: null,

  fetchingBrands: false,
  loading: false,

  pagination: {
    page: 0,
    limit: 20,
    total_count: 0,

    setPage: (page) =>
      set((state) => ({
        pagination: { ...state.pagination, page },
      })),

    setLimit: (limit) =>
      set((state) => ({
        pagination: { ...state.pagination, limit },
      })),
  },

  fetchBrands: async (filters) => {
    set({ fetchingBrands: true });
    try {
      const { brands, total_count } = await brandService.fetchBrands(filters);

      set((state) => ({
        brands,
        pagination: { ...state.pagination, total_count },
      }));
    } catch (error) {
      errorHandler(error, "fetchBrands", true);
    } finally {
      set({ fetchingBrands: false });
    }
  },

  fetchBrandById: async (brandId) => {
    try {
      const brand = await brandService.fetchBrandById(brandId);

      set({ selectedBrand: brand });
    } catch (error) {
      errorHandler(error, "fetchBrandById", true);
    }
  },

  addBrand: async (inputs) => {
    set({ loading: true });
    try {
      const newBrand = await brandService.addBrand(inputs);

      set((state) => ({
        brands: [newBrand, ...state.brands],
      }));
      toast.success("Brand added");
    } catch (error) {
      errorHandler(error, "fetchBrandById", true);
    } finally {
      set({ loading: false });
    }
  },

  updateBrand: async (brandId, inputs) => {
    set({ loading: true });
    try {
      const updatedBrand = await brandService.updateBrand(brandId, inputs);

      set((state) => ({
        brands: state.brands.map((b) => (b.id === brandId ? updatedBrand : b)),
      }));
      toast.success("Brand updated");
    } catch (error) {
      errorHandler(error, "fetchBrandById", true);
    } finally {
      set({ loading: false });
    }
  },

  removeBrand: async (brandId) => {
    set({ loading: true });
    try {
      await brandService.removeBrand(brandId);

      set((state) => ({
        brands: state.brands.filter((b) => b.id !== brandId),
      }));
      toast.success("Brand removed");
    } catch (error) {
      errorHandler(error, "fetchBrandById", true);
    } finally {
      set({ loading: false });
    }
  },
}));

export default useBrandStore;
