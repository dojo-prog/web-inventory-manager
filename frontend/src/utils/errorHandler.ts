import { toast } from "react-toastify";

const errorHandler = (
  error: any,
  actionName: string,
  withToast: boolean = false,
) => {
  const serverMessage = error?.response?.data?.message;
  const localMessage = error?.message;
  const message =
    serverMessage || localMessage || "Something went wrong. Please try again.";

  console.error(`${actionName} error:`, { error, message });

  if (withToast) {
    const nestedErrors = error?.response?.data?.errors;

    if (nestedErrors && typeof nestedErrors === "object") {
      const errorValues = Object.values(nestedErrors);

      if (errorValues.length > 0) {
        const firstEntry = errorValues[0];

        if (Array.isArray(firstEntry) && firstEntry.length > 0) {
          toast.error(firstEntry[0]);
          return;
        } else if (typeof firstEntry === "string") {
          toast.error(firstEntry);
          return;
        }
      }
    }

    toast.error(message);
  }
};

export default errorHandler;
