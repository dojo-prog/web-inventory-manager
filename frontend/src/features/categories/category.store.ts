import { create } from "zustand";
import type { CategoryState } from "./category.types";
import errorHandler from "../../utils/errorHandler";
import * as categoryService from "./category.service";
import { toast } from "react-toastify";

const useCategoryStore = create<CategoryState>((set) => ({
  categories: [],

  fetchingCategories: false,
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

  fetchCategories: async (filters) => {
    set({ fetchingCategories: true });
    try {
      const categories = await categoryService.fetchCategories(filters);

      set({ categories });
    } catch (error) {
      errorHandler(error, "fetchCategories", true);
    } finally {
      set({ fetchingCategories: false });
    }
  },

  addCategory: async (inputs) => {
    set({ loading: true });
    try {
      const newCategory = await categoryService.addCategory(inputs);

      set((state) => ({
        categories: [newCategory, ...state.categories],
      }));
      toast.success("Category added");
    } catch (error) {
      errorHandler(error, "addCategory", true);
    } finally {
      set({ loading: false });
    }
  },

  updateCategory: async (categoryId, inputs) => {
    set({ loading: true });
    try {
      const updatedCategory = await categoryService.updateCategory(
        categoryId,
        inputs,
      );

      set((state) => ({
        categories: state.categories.map((c) =>
          c.id === categoryId ? updatedCategory : c,
        ),
      }));
      toast.success("Category updated");
    } catch (error) {
      errorHandler(error, "fetchCategories", true);
    } finally {
      set({ loading: false });
    }
  },

  removeCategory: async (categoryId) => {
    try {
      await categoryService.removeCategory(categoryId);

      set((state) => ({
        categories: state.categories.filter((c) => c.id !== categoryId),
      }));
      toast.success("Category removed");
    } catch (error) {
      errorHandler(error, "fetchCategories", true);
    }
  },
}));

export default useCategoryStore;
