import {
  AddBrandInput,
  Brand,
  BrandFilters,
  UpdateBrandInput,
} from "@web-inventory-manager/shared";

export const findAll = async (filters: BrandFilters): Promise<Brand[]> => {};
export const findById = async (brandId: string): Promise<Brand> => {};
export const create = async (inputs: AddBrandInput): Promise<Brand> => {};
export const update = async (
  brandId: string,
  inputs: UpdateBrandInput,
): Promise<Brand> => {};
export const remove = async (brandId: string): Promise<Brand> => {};
