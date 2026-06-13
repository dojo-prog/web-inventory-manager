import { Edit2Icon, TagIcon, Trash2Icon } from "lucide-react";
import useCategoryStore from "../../../../features/categories/category.store";
import CategoryTableLoader from "./CategoryTableLoader";
import CategoryTableEmpty from "./CategoryTableEmpty";
import useModalStore from "../../../../features/ui/modals/modal.store";

const headers = ["Category Name", "Category ID", "Slug", "Actions"];

const CategoriesTable = () => {
  const { categories, fetchingCategories } = useCategoryStore();
  const { openCategoryModal, openDeleteConfirmModal } = useModalStore();

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
        {fetchingCategories ? (
          <CategoryTableLoader />
        ) : categories.length === 0 ? (
          <CategoryTableEmpty />
        ) : (
          categories.map((category) => (
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
                    onClick={() => openCategoryModal("update", category)}
                  >
                    <Edit2Icon className="h-4 w-4" />
                  </button>
                  <button
                    aria-label="Delete Category"
                    className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                    onClick={() => openDeleteConfirmModal("category", category)}
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

export default CategoriesTable;
