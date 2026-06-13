import type {
  BrandFilters,
  DetailedBrand,
} from "@web-inventory-manager/shared";
import type { BrandForm } from "../../schemas/brand";

export interface BrandState {
  brands: DetailedBrand[];
  selectedBrand: DetailedBrand | null;

  fetchingBrands: boolean;
  loading: boolean;

  filters: BrandFilters;

  total_count: number;

  setFilters: (newFilters: BrandFilters) => void;

  fetchBrands: (filters: BrandFilters) => Promise<void>;
  fetchBrandById: (brandId: string) => Promise<void>;
  addBrand: (inputs: BrandForm) => Promise<void>;
  updateBrand: (brandId: string, inputs: BrandForm) => Promise<void>;
  removeBrand: (brandId: string) => Promise<void>;
}
