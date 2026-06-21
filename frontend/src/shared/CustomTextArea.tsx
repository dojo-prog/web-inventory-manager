import type { ChangeEvent } from "react";

interface CustomTextAreaProps {
  label?: string;
  placeholder?: string;
  id: string;
  name: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  labelStyles?: string;
  inputStyles?: string;
  disabled?: boolean;
}

const CustomTextArea = ({
  label,
  placeholder = "Type here...",
  id,
  name,
  value,
  onChange,
  labelStyles,
  inputStyles,
  disabled = false,
}: CustomTextAreaProps) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className={`text-xs font-medium text-secondary font-label capitalize mb-1 ${labelStyles}`}
        >
          {label}
        </label>
      )}
      <textarea
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-full px-4 py-2 h-30 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm font-body ${inputStyles}`}
      ></textarea>
    </div>
  );
};

export default CustomTextArea;
