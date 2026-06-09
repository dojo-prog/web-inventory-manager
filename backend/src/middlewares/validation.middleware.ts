import { Middleware } from "../types/handlers";
import AppError from "../utils/AppError";
import { AnyZodObject } from "zod/v3";

interface ValidationRequestSchema {
  params?: AnyZodObject;
  query?: AnyZodObject;
  body?: AnyZodObject;
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
        req.params = result.data;
      }
    }

    // Query Validation
    if (schemas.query) {
      const result = schemas.query.safeParse(req.query);

      if (!result.success) {
        Object.assign(validationError, result.error.flatten().fieldErrors);
      } else {
        req.query = result.data;
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
