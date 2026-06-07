import { ZodTypeAny } from "zod";
import { Middleware } from "../types/handlers";
import AppError from "../utils/AppError";

export const validate = (schema: ZodTypeAny): Middleware => {
  return (req, res, next) => {
    const combinedData = { ...req.body, ...req.file, ...req.files };

    const result = schema.safeParse(combinedData);

    if (!result.success) {
      return next(
        new AppError("Validation Error", 400, {
          errors: result.error.flatten().fieldErrors,
        }),
      );
    }

    req.body = result.data;

    next();
  };
};
