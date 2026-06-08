import {
  AddBrandInput,
  Brand,
  BrandFilters,
  UpdateBrandInput,
} from "@web-inventory-manager/shared";

export const getAllBrands = async (
  filters: BrandFilters,
): Promise<Brand[]> => {};
export const getBrandById = async (brandId: string): Promise<Brand> => {};
export const addBrand = async (inputs: AddBrandInput): Promise<Brand> => {};
export const updateBrand = async (
  brandId: string,
  inputs: UpdateBrandInput,
): Promise<Brand> => {};
export const removeBrand = async (brandId: string): Promise<Brand> => {};
