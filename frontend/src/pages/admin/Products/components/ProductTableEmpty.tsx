import { PackageXIcon } from "lucide-react";

interface ProductTableEmptyProps {
  colSpan?: number;
}

const ProductTableEmpty = ({ colSpan = 6 }: ProductTableEmptyProps) => {
  return (
    <tr>
      <td colSpan={colSpan} className="px-6 py-16 text-center">
        <div className="flex flex-col items-center justify-center max-w-sm mx-auto space-y-3">
          {/* Central status graphic indicator icon */}
          <div className="p-3 bg-primary/10  rounded-lg text-primary">
            <PackageXIcon size={24} strokeWidth={1.5} />
          </div>

          <div className="space-y-1">
            <h3 className="text-xl font-headline font-semibold text-gray-900 tracking-wide uppercase">
              No Products Found
            </h3>
            <p className="text-xs font-label text-secondary max-w-65 mx-auto leading-relaxed">
              Your search parameters didn't return any catalog items, or no
              inventory records exist.
            </p>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default ProductTableEmpty;
