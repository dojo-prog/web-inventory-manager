import type {
  AddProductVariantInput,
  ProductVariant,
  UpdateProductVariantInput,
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
    inputs: UpdateProductVariantInput,
  ) => Promise<void>;
  removeVariant: (productId: string, variantId: string) => Promise<void>;
}
