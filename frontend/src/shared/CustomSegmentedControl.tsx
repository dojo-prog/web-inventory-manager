type Button = { title: string; value: string | number };

interface CustomSegmentedControlProps {
  label?: string;
  id: string;
  name: string;
  value: string | number;
  buttons: Button[];
  onChange: (name: string, value: string | number) => void;
}

const CustomSegmentedControl = ({
  label,
  id,
  name,
  value,
  buttons,
  onChange,
}: CustomSegmentedControlProps) => {
  return (
    <div id={id} className="w-full">
      {label && (
        <label className="block text-xs font-label font-medium text-secondary capitalize mb-1.5 tracking-wide">
          {label}
        </label>
      )}

      <div
        className="grid gap-1 bg-gray-200/40 p-1 rounded-md"
        style={{
          gridTemplateColumns: `repeat(${buttons.length}, minmax(0, 1fr))`,
        }}
      >
        {buttons.map((b) => {
          const is_selected = value === b.value;

          return (
            <button
              key={b.value}
              type="button"
              className={`h-8 rounded-sm text-xs transition-all duration-150 capitalize cursor-pointer select-none ${
                is_selected
                  ? "bg-white text-primary shadow-xs font-bold"
                  : "text-secondary hover:text-primary hover:bg-white/40 font-medium"
              }`}
              onClick={() => onChange(name, b.value)}
            >
              {b.title}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CustomSegmentedControl;
