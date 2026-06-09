import {
  AddProductVariantInput,
  ProductVariant,
  ProductVariantFilters,
  UpdateProductVariantInput,
} from "@web-inventory-manager/shared";
import * as productVariantModel from "./product_variant.model";
import * as productModel from "../products/product.model";
import AppError from "../../utils/AppError";

export const getAllProductVariants = async (
  productId: string,
): Promise<ProductVariant[]> => {
  const product = await productModel.findById(productId);

  if (!product) {
    throw new AppError("Product not found", 404);
  }

  return await productVariantModel.findAll(productId);
};

export const addProductVariant = async (
  productId: string,
  inputs: AddProductVariantInput,
): Promise<ProductVariant> => {
  const product = await productModel.findById(productId);

  if (!product) {
    throw new AppError("Product not found", 404);
  }

  return await productVariantModel.create(productId, inputs);
};

export const updateProductVariant = async (
  productId: string,
  variantId: string,
  inputs: UpdateProductVariantInput,
): Promise<ProductVariant> => {
  const product = await productModel.findById(productId);

  if (!product) {
    throw new AppError("Product not found", 404);
  }

  const productVariant = await productVariantModel.findById(
    productId,
    variantId,
  );

  if (!productVariant) {
    throw new AppError("Product variant not found", 404);
  }

  const changes = generateChanges(productVariant, inputs);

  if (Object.keys(changes).length === 0) {
    throw new AppError("No changes has been made", 400);
  }

  return await productVariantModel.update(productId, variantId, changes);
};

export const removeProductVariant = async (
  productId: string,
  variantId: string,
): Promise<ProductVariant> => {
  const product = await productModel.findById(productId);

  if (!product) {
    throw new AppError("Product not found", 404);
  }

  const removedProduct = await productVariantModel.remove(productId, variantId);

  if (!removedProduct) {
    throw new AppError("Product variant not found", 404);
  }

  return removedProduct;
};

export const getProductVariantById = async (
  productId: string,
  variantId: string,
): Promise<ProductVariant> => {
  const product = await productModel.findById(productId);

  if (!product) {
    throw new AppError("Product not found", 404);
  }

  const productVariant = await productVariantModel.findById(
    productId,
    variantId,
  );

  if (!productVariant) {
    throw new AppError("Product variant not found", 404);
  }

  return productVariant;
};
