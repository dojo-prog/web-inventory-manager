import { TruckIcon } from "lucide-react";
import useSupplierStore from "../../../../features/suppliers/supplier.store";
import SuppliersTableLoader from "./SuppliersTableLoader";
import SuppliersTableEmpty from "./SuppliersTableEmpty";

const headers = ["Supplier Name", "Code", "Contact Name", "Email", "Status"];

const SuppliersTable = () => {
  const { suppliers, fetchingSuppliers } = useSupplierStore();

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
        {fetchingSuppliers ? (
          <SuppliersTableLoader />
        ) : suppliers.length === 0 ? (
          <SuppliersTableEmpty />
        ) : (
          suppliers.map((supplier) => (
            <tr
              key={supplier.id}
              className="group transition-colors duration-200 hover:bg-gray-50/50"
            >
              {/* Column 1: Supplier Name */}
              <td className="px-6 py-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded">
                    <TruckIcon size={16} className="text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {supplier.name}
                  </span>
                </div>
              </td>

              {/* Column 2: Code */}
              <td className="px-6 py-4">
                <span className="font-label text-xs text-secondary">
                  {supplier.supplier_code}
                </span>
              </td>

              {/* Column 3: Contact Name */}
              <td className="px-6 py-4">
                <span className="text-sm text-gray-600">
                  {supplier.contact_name}
                </span>
              </td>

              {/* Column 4: Email */}
              <td className="px-6 py-4">
                <span className="font-label text-xs text-primary bg-primary/10 px-2 py-1 rounded">
                  {supplier.email}
                </span>
              </td>

              {/* Column 5: Active Status */}
              <td className="px-6 py-4">
                <span
                  className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide capitalize ${
                    supplier.is_active
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      : "bg-gray-50 text-gray-500 border border-gray-200"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                      supplier.is_active ? "bg-emerald-500" : "bg-gray-400"
                    }`}
                  />
                  {supplier.is_active ? "Active" : "Inactive"}
                </span>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default SuppliersTable;
