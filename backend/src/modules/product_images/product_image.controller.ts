import { Controller } from "../../types/handlers";
import AppError from "../../utils/AppError";
import * as productImageService from "./product_image.service";

export const getAllProductImages: Controller = async (req, res, next) => {
  try {
    const productId = req.params.productId as string;

    const productImages =
      await productImageService.getAllProductImages(productId);

    res.status(200).json({ success: true, productImages });
  } catch (error) {
    next(error);
  }
};

export const addProductImage: Controller = async (req, res, next) => {
  try {
    const productId = req.params.productId as string;
    const image = req.file;

    if (!image) {
      throw new AppError("No product image provided", 400);
    }

    const newProductImage = await productImageService.addProductImage(
      productId,
      image,
    );

    res.status(201).json({ success: true, newProductImage });
  } catch (error) {
    next(error);
  }
};

export const removeProductImage: Controller = async (req, res, next) => {
  try {
    const { productId, productImageId } = req.params as Record<string, string>;

    const removedProductImage = await productImageService.removeProductImage(
      productId,
      productImageId,
    );

    res.status(200).json({ success: true, removedProductImage });
  } catch (error) {
    next(error);
  }
};
