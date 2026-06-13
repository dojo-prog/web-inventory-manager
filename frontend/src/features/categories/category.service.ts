import type {
  AddCategoryInput,
  BrandFilters,
  Category,
  CategoryFilterResult,
  MostUsedCategoryResult,
  UpdateCategoryInput,
} from "@web-inventory-manager/shared";
import axios from "../../lib/axios";

export const fetchCategories = async (
  filters: BrandFilters,
): Promise<CategoryFilterResult> => {
  const res = await axios.get("/categories", {
    params: filters,
  });

  const { categories, total_count } = res.data;

  return { categories, total_count };
};

export const fetchMostUsed =
  async (): Promise<MostUsedCategoryResult | null> => {
    return await axios.get("/categories/most-used");
  };

export const addCategory = async (
  inputs: AddCategoryInput,
): Promise<Category> => {
  const res = await axios.post("/categories", inputs);

  return res.data.newCategory;
};

export const updateCategory = async (
  categoryId: string,
  inputs: UpdateCategoryInput,
): Promise<Category> => {
  const res = await axios.put(`/categories/${categoryId}`, inputs);

  return res.data.updatedCategory;
};

export const removeCategory = async (categoryId: string): Promise<void> => {
  await axios.delete(`/categories/${categoryId}`);
};
