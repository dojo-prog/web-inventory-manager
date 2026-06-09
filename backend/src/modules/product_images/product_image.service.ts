import { ProductImage } from "@web-inventory-manager/shared/dist";
import * as productImageModel from "./product_image.model";
import * as productModel from "../products/product.model";
import AppError from "../../utils/AppError";
import uploadImage from "../../storage/handlers/uploadImage";
import deleteImage from "../../storage/handlers/deleteImage";

export const getAllProductImages = async (
  productId: string,
): Promise<ProductImage[]> => {
  const product = await productModel.findById(productId);

  if (!product) {
    throw new AppError("Product not found", 404);
  }

  return await productImageModel.findAll(productId);
};

export const addProductImage = async (
  productId: string,
  image: Express.Multer.File,
): Promise<ProductImage> => {
  const product = await productModel.findById(productId);

  if (!product) {
    throw new AppError("Product not found", 404);
  }

  const { url, path } = await uploadImage(
    image,
    "product-images",
    `products/images/${productId}`,
  );

  const payload = {
    product_id: productId,
    image_url: url,
    image_pat: path,
  };

  return await productImageModel.add(productId, payload);
};

export const removeProductImage = async (
  productId: string,
  productImageId: string,
): Promise<ProductImage> => {
  const removedImage = await productImageModel.remove(
    productId,
    productImageId,
  );

  if (!removedImage) {
    throw new AppError("Product image not found", 404);
  }

  await deleteImage("product-images", removedImage.image_path);

  return removedImage;
};
