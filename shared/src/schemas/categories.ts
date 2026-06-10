import { z } from "zod";

// Base Model
export const CategorySchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  slug: z.string(),
  created_at: z.string(),
});

// Base Input Shape
const InputShape = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Category name is required" })
    .max(100, "Category name cannot exceed 100 characters"),
});

// Action Schemas
export const AddCategoryInputSchema = InputShape;
export const UpdateCategoryInputSchema = InputShape;

// Filter
export const CategoryFiltersSchema = z.object({
  q: z.string().optional(),

  page: z
    .string()
    .optional()
    .default("1")
    .transform((v) => Math.max(1, parseInt(v, 10))),
  limit: z
    .string()
    .optional()
    .default("20")
    .transform((v) => Math.max(1, parseInt(v, 10))),
});

// Params
export const CategoryParamsSchema = z.object({
  categoryId: z.string().uuid({ message: "Invalid Category ID format" }),
});

// Inferred Types
export type Category = z.infer<typeof CategorySchema>;
export type AddCategoryInput = z.infer<typeof AddCategoryInputSchema>;
export type UpdateCategoryInput = z.infer<typeof UpdateCategoryInputSchema>;
export type CategoryFilters = z.infer<typeof CategoryFiltersSchema>;
