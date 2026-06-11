import { useMemo } from "react";
import useDashboardStore from "../../../../features/dashboard/dashboard.store";
import LowStockTableEmpty from "./LowStockTableEmpty";
import LowStockTableLoader from "./LowStockTableLoader";

const headers = ["product", "brand", "category", "current stock", "status"];

const LowStockTable = () => {
  const { lowStockProducts, fetchingLowStockProducts } = useDashboardStore();

  const transformedProducts = useMemo(() => {
    if (!lowStockProducts) return [];

    return lowStockProducts.map((item) => {
      let status = "Low Stock";
      let variant: "out" | "critical" | "low" = "low";

      if (item.stock_quantity === 0) {
        status = "Out of Stock";
        variant = "out";
      } else if (item.stock_quantity <= 3) {
        status = "Critical";
        variant = "critical";
      }

      return {
        ...item,
        status,
        variant,
      };
    });
  }, [lowStockProducts]);

  return (
    <div className="h-full flex flex-col overflow-hidden rounded-md border border-border bg-surface shadow-sm">
      {/* Header */}
      <div className="border-b border-border p-5 shrink-0">
        <h2 className="text-xl font-semibold font-headline">
          Low Stock Monitor
        </h2>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-auto">
        <table className="w-full min-w-200 border-collapse text-left align-middle">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/70 backdrop-blur-sm">
              {headers.map((header) => (
                <th
                  key={header}
                  className="px-6 py-3.5 text-[11px] font-bold uppercase tracking-wider text-gray-500 text-left"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          {fetchingLowStockProducts ? (
            <LowStockTableLoader />
          ) : transformedProducts.length === 0 ? (
            <LowStockTableEmpty />
          ) : (
            <tbody className="divide-y divide-gray-100 bg-white">
              {transformedProducts.map((item) => (
                <tr
                  key={item.id}
                  className="group transition-colors duration-200 hover:bg-gray-50/50"
                >
                  {/* Product Details */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      {item.thumbnail_url ? (
                        <img
                          src={item.thumbnail_url}
                          alt={item.product_name}
                          className="h-12 w-12 shrink-0 rounded-lg border border-gray-100 object-cover shadow-sm"
                        />
                      ) : (
                        <div className="h-12 w-12 shrink-0 rounded-lg border border-gray-100 bg-gray-50 shadow-sm" />
                      )}
                      <div className="flex flex-col min-w-0">
                        <span className="truncate text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {item.product_name}{" "}
                          <span className="text-xs font-normal text-gray-500">
                            ({item.size})
                          </span>
                        </span>
                        <span className="text-xs font-medium text-gray-400">
                          ID: {item.id}
                        </span>
                      </div>
                    </div>
                  </td>

                  {/* Brand */}
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-bold tracking-wide text-gray-700">
                      {item.brand_name}
                    </span>
                  </td>

                  {/* Category */}
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-gray-600">
                      {item.category_name}
                    </span>
                  </td>

                  {/* Stock Quantity */}
                  <td className="px-6 py-4">
                    <span className="text-sm font-semibold tabular-nums text-gray-900">
                      {item.stock_quantity} units
                    </span>
                  </td>

                  {/* Condition-driven Stock Status Pill */}
                  <td className="px-6 py-4 text-left">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${
                        item.variant === "out"
                          ? "bg-red-50 text-red-700 ring-red-600/10"
                          : item.variant === "critical"
                            ? "bg-orange-50 text-orange-700 ring-orange-600/10"
                            : "bg-amber-50 text-amber-700 ring-amber-600/10"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default LowStockTable;
