import { z } from "zod";

export const ProductImageFormSchema = z.object({
  image: z.instanceof(File, { message: "Image passed is not a file" }),
});

export type ProductImageForm = z.input<typeof ProductImageFormSchema>;
