import ModalWrapper from "../../../../shared/ModalWrapper";
import useModalStore from "../../../../features/ui/modals/modal.store";
import CustomInput from "../../../../shared/CustomInput";
import { useForm } from "../../../../hooks/useForm";
import {
  MapPinIcon,
  SquareUserRoundIcon,
  ToggleLeftIcon,
  ToggleRightIcon,
} from "lucide-react";
import CustomButton from "../../../../shared/CustomButton";
import useSupplierStore from "../../../../features/suppliers/supplier.store";
import validateInputs from "../../../../utils/validateInputs";
import {
  AddSupplierInputSchema,
  type AddSupplierInput,
  type UpdateSupplierInput,
} from "@web-inventory-manager/shared";
import { toast } from "react-toastify";
import { useEffect } from "react";

const SupplierModal = () => {
  const { loading, addSupplier, updateSupplier } = useSupplierStore();
  const {
    supplierModalOpen,
    closeSupplierModal,
    supplierModalType,
    selectedSupplier,
  } = useModalStore();

  const { formData, setFormData, handleChange } = useForm({
    name: "",
    supplier_code: "",
    contact_name: "",
    email: "",
    phone: "",
    website: "",
    address_line: {
      region: "",
      province: "",
      city: "",
      barangay: "",
      street_add: "",
      postal_code: "",
    },
    is_active: true,
  });

  const {
    name,
    supplier_code,
    contact_name,
    email,
    phone,
    website,
    address_line,
    is_active,
  } = formData;

  const { region, province, city, barangay, street_add, postal_code } =
    address_line;

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      address_line: {
        ...prev.address_line,
        [name]: value,
      },
    }));
  };

  const toggleActiveStatus = () => {
    setFormData((prev) => ({
      ...prev,
      is_active: !prev.is_active,
    }));
  };

  useEffect(() => {
    if (selectedSupplier && supplierModalType === "update") {
      setFormData({
        name: selectedSupplier.name,
        supplier_code: selectedSupplier.supplier_code,
        contact_name: selectedSupplier.contact_name,
        email: selectedSupplier.email,
        phone: selectedSupplier.phone,
        website: selectedSupplier.website,
        address_line: selectedSupplier.address_line,
        is_active: selectedSupplier.is_active,
      });
    }
  }, [supplierModalType]);

  const typeMap = {
    create: {
      title: "Add New Supplier",
      btnTitle: "Add Supplier",
    },
    update: {
      title: "Update Existing Supplier",
      btnTitle: "Update Supplier",
    },
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const error = validateInputs(AddSupplierInputSchema, formData);

    if (error) {
      toast.error(error);
      return;
    }

    if (supplierModalType === "create") {
      addSupplier(formData as AddSupplierInput);
    } else if (supplierModalType === "update" && selectedSupplier?.id) {
      updateSupplier(selectedSupplier.id, formData as UpdateSupplierInput);
    }
  };

  if (!supplierModalType || !typeMap[supplierModalType]) return null;

  return (
    <ModalWrapper
      title={typeMap[supplierModalType].title}
      isOpen={supplierModalOpen}
      onClose={closeSupplierModal}
      size="lg"
    >
      <form
        onSubmit={handleSubmit}
        className="space-y-6 max-h-[calc(100vh-12rem)] overflow-y-auto px-1"
      >
        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CustomInput
            label="SUPPLIER NAME"
            placeholder="Global Logistics Inc."
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
          />
          <CustomInput
            label="SUPPLIER CODE"
            placeholder="SUP-0892-GLI"
            id="supplier_code"
            name="supplier_code"
            value={supplier_code}
            onChange={handleChange}
          />
        </div>

        {/* Contact Info Card Panel */}
        <div className="w-full p-4 bg-primary/5 border border-primary/10 rounded-md space-y-4">
          <div className="flex items-center space-x-2 border-b border-primary/10 pb-2">
            <SquareUserRoundIcon size={18} className="text-primary" />
            <h2 className="text-sm font-headline font-bold text-primary uppercase tracking-wide">
              Contact Information
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CustomInput
              label="Contact Name"
              placeholder="John Doe"
              id="contact_name"
              name="contact_name"
              value={contact_name}
              onChange={handleChange}
              inputStyles="bg-surface"
            />
            <CustomInput
              label="Email Address"
              type="email"
              placeholder="johndoe@example.com"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              inputStyles="bg-surface"
            />
            <CustomInput
              label="Phone Number"
              placeholder="09*********"
              id="phone"
              name="phone"
              value={phone}
              onChange={handleChange}
              inputStyles="bg-surface"
            />
            <CustomInput
              label="Website URL"
              placeholder="https://www.globallogistics.com"
              id="website"
              name="website"
              value={website}
              onChange={handleChange}
              inputStyles="bg-surface"
            />
          </div>
        </div>

        {/* Headquarters Address Block */}
        <div className="space-y-4 pt-1">
          <div className="flex items-center space-x-2 border-b border-border pb-2">
            <MapPinIcon size={18} className="text-text" />
            <h2 className="text-sm font-headline font-bold text-text uppercase tracking-wide">
              Headquarters Address
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CustomInput
              label="Region"
              placeholder="NCR"
              id="region"
              name="region"
              value={region}
              onChange={handleAddressChange}
            />
            <CustomInput
              label="Province"
              placeholder="Metro Manila"
              id="province"
              name="province"
              value={province}
              onChange={handleAddressChange}
            />
            <CustomInput
              label="City"
              placeholder="Quezon City"
              id="city"
              name="city"
              value={city}
              onChange={handleAddressChange}
            />
            <CustomInput
              label="Barangay"
              placeholder="Barangay 123"
              id="barangay"
              name="barangay"
              value={barangay}
              onChange={handleAddressChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <CustomInput
                label="Street Address"
                placeholder="123 Street..."
                id="street_add"
                name="street_add"
                value={street_add}
                onChange={handleAddressChange}
              />
            </div>
            <div>
              <CustomInput
                label="Postal Code"
                placeholder="1234"
                id="postal_code"
                name="postal_code"
                value={postal_code}
                onChange={handleAddressChange}
              />
            </div>
          </div>
        </div>

        {/* Supplier Active Status Selector Row */}
        <div className="flex items-center justify-between p-3 bg-surface border border-border rounded-md">
          <div className="space-y-0.5">
            <label className="text-xs font-bold text-text uppercase tracking-wide">
              Supplier Operational Status
            </label>
            <p className="text-xs text-secondary">
              Inactive suppliers are hidden from automated supply workflows.
            </p>
          </div>
          <button
            type="button"
            onClick={toggleActiveStatus}
            className="flex items-center space-x-2 px-3 py-1.5 rounded-md border border-border hover:bg-gray-50 transition-colors cursor-pointer"
          >
            {is_active ? (
              <>
                <ToggleRightIcon size={20} className="text-emerald-500" />
                <span className="text-xs font-semibold text-emerald-700">
                  Active
                </span>
              </>
            ) : (
              <>
                <ToggleLeftIcon size={20} className="text-gray-400" />
                <span className="text-xs font-semibold text-gray-500">
                  Inactive
                </span>
              </>
            )}
          </button>
        </div>

        {/* Form Controls Footer Action Area */}
        <div className="flex items-center justify-end space-x-4 pt-4 border-t border-border">
          <CustomButton
            type="button"
            title="Cancel"
            titleStyles="font-medium text-secondary"
            buttonStyles="bg-white hover:bg-gray-100 border border-border"
            onClick={closeSupplierModal}
          />
          <CustomButton
            type="submit"
            title={typeMap[supplierModalType].btnTitle}
            titleStyles="text-white"
            buttonStyles="bg-primary hover:bg-primary-hover"
            loading={loading}
          />
        </div>
      </form>
    </ModalWrapper>
  );
};

export default SupplierModal;
