import { ProductImage } from "@web-inventory-manager/shared/dist";

export const getAllProductImages = async (
  productId: string,
): Promsie<ProductImage[]> => {};
export const addProductImage = async (
  productId: string,
  image: Express.Multer.File,
): Promsie<ProductImage> => {};
export const removeProductImage = async (
  productId: string,
): Promsie<ProductImage> => {};
