import type {
  ProductFilter,
  ProductFilterResult,
  ProductWithRelations,
} from "@web-inventory-manager/shared";
import axios from "../../lib/axios";

export const fetchProducts = async (
  filters: ProductFilter,
): Promise<ProductFilterResult> => {
  const res = await axios.get("/products", { params: filters });

  return res.data;
};

export const fetchProductById = async (
  productId: string,
): Promise<ProductWithRelations> => {
  const res = await axios.get(`/products/${productId}`);

  return res.data.product;
};

export const addProduct = async (
  inputs: FormData,
): Promise<ProductWithRelations> => {
  const res = await axios.post("/products", inputs);

  return res.data.newProduct;
};

export const updateProduct = async (
  productId: string,
  inputs: FormData,
): Promise<ProductWithRelations> => {
  const res = await axios.put(`/products/${productId}`, inputs);

  return res.data.updatedProduct;
};

export const removeProduct = async (productId: string): Promise<void> => {
  await axios.delete(`/products/${productId}`);
};
