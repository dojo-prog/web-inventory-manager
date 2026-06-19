import {
  AddProductInput,
  Product,
  ProductFilter,
  ProductFilterResult,
  ProductWithRelations,
  UpdateProductInput,
} from "@web-inventory-manager/shared";
import * as productModel from "./product.model";
import uploadImage from "../../storage/handlers/uploadImage";
import AppError from "../../utils/AppError";
import deleteImage from "../../storage/handlers/deleteImage";
import generateChanges from "../../utils/generateChanges";

export const getProducts = async (
  filters: ProductFilter,
): Promise<ProductFilterResult> => {
  return productModel.findAll(filters);
};

export const addProduct = async (
  inputs: AddProductInput,
  thumbnail?: Express.Multer.File,
): Promise<ProductWithRelations> => {
  const payload: AddProductInput = { ...inputs };

  if (thumbnail) {
    const { url, path } = await uploadImage(
      thumbnail,
      "product-thumbnails",
      "products/thumbnails",
    );

    payload.thumbnail_url = url;
    payload.thumbnail_path = path;
  }

  return await productModel.create(payload);
};

export const updateProduct = async (
  productId: string,
  inputs: UpdateProductInput,
  thumbnail?: Express.Multer.File,
): Promise<ProductWithRelations> => {
  const product = await productModel.findById(productId);

  if (!product) {
    throw new AppError("Product not found", 404);
  }

  const changes = generateChanges(product, inputs);

  if (thumbnail) {
    const { url, path } = await uploadImage(
      thumbnail,
      "product-thumbnails",
      "products/thumbnails",
    );

    changes.thumbnail_url = url;
    changes.thumbnail_path = path;

    if (product.thumbnail_path) {
      await deleteImage("product-thumbails", product.thumbnail_path);
    }
  }

  if (Object.keys(changes).length === 0) {
    throw new AppError("No changes has been made", 400);
  }

  return await productModel.update(productId, changes);
};

export const removeProduct = async (productId: string): Promise<Product> => {
  const removedProduct = await productModel.remove(productId);

  if (!removedProduct) {
    throw new AppError("Product not found", 404);
  }

  return removedProduct;
};

export const getProductById = async (productId: string): Promise<Product> => {
  const product = await productModel.findById(productId);

  if (!product) {
    throw new AppError("Product not found", 404);
  }

  return product;
};
