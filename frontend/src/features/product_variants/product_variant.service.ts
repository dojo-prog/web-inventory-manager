import type {
  AddProductVariantInput,
  UpdateProductVariantInput,
} from "@web-inventory-manager/shared";

export const fetchVariants = async (productId: string) => {};
export const addVariant = async (
  productId: string,
  inputs: AddProductVariantInput,
) => {};
export const updateVariant = async (
  productId: string,
  variantId: string,
  inputs: UpdateProductVariantInput,
) => {};
export const removeVariant = async (productId: string, variantId: string) => {};
