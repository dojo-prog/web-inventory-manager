import { z } from "zod";
import { MulterFileSchema } from "./multer";
import { LoginInputSchema } from "./auth";

// Schemas
export const UserRoleSchema = z.enum(["admin", "manager"], {
  message: "Invalid user role",
});

export const UserSchema = z.object({
  id: z.string().uuid(),
  fname: z.string(),
  lname: z.string(),
  email: z.string().email(),
  role: UserRoleSchema,
  avatar_url: z.string().url().nullable(),
  avatar_path: z.string().nullable(),
  created_at: z.string(),
});

const AddUserInputShape = LoginInputSchema.extend({
  fname: z
    .string()
    .min(1, { message: "First name is required" })
    .max(50, { message: "First name cannot exceed 50 characters" }),

  lname: z
    .string()
    .min(1, { message: "Last name is required" })
    .max(50, { message: "Last name cannot exceed 50 characters" }),

  password: z
    .string()
    .min(6, { message: "Password must be atleast 6 charactes" })
    .max(50, { message: "Password cannot exceed 50 characters " }),

  confirm_password: z
    .string()
    .min(1, { message: "Confirmation Password is required" }),

  role: UserRoleSchema,

  avatar_url: z.string().url().nullable().optional(),

  avatar_path: z.string().url().nullable().optional(),

  avatar: MulterFileSchema.optional(),
});

const UpdateUserInputShape = z.object({
  fname: z
    .string()
    .min(1, { message: "First name is required" })
    .max(50, { message: "First name cannot exceed 50 characters" }),

  lname: z
    .string()
    .min(1, { message: "Last name is required" })
    .max(50, { message: "Last name cannot exceed 50 characters" }),

  role: UserRoleSchema,

  avatar_url: z.string().url().nullable().optional(),

  avatar_path: z.string().url().nullable().optional(),

  avatar: MulterFileSchema.optional(),
});

export const AddUserInputSchema = AddUserInputShape.refine(
  (data) => data.password === data.confirm_password,
  { message: "Passwords do not match", path: ["confirm_password"] },
).transform((data) => {
  const { avatar, ...rest } = data;
  return rest;
});

export const UpdateUserInputSchema = UpdateUserInputShape.transform((data) => {
  const { avatar, ...rest } = data;
  return rest;
});

// Filter Schema
export const UserFilterSchema = z.object({
  q: z.string().optional(),
  role: UserRoleSchema.optional(),
});

// Types
export type User = z.infer<typeof UserSchema>;
export type UserRole = z.infer<typeof UserRoleSchema>;
export type AddUserInput = z.infer<typeof AddUserInputSchema>;
export type UpdateUserInput = z.infer<typeof UpdateUserInputSchema>;
export type UserFilter = z.infer<typeof UserFilterSchema>;
