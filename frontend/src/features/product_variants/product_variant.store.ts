import { create } from "zustand";
import type { ProductVariantState } from "./product_variant.types";

const useProductVariantStore = create<ProductVariantState>((set) => ({
  productVariants: [],
  selectedVariant: null,

  fetchingVariants: false,
  loading: false,

  fetchVariants: async (productId) => {},
  addVariant: async (productId, inputs) => {},
  updateVariant: async (productId, variantId, inputs) => {},
  removeVariant: async (productId, variantId) => {},
}));
