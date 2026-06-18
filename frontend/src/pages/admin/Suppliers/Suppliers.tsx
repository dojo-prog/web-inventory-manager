import SupplierDetail from "./components/SupplierDetail";
import SuppliersTable from "./components/SuppliersTable";
import Header from "./sections/Header";

const Suppliers = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <Header />
      </div>

      {/* Table & Detail */}
      <div className="flex space-x-4">
        <SuppliersTable />
        <SupplierDetail />
      </div>
    </div>
  );
};

export default Suppliers;
