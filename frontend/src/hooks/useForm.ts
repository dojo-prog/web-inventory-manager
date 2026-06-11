import { useState, type ChangeEvent } from "react";

const useForm = (initialValue: Record<string, any>) => {
  const [formData, setFormData] = useState(initialValue);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;

    const file = files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, [name]: file }));
    }
  };

  const clearForm = () => {
    setFormData(initialValue);
  };

  return { formData, setFormData, handleChange, handleFileChange, clearForm };
};

export { useForm };
