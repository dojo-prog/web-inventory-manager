import { create } from "zustand";
import type { ProductImageState } from "./product_image.types";

const useProductImageStore = create<ProductImageState>((set) => ({
  product_images: [],

  fetchingProductImages: false,

  fetchProductImages: async (productId) => {},
  addProductImage: async (productId, inputs) => {},
  removeProductImage: async (imageId) => {},
}));

export default useProductImageStore;
