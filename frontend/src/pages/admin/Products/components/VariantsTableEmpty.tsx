import { LayersIcon } from "lucide-react";

const VariantsTableEmpty = () => {
  return (
    <tr>
      <td colSpan={5} className="px-6 py-40 text-center">
        <div className="flex flex-col items-center justify-center max-w-sm mx-auto space-y-3">
          <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-full border border-gray-100 shadow-sm text-primary">
            <LayersIcon size={20} />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold font-headline text-gray-900">
              No variants found
            </h3>
            <p className="text-xs font-label text-gray-500">
              There are no size or color specifications attached to this product
              yet.
            </p>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default VariantsTableEmpty;
