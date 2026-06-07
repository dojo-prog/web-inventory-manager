import { z } from "zod";

const phPhoneRegex = /^(09|\+639)\d{9}$/;

export const PhPhoneNumberSchema = z
  .string()
  .min(1, { message: "Phone number is required" })
  .transform((val) => val.replace(/[\s\-()]/g, ""))
  .refine((val) => phPhoneRegex.test(val), {
    message:
      "Invalid Philippine mobile number format. Use 09XXXXXXXXX or +639XXXXXXXXX",
  })
  .transform((val) => {
    if (val.startsWith("09")) {
      return `+63${val.slice(1)}`;
    }
    return val;
  });

export const PhAddressSchema = z.object({
  region: z.string().min(1, "Region is required"),
  province: z.string().min(1, "Province is required"),
  city: z.string().min(1, "City/Municipality is required"),
  barangay: z.string().min(1, "Barangay is required"),
  street_add: z.string().min(1, "Street address is required"),
  postal_code: z.string().min(1, "Postal code is required"),
});

export const EmailSchema = z
  .string()
  .email({ message: "Invalid email" })
  .trim()
  .toLowerCase()
  .min(1, { message: "Email is required" })
  .max(100, { message: "Email cannot exceed 100 characters" });
