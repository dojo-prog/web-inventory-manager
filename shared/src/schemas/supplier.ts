import { z } from "zod";
import { EmailSchema, PhAddressSchema, PhPhoneNumberSchema } from "./shared";

// Core Model
export const SupplierSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  supplier_code: z.string(),
  contact_name: z.string(),
  email: z.string().email(),
  phone: z.string().nullable(),
  website: z.string().url().nullable(),
  address_line: PhAddressSchema,
  is_active: z.boolean(),
  updated_at: z.string().nullable(),
  created_at: z.string(),
});

// Base Input Shape
const InputShape = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .max(100, { message: "Name cannot exceed 100 characters" }),
  supplier_code: z
    .string()
    .min(1, { message: "Supplier code is required" })
    .max(100, { message: "Supplier code cannot exceed 100 characters" }),
  contact_name: z
    .string()
    .min(1, { message: "Contact name is required" })
    .max(100, { message: "Contact name cannot exceed 100 characters" }),
  email: EmailSchema,
  phone: PhPhoneNumberSchema.nullable(),
  website: z.string().url({ message: "Invalid URL format" }).nullable(),
  address_line: PhAddressSchema,
  is_active: z.boolean().optional(),
});

// Action Schemas
export const AddSupplierInputSchema = InputShape;

export const UpdateSupplierInputSchema = InputShape;

// Filter Schema
export const SupplierFiltersSchema = z.object({
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

// Params Schema
export const SupplierParamsSchema = z.object({
  supplierId: z.string().uuid({ message: "Invalid Supplier ID format" }),
});

// Inferred Types
export type Supplier = z.infer<typeof SupplierSchema>;
export type AddSupplierInput = z.infer<typeof AddSupplierInputSchema>;
export type UpdateSupplierInput = z.infer<typeof UpdateSupplierInputSchema>;
export type SupplierFilters = z.infer<typeof SupplierFiltersSchema>;
