import type {
  AddBrandInput,
  BrandFilters,
  DetailedBrand,
  UpdateBrandInput,
} from "@web-inventory-manager/shared";
import type { Pagination } from "../../types/shared.types";

export interface BrandState {
  brands: DetailedBrand[];
  selectedBrand: DetailedBrand | null;

  fetchingBrands: boolean;
  loading: boolean;

  pagination: Pagination;

  fetchBrands: (filters: BrandFilters) => Promise<void>;
  fetchBrandById: (brandId: string) => Promise<void>;
  addBrand: (inputs: AddBrandInput) => Promise<void>;
  updateBrand: (brandId: string, inputs: UpdateBrandInput) => Promise<void>;
  removeBrand: (brandId: string) => Promise<void>;
}
