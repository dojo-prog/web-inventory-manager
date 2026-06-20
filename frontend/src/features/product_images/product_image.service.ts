import type { ProductImage } from "@web-inventory-manager/shared";

export const fetchProductImages = async (
  productId: string,
): Promise<ProductImage[]> => {};

export const addProductImage = async (
  productId: string,
  inputs: FormData,
): Promise<ProductImage> => {};

export const removeProductImage = async (imageId: string): Promise<void> => {};
