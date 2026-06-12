import { Edit2Icon, TagIcon, Trash2Icon } from "lucide-react";
import useBrandStore from "../../../../features/brands/brand.store";
import BrandTableLoader from "./BrandTableLoader";
import BrandTableEmpty from "./BrandTableEmpty";

const headers = [
  "Brand Name",
  "Brand ID",
  "Active Units Count",
  "Date Added",
  "Actions",
];
const BrandsTable = () => {
  const { fetchingBrands, brands } = useBrandStore();

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
        {fetchingBrands ? (
          <BrandTableLoader />
        ) : brands.length === 0 ? (
          <BrandTableEmpty />
        ) : (
          brands.map((brand) => (
            <tr
              key={brand.id}
              className="group transition-colors duration-200 hover:bg-gray-50/50"
            >
              {/* Column 1: Brand Name */}
              <td className="px-6 py-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded">
                    {/* TODO apply true condition */}
                    {true ? (
                      <TagIcon size={16} className="text-primary" />
                    ) : (
                      <img src="" alt="" />
                    )}
                  </div>
                  <span className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {brand.name}
                  </span>
                </div>
              </td>

              {/* Column 2: Brand ID */}
              <td className="px-6 py-4">
                <span className="font-label text-xs text-secondary">
                  {brand.id}
                </span>
              </td>

              {/* Column 3: Active Units Count */}
              <td className="px-6 py-4">
                <span className="text-sm font-label  tabular-nums text-secondary">
                  {brand.active_units_count.toLocaleString()} units
                </span>
              </td>

              {/* Column 4: Date Added */}
              <td className="px-6 py-4">
                <span className="font-label text-xs text-secondary">
                  6/12/2026
                </span>
              </td>

              {/* Column 5: Actions */}
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <button
                    aria-label="Edit Brand"
                    className="text-gray-400 hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    <Edit2Icon className="h-4 w-4" />
                  </button>
                  <button
                    aria-label="Delete Brand"
                    className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
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

export default BrandsTable;
