import type {
  AddBrandInput,
  BrandFilters,
  UpdateBrandInput,
} from "@web-inventory-manager/shared";

export const fetchBrands = async (filters: BrandFilters) => {};
export const fetchBrandById = async (brandId: string) => {};
export const addBrand = async (inputs: AddBrandInput) => {};
export const updateBrand = async (
  brandId: string,
  inputs: UpdateBrandInput,
) => {};
export const removeBrand = async (brandId: string) => {};
