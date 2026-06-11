import { EyeIcon, EyeOffIcon, type LucideIcon } from "lucide-react";
import { useState, type ChangeEvent } from "react";

interface AuthInputProps {
  label?: string;
  Icon: LucideIcon;
  type?: string;
  placeholder?: string;

  id: string;
  name: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;

  isPasswordField?: boolean;

  labelStyles?: string;
  inputStyles?: string;
}

const AuthInput = ({
  label,
  type = "text",
  Icon,
  placeholder = "Type here...",
  id,
  name,
  value,
  onChange,
  isPasswordField = false,
  labelStyles,
  inputStyles,
}: AuthInputProps) => {
  const [inputType, setInputType] = useState(type);

  const toggleShowPassword = () => {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };

  return (
    <div className="w-full min-w-0">
      <label
        htmlFor={id}
        className={`font-body font-semibold text-[10px] text-secondary uppercase ${labelStyles}`}
      >
        {label}
      </label>
      <div className="flex items-center h-10 w-full border border-border rounded-sm">
        {/* Icon */}
        <div className="h-full aspect-square flex items-center justify-center p-3">
          <Icon className="h-full w-full text-secondary opacity-50" />
        </div>

        {/* Input */}
        <input
          type={inputType}
          placeholder={placeholder}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className={`flex-1 h-full min-w-0 px-2 text-sm font-body focus:outline-none placeholder:opacity-50 placeholder:italic ${inputStyles}`}
        />

        {/* Toggle Show Button */}
        {isPasswordField && (
          <button
            type="button"
            onClick={toggleShowPassword}
            className="h-full aspect-square flex items-center justify-center p-2 group cursor-pointer"
          >
            {inputType === "password" ? (
              <EyeIcon className="h-full w-full text-secondary opacity-50 group-hover:opacity-100" />
            ) : (
              <EyeOffIcon className="h-full w-full text-secondary opacity-50 group-hover:opacity-100" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default AuthInput;
