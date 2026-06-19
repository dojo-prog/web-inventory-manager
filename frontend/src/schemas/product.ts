import { ProductInputShape } from "@web-inventory-manager/shared";
import { z } from "zod";

export const ProductFormSchema = ProductInputShape.extend({
  thumbnail: z
    .instanceof(File, { message: "Thumbnail image is not a file" })
    .optional(),
});

export type ProductForm = z.infer<typeof ProductFormSchema>;
