import type {
  AddCategoryInput,
  BrandFilters,
  Category,
  UpdateCategoryInput,
} from "@web-inventory-manager/shared";
import axios from "../../lib/axios";

export const fetchCategories = async (
  filters: BrandFilters,
): Promise<Category[]> => {
  const res = await axios.get("/categories", {
    params: filters,
  });

  return res.data.categories;
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
