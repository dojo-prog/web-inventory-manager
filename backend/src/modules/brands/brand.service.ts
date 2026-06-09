import {
  AddBrandInput,
  Brand,
  BrandFilters,
  UpdateBrandInput,
} from "@web-inventory-manager/shared";
import * as brandModel from "./brand.model";
import AppError from "../../utils/AppError";
import uploadImage from "../../storage/handlers/uploadImage";
import deleteImage from "../../storage/handlers/deleteImage";

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

export const addBrand = async (
  inputs: AddBrandInput,
  logo?: Express.Multer.File,
): Promise<Brand> => {
  const payload: AddBrandInput = { ...inputs };

  if (logo) {
    const { url, path } = await uploadImage(logo, "brand-logos", "brand/logos");

    payload.logo_url = url;
    payload.logo_path = path;
  }

  return await brandModel.create(payload);
};

export const updateBrand = async (
  brandId: string,
  inputs: UpdateBrandInput,
  logo?: Express.Multer.File,
): Promise<Brand> => {
  const brand = await brandModel.findById(brandId);

  if (!brand) {
    throw new AppError("Brand not found", 404);
  }

  const changes = generateChanges(brand, inputs);

  if (logo) {
    const { url, path } = await uploadImage(logo, "brand-logos", "brand/logos");

    changes.logo_url = url;
    changes.logo_path = path;

    if (brand.logo_path) {
      await deleteImage("brand-logos", brand.logo_path);
    }
  }

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
