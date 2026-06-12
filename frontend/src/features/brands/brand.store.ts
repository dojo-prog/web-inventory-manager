import { create } from "zustand";
import type { BrandState } from "./brand.types";

const useBrandStore = create<BrandState>((set) => ({
  brands: [],

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

  fetchBrands: async () => {},
  fetchBrandById: async () => {},
  addBrand: async () => {},
  updateBrand: async () => {},
  removeBrand: async () => {},
}));

export default useBrandStore;
