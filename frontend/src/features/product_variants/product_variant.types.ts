import type {
  AddProductVariantInput,
  ProductVariant,
  UpdateProductInput,
} from "@web-inventory-manager/shared";

export interface ProductVariantState {
  productVariants: ProductVariant[];
  selectedVariant: ProductVariant | null;

  fetchingVariants: boolean;
  loading: boolean;

  fetchVariants: (productId: string) => Promise<void>;
  addVariant: (
    productId: string,
    inputs: AddProductVariantInput,
  ) => Promise<void>;
  updateVariant: (
    productId: string,
    variantId: string,
    inputs: UpdateProductInput,
  ) => Promise<void>;
  removeVariant: (productId: string, variantId: string) => Promise<void>;
}
