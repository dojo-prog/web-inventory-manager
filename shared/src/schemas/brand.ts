import { z } from "zod";
import { MulterFileSchema } from "./multer";

// Core Model
export const BrandSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  logo_url: z.string().url().nullable(),
  logo_path: z.string().nullable(),
  created_at: z.string(),
});

export const DetailedBrandSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  logo_url: z.string().url().nullable(),
  logo_path: z.string().nullable(),
  created_at: z.string(),

  active_units_count: z.coerce.number().int(),
});

// Base Input Shape
export const BrandInputShape = z.object({
  name: z
    .string()
    .min(1, { message: "Brand name is required" })
    .max(50, { message: "Brand name cannot exceed 50 characters" }),

  logo_url: z.string().url().nullable().optional(),
  logo_path: z.string().nullable().optional(),

  logo: MulterFileSchema.optional(),
});

// Action Schemas
export const AddBrandInputSchema = BrandInputShape.transform((data) => {
  const { logo, ...rest } = data;
  return rest;
});

export const UpdateBrandInputSchema = BrandInputShape.transform((data) => {
  const { logo, ...rest } = data;
  return rest;
});

// Filter
export const BrandFilterSchema = z.object({
  q: z.string().optional(),

  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().default(20),
});

export const BrandFilterResultSchema = z.object({
  brands: z.array(DetailedBrandSchema),
  total_count: z.coerce.number().int(),
});

// Params Schema
export const BrandParamsShcema = z.object({
  brandId: z.string().uuid({ message: "Invalid Brand ID format" }),
});

// Inferred Types
export type Brand = z.infer<typeof BrandSchema>;
export type DetailedBrand = z.infer<typeof DetailedBrandSchema>;
export type AddBrandInput = z.infer<typeof AddBrandInputSchema>;
export type UpdateBrandInput = z.infer<typeof UpdateBrandInputSchema>;
export type BrandFilters = z.input<typeof BrandFilterSchema>;
export type BrandFilterResult = z.infer<typeof BrandFilterResultSchema>;
