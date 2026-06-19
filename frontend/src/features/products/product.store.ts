import { create } from "zustand";
import type { ProductState } from "./product.types";
import errorHandler from "../../utils/errorHandler";
import * as productService from "./product.service";
import { toast } from "react-toastify";

const useProductStore = create<ProductState>((set) => ({
  products: [],
  total_count: 0,

  fetchingProducts: false,
  loading: false,

  filters: {
    q: "",
    brand_id: "",
    category_id: "",
    gender: undefined,
    status: undefined,
    page: 1,
    limit: 20,
  },

  setFilters: (newFilters) =>
    set((state) => ({ filters: { ...state.filters, ...newFilters } })),

  fetchProducts: async (filters) => {
    try {
      const { products, total_count } =
        await productService.fetchProducts(filters);

      set({ products, total_count });
    } catch (error) {
      errorHandler(error, "fetchProducts", true);
    }
  },

  addProduct: async (inputs) => {
    try {
      const formData = new FormData();

      Object.keys(inputs).forEach((k) => {
        const value = inputs[k as keyof typeof inputs];

        if (value !== undefined && value !== null) {
          formData.append(k, value as any);
        }
      });

      const newProduct = await productService.addProduct(formData);

      set((state) => ({
        products: [newProduct, ...state.products],
      }));
      toast.success("Product added");
    } catch (error) {
      errorHandler(error, "fetchProducts", true);
    }
  },

  updateProduct: async (productId, inputs) => {
    try {
      const formData = new FormData();

      Object.keys(inputs).forEach((k) => {
        const value = inputs[k as keyof typeof inputs];

        if (value !== undefined && value !== null) {
          formData.append(k, value as any);
        }
      });

      const updatedProduct = await productService.updateProduct(
        productId,
        formData,
      );

      set((state) => ({
        products: state.products.map((p) =>
          p.id === productId ? updatedProduct : p,
        ),
      }));
      toast.success("Product updated");
    } catch (error) {
      errorHandler(error, "fetchProducts", true);
    }
  },

  removeProduct: async (productId) => {
    try {
      await productService.removeProduct(productId);

      set((state) => ({
        products: state.products.filter((p) => p.id !== productId),
      }));
      toast.success("Product removed");
    } catch (error) {
      errorHandler(error, "fetchProducts", true);
    }
  },
}));

export default useProductStore;
