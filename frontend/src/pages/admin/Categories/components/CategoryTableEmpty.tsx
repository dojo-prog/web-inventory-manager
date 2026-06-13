import { TagIcon } from "lucide-react";

const CategoryTableEmpty = () => {
  return (
    <tr>
      <td colSpan={4} className="px-6 py-16 text-center">
        <div className="flex flex-col items-center justify-center max-w-sm mx-auto space-y-3">
          {/* Icon Container */}
          <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-xl border border-gray-100 shadow-sm text-gray-400">
            <TagIcon size={20} />
          </div>

          {/* Text Descriptions */}
          <div className="space-y-1">
            <p className="text-sm font-semibold text-gray-900">
              No categories found
            </p>
            <p className="text-xs text-gray-500 font-body">
              Get started by adding a new shoe category to your inventory system
              directory.
            </p>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default CategoryTableEmpty;
