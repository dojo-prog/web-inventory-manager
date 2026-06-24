import { LayersIcon, Trash2Icon, Edit3Icon } from "lucide-react";
import useProductVariantStore from "../../../../features/product_variants/product_variant.store";
import VariantsTableLoader from "./VariantsTableLoader";
import VariantsTableEmpty from "./VariantsTableEmpty";

const headers = ["Variant ID", "Color", "Size", "Stock", "Actions"];

const VariantsTable = () => {
  const { productVariants, fetchingVariants } = useProductVariantStore();

  return (
    <table className="w-full min-w-200 border-collapse text-left align-middle">
      <thead>
        <tr className="border-b border-gray-100 bg-gray-50/70 backdrop-blur-sm sticky top-0 z-10">
          {headers.map((header) => (
            <th
              key={header}
              className={`px-6 py-3.5 text-[11px] font-bold uppercase tracking-wider text-gray-500 ${
                header === "Actions" ? "text-right" : "text-left"
              }`}
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-100 bg-white">
        {fetchingVariants ? (
          <VariantsTableLoader />
        ) : productVariants.length === 0 ? (
          <VariantsTableEmpty />
        ) : (
          productVariants.map((variant) => (
            <tr
              key={variant.id}
              className="group transition-colors duration-200 hover:bg-gray-50/50 cursor-pointer"
              onClick={() => console.log("Clicked variant row:", variant.id)}
            >
              {/* Column 1: Variant ID */}
              <td className="px-6 py-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded">
                    <LayersIcon size={16} className="text-primary" />
                  </div>
                  <span className="font-mono text-xs text-gray-500 max-w-[120px] truncate group-hover:text-blue-600 transition-colors">
                    {variant.id}
                  </span>
                </div>
              </td>

              {/* Column 2: Color */}
              <td className="px-6 py-4">
                <div className="flex items-center space-x-2.5">
                  <div
                    className="w-5 h-5 rounded-full border border-gray-200 shadow-sm shrink-0"
                    style={{ backgroundColor: variant.color_hex }}
                    title={variant.color_hex}
                  />
                  <span className="text-sm font-medium text-gray-900">
                    {variant.color_name}
                  </span>
                </div>
              </td>

              {/* Column 3: Size */}
              <td className="px-6 py-4">
                <span className="inline-flex items-center px-2.5 py-1 rounded bg-gray-100 text-gray-800 text-xs font-semibold uppercase tracking-wider">
                  {variant.size}
                </span>
              </td>

              {/* Column 4: Stock Quantity with Dynamic Badge Colors */}
              <td className="px-6 py-4">
                <span
                  className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide ${
                    variant.stock_quantity > 10
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      : variant.stock_quantity > 0
                        ? "bg-amber-50 text-amber-700 border border-amber-200"
                        : "bg-rose-50 text-rose-700 border border-rose-200"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                      variant.stock_quantity > 10
                        ? "bg-emerald-500"
                        : variant.stock_quantity > 0
                          ? "bg-amber-500"
                          : "bg-rose-500"
                    }`}
                  />
                  {variant.stock_quantity} available
                </span>
              </td>

              {/* Column 5: Actions */}
              <td className="px-6 py-4 text-right">
                <div
                  className="flex items-center justify-end space-x-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => console.log("Edit click:", variant.id)}
                    className="p-1.5 text-gray-400 hover:text-blue-600 rounded hover:bg-gray-100 transition-colors"
                    title="Edit Variant"
                  >
                    <Edit3Icon size={16} />
                  </button>
                  <button
                    onClick={() => console.log("Delete click:", variant.id)}
                    className="p-1.5 text-gray-400 hover:text-rose-600 rounded hover:bg-gray-100 transition-colors"
                    title="Delete Variant"
                  >
                    <Trash2Icon size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default VariantsTable;
