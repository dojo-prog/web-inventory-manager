import type {
  BrandFilterResult,
  BrandFilters,
  DetailedBrand,
} from "@web-inventory-manager/shared";
import axios from "../../lib/axios";

export const fetchBrands = async (
  filters: BrandFilters,
): Promise<BrandFilterResult> => {
  const res = await axios.get("/brands", {
    params: filters,
  });

  const { brands, total_count } = res.data;

  return { brands, total_count };
};

export const fetchBrandById = async (
  brandId: string,
): Promise<DetailedBrand> => {
  const res = await axios.get(`/brands/${brandId}`);

  return res.data.brand;
};

export const addBrand = async (inputs: FormData): Promise<DetailedBrand> => {
  const res = await axios.post("/brands", inputs);

  return res.data.newBrand;
};

export const updateBrand = async (
  brandId: string,
  inputs: FormData,
): Promise<DetailedBrand> => {
  const res = await axios.put(`/brands/${brandId}`, inputs);

  return res.data.updatedBrand;
};

export const removeBrand = async (brandId: string): Promise<void> => {
  await axios.delete(`/brands/${brandId}`);
};
