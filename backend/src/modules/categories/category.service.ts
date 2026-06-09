import {
  AddCategoryInput,
  Category,
  CategoryFilters,
  UpdateCategoryInput,
} from "@web-inventory-manager/shared";

export const getAllCategories = async (
  filters: CategoryFilters,
): Promise<Category[]> => {};
export const addCategory = async (
  inputs: AddCategoryInput,
): Promise<Category> => {};
export const updateCategory = async (
  categoryId: string,
  inputs: UpdateCategoryInput,
): Promise<Category> => {};
export const removeCategory = async (
  categoryId: string,
): Promise<Category> => {};
export const getCategoryById = async (
  categoryId: string,
): Promise<Category> => {};
