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

// Inferred Types
export type Category = z.infer<typeof CategorySchema>;
export type AddCategoryInput = z.infer<typeof AddCategoryInputSchema>;
export type UpdateCategoryInput = z.infer<typeof UpdateCategoryInputSchema>;
