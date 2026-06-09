import { Controller } from "../../types/handlers";
import * as productVariantService from "./product_variant.service";

export const getAllProductVariants: Controller = async (req, res, next) => {
  try {
    const productId = req.params.productId as string;

    const productVariants =
      await productVariantService.getAllProductVariants(productId);

    res.status(200).json({ success: true, productVariants });
  } catch (error) {
    next(error);
  }
};

export const addProductVariant: Controller = async (req, res, next) => {
  try {
    const productId = req.params.productId as string;

    const newProductVariant = await productVariantService.addProductVariant(
      productId,
      req.body,
    );

    res.status(201).json({ success: true, newProductVariant });
  } catch (error) {
    next(error);
  }
};

export const updateProductVariant: Controller = async (req, res, next) => {
  try {
    const { productId, variantId } = req.params as Record<string, string>;

    const updatedProductVariant =
      await productVariantService.updateProductVariant(
        productId,
        variantId,
        req.body,
      );

    res.status(200).json({ success: true, updatedProductVariant });
  } catch (error) {
    next(error);
  }
};

export const removeProductVariant: Controller = async (req, res, next) => {
  try {
    const { productId, variantId } = req.params as Record<string, string>;

    const removedProductVariant =
      await productVariantService.removeProductVariant(productId, variantId);

    res.status(200).json({ success: true, removedProductVariant });
  } catch (error) {
    next(error);
  }
};

export const getProductVariantById: Controller = async (req, res, next) => {
  try {
    const { productId, variantId } = req.params as Record<string, string>;

    const productVariant = await productVariantService.getProductVariantById(
      productId,
      variantId,
    );

    res.status(200).json({ success: true, productVariant });
  } catch (error) {
    next(error);
  }
};
