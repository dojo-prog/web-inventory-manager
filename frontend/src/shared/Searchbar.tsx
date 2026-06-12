import { SearchIcon } from "lucide-react";
import type { ChangeEvent } from "react";

interface SearchbarProps {
  placeholder: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  containerStyles?: string;
  inputStyles?: string;
}

const Searchbar = ({
  placeholder,
  id,
  name,
  value,
  onChange,
  containerStyles,
  inputStyles,
}: SearchbarProps) => {
  return (
    <div
      className={`w-sm flex border border-border rounded h-10 ${containerStyles}`}
    >
      <div className="h-full aspect-square border-r border-border flex items-center justify-center">
        <SearchIcon size={16} className="text-secondary" />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`flex-1 px-4 focus:outline-none text-sm font-label ${inputStyles}`}
      />
    </div>
  );
};

export default Searchbar;
