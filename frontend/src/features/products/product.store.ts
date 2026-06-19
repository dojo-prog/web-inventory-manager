import { create } from "zustand";
import type { ProductState } from "./product.types";

const useProductStore = create<ProductState>((set) => ({
  products: [],
  total_count: 0,

  fetchingProducts: false,
  loading: false,

  filters: {
    q: "",
    brand_id: "",
    category_id: "",
    gender: undefined,
    status: undefined,
    page: 1,
    limit: 20,
  },

  setFilters: (newFilters) => {},

  fetchProducts: async (filters) => {},
  addProduct: async (inputs) => {},
  updateProduct: async (productId, inputs) => {},
  removeProduct: async (productId) => {},
}));

export default useProductStore;
