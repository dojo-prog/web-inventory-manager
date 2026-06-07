import { z } from "zod";

// Schemas
export const LoginInputSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email" }),

  password: z.string().min(1, { message: "Password is required" }),
});

// Types
export type LoginInput = z.infer<typeof LoginInputSchema>;
