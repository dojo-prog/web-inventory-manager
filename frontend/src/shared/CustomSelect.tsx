import { useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from "lucide-react";

type Option = { title: string; value: string | number };

interface CustomSelectProps {
  label?: string;
  id: string;
  name: string;
  value: string | number;
  options: Option[];
  placeholder?: string;
  onChange: (name: string, value: string | number) => void;
}

const CustomSelect = ({
  label,
  id,
  name,
  value,
  options,
  placeholder = "Select an option",
  onChange,
}: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (optionValue: string | number) => {
    onChange(name, optionValue);
    setIsOpen(false);
  };

  return (
    <div id={id} ref={containerRef} className="w-full relative">
      {label && (
        <label className="block text-xs font-label font-medium text-secondary capitalize mb-1.5 tracking-wide">
          {label}
        </label>
      )}

      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-10 px-3 bg-white border border-gray-300 rounded-md flex items-center justify-between text-sm text-primary hover:border-gray-400 transition-colors cursor-pointer text-left focus:outline-hidden"
      >
        <span
          className={
            selectedOption ? "text-primary font-medium" : "text-gray-400"
          }
        >
          {selectedOption ? selectedOption.title : placeholder}
        </span>
        <ChevronDownIcon
          size={16}
          className={`text-secondary transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Options Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto animate-fade-in">
          {options.length === 0 ? (
            <div className="px-3 py-2 text-xs text-secondary text-center">
              No options available
            </div>
          ) : (
            options.map((opt) => {
              const isSelected = value === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => handleSelect(opt.value)}
                  className={`w-full text-left px-3 py-2.5 text-sm transition-colors cursor-pointer select-none border-b border-gray-50 last:border-b-0 ${
                    isSelected
                      ? "bg-primary/5 text-primary font-bold"
                      : "text-secondary hover:bg-gray-50 hover:text-primary font-medium"
                  }`}
                >
                  {opt.title}
                </button>
              );
            })
          )}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
