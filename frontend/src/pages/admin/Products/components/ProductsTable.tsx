import { Edit2Icon, PackageIcon, Trash2Icon } from "lucide-react";
import useModalStore from "../../../../features/ui/modals/modal.store";

const headers = ["product", "brand", "category", "price", "status", "actions"];

// Clean mock data representing our extended ProductWithRelations schema structure
const mockProducts = [
  {
    id: "prod-1",
    name: "Air Max Alpha 5",
    sku: "NK-AM5-001",
    thumbnail_url: null,
    brand_name: "Nike",
    category_name: "Footwear",
    price: 4895.0,
    status: "active",
  },
  {
    id: "prod-2",
    name: "Essential Fleece Hoodie",
    sku: "AD-EFH-024",
    thumbnail_url: null,
    brand_name: "Adidas",
    category_name: "Apparel",
    price: 3200.0,
    status: "active",
  },
  {
    id: "prod-3",
    name: "Classic Canvas Backpack",
    sku: "VN-CCB-109",
    thumbnail_url: null,
    brand_name: "Vans",
    category_name: "Accessories",
    price: 2450.0,
    status: "inactive",
  },
];

const ProductsTable = () => {
  const { openDeleteConfirmModal } = useModalStore();

  const fetchingProducts = false;

  return (
    <table className="w-full min-w-200 border-collapse text-left align-middle">
      <thead>
        <tr className="border-b border-gray-100 bg-gray-50/70 backdrop-blur-sm sticky top-0 z-10">
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

      <tbody className="divide-y divide-gray-100 bg-white">
        {fetchingProducts ? (
          <tr>
            <td
              colSpan={headers.length}
              className="text-center py-10 text-sm text-secondary"
            >
              Loading products...
            </td>
          </tr>
        ) : mockProducts.length === 0 ? (
          <tr>
            <td
              colSpan={headers.length}
              className="text-center py-10 text-sm text-secondary"
            >
              No products found.
            </td>
          </tr>
        ) : (
          mockProducts.map((product) => (
            <tr
              key={product.id}
              className="group transition-colors duration-200 hover:bg-gray-50/50"
            >
              {/* Column 1: Product Name & Image/Icon */}
              <td className="px-6 py-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded shrink-0">
                    {product.thumbnail_url ? (
                      <img
                        src={product.thumbnail_url}
                        alt={product.name}
                        className="w-full h-full object-cover rounded"
                      />
                    ) : (
                      <PackageIcon size={16} className="text-primary" />
                    )}
                  </div>
                  <div className="flex flex-col truncate">
                    <span className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors truncate">
                      {product.name}
                    </span>
                    <span className="text-[10px] text-secondary font-label tracking-wide">
                      {product.sku}
                    </span>
                  </div>
                </div>
              </td>

              {/* Column 2: Brand Name */}
              <td className="px-6 py-4">
                <span className="text-sm font-medium text-text">
                  {product.brand_name}
                </span>
              </td>

              {/* Column 3: Category Name */}
              <td className="px-6 py-4">
                <span className="text-sm text-secondary">
                  {product.category_name}
                </span>
              </td>

              {/* Column 4: Price formatted securely */}
              <td className="px-6 py-4">
                <span className="text-sm font-medium font-label tabular-nums text-text">
                  ₱
                  {product.price.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </td>

              {/* Column 5: Status Badge */}
              <td className="px-6 py-4">
                <span
                  className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                    product.status === "active"
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {product.status === "active" ? "Active" : "Inactive"}
                </span>
              </td>

              {/* Column 6: Action Controls */}
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    aria-label="Edit Product"
                    className="text-gray-400 hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    <Edit2Icon className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    aria-label="Delete Product"
                    className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                    onClick={() => openDeleteConfirmModal("product", product)}
                  >
                    <Trash2Icon className="h-4 w-4" />
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

export default ProductsTable;
