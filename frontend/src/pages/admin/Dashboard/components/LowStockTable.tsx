const headers = ["product", "brand", "category", "current stock", "status"];

const lowStockData = [
  {
    id: "PROD-9021",
    name: "Velocity X-1 Runner",
    brand: "ELITE STEP",
    category: "Men's Running Shoe",
    stock: 3,
    status: "Critical",
    variant: "critical",
  },
  {
    id: "PROD-4412",
    name: "Pro-Fit Training Socks",
    brand: "ELITE STEP",
    category: "Athletic Wear",
    stock: 12,
    status: "Low Stock",
    variant: "low",
  },
  {
    id: "PROD-7781",
    name: "Apex Court High-Top",
    brand: "VOLT COURT",
    category: "Basketball Shoes",
    stock: 0,
    status: "Out of Stock",
    variant: "out",
  },
  {
    id: "PROD-3110",
    name: "CushionWalk Ortho",
    brand: "AEROLITE",
    category: "Walking Shoes",
    stock: 8,
    status: "Low Stock",
    variant: "low",
  },
];

const LowStockTable = () => {
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
                  className={`px-6 py-3.5 text-[11px] font-bold uppercase tracking-wider text-gray-500 text-left`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100 bg-white">
            {lowStockData.map((item) => (
              <tr
                key={item.id}
                className="group transition-colors duration-200 hover:bg-gray-50/50"
              >
                {/* Product with Image, Name, and ID */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 shrink-0 rounded-lg border border-gray-100 bg-gray-50 object-cover shadow-sm transition-transform group-hover:scale-[1.02]" />
                    <div className="flex flex-col min-w-0">
                      <span className="truncate text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {item.name}
                      </span>
                      <span className="text-xs font-medium text-gray-400">
                        ID: {item.id}
                      </span>
                    </div>
                  </div>
                </td>

                {/* Brand Capsule */}
                <td className="px-6 py-4">
                  <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-bold tracking-wide text-gray-700">
                    {item.brand}
                  </span>
                </td>

                {/* Category String */}
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-gray-600">
                    {item.category}
                  </span>
                </td>

                {/* Current Stock */}
                <td className="px-6 py-4">
                  <span className="text-sm font-semibold tabular-nums text-gray-900">
                    {item.stock} units
                  </span>
                </td>

                {/* Stock Status */}
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
        </table>
      </div>
    </div>
  );
};

export default LowStockTable;
