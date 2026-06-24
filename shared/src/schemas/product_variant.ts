import { z } from "zod";
import { ProductParamsSchema } from "./product";

// Core Model
export const ProductVariantSchema = z.object({
  id: z.string().uuid(),
  product_id: z.string().uuid(),
  supplier_id: z.string().uuid(),

  size: z.string(),
  color_name: z.string(),
  color_hex: z.string(),
  stock_quanitty: z.coerce.number().int(),

  created_at: z.string(),
});

// Base Input Shape
const InputShape = z.object({
  product_id: z.string().uuid({ message: "Invalid product ID" }),
  supplier_id: z.string().uuid({ message: "Invalid supplier ID" }),

  size: z
    .string()
    .min(1, { message: "Size is required" })
    .max(10, { message: "Invalid size" }),
  color_name: z
    .string()
    .min(1, { message: "Color name is required" })
    .max(30, { message: "Color name too long" }),
  color_hex: z
    .string()
    .min(1, { message: "Color hex is required" })
    .max(30, { message: "Invalid color hex" }),
  stock_quantity: z.coerce
    .number()
    .int()
    .min(0, { message: "Stock cannot be negative" })
    .max(999999, { message: "Stock quantity to large" }),
});

// Action Schemas
export const AddProductVariantInputSchema = InputShape;
export const UpdateProductVariantInputSchema = InputShape;

// Filters
export const ProductVariantFiltersSchema = z.object({
  q: z.string().optional(),
});

// Params
export const ProductVariantParamsSchema = z.object({
  variantId: z.string().uuid({ message: "Invalid Product Variant ID format" }),
});

export const ProductAndVariantParamsSchema = ProductParamsSchema.merge(
  ProductVariantParamsSchema,
);

// Inferred Types
export type ProductVariant = z.infer<typeof ProductVariantSchema>;
export type AddProductVariantInput = z.infer<
  typeof AddProductVariantInputSchema
>;
export type UpdateProductVariantInput = z.infer<
  typeof UpdateProductVariantInputSchema
>;
export type ProductVariantFilters = z.infer<typeof ProductVariantFiltersSchema>;
