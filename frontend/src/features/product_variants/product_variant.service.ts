import type {
  AddProductVariantInput,
  ProductVariant,
  UpdateProductVariantInput,
} from "@web-inventory-manager/shared";
import axios from "../../lib/axios";

export const fetchVariants = async (
  productId: string,
): Promise<ProductVariant[]> => {
  const res = await axios.get(`/products/${productId}/variants`);

  return res.data.productVariants;
};

export const addVariant = async (
  productId: string,
  inputs: AddProductVariantInput,
): Promise<ProductVariant> => {
  const res = await axios.post(`/products/${productId}/variants`, inputs);

  return res.data.newProductVariant;
};

export const updateVariant = async (
  productId: string,
  variantId: string,
  inputs: UpdateProductVariantInput,
): Promise<ProductVariant> => {
  const res = await axios.put(
    `/products/${productId}/variants/${variantId}`,
    inputs,
  );

  return res.data.updatedProductVariant;
};

export const removeVariant = async (
  productId: string,
  variantId: string,
): Promise<void> => {
  await axios.delete(`/products/${productId}/variants/${variantId}`);
};
