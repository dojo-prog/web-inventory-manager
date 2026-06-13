import { Edit2Icon, TagIcon, Trash2Icon } from "lucide-react";

const headers = ["Category Name", "Category ID", "Slug", "Actions"];

// Mock Data matching the new layout criteria
const mockCategories = [
  {
    id: "cat_9a2b8c4d-e3f1-4a5b-8c9d-0e1f2a3b4c5d",
    name: "Laptops & Notebooks",
    slug: "laptops-notebooks",
  },
  {
    id: "cat_1f2e3d4c-b5a6-4f7e-8d9c-0b1a2f3e4d5c",
    name: "Computer Peripherals",
    slug: "computer-peripherals",
  },
  {
    id: "cat_7b8a9c0d-e1f2-4b3a-9c4d-5e6f7a8b9c0d",
    name: "Networking Equipment",
    slug: "networking-equipment",
  },
  {
    id: "cat_4d3c2b1a-0f9e-4d8c-7b6a-5f4e3d2c1b0a",
    name: "Office Electronics",
    slug: "office-electronics",
  },
];

const CategoriesTable = () => {
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
        {mockCategories.map((category) => (
          <tr
            key={category.id}
            className="group transition-colors duration-200 hover:bg-gray-50/50"
          >
            {/* Column 1: Category Name */}
            <td className="px-6 py-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded">
                  <TagIcon size={16} className="text-primary" />
                </div>
                <span className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </span>
              </div>
            </td>

            {/* Column 2: Category ID */}
            <td className="px-6 py-4">
              <span className="font-label text-xs text-secondary">
                {category.id}
              </span>
            </td>

            {/* Column 3: Slug */}
            <td className="px-6 py-4">
              <span className="font-label text-xs text-primary bg-primary/10 px-2 py-1 rounded">
                {category.slug}
              </span>
            </td>

            {/* Column 4: Actions */}
            <td className="px-6 py-4">
              <div className="flex items-center gap-3">
                <button
                  aria-label="Edit Category"
                  className="text-gray-400 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  <Edit2Icon className="h-4 w-4" />
                </button>
                <button
                  aria-label="Delete Category"
                  className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                >
                  <Trash2Icon className="h-4 w-4" />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CategoriesTable;
