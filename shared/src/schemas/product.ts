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

// Base Input Shape
const InputShape = z.object({
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

  thumbnail: MulterFileSchema.optional(),
});

// Action Schema
export const AddProductInputSchema = InputShape.transform((data) => {
  const { thumbnail, ...rest } = data;
  return rest;
});

export const UpdateProductInputSchema = InputShape.extend({
  thumbnail_url: z.string().url().nullable(),
  thumbnail_path: z.string().nullable(),
}).transform((data) => {
  const { thumbnail, ...rest } = data;
  return rest;
});

// Filter Schema
export const ProductFilterSchema = z.object({
  brand_id: z.string().uuid({ message: "Invalid brand ID " }).optional(),
  category_id: z.string().uuid({ message: "Invalid category ID" }).optional(),
  gender: GenderSchema.optional(),
  status: ProductStatusSchema.optional(),
});

// Inferred Types
export type Product = z.infer<typeof ProductSchema>;
export type AddProductInputSchema = z.infer<typeof AddProductInputSchema>;
export type UpdateProductInputSchema = z.infer<typeof UpdateProductInputSchema>;
export type ProductFilter = z.infer<typeof ProductFilterSchema>;
