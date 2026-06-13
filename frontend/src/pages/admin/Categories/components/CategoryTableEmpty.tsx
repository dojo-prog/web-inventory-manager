import { TagIcon } from "lucide-react";

const CategoryTableEmpty = () => {
  return (
    <tr>
      <td colSpan={4} className="px-6 py-16 text-center">
        <div className="flex flex-col items-center justify-center max-w-sm mx-auto space-y-3">
          {/* Icon Container */}
          <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-xl  shadow-sm text-primary">
            <TagIcon size={20} />
          </div>

          {/* Text Descriptions */}
          <div className="space-y-1">
            <p className="text-lg font-headline font-semibold text-gray-900">
              No categories found
            </p>
            <p className="text-xs text-secondary font-label">
              We couldn't find any results matching your active criteria. Try
              adjusting your filters or changing your search keywords.
            </p>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default CategoryTableEmpty;
