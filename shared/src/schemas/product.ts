import { z } from "zod";
import { MulterFileSchema } from "./multer";

const GenderSchema = z.enum(["men", "women", "unisex"], {
  message: "Invalid gender",
});
const ProductStatusSchema = z.enum(["active", "inactive"], {
  message: "Invalid status",
});

// Core Model Schema
export const ProductSchema = z.object({
  id: z.string().uuid(),
  brand_id: z.string().uuid(),
  category_id: z.string().uuid(),

  name: z.string(),
  description: z.string(),
  price: z.coerce.number(),
  gender: GenderSchema,
  status: ProductStatusSchema,
  search_vector: z.string().nullable(),

  thumbnail_url: z.string().url().nullable(),
  thumbnail_path: z.string().nullable(),

  updated_at: z.string().nullable(),
  created_at: z.string(),
});

export const ProductWithRelationsSchema = ProductSchema.extend({
  brand_name: z.string(),
  category_name: z.string(),
});

// Base Input Shape
export const ProductInputShape = z.object({
  brand_id: z.string().uuid({ message: "Invalid brand ID " }),
  category_id: z.string().uuid({ message: "Invalid category ID" }),
  name: z
    .string()
    .trim()
    .min(1, { message: "Product name is required" })
    .max(100, { message: "Product name cannot exceed 100 characters" }),
  description: z
    .string()
    .trim()
    .min(1, { message: "Product description is required" })
    .max(2000, {
      message: "Product description cannot exceed 2000 characters",
    }),
  price: z.coerce
    .number({ message: "Price must be a number" })
    .min(0, { message: "Price cannot be negative" })
    .max(999999, { message: "Price too large" }),
  gender: GenderSchema.default("unisex"),
  status: ProductStatusSchema.default("inactive"),

  thumbnail_url: z.string().url().nullable().optional(),
  thumbnail_path: z.string().nullable().optional(),

  thumbnail: MulterFileSchema.optional(),
});

// Action Schema
export const AddProductInputSchema = ProductInputShape.transform((data) => {
  const { thumbnail, ...rest } = data;
  return rest;
});

export const UpdateProductInputSchema = ProductInputShape.transform((data) => {
  const { thumbnail, ...rest } = data;
  return rest;
});

// Filter Schema
export const ProductFilterSchema = z.object({
  q: z.string().optional(),
  brand_id: z.string().uuid({ message: "Invalid brand ID " }).optional(),
  category_id: z.string().uuid({ message: "Invalid category ID" }).optional(),
  gender: GenderSchema.optional(),
  status: ProductStatusSchema.optional(),

  page: z.coerce.number().int().optional(),
  limit: z.coerce.number().int().optional(),
});

export const ProductFilterResultSchema = z.object({
  products: z.array(ProductWithRelationsSchema),
  total_count: z.coerce.number().int(),
});

// Params
export const ProductParamsSchema = z.object({
  productId: z.string().uuid({ message: "Invalid Product ID format" }),
});

// Inferred Types
export type Product = z.infer<typeof ProductSchema>;
export type ProductWithRelations = z.infer<typeof ProductWithRelationsSchema>;
export type AddProductInput = z.infer<typeof AddProductInputSchema>;
export type UpdateProductInput = z.infer<typeof UpdateProductInputSchema>;
export type ProductFilter = z.input<typeof ProductFilterSchema>;
export type ProductFilterResult = z.infer<typeof ProductFilterResultSchema>;
