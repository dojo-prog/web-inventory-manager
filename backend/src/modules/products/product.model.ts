import {
  AddProductInput,
  Product,
  ProductFilter,
  UpdateProductInput,
} from "@web-inventory-manager/shared";

export const findAll = async (filters: ProductFilter): Promise<Product[]> => {};
export const findById = async (productId: string): Promise<Product> => {};
export const create = async (inputs: AddProductInput): Promise<Product> => {};
export const update = async (
  productId: string,
  inputs: UpdateProductInput,
): Promise<Product> => {};
export const remove = async (productId: string): Promise<Product> => {};
