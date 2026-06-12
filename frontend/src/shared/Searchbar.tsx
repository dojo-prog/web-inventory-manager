import { SearchIcon } from "lucide-react";

const Searchbar = () => {
  return (
    <div className="w-sm flex border border-border rounded h-10">
      <div className="h-full aspect-square border-r border-border flex items-center justify-center">
        <SearchIcon size={16} className="text-secondary" />
      </div>
      <input
        type="text"
        placeholder="Enter brand ID or name"
        className="flex-1 px-4 focus:outline-none text-sm font-label"
      />
    </div>
  );
};

export default Searchbar;
