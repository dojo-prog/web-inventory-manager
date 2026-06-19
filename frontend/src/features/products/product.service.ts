import type {
  ProductFilter,
  ProductFilterResult,
  ProductWithRelations,
} from "@web-inventory-manager/shared";

export const fetchProducts = async (
  filters: ProductFilter,
): Promise<ProductFilterResult> => {};

export const addProduct = async (
  inputs: FormData,
): Promise<ProductWithRelations> => {};

export const updateProduct = async (
  productId: string,
  inputs: FormData,
): Promise<ProductWithRelations> => {};

export const removeProduct = async (productId: string): Promise<void> => {};
