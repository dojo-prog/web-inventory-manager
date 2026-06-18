import type {
  AddSupplierInput,
  Supplier,
  SupplierFilters,
  UpdateSupplierInput,
} from "@web-inventory-manager/shared";
import axios from "../../lib/axios";

export const fetchSuppliers = async (
  filters: SupplierFilters,
): Promise<Supplier[]> => {
  const res = await axios.get("/suppliers", { params: filters });

  return res.data.suppliers;
};

export const addSupplier = async (
  inputs: AddSupplierInput,
): Promise<Supplier> => {
  const res = await axios.post("/suppliers", inputs);

  return res.data.newSupplier;
};

export const updateSupplier = async (
  supplierId: string,
  inputs: UpdateSupplierInput,
): Promise<Supplier> => {
  const res = await axios.put(`/suppliers/${supplierId}`, inputs);

  return res.data.updatedSupplier;
};
