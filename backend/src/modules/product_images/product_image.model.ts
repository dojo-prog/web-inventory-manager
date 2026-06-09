import { ProductImage } from "@web-inventory-manager/shared";

export const findAll = async (productId: string): Promise<ProductImage[]> => {};
export const findById = async (productId: string): Promise<ProductImage> => {};
export const add = async (
  productId: string,
  image: Express.Multer.File,
): Promise<ProductImage> => {};
export const remove = async (productId: string): Promise<ProductImage> => {};
