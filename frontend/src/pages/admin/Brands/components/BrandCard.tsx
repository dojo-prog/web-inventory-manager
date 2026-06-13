import type { DetailedBrand } from "@web-inventory-manager/shared";
import { PenIcon, TagIcon, TrashIcon } from "lucide-react";
import useModalStore from "../../../../features/ui/modals/modal.store";

const BrandCard = ({ item: b }: { item: DetailedBrand }) => {
  const { openBrandModal, openDeleteConfirmModal } = useModalStore();

  return (
    <div className="w-full bg-surface border border-border shadow rounded p-5 space-y-6">
      {/* Brand Image */}
      <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded">
        {/* TODO apply true condition */}
        {!b.logo_url ? (
          <TagIcon size={20} className="text-primary" />
        ) : (
          <img src={b.logo_url} alt={b.name} />
        )}
      </div>

      {/* Brand Data */}
      <div>
        <h2 className="text-xl font-headline font-semibold mb-2">{b.name}</h2>
        <p className="w-full text-xs text-secondary font-label truncate">
          ID: {b.id}
        </p>
        <p className="w-full text-xs text-secondary font-label">Products</p>
      </div>

      <div className="w-full border-b border border-gray-200" />

      {/* Actions */}
      <div className="flex items-center justify-end space-x-4">
        <button
          className="w-4 h-4 text-primary/70 hover:text-black cursor-pointer"
          onClick={() => openBrandModal("update", b)}
        >
          <PenIcon className="h-full w-full" />
        </button>
        <button
          className="w-4 h-4 text-primary/70 hover:text-black cursor-pointer"
          onClick={() => openDeleteConfirmModal("brand", b)}
        >
          <TrashIcon className="h-full w-full" />
        </button>
      </div>
    </div>
  );
};

export default BrandCard;
