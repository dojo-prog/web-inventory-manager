import type {
  BrandFilters,
  Category,
  CategoryFilters,
} from "@web-inventory-manager/shared";
import type { CategoryForm } from "../../schemas/categories";

export interface CategoryState {
  categories: Category[];
  total_count: number;

  fetchingCategories: boolean;
  loading: boolean;

  filters: CategoryFilters;
  setFilters: (newFilters: Partial<BrandFilters>) => void;

  fetchCategories: (filters: CategoryFilters) => Promise<void>;
  addCategory: (inputs: CategoryForm) => Promise<void>;
  updateCategory: (categoryId: string, inputs: CategoryForm) => Promise<void>;
  removeCategory: (categoryId: string) => Promise<void>;
}
