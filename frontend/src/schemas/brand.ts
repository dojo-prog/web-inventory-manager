import { BrandInputShape } from "@web-inventory-manager/shared";
import { z } from "zod";

export const BrandFormSchema = BrandInputShape.extend({
  logo: z.instanceof(File, { message: "Logo image is not a file" }).optional(),
});

export type BrandForm = z.input<typeof BrandFormSchema>;
