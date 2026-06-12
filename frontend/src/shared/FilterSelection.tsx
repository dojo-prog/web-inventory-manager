import { type ChangeEvent } from "react";

interface SelectionOption {
  name: string;
  value: string;
  disabled?: boolean;
  hidden?: boolean;
}

interface FilterSelectionProps {
  filterEntity?: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;

  defaultOption: SelectionOption;
  options: SelectionOption[];

  selectionStyles?: string;
}

const FilterSelection = ({
  filterEntity,
  id,
  name,
  value,
  onChange,

  defaultOption,
  options,
  selectionStyles,
}: FilterSelectionProps) => {
  return (
    <div className="w-full max-w-50 space-y-1">
      {filterEntity && (
        <label
          htmlFor="brand-selection"
          className="block text-[10px] font-semibold uppercase tracking-wider text-gray-500"
        >
          Filter by {filterEntity}
        </label>
      )}

      {/* Select Box Input */}
      <div className="relative">
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className={`h-10 w-full rounded border border-border bg-white px-3 text-xs font-medium font-label  text-secondary outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 ${selectionStyles}`}
        >
          {/* Placeholder Option */}
          <option value={defaultOption.value ?? ""}>
            {defaultOption.name}
          </option>

          {/* Active Data Options */}
          {options.map((o) => (
            <option value={o.value}>{o.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterSelection;
