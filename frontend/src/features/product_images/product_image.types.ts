import type { ProductImage } from "@web-inventory-manager/shared";
import type { ProductImageForm } from "../../schemas/product_image";

export interface ProductImageState {
  product_images: ProductImage[];

  fetchingProductImages: boolean;
  loading: boolean;

  fetchProductImages: (productId: string) => Promise<void>;
  addProductImage: (
    productId: string,
    inputs: ProductImageForm,
  ) => Promise<void>;
  removeProductImage: (productId: string, imageId: string) => Promise<void>;
}
