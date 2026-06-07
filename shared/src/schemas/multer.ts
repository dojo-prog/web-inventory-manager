import { z } from "zod";

export const MulterFileSchema = z.object({
  fieldname: z.string(),
  originalname: z.string(),
  mimetype: z.string().startsWith("image/", {
    message: "Only image files are allowed",
  }),
  size: z.number().max(5 * 1024 * 1024, {
    message: "Image must be under 5MB",
  }),
});
