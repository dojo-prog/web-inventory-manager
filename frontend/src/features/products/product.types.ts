import type {
  ProductFilter,
  ProductWithRelations,
} from "@web-inventory-manager/shared";
import type { ProductForm } from "../../schemas/product";

export interface ProductState {
  products: ProductWithRelations[];
  total_count: number;

  fetchingProducts: boolean;
  loading: boolean;

  filters: ProductFilter;
  setFilters: (newFilters: Partial<ProductFilter>) => void;

  fetchProducts: (filters: ProductFilter) => Promise<void>;
  addProduct: (inputs: ProductForm) => Promise<void>;
  updateProduct: (productId: string, inputs: ProductForm) => Promise<void>;
  removeProduct: (productId: string) => Promise<void>;
}
