import {
  AddBrandInput,
  Brand,
  BrandFilters,
  UpdateBrandInput,
} from "@web-inventory-manager/shared";
import * as brandModel from "./brand.model";
import AppError from "../../utils/AppError";

export const getAllBrands = async (filters: BrandFilters): Promise<Brand[]> => {
  return await brandModel.findAll(filters);
};

export const getBrandById = async (brandId: string): Promise<Brand> => {
  const brand = await brandModel.findById(brandId);

  if (!brand) {
    throw new AppError("Brand not found", 404);
  }

  return brand;
};

export const addBrand = async (inputs: AddBrandInput): Promise<Brand> => {
  return await brandModel.create(inputs);
};

export const updateBrand = async (
  brandId: string,
  inputs: UpdateBrandInput,
): Promise<Brand> => {
  const brand = await brandModel.findById(brandId);

  if (!brand) {
    throw new AppError("Brand not found", 404);
  }

  const changes = generateChanges(brand, inputs);

  if (Object.keys(changes).length === 0) {
    throw new AppError("No changes has been made");
  }

  return await brandModel.update(brandId, inputs);
};

export const removeBrand = async (brandId: string): Promise<Brand> => {
  const removedBrand = await brandModel.remove(brandId);

  if (!removedBrand) {
    throw new AppError("Brand not found", 404);
  }

  return removedBrand;
};
