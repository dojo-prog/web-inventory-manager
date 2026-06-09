import {
  AddProductInput,
  Product,
  ProductFilter,
  UpdateProductInput,
} from "@web-inventory-manager/shared";

export const getAllProducts = async (
  filters: ProductFilter,
): Promise<Product[]> => {};
export const addProduct = async (
  inputs: AddProductInput,
  thumbnail?: Express.Multer.File,
): Promise<Product> => {};
export const updateProduct = async (
  productId: string,
  inputs: UpdateProductInput,
  thumbnail?: Express.Multer.File,
): Promise<Product> => {};
export const removeProduct = async (productId: string): Promise<Product> => {};
export const getProductById = async (productId: string): Promise<Product> => {};
