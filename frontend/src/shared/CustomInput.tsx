import type { ChangeEvent } from "react";

interface CustomInputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  id: string;
  name: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  labelStyles?: string;
  inputStyles?: string;
  disabled?: boolean;
}

const CustomInput = ({
  label,
  type = "text",
  placeholder = "Type here...",
  id,
  name,
  value,
  onChange,
  labelStyles,
  inputStyles,
  disabled = false,
}: CustomInputProps) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className={`text-xs font-label font-medium text-secondary capitalize mb-1 ${labelStyles}`}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-full px-4 h-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary font-body ${inputStyles}`}
      />
    </div>
  );
};

export default CustomInput;
