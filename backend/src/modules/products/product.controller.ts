import { ProductFilterSchema } from "@web-inventory-manager/shared/dist";
import { Controller } from "../../types/handlers";
import AppError from "../../utils/AppError";
import * as productService from "./product.service";

export const getProducts: Controller = async (req, res, next) => {
  try {
    const { products, total_count } = await productService.getProducts(
      req.query,
    );

    res.status(200).json({ success: true, products, total_count });
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
