import { TruckIcon } from "lucide-react";

const headers = ["Supplier Name", "Code", "Contact Name", "Email", "Status"];

const MOCK_SUPPLIERS = [
  {
    id: "a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d",
    name: "Acme Global Logistics",
    supplier_code: "SUP-ACME-001",
    contact_name: "Jane Doe",
    email: "jane.doe@acmeglobal.com",
    is_active: true,
  },
  {
    id: "f5e4d3c2-b1a0-9f8e-7d6c-5b4a3f2e1d0c",
    name: "Apex Industrial Supplies",
    supplier_code: "SUP-APEX-042",
    contact_name: "John Smith",
    email: "jsmith@apexind.net",
    is_active: false,
  },
  {
    id: "7b8a9c0d-1e2f-3a4b-5c6d-a1b2c3d4e5f6",
    name: "Nexus Trade Corp",
    supplier_code: "SUP-NEXUS-109",
    contact_name: "Alex Rivera",
    email: "arivera@nexustrade.org",
    is_active: true,
  },
];

const SuppliersTable = () => {
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
        {MOCK_SUPPLIERS.map((supplier) => (
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
        ))}
      </tbody>
    </table>
  );
};

export default SuppliersTable;
