import { BrandFilterSchema } from "@web-inventory-manager/shared/dist";
import { Controller } from "../../types/handlers";
import AppError from "../../utils/AppError";
import * as brandService from "./brand.service";

export const getAllBrands: Controller = async (req, res, next) => {
  try {
    const brands = await brandService.getAllBrands(req.query);

    res.status(200).json({ success: true, brands });
  } catch (error) {
    next(error);
  }
};

export const getBrandById: Controller = async (req, res, next) => {
  try {
    const brandId = req.params.brandId as string;

    const brand = await brandService.getBrandById(brandId);

    res.status(200).json({ success: true, brand });
  } catch (error) {
    next(error);
  }
};

export const addBrand: Controller = async (req, res, next) => {
  try {
    const logo = req.file;

    const newBrand = await brandService.addBrand(req.body, logo);

    res.status(201).json({ success: true, newBrand });
  } catch (error) {
    next(error);
  }
};

export const updateBrand: Controller = async (req, res, next) => {
  try {
    const logo = req.file;
    const brandId = req.params.brandId as string;

    const updatedBrand = await brandService.updateBrand(
      brandId,
      req.body,
      logo,
    );

    res.status(200).json({ success: true, updatedBrand });
  } catch (error) {
    next(error);
  }
};

export const removeBrand: Controller = async (req, res, next) => {
  try {
    const brandId = req.params.brandId as string;

    const removedBrand = await brandService.removeBrand(brandId);

    res.status(200).json({ success: true, removedBrand });
  } catch (error) {
    next(error);
  }
};
