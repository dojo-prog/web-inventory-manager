import {
  AddProductVariantInput,
  ProductVariant,
  ProductVariantFilters,
} from "@web-inventory-manager/shared";

export const findAll = async (
  productId: string,
  filters: ProductVariantFilters,
): Promise<ProductVariant[]> => {};
export const findById = async (
  productId: string,
  variantId: string,
): Promise<ProductVariant> => {};
export const create = async (
  productId: string,
  inputs: AddProductVariantInput,
): Promise<ProductVariant> => {};
export const update = async (
  productId: string,
  variantId: string,
  changes: Partial<ProductVariant>,
): Promise<ProductVariant> => {};
export const remove = async (
  productId: string,
  variantId: string,
): Promise<ProductVariant> => {};
