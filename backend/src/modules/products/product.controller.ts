import { ProductFilterSchema } from "@web-inventory-manager/shared/dist";
import { Controller } from "../../types/handlers";
import AppError from "../../utils/AppError";
import * as productService from "./product.service";

export const getAllProducts: Controller = async (req, res, next) => {
  try {
    const result = ProductFilterSchema.safeParse(req.query);

    if (!result.success) {
      throw new AppError("Validation Error: Invalid query", 400, {
        errors: result.error.flatten().fieldErrors,
      });
    }

    const products = await productService.getAllProducts(result.data);

    res.status(200).json({ success: true, products });
  } catch (error) {
    next(error);
  }
};

export const addProduct: Controller = async (req, res, next) => {
  try {
    const thumbnail = req.file;

    const newProduct = await productService.addProduct(req.body, thumbnail);

    res.status(201).json({ success: true, newProduct });
  } catch (error) {
    next(error);
  }
};

export const updateProduct: Controller = async (req, res, next) => {
  try {
    const thumbnail = req.file;
    const productId = req.params.productId as string;

    const updatedProduct = await productService.updateProduct(
      productId,
      req.body,
      thumbnail,
    );

    res.status(200).json({ success: true, updatedProduct });
  } catch (error) {
    next(error);
  }
};

export const removeProduct: Controller = async (req, res, next) => {
  try {
    const productId = req.params.productId as string;

    const removedProduct = await productService.removeProduct(productId);

    res.status(200).json({ success: true, removedProduct });
  } catch (error) {
    next(error);
  }
};

export const getProductById: Controller = async (req, res, next) => {
  try {
    const productId = req.params.productId as string;

    const product = await productService.getProductById(productId);

    res.status(200).json({ success: true, product });
  } catch (error) {
    next(error);
  }
};
