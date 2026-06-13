import { z } from "zod";
import { CategoryInputShape } from "@web-inventory-manager/shared";

export const CategoryFormSchema = CategoryInputShape.extend({});

export type CategoryForm = z.input<typeof CategoryFormSchema>;
