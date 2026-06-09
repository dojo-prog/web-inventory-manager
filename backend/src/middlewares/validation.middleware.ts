import { ZodTypeAny } from "zod";
import { Middleware } from "../types/handlers";
import AppError from "../utils/AppError";

interface ValidationRequestSchema {
  params?: ZodTypeAny;
  query?: ZodTypeAny;
  body?: ZodTypeAny;
}

export const validate = (schemas: ValidationRequestSchema): Middleware => {
  return (req, res, next) => {
    const validationError: Record<string, any> = {};

    // Params validation
    if (schemas.params) {
      const result = schemas.params.safeParse(req.params);

      if (!result.success) {
        Object.assign(validationError, result.error.flatten().fieldErrors);
      } else {
        req.params = result.data as any;
      }
    }

    // Query Validation
    if (schemas.query) {
      const result = schemas.query.safeParse(req.query);

      if (!result.success) {
        Object.assign(validationError, result.error.flatten().fieldErrors);
      } else {
        req.query = result.data as any;
      }
    }

    // Body & Files Validation
    if (schemas.body) {
      const combinedData = { ...req.body, ...req.file, ...req.files };

      const result = schemas.body.safeParse(combinedData);

      if (!result.success) {
        Object.assign(validationError, result.error.flatten().fieldErrors);
      } else {
        req.body = result.data;
      }
    }

    if (Object.keys(validationError).length > 0) {
      return next(
        new AppError("Validation Error", 400, { errors: validationError }),
      );
    }

    next();
  };
};
