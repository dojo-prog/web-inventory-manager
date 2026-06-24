import { create } from "zustand";
import type { ProductVariantState } from "./product_variant.types";
import errorHandler from "../../utils/errorHandler";
import * as variantService from "./product_variant.service";
import { toast } from "react-toastify";
import useModalStore from "../ui/modals/modal.store";

const useProductVariantStore = create<ProductVariantState>((set) => ({
  productVariants: [],
  selectedVariant: null,

  fetchingVariants: false,
  loading: false,

  fetchVariants: async (productId) => {
    set({ fetchingVariants: true });
    try {
      const productVariants = await variantService.fetchVariants(productId);

      set({ productVariants });
    } catch (error) {
      errorHandler(error, "fetchVariants", true);
    } finally {
      set({ fetchingVariants: false });
    }
  },

  addVariant: async (productId, inputs) => {
    set({ loading: true });
    try {
      const newVariant = await variantService.addVariant(productId, inputs);

      set((state) => ({
        productVariants: [newVariant, ...state.productVariants],
      }));
      toast.success("New variant added");
    } catch (error) {
      errorHandler(error, "fetchVariants", true);
    } finally {
      set({ loading: false });
    }
  },

  updateVariant: async (productId, variantId, inputs) => {
    set({ loading: true });
    try {
      const updatedVariant = await variantService.updateVariant(
        productId,
        variantId,
        inputs,
      );

      set((state) => ({
        productVariants: state.productVariants.map((pv) =>
          pv.id === variantId ? updatedVariant : pv,
        ),
      }));
      toast.success("Variant updated");
    } catch (error) {
      errorHandler(error, "fetchVariants", true);
    } finally {
      set({ loading: false });
    }
  },

  removeVariant: async (productId, variantId) => {
    set({ loading: true });
    try {
      await variantService.removeVariant(productId, variantId);
      toast.success("Variant removed");
      useModalStore.getState().closeDeleteConfirmModal();
    } catch (error) {
      errorHandler(error, "fetchVariants", true);
    } finally {
      set({ loading: false });
    }
  },
}));

export default useProductVariantStore;
