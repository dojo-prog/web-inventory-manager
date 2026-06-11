import { ShieldCheckIcon } from "lucide-react";

const LowStockTableEmpty = () => {
  return (
    <tbody className="bg-white">
      <tr>
        <td colSpan={5} className="px-6 py-16 text-center">
          <div className="mx-auto flex max-w-sm flex-col items-center justify-center text-center">
            {/* Success Ring Decorator */}
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary ring-8 ring-green-50/50 mb-4">
              <ShieldCheckIcon className="h-6 w-6" />
            </div>

            <h3 className="font-headline font-semibold text-gray-900">
              All inventory levels stable
            </h3>
            <p className="mt-1 font-label text-xs text-gray-400">
              No product variants are currently trending below your critical
              threshold warnings.
            </p>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default LowStockTableEmpty;
