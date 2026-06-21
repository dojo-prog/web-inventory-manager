interface CustomToggleSwitchProps {
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  stateLabels?: [string, string];
}

const CustomToggleSwitch = ({
  label,
  checked,
  onChange,
  stateLabels = ["active", "inactive"],
}: CustomToggleSwitchProps) => {
  const [activeText, inactiveText] = stateLabels;

  return (
    <div className="w-full flex flex-col items-start justify-center">
      {label && (
        <label className="block text-xs font-label font-medium text-secondary capitalize mb-2 tracking-wide">
          {label}
        </label>
      )}

      <div className="flex items-center space-x-3 h-8">
        {/* Slider Track Wrapper */}
        <button
          type="button"
          role="switch"
          aria-checked={checked}
          onClick={() => onChange(!checked)}
          className={`relative inline-flex h-5 w-10 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden ${
            checked ? "bg-primary" : "bg-gray-300"
          }`}
        >
          {/* Sliding Knob */}
          <span
            className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition duration-200 ease-in-out ${
              checked ? "translate-x-5" : "translate-x-0"
            }`}
          />
        </button>

        {/* Dynamic Status Label Text */}
        <span
          className={`text-xs font-bold capitalize select-none transition-colors duration-200 ${
            checked ? "text-primary" : "text-secondary"
          }`}
        >
          {checked ? activeText : inactiveText}
        </span>
      </div>
    </div>
  );
};

export default CustomToggleSwitch;
