import {
  AddCategoryInput,
  Category,
  CategoryFilters,
  UpdateCategoryInput,
} from "@web-inventory-manager/shared";
import * as categoryModel from "./category.model";
import AppError from "../../utils/AppError";
import generateChanges from "../../utils/generateChanges";

export const getCategories = async (
  filters: CategoryFilters,
): Promise<Category[]> => {
  return await categoryModel.findAll(filters);
};

export const addCategory = async (
  inputs: AddCategoryInput,
): Promise<Category> => {
  return await categoryModel.create(inputs);
};

export const updateCategory = async (
  categoryId: string,
  inputs: UpdateCategoryInput,
): Promise<Category> => {
  const category = await categoryModel.findById(categoryId);

  if (!category) {
    throw new AppError("Category not found", 404);
  }

  const changes = generateChanges(category, inputs);

  if (Object.keys(changes).length === 0) {
    throw new AppError("No changes has been made", 400);
  }

  return await categoryModel.update(categoryId, changes);
};

export const removeCategory = async (categoryId: string): Promise<Category> => {
  const removedCategory = await categoryModel.remove(categoryId);

  if (!removedCategory) {
    throw new AppError("Category not found", 404);
  }

  return removedCategory;
};

export const getCategoryById = async (
  categoryId: string,
): Promise<Category> => {
  const category = await categoryModel.findById(categoryId);

  if (!category) {
    throw new AppError("Category not found", 404);
  }

  return category;
};
