import type {
  AddBrandInput,
  BrandFilters,
  DetailedBrand,
  UpdateBrandInput,
} from "@web-inventory-manager/shared";

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
  addBrand: (inputs: AddBrandInput) => Promise<void>;
  updateBrand: (brandId: string, inputs: UpdateBrandInput) => Promise<void>;
  removeBrand: (brandId: string) => Promise<void>;
}
