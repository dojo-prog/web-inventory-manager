import { useEffect } from "react";
import useSupplierStore from "../../../features/suppliers/supplier.store";
import SupplierDetail from "./components/SupplierDetail";
import SuppliersContainerTable from "./components/SuppliersTableContainer";
import Header from "./sections/Header";

const Suppliers = () => {
  const { fetchSuppliers, filters } = useSupplierStore();

  useEffect(() => {
    if (!filters) return;
    fetchSuppliers(filters);
  }, []);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <Header />
      </div>

      {/* Table & Detail */}
      <div className="h-[calc(100vh-16rem)] flex space-x-4">
        <SuppliersContainerTable />
        <SupplierDetail />
      </div>
    </div>
  );
};

export default Suppliers;
