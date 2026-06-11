import { toast } from "react-toastify";

const errorHandler = (
  error: any,
  actionName: string,
  withToast: boolean = false,
) => {
  const message =
    error.response.data.message || "Something went wrong. Please try again.";

  if (withToast) {
    toast.error(message);
  }

  console.error(`${actionName} error:`, { error, message });
};

export default errorHandler;
