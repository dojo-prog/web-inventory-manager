import {
  AddProductVariantInput,
  ProductVariant,
  ProductVariantFilters,
  UpdateProductVariantInput,
} from "@web-inventory-manager/shared";

export const getAllProductVariants = async (
  productId: string,
  filters: ProductVariantFilters,
): Promise<ProductVariant[]> => {};
export const addProductVariant = async (
  productId: string,
  inputs: AddProductVariantInput,
): Promise<ProductVariant> => {};
export const updateProductVariant = async (
  productId: string,
  variantId: string,
  inputs: UpdateProductVariantInput,
): Promise<ProductVariant> => {};
export const removeProductVariant = async (
  productId: string,
  variantId: string,
): Promise<ProductVariant> => {};
export const getProductVariantById = async (
  productId: string,
  variantId: string,
): Promise<ProductVariant> => {};
