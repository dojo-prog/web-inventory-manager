import { TruckIcon } from "lucide-react";

const SuppliersTableEmpty = () => {
  return (
    <tr>
      <td colSpan={5} className="px-6 py-16 text-center">
        <div className="flex flex-col items-center justify-center max-w-sm mx-auto space-y-3">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shadow-sm">
            <TruckIcon size={22} className="stroke-[1.5]" />
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-semibold font-headline text-gray-900">
              No suppliers found
            </h3>
            <p className="text-xs text-gray-500 font-label leading-relaxed">
              Your directory is empty. Try adding a new supplier partner or
              adjusting your search filters.
            </p>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default SuppliersTableEmpty;
