import { useEffect } from "react";
import useSupplierStore from "../../../features/suppliers/supplier.store";
import SupplierDetail from "./components/SupplierDetail";
import SuppliersContainerTable from "./components/SuppliersTableContainer";
import Header from "./sections/Header";
import useModalStore from "../../../features/ui/modals/modal.store";
import SupplierModal from "./components/SupplierModal";

const Suppliers = () => {
  const { fetchSuppliers, filters, selectedSupplier } = useSupplierStore();
  const { supplierModalOpen } = useModalStore();

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
        {selectedSupplier && <SupplierDetail />}
      </div>

      {supplierModalOpen && <SupplierModal />}
    </div>
  );
};

export default Suppliers;
