import { create } from "zustand";
import type { CategoryState } from "./category.types";
import errorHandler from "../../utils/errorHandler";
import * as categoryService from "./category.service";
import { toast } from "react-toastify";
import useModalStore from "../ui/modals/modal.store";

const useCategoryStore = create<CategoryState>((set) => ({
  categories: [],
  total_count: 0,

  mostUsedCategory: {
    data: null,
    product_count: 0,
  },

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
      const { categories, total_count } =
        await categoryService.fetchCategories(filters);

      set({ categories, total_count });
    } catch (error) {
      errorHandler(error, "fetchCategories", true);
    } finally {
      set({ fetchingCategories: false });
    }
  },

  fetchMostUsed: async () => {
    try {
      const result = await categoryService.fetchMostUsed();

      if (!result) return;

      const { category, product_count } = result;

      set({ mostUsedCategory: { data: category, product_count } });
    } catch (error) {
      errorHandler(error, "fetchMostUsed", true);
    }
  },

  addCategory: async (inputs) => {
    set({ loading: true });
    try {
      const newCategory = await categoryService.addCategory(inputs);

      set((state) => ({
        categories: [newCategory, ...state.categories],
        total_count: state.total_count + 1,
      }));
      toast.success("Category added");
      useModalStore.getState().closeCategoryModal();
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
      useModalStore.getState().closeCategoryModal();
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
        total_count: state.total_count - 1,
      }));
      toast.success("Category removed");
      useModalStore.getState().closeDeleteConfirmModal();
    } catch (error) {
      errorHandler(error, "fetchCategories", true);
    }
  },
}));

export default useCategoryStore;
