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

// Base Input Shape
const InputShape = z.object({
  name: z
    .string()
    .min(1, { message: "Brand name is required" })
    .max(50, { message: "Brand name cannot exceed 50 characters" }),

  logo_url: z.string().url().nullable().optional(),
  logo_path: z.string().nullable().optional(),

  logo: MulterFileSchema.optional(),
});

// Action Schemas
export const AddBrandInputSchema = InputShape.transform((data) => {
  const { logo, ...rest } = data;
  return rest;
});

export const UpdateBrandInputSchema = InputShape.transform((data) => {
  const { logo, ...rest } = data;
  return rest;
});

// Filter
export const BrandFilterSchema = z.object({
  q: z.string().optional(),
});

// Params Schema
export const BrandParamsShcema = z.object({
  brandId: z.string().uuid({ message: "Invalid Brand ID format" }),
});

// Inferred Types
export type Brand = z.infer<typeof BrandSchema>;
export type AddBrandInput = z.infer<typeof AddBrandInputSchema>;
export type UpdateBrandInput = z.infer<typeof UpdateBrandInputSchema>;
export type BrandFilters = z.infer<typeof BrandFilterSchema>;
