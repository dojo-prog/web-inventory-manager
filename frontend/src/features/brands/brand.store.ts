import { create } from "zustand";
import type { BrandState } from "./brand.types";
import * as brandService from "./brand.service";
import errorHandler from "../../utils/errorHandler";
import { toast } from "react-toastify";

const useBrandStore = create<BrandState>((set) => ({
  brands: [],
  selectedBrand: null,
  total_count: 0,

  fetchingBrands: false,
  loading: false,

  filters: {
    q: "",
    page: 1,
    limit: 20,
  },

  setFilters: (newFilters) =>
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    })),

  fetchBrands: async (filters) => {
    set({ fetchingBrands: true });
    try {
      const { brands, total_count } = await brandService.fetchBrands(filters);

      set({ brands, total_count });
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
      const { name, logo } = inputs;

      const formData = new FormData();
      formData.append("name", name);
      if (logo) {
        formData.append("logo", logo);
      }

      console.log(formData);

      const newBrand = await brandService.addBrand(formData);

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
      const { name, logo } = inputs;

      const formData = new FormData();
      formData.append("name", name);
      if (logo) {
        formData.append("logo", logo);
      }

      const updatedBrand = await brandService.updateBrand(brandId, formData);

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
