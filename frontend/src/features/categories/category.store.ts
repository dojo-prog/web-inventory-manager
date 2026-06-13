import { create } from "zustand";
import type { CategoryState } from "./category.types";

const useCategoryStore = create<CategoryState>((set) => ({
  categories: [],

  fetchingCategories: false,
  loading: false,

  filters: {
    q: "",
    page: 1,
    limit: 20,
  },

  setFilters: (newFilters) => {},

  fetchCategories: async (filters) => {},
  addCategory: async (filters) => {},
  updateCategory: async (filters) => {},
  removeCategory: async (filters) => {},
}));

export default useCategoryStore;
