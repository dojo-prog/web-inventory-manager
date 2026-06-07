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
  entityType: EntityTypeSchema,

  old_values: z.object().nullable(),
  new_values: z.object().nullable(),

  created_at: z.string(),
});

// Base Input Shape
const InputShape = z.object({
  action: ActivityActionSchema,
  entityType: EntityTypeSchema,

  old_values: z.object().nullable(),
  new_values: z.object().nullable(),
});

// Action Schemas
export const ActivityLogInputSchema = InputShape;

// Filter Schema
export const ActivityLogFilter = z.object({
  user_id: z.string().uuid().optional(),

  action: ActivityActionSchema.optional(),
  entityType: EntityTypeSchema.optional(),
});

// Inferred Types
export type ActivityLog = z.infer<typeof ActivityLogSchema>;
export type ActivityLogInput = z.infer<typeof ActivityLogInputSchema>;
export type ActivityLogFilter = z.infer<typeof ActivityLogFilter>;
