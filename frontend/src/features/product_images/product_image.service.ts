import type { ProductImage } from "@web-inventory-manager/shared";
import axios from "../../lib/axios";

export const fetchProductImages = async (
  productId: string,
): Promise<ProductImage[]> => {
  const res = await axios.get(`/products/${productId}/image`);

  return res.data.productImages;
};

export const addProductImage = async (
  productId: string,
  inputs: FormData,
): Promise<ProductImage> => {
  const res = await axios.post(`/products/${productId}/image`, inputs);

  return res.data.newProductImage;
};

export const removeProductImage = async (
  productId: string,
  imageId: string,
): Promise<void> => {
  await axios.delete(`/products/${productId}/image/${imageId}`);
};
