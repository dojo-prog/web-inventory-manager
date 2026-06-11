import { z } from "zod";

const ActivityActionSchema = z.enum(
  ["CREATE", "UPDATE", "DELETE", "STOCK_ADJUST"],
  { message: "Invalid activity" },
);
const EntityTypeSchema = z.enum(
  [
    "products",
    "suppliers",
    "users",
    "brands",
    "categories",
    "product images",
    "product variants",
  ],
  { message: "Invalid entity" },
);

// Core Model
export const ActivityLogSchema = z.object({
  id: z.string().uuid(),
  user_id: z.string().uuid().nullable(),

  action: ActivityActionSchema,
  entity_type: EntityTypeSchema,
  entity_id: z.string().uuid(),

  old_values: z.object().nullable(),
  new_values: z.object().nullable(),

  created_at: z.string(),
});

export const DetailedActivityLogSchema = z.object({
  id: z.string().uuid(),
  user_id: z.string().uuid().nullable(),
  action: ActivityActionSchema,
  entity_type: EntityTypeSchema,
  entity_id: z.string().uuid(),
  old_values: z.object().nullable(),
  new_values: z.object().nullable(),
  created_at: z.string(),

  user_fname: z.string(),
  user_lname: z.string(),
  user_email: z.string(),
});

// Base Input Shape
const InputShape = z.object({
  user_id: z.string().uuid().nullable().optional(),
  action: ActivityActionSchema,
  entityType: EntityTypeSchema,
  entity_id: z.string().uuid().nullable().optional(),
  old_values: z.record(z.string(), z.any()).nullable().optional(),
  new_values: z.record(z.string(), z.any()).nullable().optional(),
});

// Action Schemas
export const CreateLogInputSchema = InputShape;

// Filter Schema
export const ActivityLogFilterSchema = z.object({
  q: z.string().optional(),
  user_id: z.string().uuid().optional(),

  action: ActivityActionSchema.optional(),
  entityType: EntityTypeSchema.optional(),

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
export const ActivityLogParamsSchema = z.object({
  logId: z.string().uuid({ message: "Invalid Activity Log ID Format" }),
});

// Inferred Types
export type ActivityLog = z.infer<typeof ActivityLogSchema>;
export type DetailedActivityLog = z.infer<typeof DetailedActivityLogSchema>;
export type CreateLogInput = z.infer<typeof CreateLogInputSchema>;
export type ActivityLogFilter = z.infer<typeof ActivityLogFilterSchema>;
