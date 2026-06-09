import {
  AddCategoryInput,
  Category,
  CategoryFilters,
} from "@web-inventory-manager/shared";

export const findAll = async (
  filters: CategoryFilters,
): Promise<Category[]> => {};
export const findById = async (categoryId: string): Promise<Category> => {};
export const create = async (inputs: AddCategoryInput): Promise<Category> => {};
export const update = async (
  categoryId: string,
  changes: Partial<Category>,
): Promise<Category> => {};
export const remove = async (categoryId: string): Promise<Category> => {};
