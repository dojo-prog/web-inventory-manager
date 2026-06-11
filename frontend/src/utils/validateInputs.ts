import type { ZodTypeAny } from "zod";

const validateInputs = (schema: ZodTypeAny, data: Record<string, any>) => {
  const result = schema.safeParse(data);

  if (!result.success) {
    const fieldErrors = result.error.flatten().fieldErrors;
    const firstErrorArray = Object.values(fieldErrors)[0];

    if (Array.isArray(firstErrorArray) && firstErrorArray[0]) {
      return firstErrorArray[0];
    }

    return "Validation Error";
  }
};

export default validateInputs;
