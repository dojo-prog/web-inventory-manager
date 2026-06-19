import type {
  AddProductInput,
  ProductFilter,
  ProductWithRelations,
  UpdateProductInput,
} from "@web-inventory-manager/shared";

export interface ProductState {
  products: ProductWithRelations[];
  total_count: number;

  fetchingProducts: boolean;
  loading: boolean;

  filters: ProductFilter;
  setFilters: (newFilters: Partial<ProductFilter>) => void;

  fetchProducts: (filters: ProductFilter) => Promise<void>;
  addProduct: (inputs: AddProductInput) => Promise<void>;
  updateProduct: (
    productId: string,
    inputs: UpdateProductInput,
  ) => Promise<void>;
  removeProduct: (productId: string) => Promise<void>;
}
