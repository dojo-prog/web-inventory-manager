import { CategoryFiltersSchema } from "@web-inventory-manager/shared/dist";
import { Controller } from "../../types/handlers";
import * as categoryService from "./category.service";
import AppError from "../../utils/AppError";

export const getAllCategories: Controller = async (req, res, next) => {
  try {
    const result = CategoryFiltersSchema.safeParse(req.query);

    if (!result.success) {
      throw new AppError("Validation Error: Invalid query", 400, {
        errors: result.error.flatten().fieldErrors,
      });
    }

    const categories = await categoryService.getAllCategories(result.data);

    res.status(200).json({ success: true, categories });
  } catch (error) {
    next(error);
  }
};

export const addCategory: Controller = async (req, res, next) => {
  try {
    const newCategory = await categoryService.addCategory(req.body);

    res.status(201).json({ success: true, newCategory });
  } catch (error) {
    next(error);
  }
};

export const updateCategory: Controller = async (req, res, next) => {
  try {
    const categoryId = req.params.categoryId as string;

    const updatedCategory = await categoryService.updateCategory(
      categoryId,
      req.body,
    );

    res.status(200).json({ success: true, updatedCategory });
  } catch (error) {
    next(error);
  }
};

export const removeCategory: Controller = async (req, res, next) => {
  try {
    const categoryId = req.params.categoryId as string;

    const removedCategory = await categoryService.removeCategory(categoryId);

    res.status(200).json({ success: true, removedCategory });
  } catch (error) {
    next(error);
  }
};

export const getCategoryById: Controller = async (req, res, next) => {
  try {
    const categoryId = req.params.categoryId as string;

    const category = await categoryService.getCategoryById(categoryId);

    res.status(200).json({ success: true, category });
  } catch (error) {
    next(error);
  }
};
