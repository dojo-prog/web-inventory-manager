import { create } from "zustand";
import type { ProductImageState } from "./product_image.types";
import errorHandler from "../../utils/errorHandler";
import * as productImageService from "./product_image.service";
import { toast } from "react-toastify";

const useProductImageStore = create<ProductImageState>((set) => ({
  product_images: [],

  fetchingProductImages: false,
  loading: false,

  fetchProductImages: async (productId) => {
    try {
      const product_images =
        await productImageService.fetchProductImages(productId);

      set({ product_images });
    } catch (error) {
      errorHandler(error, "fetchProductImages", true);
    }
  },

  addProductImage: async (productId, inputs) => {
    set({ loading: true });
    try {
      const { image } = inputs;

      const formData = new FormData();
      formData.append("image", image);

      const newProductImage = await productImageService.addProductImage(
        productId,
        formData,
      );

      set((state) => ({
        product_images: [...state.product_images, newProductImage],
      }));
      toast.success("Image added");
    } catch (error) {
      errorHandler(error, "fetchProductImages", true);
    } finally {
      set({ loading: false });
    }
  },

  removeProductImage: async (productId, imageId) => {
    set({ loading: true });
    try {
      await productImageService.removeProductImage(productId, imageId);
      toast.success("Image removed");
      set((state) => ({
        product_images: state.product_images.filter((pi) => pi.id !== imageId),
      }));
    } catch (error) {
      errorHandler(error, "fetchProductImages", true);
    } finally {
      set({ loading: false });
    }
  },
}));

export default useProductImageStore;
