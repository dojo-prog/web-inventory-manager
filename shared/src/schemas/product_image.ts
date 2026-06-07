import { z } from "zod";
import { MulterFileSchema } from "./multer";

// Core Model
export const ProductImageSchema = z.object({
  id: z.string().uuid(),
  product_id: z.string().uuid(),
  image_url: z.string().url(),
  image_path: z.string(),
  created_at: z.string(),
});

// Base Input Shape
const InputShape = z.object({
  product_id: z.string().uuid({ message: "Invalid product ID" }),

  image: MulterFileSchema.optional(),
});

// Action Schemas
export const AddProductImageInputSchema = InputShape.transform((data) => {
  const { image, ...rest } = data;
  return rest;
});

// Inferred Types
export type ProductImage = z.infer<typeof ProductImageSchema>;
export type AddProductImageInput = z.infer<typeof AddProductImageInputSchema>;
