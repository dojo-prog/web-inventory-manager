import { PenIcon, TagIcon, TrashIcon } from "lucide-react";

const BrandCard = () => {
  return (
    <div className="w-full bg-surface border border-border shadow rounded p-5 space-y-6">
      {/* Brand Image */}
      <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded">
        {/* TODO apply true condition */}
        {true ? (
          <TagIcon size={20} className="text-primary" />
        ) : (
          <img src="" alt="" />
        )}
      </div>

      {/* Brand Data */}
      <div>
        <h2 className="text-xl font-headline font-semibold mb-2">Nike</h2>
        <p className="w-full text-xs text-secondary font-label truncate">
          ID: 1234587609laskdlashdaslhdsa
        </p>
        <p className="w-full text-xs text-secondary font-label">Products</p>
      </div>

      <div className="w-full border-b border border-gray-200" />

      {/* Actions */}
      <div className="flex items-center justify-end space-x-4">
        <button className="w-4 h-4 text-primary/70 hover:text-black cursor-pointer">
          <PenIcon className="h-full w-full" />
        </button>
        <button className="w-4 h-4 text-primary/70 hover:text-black cursor-pointer">
          <TrashIcon className="h-full w-full" />
        </button>
      </div>
    </div>
  );
};

export default BrandCard;
