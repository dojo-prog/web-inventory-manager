import type { BrandFilters, Category } from "@web-inventory-manager/shared";

export const fetchCategories = async (
  filters: BrandFilters,
): Promise<Category[]> => {};
export const addCategory = async (inputs: FormData): Promise<Category> => {};
export const updateCategory = async (
  categoryId: string,
  inputs: FormData,
): Promise<Category> => {};
export const removeCategory = async (catgoryId: string): Promise<void> => {};
